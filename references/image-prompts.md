# Compact production prompts

Choose the template that matches personification, identity-preserving style conversion or local revision. Keep prompts flexible and preserve explicit user choices. Let the image model develop the visual design.

## Personification prompt

Use for an original female interpretation of the current source, including a person or existing character. Replace the default figure/style cues with the user's requested style when needed.

"Create an independent adult female personification of [SOURCE], guided by [CHARACTER CONCEPT], with captivating beauty, distinctive presence and imaginative, coherent fashion. Interpret source motifs selectively. Refined hand-drawn 2D anime illustration: expressive fine linework, designed shadow shapes and nuanced coloring. Keep skin and cloth softly shaded with restrained sheen; use selective material highlights. For visible legs, draw continuous graceful contours with softly balanced thighs, understated knees and long, smooth lower-leg lines tapering gently toward the ankles, including through hosiery. Give her a complete illustrated setting with spatial depth and selective environmental detail. Make her face the primary focal point; keep background and props quieter through grouped values, simpler distant shapes and calm areas around the figure. Preserve an illustrated treatment across the scene, without photorealistic or 3D-rendered surfaces. One full-body character, entire head and both feet visible. Explore expressive closed-toe footwear within the overall silhouette. Artistic lettering is optional, brief and visually secondary. No sandals, open-toe shoes, panels or inset views."

Use `[CHARACTER CONCEPT]` for a concise interpretation of the source's identity and the woman's personality. Choose it after comparing different overall ideas; do not fill this slot with a garment inventory, a standard persona used for every source, or a string of quality adjectives.

## Identity-preserving style conversion

"Restyle the adult character shown in [REFERENCE] in [REQUESTED STYLE]. Keep the same recognizable identity, defining appearance, palette and signature costume motifs. Reinterpret the whole figure and outfit consistently for that style, adapting proportions and simplifying details as needed. For a 2D treatment, use expressive drawn lines, designed shadow shapes and restrained material highlights throughout the figure and environment. Keep the face as the primary focal point and group secondary details into quieter shapes. One complete full-body character shown once in a developed setting, with the whole head and both feet visible. Translate the original footwear into the requested style while keeping it closed-toe. Any lettering should be optional, subtle and secondary. No sandals, open-toe shoes, panels or inset views."

For chibi, transform the head, torso, limbs, hands, feet and clothing shapes together. Preserve recognizable identity through hairstyle, colors and costume motifs while replacing the source's body proportions with coherent chibi proportions. Let the requested style determine the degree of exaggeration; omit the default elongated-leg cue.

## New creation or revision

- For a new personification, use fresh generation when the tool supports it. Include the current source images and explicitly requested style guides only. Earlier generation IDs or unrelated character images do not belong in a new-source request.
- Build a self-contained prompt from the current task. Re-invoking the skill does not remove the conversation history, so do not rely on the invocation itself to establish an independent generation.
- For a style conversion, use the intended character as the reference/edit target and the conversion template above. For a local revision, use the revision prompt below. Preserve continuity in both cases.

## Tailor it to the request

- Add necessary source context and the user's explicit requests. Avoid filling in every visual decision before generation.
- Carry the default hand-drawn 2D treatment into the prompt unless the user requests another style. Express refinement through linework, shadow design and selective detail; avoid building the prompt around cinematic effects, exhaustive material realism or uniform microdetail.
- Keep reflections and luminous accents selective. Compose calm areas and a clear character-first reading; avoid filling the scene with competing glitter, bokeh discs, particles or bright repeated reflections. A subdued background treatment still needs a developed setting.
- Apply default leg cues as a preference for balanced proportions and continuous contour flow, including through hosiery. Keep knee transitions and calf shaping subtle. For chibi, replace these full-proportion cues with a compact, consistently simplified whole figure. Coverage, legwear and pose remain creative choices.
- For new designs, explore footwear as fashion: tall or thigh-high heeled boots, other heeled boots and closed-toe pumps are nonexclusive possibilities. When recent outputs keep repeating short shoes, carry a different concept-appropriate footwear direction into the production prompt. No fixed sequence or requirement to use the same shoe category for every character.
- For new designs, encourage a coherent mix of fashion influences, material qualities and proportions. Let the concept unify the contrasts; keep the actual garments and accessories open.
- Make the complete setting part of the request; do not reduce it to a plain or gradient backdrop unless the user asks for that treatment.
- Choose afresh whether a small artistic typographic accent should appear, allowing either outcome without a fixed frequency or rotation. If included, keep wording brief and legible, place it away from the character, and keep its visual weight low. Do not automatically append a title or source name to every image.
- For personification, make the selected concept carry the creative direction. If a result lacks impact, reconsider the concept before extending the prompt with more decoration or synonyms for quality.
- If a brand name or named style reference appears to pull results toward a recurring archetype, try expressing the relevant source identity and illustration qualities descriptively. Preserve the actual source's meaning and recognizable features; a different wording is a test of the visual association, not proof of its cause.
- For supplied images, identify source/identity, illustration-style and any explicitly requested leg-shape roles. Leg-shape references inform contours and proportions only; translate them into the requested style without inheriting photographic material rendering or prescribing the reference's outfit.
- When independent personifications repeat a styling formula, ask for meaningful overall variation tied to the source. Let the image model choose the actual combination; do not substitute a mandatory footwear or hosiery schedule.
- For an unwanted result, clarify the intended outcome or change only the requested aspect. Avoid accumulating permanent rules for each failed example.

## Revision prompt

"Apply [REQUESTED CHANGE] to this adult character, preserving her identity and unmentioned design, setting and lettering. Maintain the intended style and a full-body composition with closed-toe footwear. For a requested surface or hierarchy correction, preserve meaningful scene elements while refining the drawn shading, controlling highlights and quieting competing secondary details. Keep any lettering subtle and secondary. No sandals or open-toe shoes."
