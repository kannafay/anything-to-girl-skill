# Image prompt structures for single full-body art

Use when rendering quality, format or character consistency needs more specificity. These templates are intentionally image-model-agnostic. Replace bracketed variables internally; do not show the finished prompt unless the user asks for it.

## 1. Single full-body character art without text

**Positive instruction:**

"Create ONE original beautiful adult woman, approximately 20-30 years old, as a premium vertical full-body 2D character illustration inspired by [SOURCE]. Her complete head, hairstyle and both shoes are visible with comfortable margins. Preserve [SILHOUETTE ANCHOR], [COLORS], and [UNIQUE MOTIF] through distinctive hair design, clothing construction and coordinated accessories. Her expression and archetype echo [FUNCTIONAL METAPHOR]. Give her a captivating harmonious adult anime face, expressive luminous layered irises, elegant lashes, a delicate nose, softly shaded lips, a natural engaging expression and a graceful feminine pose. Outfit: [SPECIFIC FASHIONABLE GARMENTS, FLATTERING NECKLINE/SHOULDER AND WAIST TREATMENT, SKIRT OR TROUSER CUT, SELECTIVE SKIN EXPOSURE, MATERIALS, ACCESSORIES AND FOOTWEAR]. Follow [WARDROBE DIRECTION], making the clothing sophisticated, flattering and moderately sensual. Integrate source geometry into the cuts and small hardware. Use Genshin Impact official 2D character splash-art aesthetics: fine clean colored linework, controlled cel shading enriched with soft gradients and colored midtones, polished painted fabric and jewelry, and clear differences between matte cloth, satin, sheer layers, gems and metal where used. Create an original design with beautiful facial features and intentional fashion details. Main character occupies approximately 75-85 percent of the visual attention. Quiet pale background with a soft contact shadow. One character shown once in one uninterrupted full-body composition. No text anywhere, including on clothes, accessories and props."

Choose or blend a wardrobe direction according to the source. These are options within the same rendering style, not a requirement to generate multiple images:

- **Sleek, confident, mature glamour:** fitted tailoring, an asymmetric hem or controlled side slit, a considered open neckline or shoulder treatment, a defined waist, a cropped or draped outer layer, refined legwear and compact jewel or metal details. Keep the silhouette streamlined and confident; adapt palette and motifs to the source.
- **Ornate, graceful, sweet glamour:** a structured flattering bodice, open shoulders or a delicate neckline, an airy layered short skirt or split train, fine lace edging or embroidery, ribbons, small pearl or gemstone accents and elegant footwear. Keep ornament coordinated and the adult character's silhouette clear; adapt palette and motifs to the source.

**Negative checks (adapt rather than dumping an enormous negative prompt):**

"No second character or repeated figure, no inset portraits, no turnarounds, no comparison panels or design sheets, no cropped shoes, no random logos or logo wallpaper, no text, lettering, titles, brand names, captions, labels, signatures or watermarks, no in-game 3D screenshot or photographic face, no waxy skin or rough watercolor texture, no extra limbs or inconsistent accessory construction."

## 2. Compact full-body prompt

"One beautiful adult anime woman based on [SOURCE ANCHORS], with expressive luminous eyes, delicate harmonious features and a graceful pose. Sophisticated, flattering, moderately sensual fantasy couture in [WARDROBE DIRECTION], with deliberate neckline, waist and leg treatment, distinct painted materials and fine source-linked accessories. Genshin Impact official 2D splash-art aesthetics, fine clean colored linework, rich midtones, controlled cel shading and soft gradients. Full body, whole head and both shoes visible, quiet pale background and a soft contact shadow. One figure only, no frames, insets, additional views, text, lettering or collage."

## 3. Edit an existing design

"Edit the previously generated image/design. Preserve the same adult woman's identity, face proportions, signature palette, [KEY MOTIF 1], [KEY MOTIF 2] and defining clothing features. Change ONLY [REQUESTED TARGET]. Retain her attractive expressive face, the outfit's refined material details, and the same polished Genshin-inspired official 2D splash-art rendering unless specifically asked to change them. Keep all other design elements unless the requested change logically requires a local adjustment. Output one standalone full-body figure with head and both feet visible, no additional views or insets, and no text anywhere. Avoid introducing an unrelated character or brand."

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
- "Both wardrobe directions work" -> retain one shared illustration style and choose or blend the wardrobe details to suit each source; keep the requested image count.
- "The clothes are too conservative" -> revise neckline, shoulder treatment, waist, garment length or slit as appropriate; preserve identity, source anchors and the quality of the clothing design.
