# anything-to-girl-skill

A portable Agent Skill that turns text or image references into original female characters. Defaults: an adult character in a polished 2D anime illustration, with fine integrated linework, subtle facial volume, smooth tonal transitions, detailed painted materials, and a quiet pale neutral background. Two bundled visual references anchor the default style. Both overly flat coloring and photographic or CGI rendering miss that target. Output is one directly generated full-body illustration without text. Style references guide rendering without importing their characters, lettering, or multi-panel layouts. Prompt-inference requests receive a usable description of visible style features without image generation. Additional images, design sheets, or crops require an explicit request.

Load [SKILL.md](SKILL.md) from the repository root using your agent's skill support. Image generation and editing require suitable tools in the host environment. All skill instructions and generation prompts are in English.

## Packaging

Run from the repository root:

```sh
pnpm install --frozen-lockfile
pnpm build
```

Set `version` in [package.json](package.json) before a release. The build writes `dist/anything-to-girl-skill-<version>.zip`, containing `SKILL.md` and the two `references/style-*.png` images under `anything-to-girl-skill/`. Building does not change the version.

Run `pnpm test` to check archive contents, reference inclusion, version naming, reproducibility, and invalid or missing inputs.
