# anything-to-girl-skill

A portable Agent Skill that turns objects, logos, images, concepts, people and existing characters into recognizable adult female anime characters. It also supports identity-preserving style conversions and local revisions. For personification or creative redesign, compare whole-character ideas and carry a compelling concept into a concise prompt. For a style-only request, keep the source character's identity and translate the whole figure into the requested style; chibi proportions replace the default elongated leg treatment.

Genshin Impact's illustrations are a broad quality reference; encourage coherent fashion mixing and manga-style leg lines while leaving wardrobe and hosiery choices open. For new designs, explore footwear as part of the silhouette, including tall or thigh-high heeled boots and closed-toe high heels. Sandals and open-toe shoes are excluded. Independent personifications use fresh-generation controls when available and only relevant image inputs; conversions preserve the supplied character. Skill invocation does not reset the host conversation. Output is one full-body character in a complete illustrated setting, without extra views. Small artistic lettering may appear as an unobtrusive accent, with its presence varied rather than required. Text-only concept and prompt requests remain text-only.

Load [SKILL.md](SKILL.md) from the repository root using your agent's skill support. Keep its companion text files available: [design language](references/design-language.md), [image prompts](references/image-prompts.md), and [UI metadata](agents/openai.yaml). Image generation and editing require suitable tools in the host environment. Skill instructions and generation prompts are in English.

## Packaging

Run from the repository root:

```sh
pnpm install --frozen-lockfile
pnpm build
```

Set `version` in [package.json](package.json) before a release. The build writes `dist/anything-to-girl-skill-<version>.zip`, containing `SKILL.md`, `agents/openai.yaml`, `references/design-language.md`, and `references/image-prompts.md` under `anything-to-girl-skill/`. Only these four text files are included. Building does not change the version.

Run `pnpm test` to check complete packaging of the skill and its companion text files, exclusion of extra assets, version naming, reproducibility, and invalid or missing inputs.
