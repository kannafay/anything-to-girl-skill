---
name: anything-to-girl-skill
description: Create or revise an original female personification of an object, animal, place, logo, or concept from text or images, defaulting to detailed hand-drawn anime illustration. Use for character illustrations or reusable prompts.
---

# Anything to Girl

Turn the user's source into one recognizable original female character. The skill's name and instructions are not part of the image. Explicit user requirements override the defaults below.

## Design

- Use the current source and visible reference features. Fill creative gaps yourself, distinguishing inventions from source facts; ask only when essential input is missing or ambiguous.
- Translate defining shapes, colors, materials, and functions into hair, clothing, accessories, and temperament. Use clear metaphors for abstract concepts. Make the source recognizable through the character's design, beyond logos or a held prop.
- Give each new source a distinct silhouette and personality. Combine sources only when requested. For revisions, change the requested elements while preserving other identity and source traits.
- Distinguish source or identity references, positive style references, and examples the user dislikes. Never use a rejected rendering as the desired style. From style-only images, borrow linework, shading, detail, and material treatment; do not import their character identity, outfit, logos, lettering, or layout. A multi-panel style reference does not change the requested single-character composition.

## Default Art Direction

- An adult woman in a detailed, hand-drawn anime illustration with visible fine colored linework and painterly 2D coloring. Keep an unmistakably illustrated face: expressive stylized eyes, carefully drawn lashes, a small simplified nose, and a delicate, minimally shaded mouth. Elegance and detail should not shift the face toward human photographic proportions or a sculpted game character.
- Build form with drawn contours, layered painted shadow shapes, and selective soft transitions. Keep some crisp illustrative edges instead of blending every surface into smooth volume. Paint skin with a few clean tones and subtle blush. Draw hair as flowing ribbon-like locks with fine strand accents and painted highlights, not individually rendered realistic fibers.
- Suggest materials through painted folds, linework, embroidery, and small graphic highlights on jewelry. Preserve the source palette with nuanced color variation; focus detail on the face, hair, and meaningful accessories. Avoid both sparse two-tone cel coloring and realistic surface simulation: no photographic skin texture, physically based materials, ray-traced sheen, CGI, 3D renders, or game-model presentation.

## Default Style References

For image requests using the default style, inspect and attach [the warm illustration reference](references/style-warm.png) and [the cool illustration reference](references/style-cool.png) as style-only inputs when the tool supports images. These are visual guides to the drawing and coloring above. Their characters, clothes, logos, words, panels, and turnarounds are not output requirements. Source or edit-target images determine the character design. A user's explicit style request or supplied positive style references take precedence over these defaults. If reference inputs are unsupported, use the written art direction and disclose that the visual guides were not passed to the generator.

## Composition and Background

- Exactly one standalone vertical full-body illustration, with the entire head and both feet visible. No text anywhere in the image, including brand names, titles, labels, or captions. No insets, comparisons, collages, or design sheets unless explicitly requested.
- Default to quiet ivory, off-white, or pale neutral gray with ample negative space, a subtle tonal wash, and a soft contact shadow beneath the feet. Keep any environmental suggestion faint and secondary to the character. Avoid decorative circles, halos, large background emblems, and hard oval floor disks by default; carry source motifs in the character design instead.

## Generate and Deliver

- For image requests, make one image-generation or edit call and request exactly one output, using the count parameter when available. Attach the relevant source or edit target and any supplied style references, identifying each image's role in the prompt. Explain unavailable tools or essential references.
- Build an English image prompt from the source, character design, art direction, background, and composition, not from this skill's text or capability list. Lead with the positive medium: detailed hand-drawn anime illustration. Preserve that medium when the user asks for more polish or detail; do not reinterpret refinement as realism. Describe concrete drawing qualities rather than relying on generic quality tags. When using a multi-panel style reference, explicitly request one full-body character in one uninterrupted composition. Omit all image text unless the user explicitly requests lettering; then preserve it exactly.
- When viewable, compare the output to the positive style references, checking illustrated facial proportions, visible drawn edges, painted hair and materials, source recognizability, full-body framing, background restraint, anatomy, and consistency. Treat a realistic or 3D-looking face as a style mismatch even if the rendering is detailed. Report issues without automatic retries, alternatives, or crops. Never extract a single figure from a poster or sheet unless cropping is explicitly requested.
- Deliver one final image; if the tool already displays it, do not attach a duplicate. Respond briefly in the user's language. For text-only requests, return a concept or prompt without generating images.
