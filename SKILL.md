---
name: anything-to-girl-skill
description: "Turn objects, logos, images, concepts, people or existing characters into recognizable adult female anime characters. Use for personification / gijinka ('万物皆可娘化', '娘化', '拟人化'), female character redesigns, identity-preserving anime or chibi conversions ('Q版', '二次元立绘'), related revisions and reusable prompts. Output a single-character full-body scene, optionally with subtle artistic lettering."
---

# Everything to Anime Girl

Create source-inspired adult female characters, or restyle an existing character while preserving identity. Guide the intended result while leaving visual invention to the image model. Explicit user choices take precedence.

## Image count and stopping rule

- Default to one finished image and at most one image-generation or image-edit call per user request. Request a single output using an exposed count control when available.
- Resolve style, figure design, detail hierarchy and reference roles before the call, then put them together in the production prompt. Plan the intended finished 2D illustration directly; do not split it into an initial render followed by a 2D conversion, polishing pass or correction pass.
- For a one-image request, once the tool returns an image, inspect it read-only, deliver it once and stop. Quality checks do not authorize another image call, comparison version or automatic repair. This limit also applies when generic image-tool guidance suggests iteration. Additional calls require an explicit user request for more images or a correction.
- If the tool fails without an image, report the failure and stop. If the user explicitly requests multiple images, determine that count before generation and stay within it.

## Understand the request

- Accept objects, logos, concepts, people and existing characters as sources. Use the current source and its visible features; keep unrelated earlier outputs out of a new request.
- Choose the intent from the request. For personification or a female reinterpretation, develop an original adult female design while retaining the source's distinguishing traits. For a style-only conversion of a supplied person or character, preserve identity and defining appearance while changing the presentation. For a local revision, preserve unmentioned details.
- Distinguish source/identity images from style references and rejected examples. A style reference guides illustration quality, not the character's appearance or outfit. Explicit body-shape references guide the requested contours and proportions; keep rendering style and identity separate. Treat source facts separately from invented character traits. A multi-view source sheet may describe one character; its layout does not require multiple output views.
- Choose creative defaults yourself. Ask only when essential source information is missing. For concept, analysis or prompt-only requests, give text; for image requests, use an available image-generation tool.

## Design priorities

- **Original concept:** for personification or creative redesign, imagine how the source's distinctive identity, meaning and character could become an adult woman. Express that identity through a coherent original character, using recognizable motifs selectively rather than repeating the same emblem across every accessory.
- **Appeal:** aim for immediate attraction and a memorable character presence. Facial beauty, expression, overall silhouette and personal style should support an engaging personality and a clear visual focus.
- **Fashion:** for new designs, seek distinctive, coherent styling through a creative mix of fashion influences, textures and silhouettes. Use contrasts in softness, structure and proportion to express the character's personality, leaving the actual combination open.
- **Figure style:** for visible legs in the default full-proportion style, favor softly balanced thighs, knees blended smoothly into the silhouette and streamlined lower legs with very shallow curvature. Keep the knee-to-ankle contour gently tapered, including through hosiery. Avoid outward calf-muscle bulges, protruding kneecap bumps and isolated muscle or knee highlights. Let the pose and lighting support this line quality. A requested style governs proportions throughout: for chibi, adapt the head, torso, limbs, hands, feet and costume shapes together in consistently compact, simplified forms. Preserve identity through recognizable features and motifs.
- **Finish:** plan a refined, hand-drawn 2D anime illustration from the first call, with expressive linework, designed shadow shapes, nuanced coloring and selective fine detail. Use softly shaded skin and cloth with restrained sheen; reserve sharp reflections for selective material accents. Keep the character and environment consistently illustrated, avoiding plastic-like surfaces and photorealistic or 3D-rendered shading. Preserve finesse in facial drawing, fabric design and chosen accents; 2D treatment does not require stripping away detail. Genshin Impact's official illustrations are a reference for polish and appeal, not a game-render look or costume template. Follow user-specified art direction.
- **Visual hierarchy:** make the character's face the primary focal point, with outfit accents, props and environment supporting her. Balance detail with calm areas; group background values, simplify distant shapes and keep secondary edges and highlights quieter. Avoid evenly distributing glitter, bright reflections, particles or dense microtexture across the image.
- **Creative freedom:** leave unspecified design decisions open within the user's constraints. No default garment genre, hairstyle, footwear type, hosiery, skin exposure or pose is required. Shared illustration quality should allow distinct character concepts.
- **Variety:** across independent personifications, seek meaningful differences in the overall styling and visual identity. Use recent results to notice a recurring formula, then invite a fresh concept suited to the new source. Footwear, legwear and coverage are creative choices within explicit exclusions, without a fixed selection list or rotation.

