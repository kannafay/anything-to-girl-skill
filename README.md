# anything-to-girl-skill

A portable Agent Skill that turns text or image references into original female anime characters. Defaults: an adult character, flat hand-drawn 2D rendering, and a single full-body composition.

Load [SKILL.md](SKILL.md) from the repository root using your agent's skill support. Image generation and editing require suitable tools in the host environment. All skill instructions and generation prompts are in English.

## Packaging

Run from the repository root:

```sh
pnpm install --frozen-lockfile
pnpm build
```

Set `version` in [package.json](package.json) before a release. The build writes `dist/anything-to-girl-skill-<version>.zip`, containing only `anything-to-girl-skill/SKILL.md`. Building does not change the version.

Run `pnpm test` to check archive contents, version naming, reproducibility, and invalid inputs.
