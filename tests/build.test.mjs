import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, dirname, join, resolve } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { unzipSync } from 'fflate';

const execFileAsync = promisify(execFile);
const buildScript = fileURLToPath(new URL('../scripts/build.mjs', import.meta.url));
const skill = '---\nname: example-skill\ndescription: Example skill.\n---\n\n# Example\n';
const skillFiles = {
  'SKILL.md': skill,
  'agents/openai.yaml': 'interface:\n  display_name: "Example skill"\n',
  'references/design-language.md': '# Design language\n\nSource-to-character examples.\n',
  'references/image-prompts.md': '# Image prompts\n\nFull-body illustration template.\n',
};
const build = (cwd) => execFileAsync(process.execPath, [buildScript], { cwd });
const manifest = (root, values = {}) =>
  writeFile(join(root, 'package.json'), JSON.stringify({
    name: 'example-skill',
    version: '1.2.3',
    ...values,
  }));

async function fixture(t) {
  const parent = resolve(tmpdir());
  const root = await mkdtemp(join(parent, 'skill-package-test-'));
  t.after(async () => {
    assert.equal(dirname(resolve(root)), parent);
    assert.ok(basename(root).startsWith('skill-package-test-'));
    await rm(root, { recursive: true, force: true });
  });
  await manifest(root);
  for (const [file, content] of Object.entries(skillFiles)) {
    const target = join(root, file);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, content);
  }
  return root;
}

test('packages the skill and its companion text files in a reproducible versioned ZIP', async (t) => {
  const root = await fixture(t);

  await build(root);
  const archive = await readFile(join(root, 'dist', 'example-skill-1.2.3.zip'));
  const entries = unzipSync(archive);
  assert.deepEqual(Object.keys(entries), Object.keys(skillFiles).map(file => `example-skill/${file}`));
  for (const [file, content] of Object.entries(skillFiles)) {
    assert.deepEqual(Buffer.from(entries[`example-skill/${file}`]), Buffer.from(content));
  }

  await writeFile(join(root, 'README.md'), 'Development documentation');
  await writeFile(join(root, '.env'), 'TEST_ONLY=do-not-package');
  await writeFile(join(root, 'references', 'example.png'), Buffer.from([0x89, 0x50, 0x4e, 0x47]));
  await writeFile(join(root, 'references', 'private-notes.md'), 'Do not package');
  await build(root);
  assert.deepEqual(await readFile(join(root, 'dist', 'example-skill-1.2.3.zip')), archive);

  await manifest(root, { version: '1.2.4-beta.1' });
  await build(root);
  assert.deepEqual(
    (await readdir(join(root, 'dist'))).sort(),
    ['example-skill-1.2.3.zip', 'example-skill-1.2.4-beta.1.zip'],
  );
  assert.deepEqual(await readFile(join(root, 'dist', 'example-skill-1.2.4-beta.1.zip')), archive);
});

test('rejects unsafe package metadata before creating output', async (t) => {
  for (const values of [{ name: '../outside' }, { version: '../1.2.3' }, { version: 'latest' }]) {
    const root = await fixture(t);
    await manifest(root, values);
    await assert.rejects(build(root), /Invalid package/);
    await assert.rejects(readdir(join(root, 'dist')), { code: 'ENOENT' });
  }
});

test('fails before creating output when the skill or a companion text file is missing', async (t) => {
  for (const file of Object.keys(skillFiles)) {
    const root = await fixture(t);
    await rm(join(root, file));
    await assert.rejects(build(root), /ENOENT/);
    await assert.rejects(readdir(join(root, 'dist')), { code: 'ENOENT' });
  }
});
