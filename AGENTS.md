# AGENTS.md

## Project Context

This repository contains `anastasia-website`, a small Next.js App Router website.

Use `package.json`, `package-lock.json`, `docker-compose.yml`, `Dockerfile`, `.env.dev`, `.env.prod`, and `README.md` as the source of truth when commands or configuration differ from this file.

## Key Paths

- `app/`: Next.js App Router pages and root layout.
- `app/layout.js`: shared HTML shell and navigation.
- `app/page.js`: home page.
- `app/biography/page.js`: biography page.
- `app/apps/page.js`: apps index page.
- `app/apps/[slug]/page.js`: app detail route.
- `app/portfolio/page.js`: portfolio page.
- `nginx/`: local and production Nginx config.
- `Dockerfile`: production image build.
- `docker-compose.yml`: local dev, local preview, and production compose services.

Generated or runtime folders such as `node_modules/`, `.next/`, and Docker volumes must not be edited manually.

## Project Rules

Before changing code:

1. Inspect the relevant files and nearby patterns.
2. Keep the diff minimal and localized.
3. Preserve the current framework, package versions, Docker setup, and route structure unless the user asks to change them.
4. Check whether the change affects pages, navigation, Docker, environment files, README, or dependencies.
5. Ask before major refactors, dependency changes, package version changes, Docker behavior changes, generated file changes, or destructive operations.

Do not introduce new dependencies unless explicitly approved.

## Frontend Style

- Follow the existing plain JavaScript App Router structure.
- Keep page-level changes inside the matching `app/**/page.js` file unless shared behavior is needed.
- Keep navigation changes in `app/layout.js`.
- Prefer simple, readable styles until a design system is introduced.
- Do not add a styling framework or component library without approval.

## Local Development

Use Docker Compose from the project directory.

Hot-reload development:

```bash
docker compose --env-file .env.dev up dev
```

Open:

```text
http://localhost:3001
```

Production-like local preview:

```bash
docker compose --env-file .env.dev up -d --build
```

Open:

```text
http://localhost:8086
```

Use `docker compose`, not `docker-compose`.

## Tests And Checks

The project currently defines only these npm scripts:

- `npm run dev`
- `npm run build`
- `npm run start`

There is currently no dedicated lint or test script. Do not invent missing checks. If validation is requested, use the closest existing command and report exactly what was run.

## Package And Docker Rules

Before changing these files, explain why:

- `package.json`
- `package-lock.json`
- `Dockerfile`
- `docker-compose.yml`
- `.env.dev`
- `.env.prod`
- `nginx/*.conf`

Keep package versions stable unless a dependency update is explicitly requested.

## README Policy

Update or propose README changes when modifying:

- local setup
- Docker behavior
- npm commands
- environment setup
- deployment workflow

Do not update README automatically unless the user requested documentation changes.

## Git And Destructive Operations

Never run without explicit confirmation:

```bash
git reset --hard
git clean -fd
git push --force
git rebase
git tag
npm update
```

Also ask before deleting files, removing routes, changing package versions, or rewriting history.

## Final Response Checklist

When completing code work, report:

- What changed.
- Files changed.
- Checks run and results, or that checks were not run.
- README impact.
- Remaining risk, if any.
