# Anastasia Website

Next.js website with:

- App Router
- Dockerized app container
- Nginx reverse proxy
- local hot-reload dev mode
- local production-like preview mode
- production deployment with Docker Compose
- HTTPS bootstrap with Certbot

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
docker compose --env-file .env.dev --profile dev up
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
docker compose --env-file .env.dev --profile runtime up -d --build
```

Open:

- `http://localhost:8086`

Stop it:

```bash
docker compose --env-file .env.dev --profile runtime down
```

Rebuild preview:

```bash
docker compose --env-file .env.dev --profile runtime down
docker compose --env-file .env.dev --profile runtime up -d --build
```

## Production deploy

From the project directory on the server:

```bash
git pull
docker compose --env-file .env.prod --profile runtime up -d --build
```

Stop production:

```bash
docker compose --env-file .env.prod --profile runtime down
```

## Production HTTPS setup

Initial bootstrap uses the HTTP-only production config first.

Start bootstrap:

```bash
docker compose --env-file .env.prod --profile runtime up -d --build
```

Request the certificate:

```bash
docker compose --env-file .env.prod --profile certbot run --rm certbot certonly \
  --webroot \
  -w /var/www/certbot \
  -d your-domain.com \
  -d www.your-domain.com \
  --email your-email@example.com \
  --agree-tos \
  --no-eff-email
```

Switch to the final HTTPS config:

```bash
sed -i 's/NGINX_CONF=prod-bootstrap.conf/NGINX_CONF=prod.conf/' .env.prod
```

Rebuild production:

```bash
docker compose --env-file .env.prod --profile runtime up -d --build
```

## Certificate renewal

Renew:

```bash
docker compose --env-file .env.prod --profile certbot run --rm certbot renew
```

Restart Nginx after renewal:

```bash
docker compose --env-file .env.prod --profile runtime restart nginx
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
- HTTPS config selection

## Notes

- use `docker compose`
- do not use `docker-compose`
- local hot reload runs on port `3001`
- local preview runs on port `8086`
- production serves on ports `80` and `443`
- `certbot` runs only when explicitly invoked with `--profile certbot`
