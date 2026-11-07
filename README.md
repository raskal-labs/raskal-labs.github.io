# raskal-labs.github.io

## Porygon 3D Viewer

The Porygon2/Chief viewer, its V2 hybrid rebuild, and its **Atlas-governed source documentation** live in [porygon2/](./porygon2/).

- [Project continuity](./porygon2/PROJECT.yaml) and [canonical work register](./porygon2/WORK.yaml)
- [Technical contract](./porygon2/CONTRACT.md), [roadmap](./porygon2/ROADMAP.md), [tasks](./porygon2/TASKS.md), [decisions](./porygon2/DECISIONS.md), and [progress history](./porygon2/PROGRESS.md)
- [Architecture](./porygon2/ARCHITECTURE.md), [Codex instructions](./porygon2/AGENTS.md) and [implementation issue #7](https://github.com/raskal-labs/raskal-labs.github.io/issues/7)
- Atlas v2 source binding: [`.atlas/project.yaml`](./.atlas/project.yaml), scoped explicitly to the viewer.

V1 remains at `/porygon2/`. V2 is **planned but not implemented**. The local Atlas binding is not proof of enrollment in the central Atlas dashboard.

### Documentation validation

```bash
python3 -m pip install PyYAML jsonschema
python3 porygon2/tools/validate-atlas-docs.py
# If the private Atlas source checkout is available, additionally validate official schemas:
python3 porygon2/tools/validate-atlas-docs.py --atlas-root /lab/atlas/repo
```

The script is read-only, checks authority paths, references, IDs, parent links and required fields; the second command also uses Atlas's authoritative JSON Schemas. A local structural pass is **not** a substitute for semantic review or runtime acceptance.
