# Image prompt structures for single full-body art

Use when rendering quality, format or character consistency needs more specificity. These templates are intentionally image-model-agnostic. Replace bracketed variables internally; do not show the finished prompt unless the user asks for it.

## 1. Single full-body character art without text

**Positive instruction:**

"Create one premium vertical 2D anime character illustration inspired by [SOURCE]. Depict ONE original adult female character, approximately 20-30 years old, elegant and distinctive, with her FULL BODY from top of head to both shoes completely visible. Her design transposes [SILHOUETTE ANCHOR], [COLORS], and [UNIQUE MOTIF] into her hair shape/accessory, clothing construction and at least one small functional prop. Her expression and archetype echo [FUNCTIONAL METAPHOR]. Outfit: [SPECIFIC GARMENT LAYERS, FABRIC MATERIALS, CUT AND FOOTWEAR]. Visible source inspiration should be immediate even without a label. Delicate expressive anime face, coherent anatomy, realistic cloth folding, beautifully controlled cel-shaded/painterly 2D game-art rendering, soft clean lighting, precise design details. Main character occupies approximately 75-85 percent of the visual attention. An uncluttered harmonized background. One character shown once in one uninterrupted full-body composition, without detail insets or additional views. No text anywhere, including on clothes, accessories and props."

**Negative checks (adapt rather than dumping an enormous negative prompt):**

"No second character or repeated figure, no inset portraits, no turnarounds, no comparison panels or design sheets, no cropped shoes, no random logos, no logo wallpaper, no text, lettering, titles, brand names, captions, labels, signatures or watermarks, no glossy wax-skin, no photographic face on anime body, no extra limbs, no inconsistent accessory construction."

## 2. Compact full-body prompt

"Single adult anime woman based on [SOURCE ANCHORS]. Clean full-body illustrated character art, head and both feet included, gentle natural standing posture, well-balanced readable shape, carefully designed complete outfit, discreet background with atmospheric light, no frames, no inset portraits, no design-sheet panels, no text anywhere, no lettering on clothes or props, no surrounding collage."

## 3. Edit an existing design

"Edit the previously generated image/design. Preserve the same woman's identity, face proportions, signature palette, [KEY MOTIF 1], [KEY MOTIF 2] and defining clothing features. Change ONLY [REQUESTED TARGET]. Keep the same 2D anime rendering quality and all other visual design elements, unless the requested change logically requires a local adjustment. Output one standalone full-body figure with head and both feet visible, no additional views or insets, and no text anywhere. Avoid introducing an unrelated character or brand."

## 4. Consistency and text-free output

- For revisions, check cuffs, collar, buttons, asymmetrical details, stockings, garment lengths, shoes, hair ornaments, colors and which side contains the motif.
- Do not render source lettering, names, slogans, titles, captions, labels, signatures or watermarks. Carry source identity through colors, shapes and non-lettered motifs instead.
- Keep the entire prompt consistent with one full-body figure and no text; do not add brand typography, inset portraits or additional views elsewhere in the prompt.
- Treat source images as visual references. If creating from a logo, extract the visual DNA; do not treat the logo as the entire output.

## 5. Intent-to-output tests

- A logo image and "What about this one?" during a series -> **one new** brand-inspired full-body character without text, never a montage of current and earlier brands.
- "Only give me the character from that last panel" -> crop/recreate as one full-body character; do not remake the comparison board.
- "Make it less AI-looking and less oily" -> reduce specular skin shine, face smoothing and overly dramatic rim lighting while preserving the design.
- "New outfit, same girl" -> change fashion silhouette but retain face, anchor color, hair motif and source identity.
