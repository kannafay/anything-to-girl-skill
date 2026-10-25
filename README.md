# everything-to-anime-girl

A portable Agent Skill that turns objects, products, animals, brands, photos, and concepts into distinctive original adult female anime characters. Translate source shapes, colors, materials, and functions into coherent character designs using the supplied design framework and prompt templates. Output is one standalone head-to-shoes full-body illustration without text, in a polished 2D anime / painterly anime game-character style. No insets, extra views, turnarounds, collages, or design sheets. Text-only concept and prompt requests remain text-only.

Load [SKILL.md](SKILL.md) from the repository root using your agent's skill support. Keep its companion text files available: [design language](references/design-language.md), [image prompts](references/image-prompts.md), and [UI metadata](agents/openai.yaml). Image generation and editing require suitable tools in the host environment. Skill instructions and generation prompts are in English.

## Packaging

Run from the repository root:

```sh
pnpm install --frozen-lockfile
pnpm build
```

Set `version` in [package.json](package.json) before a release. The build writes `dist/everything-to-anime-girl-<version>.zip`, containing `SKILL.md`, `agents/openai.yaml`, `references/design-language.md`, and `references/image-prompts.md` under `everything-to-anime-girl/`. Only these four text files are included. Building does not change the version.

Run `pnpm test` to check complete packaging of the skill and its companion text files, exclusion of extra assets, version naming, reproducibility, and invalid or missing inputs.
