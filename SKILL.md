---
name: anything-to-girl-skill
description: "Turn an object, logo, image or concept into a recognizable original adult female anime character. Use for personification / gijinka requests, including '万物皆可娘化', '娘化', '拟人化' or '二次元立绘', and for related character revisions or reusable image prompts. Output a single-character full-body scene, optionally with subtle artistic lettering."
---

# Everything to Anime Girl

Imagine the source as a beautiful original adult anime woman. Guide the intended result while leaving visual invention to the image model. Explicit user choices take precedence.

## Understand the request

- Use the current source and its visible features. Each new source starts an independent character concept. Carry over an earlier character's identity or design only for a requested revision.
- Distinguish source/identity images from style references and rejected examples. A style reference guides illustration quality, not the character's appearance or outfit. Treat source facts separately from invented character traits.
- Choose creative defaults yourself. Ask only when essential source information is missing. For concept, analysis or prompt-only requests, give text; for image requests, use an available image-generation tool.

## Design priorities

- **Original concept:** imagine how the source's distinctive identity, meaning and character could become a person. Express that identity through a coherent original character, using recognizable motifs selectively rather than repeating the same emblem across every accessory.
- **Appeal:** aim for immediate attraction and a memorable character presence. Facial beauty, expression, overall silhouette and personal style should support an engaging personality and a clear visual focus.
- **Finish:** aim for refined, expressive 2D character illustration. Genshin Impact's official illustrations are a broad reference for polish and appeal, not a prescribed wardrobe or character template. Follow any user-specified art direction.
- **Creative freedom:** leave unspecified design decisions open within the user's constraints. No default garment genre, hairstyle, footwear type, hosiery, skin exposure or pose is required. Shared illustration quality should allow distinct character concepts.
- **Variety:** across new sources, seek meaningful differences in the overall styling and visual identity. Use recent results to notice a recurring formula, then invite a fresh concept suited to the new source. Footwear, legwear and coverage are creative choices within explicit exclusions, without a fixed selection list or rotation.

Read [design-language.md](references/design-language.md) when the concept feels generic or too close to an earlier result.

## Select a strong concept

For a new creation or an explicitly requested redesign, consider meaningfully different whole-character interpretations before generating. Compare their appeal, visual identity, connection to the source and freshness relative to recent results. Choose the most compelling coherent idea. If a concept could describe almost any attractive woman, strengthen its character identity and visual premise before generating.

Carry the selected idea into the production prompt as a brief character concept, leaving its visual realization open. This is a design-selection step, not a requirement to generate several images or publish the alternatives. For local edits, preserve the existing concept and change only the requested aspect.

## Output format

- One adult character shown once in a full-body illustration with the entire head and both feet visible.
- Default to a complete illustrated setting connected to the character concept. Give it spatial depth, environmental detail and lighting shared with the character, while keeping her the visual focus. A plain backdrop, gradient or isolated cutout is for an explicit user request, not the default. Let the setting vary naturally with the concept.
- Require closed-toe footwear. No sandals or open-toe shoes, including high-heeled and strappy sandals. Choose the remaining footwear and legwear freely to suit the character.
- For each new image, optionally choose a small artistic typographic accent or omit lettering entirely. Vary its presence spontaneously rather than making it a required component. If used, keep it brief, meaningful and legible, styled to suit the artwork and placed in quiet negative space without covering the character. The lettering must remain visually subordinate; do not turn the image into a text-heavy poster. Preserve existing lettering for local edits unless asked to change it.
- No panels, inset portraits, extra views, turnarounds or collages. A style reference's layout does not change this format.

## Compose, generate and deliver

- For a new source, write a self-contained English prompt around the source, selected character concept, a complete setting and output format. Explicitly request an independent creation, with an appealing overall design and a clear visual focus. Leave visual realization to the image model; add concrete details only for explicit user choices or necessary source facts. Keep typography optional and subtle. Use [image-prompts.md](references/image-prompts.md) as a flexible starting point.
- Use the tool's fresh-generation mode when it offers one. For a new source, supply only that source's image references and any explicitly selected style references; do not forward previous generation IDs or character images as edit inputs. If a recent-images selector would include unrelated characters, prefer explicit references to the current inputs. For a requested revision, use the intended character as the edit target and preserve unmentioned details. Use only controls the tool actually exposes; invoking a skill does not itself reset conversation history or hidden tool state.
- Generate the requested image count, defaulting to one. Keep replies brief and in the user's language; avoid duplicating an image already displayed by the tool.
- When viewable, assess the character's attraction, originality, source connection and finish, the developed setting, and format compliance. Check that any lettering is brief, artistic and secondary to the character. Check whether the selected concept is visible rather than just its palette or emblem. If the result feels generic, revisit the concept instead of adding more ornaments or quality adjectives. Keep local corrections focused. If generation is unavailable, explain the limitation.
