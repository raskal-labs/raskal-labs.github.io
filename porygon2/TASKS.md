# Porygon 3D Viewer — task entrypoint

**Canonical tasks and completion evidence:** [WORK.yaml](./WORK.yaml). Do **not** edit a second checklist in this file; this document gives a quick execution order and stable IDs, without duplicating statuses.

## First Codex PR — baseline and safe vertical slice

Start from [Issue #7](https://github.com/raskal-labs/raskal-labs.github.io/issues/7) and read [AGENTS.md](./AGENTS.md), [CONTRACT.md](./CONTRACT.md), [V2_PLAN.md](./V2_PLAN.md) and [V2_RESOURCES.md](./V2_RESOURCES.md). Work IDs:

- `m0-baselines` — reproducible fixed-camera screenshots and real browser test evidence.
- `pages-publication` — understand current deployment; build a safe isolated preview route.
- `fetch-fixtures` — run and inspect pinned, licensed public fixtures.
- `m1-loader-spike` — a small, faithful original-material GLB/Draco + OBJ touch viewer.

Codex should return a PR with tests, screenshots, explicit environment, unresolved limitations and V1 regression evidence. **Do not switch the production route.**

## Parallel UX design work

- `ui-prototype-a` — canvas-first minimal controls.
- `ui-prototype-b` — selection-aware adaptive inspector.
- `ui-prototype-c` — configurable precision/retro workspace.
- `ui-design-review` — compare each against the same user tasks and record the accepted interaction direction.

Prototypes are design investigations, not implementation acceptance. Use the source screenshots privately and do not publish them without appropriate rights.

## Follow-on work

- `m2-look-port` — model-independent looks/palette/shaders.
- `m4-compare` — reference alignment, precision selection, shared-loader compare.
- `m5-projects` — reversible transforms, history, portable projects.
- `atlas-projection` — separately reconcile central Atlas identity/enrollment.
- `v1-anatomy` — optional simplified-model refinement separate from viewer architecture.

## Task execution rules

Atlas's six-value `status` denotes supported state; task planning maturity and execution lifecycle are separate. Acceptance criteria, tests and manual verification must be reported independently. A committed file is not automatically a completed feature. Update canonical state once, and preserve meaningful decisions and evidence in DECISIONS.md and PROGRESS.md.
