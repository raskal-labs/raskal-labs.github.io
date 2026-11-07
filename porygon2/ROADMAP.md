# Porygon 3D Viewer — roadmap reading guide

**Canonical phases and current acceptance:** [WORK.yaml](./WORK.yaml) (IDs `m0`–`m5`). This guide explains **sequence and dependencies**, not another editable source of milestone status. Shared state/checkpoint: [PROJECT.yaml](./PROJECT.yaml); design details: [V2_PLAN.md](./V2_PLAN.md).

## Outcomes and sequence

```text
M0  Preserve and measure V1, isolate V2 route
 │
 ├────────── Mobile UX A/B/C prototypes (parallel, feeds M3 decision)
 │
 ▼
M1  Source-faithful OBJ/GLB/Draco viewer with touch and error states
 │
 ▼
M2  Reusable artistic looks and non-destructive output palette
 │
 ▼
M3  Accepted canvas-first mobile interface and optional retro controls
 │
 ▼
M4  Selection, hierarchy, synchronized comparison, reference alignment
 │
 ▼
M5  Minimal reversible object edits and durable project exports
```

This is the **intended ordering**; small UX and design experiments may run in parallel with M0/M1. Do not mark an entire stage complete merely because some tasks or documentation were committed.

### Release checkpoints

- **Safe preview:** M0 source and deployment gates are met, independent V2 route available, V1 unchanged.
- **Useful viewer:** M1 input/material compatibility, M2 key looks and M3 acceptable touch-first navigation are verified.
- **Anatomical workspace:** M4 comparison and reference alignment demonstrate meaningful improvement over V1.
- **Light editor:** M5 proves reversible transforms and portable project round trips.
- **Production cutover:** explicit approval, actual iPhone Safari acceptance and V1 rollback evidence under [CONTRACT.md](./CONTRACT.md).

## Boundaries and dependencies

- V1 screenshots and user-provided images are *reference material* until captured/selected as properly licensed, reproducible fixtures.
- The private Draco `233.glb` must be supplied to an authorized local test environment; do not publish it in Git.
- GitHub Pages deployment mechanism must be inspected before introducing a bundler that could replace unrelated site files.
- Central Atlas viewer enrollment is a follow-up to the local binding and must not be inferred from adding `.atlas/project.yaml`.
- Viewer model import, appearance, UI and comparison are required; full geometry modelling is not a dependency.

For actionable tasks, IDs, statuses and acceptance criteria, use [WORK.yaml](./WORK.yaml) or the corresponding [Codex issue #7](https://github.com/raskal-labs/raskal-labs.github.io/issues/7). The issue is a coordination entrypoint, not another authoritative task-status store.
