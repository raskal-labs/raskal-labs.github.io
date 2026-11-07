# Codex instructions — scoped to `/porygon2/`

## Atlas governance and local authority

This project inherits the accepted policy of `raskal-labs/atlas` `PRINCIPLES.md`, `STANDARDS.md` and `CONTRACT.md`. Before meaningful work, read [PROJECT.yaml](./PROJECT.yaml), [WORK.yaml](./WORK.yaml), [CONTRACT.md](./CONTRACT.md), [DECISIONS.md](./DECISIONS.md), [ARCHITECTURE.md](./ARCHITECTURE.md), and [PROGRESS.md](./PROGRESS.md), then the implementation references [V2_PLAN.md](./V2_PLAN.md), [V2_RESOURCES.md](./V2_RESOURCES.md) and [V2_UX_REFERENCES.md](./V2_UX_REFERENCES.md).

The **sole Atlas shared-state authority** is `porygon2/PROJECT.yaml`; `porygon2/WORK.yaml` owns roadmap milestone/task/thread statuses and acceptance. `ROADMAP.md` and `TASKS.md` are reading guides, not parallel writable lists. Source technical invariants belong to `CONTRACT.md`; decisions and supersession to `DECISIONS.md`; actual evidence/history to `PROGRESS.md`. The v2 binding at repository root `.atlas/project.yaml` points to these files. Do not assume central Atlas enrollment has happened.

When work changes reality: record exact tests/evidence, update WORK/PROJECT as appropriate, append historical evidence and consequential decisions, and leave a resumable next checkpoint. The six Atlas values are `Mentioned`, `Proposed`, `In Progress`, `Verified`, `Blocked`, `Unknown`. A test failure or unperformed test cannot be recorded as verified. A source commit alone is not live acceptance. Never manufacture due dates or authoritative work from proposals.

## Implementation safety and existing project invariants

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

## Pull request closeout

Every implementation PR should name relevant WORK.yaml IDs, changed source authority, exact tests run and evidence, which environments remain untested, preview URL if any, and intended next checkpoint. Preserve V1 and avoid unauthorized production cutovers. For UX work, compare prototype layouts under identical tasks and real iPhone viewports before recording a final GUI decision.
