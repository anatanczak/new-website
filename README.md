# Anastasia Website

Next.js website with:

- App Router
- Dockerized app container
- Nginx reverse proxy
- local hot-reload dev mode
- local production-like preview mode
- production deployment with Docker Compose

## Routes

- `/`
- `/biography`
- `/apps`
- `/apps/[slug]`
- `/portfolio`

Examples:

- `/apps/app1`
- `/apps/app2`

## Local development

Fast local development with hot reload:

```bash
docker compose --env-file .env.dev up dev
```

Open:

- `http://localhost:3001`

Stop it:

```bash
docker compose --env-file .env.dev --profile dev down
```

## Local preview

Production-like local preview through Nginx:

```bash
docker compose --env-file .env.dev up -d --build
```

Open:

- `http://localhost:8086`

Stop it:

```bash
docker compose --env-file .env.dev down
```

Rebuild preview:

```bash
docker compose --env-file .env.dev down
docker compose --env-file .env.dev up -d --build
```

## Production deploy

Releases are automated with [release-please](https://github.com/googleapis/release-please):

1. Commit with [Conventional Commits](https://www.conventionalcommits.org):
   `fix: …` (patch), `feat: …` (minor), `feat!: …` (major).
2. On every push to `main`, release-please opens or updates a release PR with the
   version bump and `CHANGELOG.md`.
3. Merging the release PR:
   - creates the tag and GitHub Release, e.g. `v0.2.0`
   - builds the image `ghcr.io/anatanczak/new-website:v0.2.0`
   - deploys it to the VPS over SSH
   - checks that `https://anastasiatanczak.com` responds

Pull requests run `.github/workflows/ci.yml`, which builds the production image
and checks that the pages and public assets return `200`.

### Server layout

- `/srv/proxy`: shared Caddy proxy from `deploy/proxy`. It owns ports `80`/`443`,
  handles HTTPS certificates and routes each domain to its app.
- `/srv/apps/anastasia-website`: checkout of this repository, switched to the
  release tag on each deploy.
- `/usr/local/bin/deploy-compose-app`: deploy script from `deploy/bin`, the only
  command the GitHub Actions SSH key may run.

### Rollback

On the server, as the `deploy` user:

```bash
deploy-compose-app anastasia-website v0.2.0
```

### Manual commands

From `/srv/apps/anastasia-website` on the server:

```bash
APP_VERSION=v0.2.0 docker compose -f docker-compose.yml -f docker-compose.prod.yml --env-file .env.prod up -d
APP_VERSION=v0.2.0 docker compose -f docker-compose.yml -f docker-compose.prod.yml --env-file .env.prod down
```

## Environment files

### `.env.dev`

Used for:

- hot reload dev mode
- local Nginx preview
- local ports

### `.env.prod`

Used for:

- server deployment
- domain routing

## Notes

- use `docker compose`
- do not use `docker-compose`
- local hot reload runs on port `3001`
- run `docker compose --env-file .env.dev up dev` while editing styles or pages to see local changes directly
- local preview runs on port `8086`
- production is served over HTTPS by the shared Caddy proxy; the app's Nginx publishes no port in production
