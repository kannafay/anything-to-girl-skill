# Compact production prompts

Choose the template that matches personification, identity-preserving style conversion or local revision. Keep prompts flexible and preserve explicit user choices. Let the image model develop the visual design.

## Personification prompt

Use for an original female interpretation of the current source, including a person or existing character. Replace the default figure/style cues with the user's requested style when needed.

"Create a new, independent adult female personification of [SOURCE], guided by [CHARACTER CONCEPT]. Give her captivating beauty, distinctive presence and a memorable, coherent overall design. Interpret the source inventively, using its motifs selectively. Freely develop imaginative, fashion-led styling with coherent contrasts. Refined, expressive 2D anime illustration with fine integrated linework and nuanced layered coloring. For visible legs, use slender, flowing manga lines with understated knees and muscle definition. Place her in a complete setting belonging to the concept, with spatial depth, environmental detail and unified lighting. Keep the character as the visual focus, with her whole head and both feet visible. Optionally include very brief artistic lettering as a small, unobtrusive accent, or omit it. Choose expressive closed-toe footwear as part of the overall silhouette, freely exploring boot height and heel design. No sandals, open-toe shoes, panels or inset views."

Use `[CHARACTER CONCEPT]` for a concise interpretation of the source's identity and the woman's personality. Choose it after comparing different overall ideas; do not fill this slot with a garment inventory, a standard persona used for every source, or a string of quality adjectives.

## Identity-preserving style conversion

"Restyle the adult character shown in [REFERENCE] in [REQUESTED STYLE]. Keep the same recognizable identity, defining appearance, palette and signature costume motifs. Reinterpret the whole figure and outfit consistently for that style, adapting proportions and simplifying details as needed. One complete full-body character shown once in a developed setting, with the whole head and both feet visible. Translate the original footwear into the requested style while keeping it closed-toe. Any lettering should be optional, subtle and secondary. No sandals, open-toe shoes, panels or inset views."

For chibi, transform the head, torso, limbs, hands, feet and clothing shapes together. Preserve recognizable identity through hairstyle, colors and costume motifs while replacing the source's body proportions with coherent chibi proportions. Let the requested style determine the degree of exaggeration; omit the default elongated-leg cue.

## New creation or revision

- For a new personification, use fresh generation when the tool supports it. Include the current source images and explicitly requested style guides only. Earlier generation IDs or unrelated character images do not belong in a new-source request.
- Build a self-contained prompt from the current task. Re-invoking the skill does not remove the conversation history, so do not rely on the invocation itself to establish an independent generation.
- For a style conversion, use the intended character as the reference/edit target and the conversion template above. For a local revision, use the revision prompt below. Preserve continuity in both cases.

## Tailor it to the request

- Add necessary source context and the user's explicit requests. Avoid filling in every visual decision before generation.
- Apply default manga leg cues only when compatible with the requested style. For chibi, use a compact, consistently simplified whole figure. Keep calf shape and shading understated, including through hosiery. Coverage and pose remain creative choices.
- For new designs, explore footwear as fashion: tall or thigh-high heeled boots, other heeled boots and closed-toe pumps are nonexclusive possibilities. When recent outputs keep repeating short shoes, carry a different concept-appropriate footwear direction into the production prompt. No fixed sequence or requirement to use the same shoe category for every character.
- For new designs, encourage a coherent mix of fashion influences, material qualities and proportions. Let the concept unify the contrasts; keep the actual garments and accessories open.
- Make the complete setting part of the request; do not reduce it to a plain or gradient backdrop unless the user asks for that treatment.
- Choose afresh whether a small artistic typographic accent should appear, allowing either outcome without a fixed frequency or rotation. If included, keep wording brief and legible, place it away from the character, and keep its visual weight low. Do not automatically append a title or source name to every image.
- For personification, make the selected concept carry the creative direction. If a result lacks impact, reconsider the concept before extending the prompt with more decoration or synonyms for quality.
- If a brand name or named style reference appears to pull results toward a recurring archetype, try expressing the relevant source identity and illustration qualities descriptively. Preserve the actual source's meaning and recognizable features; a different wording is a test of the visual association, not proof of its cause.
- For supplied images, identify source/identity and style-only roles. A style guide conveys quality without defining the new character's appearance or outfit.
- When independent personifications repeat a styling formula, ask for meaningful overall variation tied to the source. Let the image model choose the actual combination; do not substitute a mandatory footwear or hosiery schedule.
- For an unwanted result, clarify the intended outcome or change only the requested aspect. Avoid accumulating permanent rules for each failed example.

## Revision prompt

"Apply [REQUESTED CHANGE] to this adult character, preserving her identity and unmentioned design, setting and lettering. Maintain a refined full-body illustration with closed-toe footwear. Keep any lettering subtle and secondary. No sandals or open-toe shoes."
