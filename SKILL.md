---
name: anything-to-girl-skill
description: "Turn objects, logos, images, concepts, people or existing characters into recognizable adult female anime characters. Use for personification / gijinka ('万物皆可娘化', '娘化', '拟人化'), female character redesigns, identity-preserving anime or chibi conversions ('Q版', '二次元立绘'), related revisions and reusable prompts. Output a single-character full-body scene, optionally with subtle artistic lettering."
---

# Everything to Anime Girl

Create source-inspired adult female characters, or restyle an existing character while preserving identity. Guide the intended result while leaving visual invention to the image model. Explicit user choices take precedence.

## Understand the request

- Accept objects, logos, concepts, people and existing characters as sources. Use the current source and its visible features; keep unrelated earlier outputs out of a new request.
- Choose the intent from the request. For personification or a female reinterpretation, develop an original adult female design while retaining the source's distinguishing traits. For a style-only conversion of a supplied person or character, preserve identity and defining appearance while changing the presentation. For a local revision, preserve unmentioned details.
- Distinguish source/identity images from style references and rejected examples. A style reference guides illustration quality, not the character's appearance or outfit. Treat source facts separately from invented character traits. A multi-view source sheet may describe one character; its layout does not require multiple output views.
- Choose creative defaults yourself. Ask only when essential source information is missing. For concept, analysis or prompt-only requests, give text; for image requests, use an available image-generation tool.

## Design priorities

- **Original concept:** for personification or creative redesign, imagine how the source's distinctive identity, meaning and character could become an adult woman. Express that identity through a coherent original character, using recognizable motifs selectively rather than repeating the same emblem across every accessory.
- **Appeal:** aim for immediate attraction and a memorable character presence. Facial beauty, expression, overall silhouette and personal style should support an engaging personality and a clear visual focus.
- **Fashion:** for new designs, seek distinctive, coherent styling through a creative mix of fashion influences, textures and silhouettes. Use contrasts in softness, structure and proportion to express the character's personality, leaving the actual combination open.
- **Figure style:** for the default full-proportion style, use graceful manga leg lines with smooth tapering calves, delicate ankles and understated muscle definition. A requested style governs proportions throughout: for chibi, adapt the head, torso, limbs, hands, feet and costume shapes together, replacing elongated leg cues with consistently compact, simplified forms. Preserve identity through recognizable features and motifs while translating the source's proportions into the requested style.
- **Finish:** aim for refined, expressive 2D character illustration. Genshin Impact's official illustrations are a broad reference for polish and appeal, not a prescribed wardrobe or character template. Follow any user-specified art direction.
- **Creative freedom:** leave unspecified design decisions open within the user's constraints. No default garment genre, hairstyle, footwear type, hosiery, skin exposure or pose is required. Shared illustration quality should allow distinct character concepts.
- **Variety:** across independent personifications, seek meaningful differences in the overall styling and visual identity. Use recent results to notice a recurring formula, then invite a fresh concept suited to the new source. Footwear, legwear and coverage are creative choices within explicit exclusions, without a fixed selection list or rotation.

Read [design-language.md](references/design-language.md) for person/character conversions or when a concept feels generic or too close to an earlier result.

## Select a strong concept

For personification or an explicitly requested creative redesign, consider meaningfully different whole-character interpretations before generating. Compare their appeal, visual identity, connection to the source and freshness relative to recent results. Choose the most compelling coherent idea. If a concept could describe almost any attractive woman, strengthen its character identity and visual premise before generating.

Carry the selected idea into the production prompt as a brief character concept, leaving its visual realization open. This is a design-selection step, not a requirement to generate several images or publish the alternatives. For identity-preserving style conversions and local edits, keep the existing character concept; adapt presentation as required by the requested change.

## Output format

- One adult character shown once in a full-body illustration with the entire head and both feet visible.
- Default to a complete illustrated setting connected to the character concept. Give it spatial depth, environmental detail and lighting shared with the character, while keeping her the visual focus. A plain backdrop, gradient or isolated cutout is for an explicit user request, not the default. Let the setting vary naturally with the concept.
- Require closed-toe footwear; exclude sandals and open-toe designs. For new designs, explore shaft height and heel design, including tall or thigh-high heeled boots, other heeled boots and closed-toe high heels as nonexclusive possibilities. Make a fresh styling choice suited to each concept; ankle-height shoes are not a default. Legwear remains open. For style-only conversions, translate the source outfit and shoes into the requested style, subject to explicit user choices and exclusions.
- For each new image, optionally choose a small artistic typographic accent or omit lettering entirely. Vary its presence spontaneously rather than making it a required component. If used, keep it brief, meaningful and legible, styled to suit the artwork and placed in quiet negative space without covering the character. The lettering must remain visually subordinate; do not turn the image into a text-heavy poster. Preserve existing lettering for local edits unless asked to change it.
- No panels, inset portraits, extra views, turnarounds or collages. A style reference's layout does not change this format.

## Compose, generate and deliver

- Write a self-contained English prompt suited to the intent, using the matching template in [image-prompts.md](references/image-prompts.md). For personification, include the selected original concept; for identity-preserving conversion, specify what identifies the existing character and how the requested style changes the whole figure. Include a complete setting and the output format, with optional subtle typography. Leave other visual decisions open.
- Use fresh generation for independent personifications when available. Supply only the current source and explicitly selected style references; do not forward unrelated character images or generation IDs. For a style conversion or revision, use the intended character as the reference/edit target and preserve continuity. Style changes may require new proportions and simplified costume shapes. Prefer explicit inputs if a recent-images selector would include unrelated characters. Use only exposed tool controls; invoking a skill does not itself reset conversation history or hidden tool state.
- Generate the requested image count, defaulting to one. Keep replies brief and in the user's language; avoid duplicating an image already displayed by the tool.
- When viewable, assess appeal, finish, the developed setting and format compliance. For personification, check originality and meaningful source connection; revisit a generic concept before adding more ornaments. For a style conversion, check identity retention and consistent treatment of the head, body, limbs and clothing in the requested style. Keep any lettering brief, artistic and secondary, and local corrections focused. If generation is unavailable, explain the limitation.
