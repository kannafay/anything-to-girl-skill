---
name: everything-to-anime-girl
description: "Turn any object, product, animal, food, vehicle, building, brand/logo, photo, or abstract idea into a distinctive original adult female anime character (moe anthropomorphism / gijinka). Use for requests to personify something as an anime girl, create character art from a pictured item or logo, or when the user says '\u4e07\u7269\u7686\u53ef\u5a18\u5316', '\u5a18\u5316', '\u62df\u4eba\u5316', or '\u4e8c\u6b21\u5143\u7acb\u7ed8'. Accept a text name, an uploaded image, or both; generate one standalone full-body character illustration without text, or provide reusable prompts when requested. Preserve recognizable source characteristics rather than making a generic anime girl."
---

# Everything to Anime Girl

Transform the *identity* of the supplied source into a coherent, original anime woman. Do not simply draw an attractive character holding the object or paste its logo onto generic clothes. The result should be recognizable as a personification even when the source name is hidden.

## 1. Interpret the request without friction

- Accept (a) an object/concept name, (b) a product or logo image, (c) an image plus a request, or (d) an existing generated character to revise.
- Use the current image as the visual source of truth. Read only clearly visible features; do not invent product features or brand properties. If the logo was provided, do not look it up unless requested or accuracy genuinely requires more evidence.
- In an ongoing personification conversation, a new image and "this one?" means **personify the newly supplied image**, not combine it with previous characters.
- The user has already established the broad workflow. Select creative defaults rather than asking about hair color, costume, pose, or background. Ask only if the source itself is missing and cannot be reasonably inferred.
- If the user explicitly requests only character concepts, prompt text, or analysis, give text only. If an image/illustration is requested or the context clearly establishes image generation, use the available image-generation tool. Never substitute a textual prompt for a requested image.
- Keep replies in the user's language; for image generation, avoid a long explanation before or after the art.

## 2. Extract the source DNA

Privately identify 3-5 **visual anchors** that make this source unique. Prioritize:

1. **Silhouette:** outline, proportions, shapes and distinctive structural parts.
2. **Palette:** 1-2 dominant colors plus 1 accent; use actual colors from the source image.
3. **Motif:** emblem, symbol, texture, material, pattern or unique mechanism.
4. **Function:** what the object does and its physical metaphor (protects, searches, lights, cuts, carries, cools, connects, etc.).
5. **Character temperament:** a plausible interpretation of the source's design language, not a claim about a real brand's values.

Map these into *different design layers*:

| Source anchor | Character translation |
| --- | --- |
| Distinctive symbol/part | Hair ornament, brooch, belt hardware, shoulder silhouette or small prop |
| Main and accent colors | Hair undertone, eye highlight, costume color blocking and trim |
| Material/texture | Fabric choices, transparent layers, brushed metal, knit, satin or ceramic finish |
| Geometry/shape | Hairstyle shape, sleeve and skirt cuts, cape, collar, accessories |
| Function/personality | Expression, pose, role archetype and environmental cue |

Require at least **three source-linked features**, including **two non-text, non-logo cues**. Preserve the motif's core geometry rather than random decorations. A logo, if shown at all, is an accent, not the entire concept.

See `references/design-language.md` for category translations and worked examples.

## 3. Design a specific, distinctive character

- Default to an **adult woman (roughly 20-30 years old in appearance)**; preserve user-provided age direction when appropriate. Do not portray an adult role as a child.
- Give the figure a clear, attractive, expressive anime face with believable anatomy, natural limb lengths and consistent facial identity.
- Decide silhouette before details. Connect at least one **hair element**, one **outfit construction element**, and one **accessory or ability** to the source. Functional visual design beats arbitrary decoration.
- Make her distinctive relative to previous examples. Avoid reusing the same long hair, exposed-shoulder bodice, short skirt, high heels, large bust or facial template for every unrelated input. Vary hair length, layering, footwear, posture, wardrobe archetype and facial temperament based on source.
- Use a polished, high-quality **2D anime / painterly anime game character illustration**, with clean controlled linework, restrained gradients, natural soft light and precise fabric structure. Do not default to live-action/photorealistic rendering, overly glossy skin, artificial plastic shine, wet-looking faces or oversaturated highlights.
- If the source calls for elegance, cuteness, athleticism, mystery, danger or sensual sophistication, express it through design and mood rather than exaggerating anatomy by default. User-specified style changes take precedence.

## 4. Output one standalone full-body illustration

**SINGLE FULL-BODY ART (one character, vertical, no text).**

- One image with one character shown once. Show her complete **head-to-shoes full body**, with no cropped feet; the figure dominates the frame.
- Compose as a clean premium character illustration / game character presentation. Use a quiet, visually relevant background and readable silhouette.
- Use one uninterrupted composition: no detail insets, face close-ups, accessory breakdowns, extra views, turnarounds, comparison panels, collages or design sheets. Reference layouts do not change this output format.
- Design a complete outfit, not merely a torso portrait. No text anywhere in the image: no brand names, titles, slogans, captions, labels, signatures, watermarks or lettering on clothes and props. Source symbols may inform non-lettered design motifs.
- Follow the requested aspect ratio; otherwise vertical 2:3 or 3:4 is a sensible default.

For compact production-ready prompt structures see `references/image-prompts.md`.

## 5. Generate and check

Build the image prompt internally from:

`subject + original-source visual anchors + unique character silhouette + hair/eyes + tailored outfit + emblem integration + expression/pose + single full-body composition without text + 2D rendering/lighting + negative constraints`.

Quality check the result visually when possible:

- Is there *one* identifiable personification of the **correct source**?
- Are the original colors and shape motifs visible in at least 3 coherent places?
- Is there exactly one full-body view, with a coherent face and physically plausible fabric and joints?
- Does the large full-body subject remain readable and fully visible? Are hands, footwear and motifs intact?
- Does it look 2D/anime, not a waxy photo or generic fantasy woman with a logo sticker?
- Is the image entirely free of text, including lettering on clothes and props? Is the source symbol's shape preserved when used as a non-lettered motif?

If an error is obvious and the available tool permits it, correct it by regeneration/editing with a narrow fix. Do not silently switch to a different brand or an unrelated illustration format.

## 6. Iteration and continuity

- "Change the pose / shoes / face / background / outfit" means **edit only those targets** and keep unmentioned design anchors, palette and adult identity consistent.
- "Change the face completely" means introduce a different facial identity while preserving the concept's recognizable DNA.
- "Next one", a new photo or a different logo means a **new character**, not a repaint of the last one. Establish a distinct silhouette and personality before generating.
- If creating a series, retain consistent *presentation* quality while varying actual character designs strongly.
- Apply user-requested corrections precisely; avoid unrequested motif drift, accessory swaps and physical inconsistencies.

## Useful invocation examples

- Upload a soda can and ask to transform it into an anime woman -> SINGLE FULL-BODY ART without text, based on can silhouette, colors, pull-tab detail and carbonation.
- Upload a whale-shaped blue tech logo and say "this one?" -> one original blue/ocean-and-tech anime woman, **not** a collage of earlier brands.
- "Give me only her full-body character art" -> SINGLE FULL-BODY ART without text.
- "Keep the outfit, make her smile and change the pose" -> revise the existing image, retaining core visual anchors.
