---
name: anything-to-girl-skill
description: Create or revise an original female personification of an object, animal, place, logo, or concept from text or images, defaulting to polished 2D anime illustration with fine linework and detailed painted shading. Use for character illustrations or reusable prompts.
---

# Anything to Girl

Turn the user's source into one recognizable original female character. The skill's name and instructions are not part of the image. Explicit user requirements override the defaults below.

## Design

- Use the current source and visible reference features. Fill creative gaps yourself, distinguishing inventions from source facts; ask only when essential input is missing or ambiguous.
- Translate defining shapes, colors, materials, and functions into hair, clothing, accessories, and temperament. Use clear metaphors for abstract concepts. Make the source recognizable through the character's design, beyond logos or a held prop.
- Give each new source a distinct silhouette and personality. Combine sources only when requested. For revisions, change the requested elements while preserving other identity and source traits.
- Distinguish source or identity references, positive style references, and examples the user dislikes. Never use a rejected rendering as the desired style. From style-only images, borrow linework, shading, detail, and material treatment; do not import their character identity, outfit, logos, lettering, or layout. A multi-panel style reference does not change the requested single-character composition.

## Default Art Direction

- An adult woman in a polished 2D anime character illustration: fine integrated linework, delicate dimensional shading, and carefully painted materials. Preserve illustrated facial proportions while allowing soft volume and convincing material highlights. Finish surfaces cleanly and smoothly; generic labels such as "hand-drawn," "painterly," or "semi-realistic" are insufficient without the visible qualities below.
- Face: a gently tapered oval face, elongated almond-shaped eyes at a moderate stylized scale, layered luminous irises, fine lashes, a subtly shaded nose bridge and tip, soft peach blush, and small lips with a gentle color gradient and a restrained moist highlight. Keep luminous skin and gradual tonal transitions; do not flatten the face into a few tones or reduce the mouth to a line.
- Linework and hair: thin colored contours with varied weight, some edges merging into shading, and crisp accents around the eyes and important details. Hair has coherent layered locks, natural loose strands, fine internal strand detail, overlap, and restrained silky highlights. Preserve its overall mass instead of turning each lock into a broad ribbon or filling the composition with flyaways.
- Materials: paint distinct fabric weight and sheen, soft folds and sharper crease accents, fine seams, and selective decorative detail. Where the design includes them, use broad soft highlights for satin, quieter shading for matte cloth, compact bright reflections for metal, and translucency for gems. Convey these differences within the illustration rather than reducing every material to graphic symbols.
- Light and color: diffuse light, luminous midtones, subtle warm skin, and richer dark accents without crushed shadows. Use a restrained, coordinated palette with controlled accent colors, adapted to the source. Keep detail focused and finish refined; avoid sparse two-tone cel coloring, rough brush texture, watercolor splashes, photographic skin, and CGI or sculpted game-character rendering.

## Default Style References

For image requests using the default style, inspect and attach [the warm illustration reference](references/style-warm.png) and [the cool illustration reference](references/style-cool.png) as style-only inputs when the tool supports images. These are visual guides to the drawing and coloring above. Their characters, clothes, logos, words, panels, and turnarounds are not output requirements. Source or edit-target images determine the character design. A user's explicit style request or supplied positive style references take precedence over these defaults. If reference inputs are unsupported, use the written art direction and disclose that the visual guides were not passed to the generator.

## Composition and Background

- Exactly one standalone vertical full-body illustration, with the entire head and both feet visible. No text anywhere in the image, including brand names, titles, labels, or captions. No insets, comparisons, collages, or design sheets unless explicitly requested.
- Default to quiet ivory, off-white, or pale neutral gray with ample negative space, a subtle tonal wash, and a soft contact shadow beneath the feet. Keep any environmental suggestion faint and secondary to the character. Avoid decorative circles, halos, large background emblems, and hard oval floor disks by default; carry source motifs in the character design instead.

## Generate and Deliver

- For image requests, make one image-generation or edit call and request exactly one output, using the count parameter when available. Attach the relevant source or edit target and any supplied style references, identifying each image's role in the prompt. Explain unavailable tools or essential references.
- Build an English image prompt from the source, character design, art direction, background, and composition, not from this skill's text or capability list. Lead with polished 2D anime illustration, fine integrated linework, delicate dimensional shading, and detailed painted materials. Describe observable features instead of accumulating style labels or contradictory prohibitions. Soft volume and material sheen are compatible with this illustration style; avoid recasting them as photographic or CGI rendering. When using a multi-panel style reference, explicitly request one full-body character in one uninterrupted composition. Omit all image text unless the user explicitly requests lettering; then preserve it exactly.
- When asked to infer a prompt from references, describe their visible facial treatment, linework, shading, hair, materials, and color relationships. Separate these from subject identity, clothing design, and page layout. Present the result as an inferred description, not a recovered original prompt, and provide the usable prompt without generating an image unless requested.
- When viewable, compare the output to the positive style references, checking facial stylization and subtle volume, integrated drawn edges, hair structure, material separation, source recognizability, full-body framing, background restraint, anatomy, and consistency. Both a sculpted 3D-looking face and overly flat, simplified coloring are style mismatches. Report issues without automatic retries, alternatives, or crops. Never extract a single figure from a poster or sheet unless cropping is explicitly requested.
- Deliver one final image; if the tool already displays it, do not attach a duplicate. Respond briefly in the user's language. For text-only requests, return a concept or prompt without generating images.
