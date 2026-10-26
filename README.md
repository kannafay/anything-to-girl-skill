# anything-to-girl-skill

A portable skill for adult female anime personification, identity-preserving character restyling and chibi conversion.

[SKILL.md](SKILL.md) contains the shared workflow, art direction and output rules. [Design language](references/design-language.md) helps with repetitive concepts; [prompt scaffolds](references/image-prompts.md) are optional. [UI metadata](agents/openai.yaml) retains the Chinese display name.

The default is one finished hand-drawn 2D illustration from at most one image-generation or edit call. Fashion choices remain open; backgrounds use economical painted forms and selective detail. The stopping rule is an instruction for the host, not a runtime tool interceptor.

## Packaging

Run from this directory:

    pnpm install --frozen-lockfile
    pnpm test
    pnpm build

Set the release version in package.json. The build creates dist/anything-to-girl-skill-<version>.zip with exactly four text files under anything-to-girl-skill/: SKILL.md, agents/openai.yaml and both reference files. Extra assets and development files are excluded.
