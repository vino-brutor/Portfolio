# Design QA — Skills Coverflow Carousel

## Evidence

- Source visual truth: `reference-coverflow.png` (21st.dev Coverflow Carousel capture).
- Desktop implementation: `skills-carousel-desktop.png`.
- Mobile implementation: `skills-carousel-mobile.png`.
- Combined comparison input: `skills-carousel-comparison.png`.
- Source pixels: 1280 × 720.
- Desktop implementation pixels: 1429 × 893; CSS viewport requested at 1440 × 900, device density 1.
- Mobile implementation pixels: 379 × 820; CSS viewport requested at 390 × 844, device density 1.
- Comparison normalization: the source and desktop implementation were placed in equal 606 × 470 frames. The implementation intentionally adapts the reference from image covers to skill-icon cards and uses a shorter vertical footprint.
- State: dark theme, Portuguese, carousel active with the centered item selected.

## Findings

No actionable P0, P1, or P2 differences remain.

- Fonts and typography: the portfolio keeps its existing system typeface and uppercase hierarchy. The centered skill/category caption matches the reference's label-below-card pattern without introducing a conflicting font.
- Spacing and layout rhythm: the center card, receding side cards, caption, and controls form a compact section. Desktop and 390 px layouts keep the centered item readable and the neighboring items partially visible as navigation cues.
- Colors and visual tokens: the implementation reuses the portfolio's dark background, gray borders, white text, and purple accent instead of copying the neutral reference palette. Contrast remains clear in the tested states.
- Image quality and asset fidelity: existing Devicon and project-provided SVG assets remain sharp, centered, and uncropped. No placeholder or code-drawn replacement assets were introduced.
- Copy and content: all 13 existing skills are preserved. Category labels and Previous/Next controls are localized in Portuguese and English.
- Interaction and accessibility: auto-advance, Previous/Next, card selection, and Left/Right keyboard navigation were exercised. Hover/focus pause and reduced-motion handling are implemented. The browser console reported no warnings or errors.

## Full-view Comparison Evidence

`skills-carousel-comparison.png` shows the complete reference component beside the complete portfolio section. Both use a square centered card, perspective-rotated neighbors, a centered caption, and a dark stage. The reduced height and skill-specific controls are intentional adaptations to the user's request for a smaller section, not fidelity defects.

## Focused Region Comparison

No separate crop was necessary because the coverflow rack, centered asset, caption, and controls are all legible in the combined component-level comparison. The mobile implementation was captured separately to inspect card truncation, section spacing, and control reachability.

## Comparison History

- Initial mobile pass found a P2 horizontal page overflow and the hash target sitting too close to the sticky navigation.
- Fix: horizontal document overflow was contained and the mobile skills section received a larger scroll margin.
- Post-fix evidence: `skills-carousel-mobile.png` shows the full heading, three-card coverflow, caption, and controls inside the 390 px layout with no horizontal overflow (`scrollWidth === clientWidth`).

## Implementation Checklist

- [x] Preserve all current skill icons and labels.
- [x] Auto-advance and pause for user interaction.
- [x] Support click, touch/swipe, buttons, and keyboard arrows.
- [x] Respect reduced-motion preferences.
- [x] Validate Portuguese/English labels through the shared language state.
- [x] Pass ESLint, production build, desktop/mobile visual checks, interaction checks, and console checks.

## Follow-up Polish

- P3: animation speed can be tuned after observing it in the full portfolio flow; the current interval is 2.2 seconds.

final result: passed
