# Porygon 3D Viewer — architecture and source inventory

**Status:** V1 code observed; V2 interfaces **proposed**, not implemented. Detailed implementation sequencing lives in [V2_PLAN.md](./V2_PLAN.md); [CONTRACT.md](./CONTRACT.md) owns binding invariants.

## Source scope

Repository: `raskal-labs/raskal-labs.github.io`. This is a **multi-purpose static site**. The viewer owns `porygon2/`; other site content is outside this project's authority.

| Existing source | Current role | V2 migration boundary |
|---|---|---|
| `index.html` | V1 canvas, shaders, controls, OBJ loading, camera presets | Retain as V1; extract algorithms and deterministic baselines, not its DOM or global state. |
| `render-lab.js` | Render experiments, presets, part inspector and compare path | Extract effects and tests, not its duplicated model loader or four-colour assumptions. |
| `Porygon2.obj`, `Porygon2-upright.obj`, `Porygon2.mtl` | Original simplified model variants and materials | Preserve exact originals; test under named legacy preset. |
| `edit_model.py` | Earlier upright/bill transformation source | Retain; geometry refinement is independent work. |
| `chief/` | Chief OBJ/MTL and textures | Preserve; import/material fidelity regression. |
| `tests/viewer-smoke.mjs` | Playwright browser smoke and screenshots | Preserve and broaden; actual Safari remains separate. |
| `tools/fetch-v2-fixtures.sh` | Pinned public sample acquisition script | Script exists; execution/checksums and license verification still pending. |
| `v2/` | V2 preview scaffolding/fixture exclusion only | Runtime not yet implemented. |

## V2 logical boundaries (proposed)

```text
Local file(s) or bundled asset
     │
     ▼
Import/asset service → immutable AssetRecord + diagnostics
     │                            │
     ▼                            │
Project Document ← scene instances and overrides
     │
     ├── ViewportController → orbit/pan/zoom/roll/framing
     │        ↑
     │     Touch, precision controller, keyboard
     │
     ├── Renderer → original materials | alternate looks → palette → effects
     │
     ├── Inspector → object/mesh/material/bone selection
     │
     ├── Compare → multiple viewports sharing asset/cache service
     │
     └── Persistence → portable project / settings / images
```

**Contracts between modules** are semantic: `AssetRecord`, `Document`, `ViewportState`, `RenderSettings`, `Session` (see V2_PLAN). Do not pre-create classes, packages or an event bus without a consumer. Retain Three.js and its official add-ons at one pinned revision.

### Rendering

Import retains original materials. Renderer modes are non-destructive presentation; optional pixelation/quantization/shaders operate after source interpretation. No 4-colour restriction on GLB models; reusable palette presets may still offer exact four-colour output. `233.glb` is a **manual private fixture**, not part of the site's shipped model library.

### Input and adaptive UI

One camera authority; interactions modify camera state rather than individual competing DOM handlers. Canvas-first default, bottom-sheet actions on iPhone, optional precision/retro controls, panel layout responsive rather than independent user-state models. Selection is distinct from isolation.

### Comparison

Multiple model instances share one importer/cache and explicit alignment/scale semantics. Camera lock is a user choice; reference images are positioned/registered intentionally. Geometry difference/overlay experiments must not silently alter model scale or materials.

### Persistence

Export user projects as versioned documents with asset references plus non-destructive edits; IndexedDB is a convenience cache, not the only durable copy. Screenshot/PNG export is distinct from geometry export and project export. Source assets must not be modified through display presets.

## Constraints and verification

- GitHub Pages static hosting, iOS Safari touch input and browser GPU/memory are real constraints; a native backend is not part of M0–M5.
- V1 smoke currently covers Chromium and Linux WebKit. These are not real-device iPhone measurements. New tests must explicitly cover import and visual fidelity, gesture interactions, resource cleanup and model switching.
- The V2 GUI design is **unselected**; three prototype paths are tracked separately in WORK.yaml. Avoid building full GUI until reviewed.
- GitHub Actions artifacts on 2026-11-04 preserve some historic V1 mobile/desktop captures; user-sent screenshots are not available as tracked public test assets.
- Do not infer runtime verification from a generated document, source commit, tests not run or a PR description.
