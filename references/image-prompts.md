# Compact production prompts

Use the core prompt as a flexible expression of intent. Identify the current source and preserve explicit user choices. Let the image model develop the character's visual design.

## Core prompt

"Create a new, independent adult female personification of [SOURCE], not an edit of an earlier character. Invent a distinctive, beautiful character with a coherent personal style shaped by this source. Freely explore a fresh design direction rather than a recurring outfit or styling formula. Refined, expressive 2D illustration with Genshin Impact-level polish. One complete full-body character wearing closed-toe footwear; no sandals, open-toe shoes, text, panels or inset views."

## New creation or revision

- For a new source, use fresh generation when the tool supports it. Include the current source images and explicitly requested style guides only. Earlier generation IDs or unrelated character images do not belong in a new-source request.
- Build a self-contained prompt from the current task. Re-invoking the skill does not remove the conversation history, so do not rely on the invocation itself to establish an independent generation.
- For a revision, use the intended character as the edit target and the revision prompt below. Preserve continuity in this case.

## Tailor it to the request

- Add necessary source context and the user's explicit requests. Avoid filling in every visual decision before generation.
- For supplied images, identify source/identity and style-only roles. A style guide conveys quality without defining the new character's appearance or outfit.
- When several results repeat a styling formula, ask for meaningful overall variation tied to the source. Let the image model choose the actual combination; do not substitute a mandatory footwear or hosiery schedule.
- For an unwanted result, clarify the intended outcome or change only the requested aspect. Avoid accumulating permanent rules for each failed example.

## Revision prompt

"Apply [REQUESTED CHANGE] to this adult character, preserving her identity and unmentioned design. Maintain a refined, text-free full-body illustration with closed-toe footwear. No sandals or open-toe shoes."