Read [design-language.md](references/design-language.md) for person/character conversions or when a concept feels generic or too close to an earlier result.

## Select a strong concept

For personification or an explicitly requested creative redesign, consider meaningfully different whole-character interpretations before generating. Compare their appeal, visual identity, connection to the source and freshness relative to recent results. Choose the most compelling coherent idea. If a concept could describe almost any attractive woman, strengthen its character identity and visual premise before generating.

Carry the selected idea into the production prompt as a brief character concept, leaving its visual realization open. Concept comparison stays in planning and does not add image calls. For identity-preserving style conversions and local edits, keep the existing character concept; adapt presentation as required by the requested change.

## Output format

- One adult character shown once in a full-body illustration with the entire head and both feet visible.
- Default to a complete illustrated setting connected to the character concept. Give it spatial depth, selectively described environmental detail and lighting shared with the character, while keeping her the visual focus. Build quiet areas within the setting and preserve a readable silhouette. A plain backdrop, gradient or isolated cutout is for an explicit user request, not the default. Let the setting vary naturally with the concept.
- Require closed-toe footwear; exclude sandals and open-toe designs. For new designs, explore shaft height and heel design, including tall or thigh-high heeled boots, other heeled boots and closed-toe high heels as nonexclusive possibilities. Make a fresh styling choice suited to each concept; ankle-height shoes are not a default. Legwear remains open. For style-only conversions, translate the source outfit and shoes into the requested style, subject to explicit user choices and exclusions.
- For each new image, optionally choose a small artistic typographic accent or omit lettering entirely. Vary its presence spontaneously rather than making it a required component. If used, keep it brief, meaningful and legible, styled to suit the artwork and placed in quiet negative space without covering the character. The lettering must remain visually subordinate; do not turn the image into a text-heavy poster. Preserve existing lettering for local edits unless asked to change it.
- No panels, inset portraits, extra views, turnarounds or collages. A style reference's layout does not change this format.

## Compose, generate and deliver

- Write a self-contained English prompt suited to the intent, using the matching template in [image-prompts.md](references/image-prompts.md). For personification, include the selected original concept; for identity-preserving conversion, specify what identifies the existing character and how the requested style changes the whole figure. Carry the default illustrated treatment and visual hierarchy into the prompt unless the user selects another direction. Include a complete setting and the output format, with optional subtle typography. Leave other visual decisions open.
- Use fresh generation for independent personifications when available. Supply only the current source and explicitly selected style references; do not forward unrelated character images or generation IDs. For a style conversion or revision, use the intended character as the reference/edit target and preserve continuity. Style changes may require new proportions and simplified costume shapes. Prefer explicit inputs if a recent-images selector would include unrelated characters. Use only exposed tool controls; invoking a skill does not itself reset conversation history or hidden tool state.
- Follow the image-count and stopping rule above. Keep replies brief and in the user's language; avoid duplicating an image already displayed by the tool.
- When viewable, inspect appeal, finish, the developed setting and format compliance read-only. Check that the character reads first, detail supports the focal hierarchy, the default 2D treatment is consistent, and visible knees/calves follow the intended streamlined shape. For personification, assess originality and source connection; for a style conversion, assess identity retention and consistency across the whole figure. Keep any lettering brief and secondary. Report material shortcomings honestly and stop; preserve possible corrections for an explicitly requested follow-up. If generation is unavailable, explain the limitation.
