# Compact production prompts

Use the core prompt as a flexible expression of intent. Identify the current source, choose a compelling character concept and preserve explicit user choices. Let the image model develop the visual design.

## Core prompt

"Create a new, independent adult female personification of [SOURCE], guided by [CHARACTER CONCEPT]. Give her captivating beauty, distinctive presence and a memorable, coherent overall design. Interpret the source inventively, using its motifs selectively. Freely develop imaginative, fashion-led styling with coherent contrasts. Refined, expressive 2D anime illustration with fine integrated linework and nuanced layered coloring. For visible legs, use slender, flowing manga lines with understated knees and muscle definition. Place her in a complete setting belonging to the concept, with spatial depth, environmental detail and unified lighting. Keep the character as the visual focus, with her whole head and both feet visible. Optionally include very brief artistic lettering as a small, unobtrusive accent, or omit it. Choose expressive closed-toe footwear as part of the overall silhouette, freely exploring boot height and heel design. No sandals, open-toe shoes, panels or inset views."

Use `[CHARACTER CONCEPT]` for a concise interpretation of the source's identity and the woman's personality. Choose it after comparing different overall ideas; do not fill this slot with a garment inventory, a standard persona used for every source, or a string of quality adjectives.

## New creation or revision

- For a new source, use fresh generation when the tool supports it. Include the current source images and explicitly requested style guides only. Earlier generation IDs or unrelated character images do not belong in a new-source request.
- Build a self-contained prompt from the current task. Re-invoking the skill does not remove the conversation history, so do not rely on the invocation itself to establish an independent generation.
- For a revision, use the intended character as the edit target and the revision prompt below. Preserve continuity in this case.

## Tailor it to the request

- Add necessary source context and the user's explicit requests. Avoid filling in every visual decision before generation.
- Use the figure style already in the core prompt for visible legs, including through hosiery. Keep calf shape and shading simplified; avoid adding anatomical or muscle-rendering specifications. Coverage and pose remain creative choices.
- Explore footwear as fashion: tall or thigh-high heeled boots, other heeled boots and closed-toe pumps are nonexclusive possibilities. When recent outputs keep repeating short shoes, carry a different concept-appropriate footwear direction into the production prompt. No fixed sequence or requirement to use the same shoe category for every character.
- Encourage a coherent mix of fashion influences, material qualities and proportions. Let the concept unify the contrasts; keep the actual garments and accessories open.
- Make the complete setting part of the request; do not reduce it to a plain or gradient backdrop unless the user asks for that treatment.
- Choose afresh whether a small artistic typographic accent should appear, allowing either outcome without a fixed frequency or rotation. If included, keep wording brief and legible, place it away from the character, and keep its visual weight low. Do not automatically append a title or source name to every image.
- Make the selected concept carry the creative direction. If a result lacks impact, reconsider the concept before extending the prompt with more decoration or synonyms for quality.
- If a brand name or named style reference appears to pull results toward a recurring archetype, try expressing the relevant source identity and illustration qualities descriptively. Preserve the actual source's meaning and recognizable features; a different wording is a test of the visual association, not proof of its cause.
- For supplied images, identify source/identity and style-only roles. A style guide conveys quality without defining the new character's appearance or outfit.
- When several results repeat a styling formula, ask for meaningful overall variation tied to the source. Let the image model choose the actual combination; do not substitute a mandatory footwear or hosiery schedule.
- For an unwanted result, clarify the intended outcome or change only the requested aspect. Avoid accumulating permanent rules for each failed example.

## Revision prompt

"Apply [REQUESTED CHANGE] to this adult character, preserving her identity and unmentioned design, setting and lettering. Maintain a refined full-body illustration with closed-toe footwear. Keep any lettering subtle and secondary. No sandals or open-toe shoes."
