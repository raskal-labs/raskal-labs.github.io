# Porygon 3D Viewer — project-local contract

**Authority:** technical and delivery invariants for `porygon2/` and its V2 preview.
**Atlas parent policy:** `raskal-labs/atlas` [PRINCIPLES.md](https://github.com/raskal-labs/atlas/blob/main/PRINCIPLES.md), [STANDARDS.md](https://github.com/raskal-labs/atlas/blob/main/STANDARDS.md) and [CONTRACT.md](https://github.com/raskal-labs/atlas/blob/main/CONTRACT.md). This contract **specializes**, not copies or supersedes, those rules.
**Current shared state:** [PROJECT.yaml](./PROJECT.yaml); **canonical work/acceptance:** [WORK.yaml](./WORK.yaml). Proposed design details: [V2_PLAN.md](./V2_PLAN.md). Decisions: [DECISIONS.md](./DECISIONS.md).

## 1. Product boundary

The app is a **general-purpose touch-first 3D model viewer, inspector, visual comparison tool and rendering studio**, with optional small non-destructive object edits. It is **not** a mesh sculptor, retopology tool, full CAD environment, rig authoring suite or Blender substitute. Artwork and domain collections (Porygon2, Chief, Rotom, Scout) are optional content, not renderer special cases.

V1 remains operational at `/porygon2/` while V2 is developed independently at a separate preview route. **No production route replacement, public deployment change or destructive asset migration without explicit acceptance.** GitHub Pages serves other files; protect the whole site.

## 2. Source and derived-state boundaries

- Original imported **AssetRecord** preserves source data, scene graph, original materials/textures, hierarchy, animation/skinning information and import diagnostics.
- **Document** owns references to model instances, non-destructive transforms and material overrides, comparison/reference alignment, selection annotations and project history.
- **ViewportState** owns camera target, orientation, lens/framing and comparison view layout. User input controls do not own camera truth.
- **RenderSettings** owns material presentation, artistic look, colour reduction, output palette, outlines, resolutions and effects. The model's native materials are not changed by choosing a Look.
- **Session/UI state** is transient unless explicitly saved as part of a portable project; browser local cache is not the durable canonical project.
- **Screenshot, preset preview and flattened image** are outputs, not source geometry or proof that the scene itself changed.

Design for one importer and resource lifecycle used by normal and comparison views. Avoid duplicated scene loading. Use renderer-level effects independent of material semantics.

## 3. Format and rendering contracts

**M1 goal:** GLB/glTF including `KHR_draco_mesh_compression`, OBJ/MTL with texture sidecars, plain OBJ; optional STL is not a mandatory acceptance gate. Preserve supported PBR textures, colour spaces, source geometry, normals, animation clips, skeletons and morph targets; disclose unsupported extensions and failed sidecars rather than silently displaying emptiness.

The default appearance for arbitrary models is **Original source materials, no palette reduction**. V1's distinctive simplified Porygon2 style remains available as a *named preset*. Rendering modes Flat, Cel, Pixel and other looks cannot require specific colours, mesh names, a hardcoded four-entry shader palette, or a Porygon-only part index. Preserve explicit alpha handling and colour fidelity.

Rendering pipeline: source asset → material/look interpretation → optional palette/quantization → post effects → screen/export. Asset import must be testable without artistic rendering.

## 4. Interaction contract

- On iPhone, the canvas is primary and may hide almost all controls.
- Default navigation: drag orbit; pinch zoom; two-finger pan; explicit fit/reframe and orientation views. Selection must not silently isolate geometry.
- Contextual controls follow the selected mesh/material/bone/reference rather than occupying a persistent global toolbar.
- Different phone/tablet layouts present the *same commands/state* via sheets, popovers or side inspectors.
- Optional precision/retro controls preserve useful circle-pad and roller concepts, but are not required for standard operation.
- Camera, model transforms, reference alignment and rendering effects must remain independently undoable/configurable where appropriate.
- Prototype multiple UX arrangements before adopting a full GUI; the current UX references are **hypotheses**, not an accepted final design.

## 5. Comparison and editing contract

Comparison supports at least synchronized side-by-side viewing, explicit model orientation and alignment, and clearly labelled scale modes. **Actual scale, separately fitted scale and normalized scale must not be conflated.** Reference-image overlays require controllable opacity, position and rotation. Do not auto-normalize away proportion differences.

Editing scope remains object-level move/rotate/scale and selected material overrides, with undo/redo, independent of source asset bytes. Editing *bones* or imported skinned meshes requires specific semantics and tests, not a generic transform assumption. More invasive operations need a new decision and acceptance.

## 6. Security, provenance and licensing

- `233.glb`, user-supplied reference screenshots, extracted Pokémon game geometry/textures and unknown-rights derivatives are **private/manual test material**. They are not redistributable through this public GitHub Pages repository without confirmed rights.
- Include upstream notices/verified licenses for any fixture committed or downloaded. Public Khronos samples have **per-model** licenses.
- Local file imports remain local by default; do not upload them to a backend or analytics endpoint. No accounts, web-hosted model library or service is required.
- No floating CDN dependency URLs in the V2 production build; pin dependencies/decoder assets and disclose unexpected network fetches.
- Avoid storing secrets, private local paths or identifiable details in public screenshots, logs, and test artifacts.

## 7. Verification and release contract

A milestone becomes `Verified` only when its **specific acceptance** is supported by inspectable evidence. Git commits, issue checkboxes, schemas, Playwright emulation and screenshot artifacts prove narrower facts than live iPhone use.

Before switching the production route:

1. M0/M1 assets import with actual geometry/material fidelity and explicit failure states.
2. Legacy Porygon2 and Chief remain visually comparable under recorded fixed camera settings.
3. Chromium and WebKit smoke/visual tests run; **real iPhone Safari** import, gesture, panel and constrained-memory testing is documented.
4. Preview does not affect other GitHub Pages paths; rollback to V1 is demonstrated.
5. Project/preset export and any implemented edits have verified round-trip behavior; no claim of universal lossless GLB export.
6. Reviewer explicitly accepts the UI pattern and cutover. V1 remains separately accessible afterwards.

Verification evidence belongs in [PROGRESS.md](./PROGRESS.md), test artifacts/PR links and acceptance notes—not derived from conversation confidence.

## 8. Scope control and change protocol

Change accepted contracts via an explicit dated decision in [DECISIONS.md](./DECISIONS.md), with rationale, supersession and affected work IDs. Update [PROJECT.yaml](./PROJECT.yaml) for meaningful current-state changes and [WORK.yaml](./WORK.yaml) for milestone/task acceptance. Avoid maintaining multiple active status lists.

Progress tracking does **not** authorize production deployments, asset deletion, or private-model publication. A PR may supply implementation evidence; merging or publishing remains a separate authorized step.
