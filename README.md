# anything-to-girl-skill

A portable Agent Skill that turns objects, logos, images and concepts into original adult female anime characters. For new creations, compare whole-character ideas and choose a compelling concept before generation, judging appeal, originality and source connection. Carry that idea into a concise prompt while leaving visual realization to the image model. Genshin Impact's illustrations are a broad quality reference; encourage coherent fashion mixing and manga-style leg lines while leaving wardrobe and hosiery choices open. Explore footwear as part of the silhouette, including tall or thigh-high heeled boots and closed-toe high heels. Sandals and open-toe shoes are excluded. New sources use independent prompts, fresh-generation controls when available, and only relevant image inputs. Preserve the existing concept for local revisions. Skill invocation does not reset the host conversation. Output is one full-body character in a complete illustrated setting, without extra views. Small artistic lettering may appear as an unobtrusive accent, with its presence varied rather than required. Text-only concept and prompt requests remain text-only.

Load [SKILL.md](SKILL.md) from the repository root using your agent's skill support. Keep its companion text files available: [design language](references/design-language.md), [image prompts](references/image-prompts.md), and [UI metadata](agents/openai.yaml). Image generation and editing require suitable tools in the host environment. Skill instructions and generation prompts are in English.

## Packaging

Run from the repository root:

```sh
pnpm install --frozen-lockfile
pnpm build
```

Set `version` in [package.json](package.json) before a release. The build writes `dist/anything-to-girl-skill-<version>.zip`, containing `SKILL.md`, `agents/openai.yaml`, `references/design-language.md`, and `references/image-prompts.md` under `anything-to-girl-skill/`. Only these four text files are included. Building does not change the version.

Run `pnpm test` to check complete packaging of the skill and its companion text files, exclusion of extra assets, version naming, reproducibility, and invalid or missing inputs.
