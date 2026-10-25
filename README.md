# anything-to-girl-skill

A portable Agent Skill that turns objects, logos, images and concepts into original adult female anime characters. Guide each generation through the source's identity, beauty, originality and refined 2D illustration quality, leaving the visual design to the image model. Genshin Impact's illustrations are a broad quality reference; no wardrobe genre, character template or hosiery default is prescribed. Each new source starts a fresh concept. Output is one standalone full-body illustration without text or extra views. Text-only concept and prompt requests remain text-only.

Load [SKILL.md](SKILL.md) from the repository root using your agent's skill support. Keep its companion text files available: [design language](references/design-language.md), [image prompts](references/image-prompts.md), and [UI metadata](agents/openai.yaml). Image generation and editing require suitable tools in the host environment. Skill instructions and generation prompts are in English.

## Packaging

Run from the repository root:

```sh
pnpm install --frozen-lockfile
pnpm build
```

Set `version` in [package.json](package.json) before a release. The build writes `dist/anything-to-girl-skill-<version>.zip`, containing `SKILL.md`, `agents/openai.yaml`, `references/design-language.md`, and `references/image-prompts.md` under `anything-to-girl-skill/`. Only these four text files are included. Building does not change the version.

Run `pnpm test` to check complete packaging of the skill and its companion text files, exclusion of extra assets, version naming, reproducibility, and invalid or missing inputs.
