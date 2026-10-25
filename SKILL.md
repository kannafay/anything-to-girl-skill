---
name: anything-to-girl-skill
description: Create or revise an original female personification of an object, animal, place, logo, or concept from text or images. Use for character illustrations or reusable prompts.
---

# Anything to Girl

Turn the user's source into one recognizable original female character. The skill's name and instructions are not part of the image. Explicit user requirements override the defaults below.

## Design

- Use the current source and visible reference features. Fill creative gaps yourself, distinguishing inventions from source facts; ask only when essential input is missing or ambiguous.
- Translate defining shapes, colors, materials, and functions into hair, clothing, accessories, and temperament. Use clear metaphors for abstract concepts. Make the source recognizable through the character's design, beyond logos or a held prop.
- Give each new source a distinct silhouette and personality. Combine sources only when requested. For revisions, change the requested elements while preserving other identity and source traits.
- Distinguish source or identity references from style-only references. From style-only images, borrow linework, shading, detail, and material treatment; do not import their character identity, outfit, logos, lettering, or layout. A multi-panel style reference does not change the requested single-character composition.

## Default Art Direction

- An adult woman in a refined, delicately painted 2D illustration, with restrained stylization, natural proportions, and softly modeled depth. Avoid flat anime cel shading, heavy outlines, exaggerated manga features, photorealism, and plastic 3D rendering.
- Use fine, subtle linework integrated with layered color and smooth light-to-shadow transitions. Give the face luminous skin, delicate blush, detailed irises and lashes, and softly defined lips. Build hair from flowing locks with fine individual strands and nuanced highlights, rather than broad solid blocks.
- Render materials distinctly: fabric weight, folds, seams, and appropriate weave or embroidery; restrained metallic glints and translucent details where the design calls for them. Keep the source's defining colors, with nuanced tonal variation and controlled saturation. Concentrate detail on the face, hair, and meaningful accessories without covering every surface in ornament.

## Composition and Background

- Exactly one standalone vertical full-body illustration, with the entire head and both feet visible. No text anywhere in the image, including brand names, titles, labels, or captions. No insets, comparisons, collages, or design sheets unless explicitly requested.
- Default to quiet ivory, off-white, or pale neutral gray with ample negative space, a subtle tonal wash, and a soft contact shadow beneath the feet. Keep any environmental suggestion faint and secondary to the character. Avoid decorative circles, halos, large background emblems, and hard oval floor disks by default; carry source motifs in the character design instead.

## Generate and Deliver

- For image requests, make one image-generation or edit call and request exactly one output, using the count parameter when available. Attach the relevant source or edit target and any supplied style references, identifying each image's role in the prompt. Explain unavailable tools or essential references.
- Build an English image prompt from the source, character design, art direction, background, and composition, not from this skill's text or capability list. Describe concrete rendering qualities rather than relying on generic quality tags. When using a multi-panel style reference, explicitly request one full-body character in one uninterrupted composition. Omit all image text unless the user explicitly requests lettering; then preserve it exactly.
- When viewable, inspect source recognizability, output type, full-body framing, fine detail, soft shading, material distinction, background restraint, anatomy, and consistency. Report issues without automatic retries, alternatives, or crops. Never extract a single figure from a poster or sheet unless cropping is explicitly requested.
- Deliver one final image; if the tool already displays it, do not attach a duplicate. Respond briefly in the user's language. For text-only requests, return a concept or prompt without generating images.
