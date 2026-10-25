---
name: anything-to-girl-skill
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

See `references/design-language.md` for category translations, wardrobe variation and worked examples.

## 3. Design a specific, distinctive character

- Default to an **adult woman (roughly 20-30 years old in appearance)**; preserve user-provided age direction when appropriate. Do not portray an adult role as a child.
- Make the woman herself beautiful and captivating: harmonious adult anime facial proportions, expressive luminous irises, elegant lashes, a delicate nose, softly shaded lips, a natural engaging expression and a graceful pose. Beauty of the face and sophistication of the outfit are primary goals alongside source recognizability. Keep believable anatomy and consistent facial identity.
- Decide silhouette before details. Connect at least one **hair element**, one **outfit construction element**, and one **accessory or ability** to the source. Functional visual design beats arbitrary decoration.
- Make her distinctive relative to previous examples. Vary hairstyle, silhouette, cuts, layering, footwear, posture and facial temperament based on the source. Keep the shared illustration quality while designing a fresh face and outfit for each unrelated input.
- Use **Genshin Impact's official 2D character splash-art aesthetics** as a broad visual reference: fine clean colored linework, controlled cel shading enriched with soft gradients and colored midtones, luminous detailed eyes, precise clothing construction and polished painted materials. Keep satin, matte cloth, sheer layers, gems and metal visibly distinct where used. Adapt this drawing and fashion-design language to the source; create an original character rather than copying an existing character's outfit or game emblems. Avoid an in-game 3D screenshot look, photographic faces, waxy skin and rough watercolor rendering. User-specified style changes take precedence.
- Default to **fashionable, flattering, moderately sensual adult fantasy couture**. Deliberately design the neckline and shoulders, waist shaping, and the balance between fabric and visible skin. Short or asymmetric skirts, side slits, open shoulders or backs, tasteful waist cutouts, sheer layers and refined legwear are options to select and coordinate, not a checklist to apply all at once. Use tailoring, color, material contrast and fine accessories to make the outfit attractive.
- Both **sleek, confident, mature glamour** and **ornate, graceful, sweet glamour** belong to this shared art direction. Choose or blend them to fit the current source without requiring the user to select a preset. Sleek designs favor fitted cuts, asymmetry and compact hardware; ornate designs favor structured bodices, airy skirt layers, fine edging, ribbons and jewel-like accents. Source function should inspire the design without automatically turning it into workwear. Do not default to stacking a high collar, long sleeves, a closed floor-length robe and full-length trousers; long garments can use an open front, a slit or a flowing train to retain a flattering silhouette. Follow explicit user wardrobe and coverage preferences.

## 4. Output one standalone full-body illustration

**SINGLE FULL-BODY ART (one character, vertical, no text).**

- One image with one character shown once. Show her complete **head-to-shoes full body**, with no cropped feet; the figure dominates the frame.
- Compose as a clean premium character illustration / game character presentation. Use a quiet pale background with a subtle contact shadow and a readable silhouette; concentrate source motifs in the character's design.
- Use one uninterrupted composition: no detail insets, face close-ups, accessory breakdowns, extra views, turnarounds, comparison panels, collages or design sheets. Reference layouts do not change this output format.
- Design a complete outfit, not merely a torso portrait. No text anywhere in the image: no brand names, titles, slogans, captions, labels, signatures, watermarks or lettering on clothes and props. Source symbols may inform non-lettered design motifs.
- Follow the requested aspect ratio; otherwise vertical 2:3 or 3:4 is a sensible default.

For compact production-ready prompt structures see `references/image-prompts.md`.

## 5. Generate and check

Build the image prompt internally from:

`source visual anchors + beautiful adult woman's face and expression + distinctive silhouette + source-linked fashionable outfit, flattering cuts and material details + motif integration + graceful pose + single full-body composition without text + Genshin-inspired official 2D illustration rendering and lighting + focused negative constraints`.

Quality check the result visually when possible:

- Is there *one* identifiable personification of the **correct source**?
- Are the original colors and shape motifs visible in at least 3 coherent places?
- Is there exactly one full-body view, with a coherent face and physically plausible fabric and joints?
- Are the face, eyes, expression and pose attractive and intentional at full-body viewing size?
- Is the outfit fashionable and flattering, with deliberate neckline, waist and leg treatment, clear material differences and source-linked construction? Is the selected wardrobe direction coherent rather than a pile of decorations or an automatic full-coverage uniform?
- Does the large full-body subject remain readable and fully visible? Are hands, footwear and motifs intact?
- Does it have refined official-2D-splash-art qualities, with clean drawn edges, rich midtones and precise details, rather than a 3D render or a generic woman with a logo sticker?
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
