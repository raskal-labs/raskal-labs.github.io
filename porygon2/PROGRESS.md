# Porygon 3D Viewer — evidence history and continuity

**Role:** dated, source-linked **observations and actual work**, not a second project-status authority.
**Current state/checkpoint:** [PROJECT.yaml](./PROJECT.yaml).
**Canonical milestones/tasks/threads:** [WORK.yaml](./WORK.yaml).
**Decision interpretation:** [DECISIONS.md](./DECISIONS.md).
**Last recorded:** 2026-11-07. Repository changes listed here are scoped to GitHub main; local GameCube/Atlas checkout and deployed Safari have **not** been independently inspected in this documentation pass.

## Project Continuity Snapshot (derived reading view)

### Recent Work

- **Verified (source inspection):** V1 implementation in `index.html` and `render-lab.js` has the simplified Porygon2/Chief viewer, hardcoded four-colour/material semantics, touch/camera controls and comparison. See [ARCHITECTURE.md](./ARCHITECTURE.md). This does **not** re-verify the live website on an iPhone.
- **Verified (historical CI records):** Two November 4, 2026 GitHub Actions screenshot runs include desktop/mobile views; the latest has WebKit. See [runs 41888284311](https://github.com/raskal-labs/raskal-labs.github.io/actions/runs/41888284311) and [41887824513](https://github.com/raskal-labs/raskal-labs.github.io/actions/runs/41887824513).
- **Verified (repository commits):** V2 implementation plan, resource catalog, UX research, Codex-scoped instructions and pinned fixture-fetch script were committed on main. See `V2_*.md`, `AGENTS.md` and `tools/fetch-v2-fixtures.sh`.
- **Verified (repository documents only):** The Atlas v2 project binding, `PROJECT.yaml`, `WORK.yaml`, contract, decisions, architecture, roadmap/task reading views and this progress history were added. The central Atlas projection has **not** been updated by this action.
- **Not verified:** fixture downloader execution, successful `233.glb` rendering, live mobile touch/UX QA, V2 runtime, production cutover, and match-pose V1 screenshots.

### Recent Thinking

- **Accepted:** Hybrid rebuild with reuse, original-material fidelity, optional legacy pixel style, V1 preservation and narrow editing scope (DECISIONS.md).
- **Proposed:** A/B/C iPhone GUI prototypes: canvas-first, adaptive inspector, and customizable modular controller; compare identical workflows and select elements based on actual use.
- **Open:** central Atlas child identity mapping, exact Pages deployment behavior, and availability of private reference fixtures for testing.

### Next Steps

Authoritative checkpoint is in PROJECT.yaml. Immediate work references: `m0-baselines`, `pages-publication`, `ui-prototype-a/b/c`, `m1-loader-spike` in WORK.yaml. **No status advancement implied by listing next actions.**

## Dated evidence timeline

### 2026-11-02 — Earlier mobile viewer images

Two user-supplied Chief viewer screenshots were later retrieved from the ChatGPT Library, documenting early circular yaw/pitch camera controls. These are **chat/private visual references**, not public repository fixtures. Retrieval does not establish current viewer behavior.

### 2026-11-04 — Render Lab CI screenshot artifacts

GitHub Actions completed screenshot-producing browser runs:
- [41887824513](https://github.com/raskal-labs/raskal-labs.github.io/actions/runs/41887824513) — desktop effects, desktop comparison, mobile panel, mobile comparison.
- [41888284311](https://github.com/raskal-labs/raskal-labs.github.io/actions/runs/41888284311) — adds mobile WebKit comparison.

These are historical browser-rendered artifacts, **not** a fixed-camera multi-view V2 regression baseline or on-device Safari evidence.

### 2026-11-05–07 — Viewer and reference discussion

Multiple reference-angle images, user screenshots and the Draco-compressed `233.glb` were discussed. The user explicitly preferred preserving the simplified Porygon2 aesthetic rather than replacing it with an elaborate sculpt. A small anatomy-refinement pass is separate from general-purpose viewer architecture. Ten user-supplied viewer screenshots (eight recent and two recovered) were visually reviewed in the conversation; **the public GitHub repository does not contain their bytes**.

### 2026-11-07 — Hybrid V2 project plan and Codex entry

Accepted architecture and GUI rebuild with component reuse. Written artifacts committed:
- `V2_PLAN.md`, `V2_RESOURCES.md`, `V2_UX_REFERENCES.md`
- `AGENTS.md` and `tools/fetch-v2-fixtures.sh`
- [Codex issue #7](https://github.com/raskal-labs/raskal-labs.github.io/issues/7)

No V2 model loader/renderer or redesigned UI was implemented by these documentation changes. The downloader script was authored but not executed.

### 2026-11-07 — Formal Atlas project-local documentation

Created the Atlas v2 source binding and local structured source state, work queue, technical contract, decisions, architecture, and continuity documentation. This establishes **source-document authority** for the viewer in the website repository. It does not automatically make a new entity in the central Atlas baseline, update a GameCube checkout, publish the dashboard or prove deployment.

### 2026-11-07 — Static source-document verification and Codex handoff

A repository read-back/static reference check found **22 unique work IDs** (six milestones, thirteen tasks, three threads), resolvable parent IDs, expected shared-state fields, and no missing local binding or evidence paths. This proves the checked *structure and references only*; the validator script `tools/validate-atlas-docs.py` and official Atlas JSON Schemas have **not been executed** in this environment. A comment on [Issue #7](https://github.com/raskal-labs/raskal-labs.github.io/issues/7) now links the source authorities and Codex's first tasks. No V2 runtime tests or GitHub Pages deployments were performed.

## Evidence protocol for future updates

For each meaningful work unit, append a brief dated entry identifying: observed source/commit or PR; work actually performed; verification performed with exact results and environment; remaining gaps; and affected canonical WORK.yaml IDs. If a source/status changes, reconcile PROJECT.yaml and WORK.yaml before closing the unit. Mark source-unavailable/manual tests as **not verified**, and record supersession in DECISIONS.md when needed.

Keep the three short snapshot perspectives derived from underlying records; do not turn them into three independent logs.
