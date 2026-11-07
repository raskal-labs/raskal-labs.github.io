# Porygon 3D Viewer — decisions and open choices

**Role:** accepted product/architecture choices and important supersession. Canonical current status and next checkpoint are in [PROJECT.yaml](./PROJECT.yaml); work acceptance and queue are in [WORK.yaml](./WORK.yaml).

## Accepted decisions

### 2026-11-07 — Hybrid V2 rebuild, not V1 refactoring in place

**Accepted:** Implement a fresh, model-independent application core and a substantially new GUI while **reusing** mature Three.js-based shader/effect algorithms, camera ideas, model assets and test techniques. Do not perform a wholesale from-zero rewrite or keep layering the existing global-state architecture.

**Rationale:** V1 couples Porygon-specific four-colour material classification, OBJ-only loading, rendering effects, duplicated comparison loading, camera controls and DOM state. A narrow refactor risks repeatedly touching the same assumptions.

**Consequence:** V1 and source OBJ/MTL/textures are preserved. Preview V2 in `/porygon2/v2/` until accepted. Track implementation in [WORK.yaml](./WORK.yaml) and [V2_PLAN.md](./V2_PLAN.md).

**Supersedes:** earlier implicit assumption that extending the original viewer in place is the cheapest route.

### 2026-11-07 — General-purpose materials and independent looks

**Accepted:** Original imported materials are the default and must survive switching looks. Preserve the simplified four-colour Porygon2 style as a **preset**, not a renderer constraint.

**Consequence:** V2 cannot require `palette[4]`, hardcoded red/blue/white/dark classification, mesh-name material mapping or Chief-specific hacks. Artistic output palette is optional and separate from source geometry/texture data.

### 2026-11-07 — iPhone-first viewer, not a full modelling suite

**Accepted:** Prioritize model importing/viewing, comparison, rendering, touch selection and lightweight reversible object transforms. Blender/Valence/Nomad remain appropriate for deep mesh editing.

**Consequence:** M0/M1 core may advance while UX prototypes are evaluated. Interface architecture is not fixed by this product decision.

### 2026-11-07 — Preserve V1 and private source assets

**Accepted:** Existing V1 URL and appearance must remain usable until V2 acceptance. User-supplied `233.glb` is a private manual fixture; public repo may contain only licensed fixtures and source assets already present.

**Consequence:** No unreviewed public upload of `233.glb`, game-extracted textures, user screenshots or generated derivatives. Browser and on-device tests must report exactly which material was available.

### 2026-11-07 — Atlas source records, no synthetic project progress

**Accepted:** Bind this model viewer's scoped documentation to Atlas v2 in the existing website repository. `PROJECT.yaml` is authoritative for shared current state; `WORK.yaml` owns milestone/task/thread status and acceptance; human documents are interpretation and history.

**Consequence:** No implication that the entire GitHub Pages repo belongs to the viewer, or that adding a binding automatically registers it in the central Atlas dashboard. Cross-project identity enrollment remains a separate reconciliation.

## Proposed / unresolved design choices (not accepted)

- **GUI selection:** Compare canvas-first, adaptive tools and customizable modular controls on the same iPhone use cases; then choose or combine based on tested evidence (`ui-design-review`).
- **Precision selection:** Experiment with an offset crosshair/magnifier for eyes and other small features (`tiny-selection`).
- **Build pipeline:** Evaluate Vite with static nested-path deployment and pinned Three.js before fixing implementation details (`pages-publication`).
- **Additional import codecs:** Meshopt/KTX2 beyond baseline Draco only if fixtures demonstrate need.
- **Porygon2 anatomical edits:** Separate geometry revision from V2 viewer foundation; preserve existing simplified original (`v1-anatomy`).
- **Central Atlas viewer identity:** Map `porygon-viewer` as a logical child of `atlas.porygon` only after reconciling authoritative cross-project identity/index (`atlas-projection`).

## Decision recording rule

Each consequential change should state date, accepted/proposed disposition, affected authority/work IDs, rationale, consequences and what it supersedes. Do not replace historical decisions silently or mark an unchosen GUI concept as adopted.
