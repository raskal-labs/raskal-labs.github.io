# Codex instructions — scoped to `/porygon2/`

Read [V2_PLAN.md](./V2_PLAN.md) and [V2_RESOURCES.md](./V2_RESOURCES.md) before doing V2 work.

- V2 is a **hybrid rebuild** of a mobile-first *viewer / inspection / comparison / small non-destructive editor*, not a full 3D modelling app.
- Preserve V1 at `/porygon2/` until explicit sign-off. Implement V2 alongside it; do not delete/change original model geometry, Chief textures, `edit_model.py`, current styles, camera presets or existing tests to simplify implementation.
- Three.js stays. Reuse well-understood rendering algorithms, not V1's hardcoded `palette[4]` semantic body parts, OBJ-only import list, DOM wiring, or compare loader duplication.
- Primary GLB import must preserve PBR/texture/rig/animations as supplied, with Draco decoding. Default look is **Original** with no palette quantization.
- Work in small, testable milestone PRs. Document full commands and outcomes. Always distinguish automated browser emulation from real iPhone Safari verification.
- Strictly separate source asset, document/overrides, viewport state and rendering settings. Never mutate imported materials/geometry just to preview a different look.
- All user-uploaded Pokémon model references (notably `233.glb`) are **private fixtures**; don't commit them or derivatives to this public repo without explicit redistribution rights.
- Do not change GitHub Pages root deployment without verifying how the existing site is published and protecting V1; V2 preview uses a separate path.
- No model editing features beyond reversible object-level transforms until the viewer's import, camera, render and comparison gates pass.
- If a test can't be run, mark it **Not verified**, not Passed. Provide screenshot evidence and note known limitations in every PR.

For implementation, start with **M0 baseline, then M1 smallest GLB/Draco viewer spike** before porting effects or rewriting the whole interface.
