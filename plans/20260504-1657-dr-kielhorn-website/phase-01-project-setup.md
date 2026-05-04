# Phase 01 — Project Setup

## Overview
- **Priority:** Critical (must complete first)
- **Status:** Pending
- **Desc:** Scaffolding — package.json, Express server, .gitignore, GitHub Actions CI/CD

## Files to Create

### `package.json`
```json
{
  "name": "dr-kielhorn-website",
  "version": "1.0.0",
  "description": "Dr. Kielhorn Dental Practice Website",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "engines": { "node": ">=18.0.0" }
}
```

### `server.js`
- Express app serving `public/` as static root
- Port from `process.env.PORT || 3000`
- Single catch-all route serving `public/index.html` (SPA fallback)
- ~20 lines

### `.gitignore`
```
node_modules/
.env
*.log
.DS_Store
```

### `.github/workflows/deploy.yml`
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

## Implementation Steps
1. Create `package.json` with exact content above
2. Create `server.js` (Express static server)
3. Create `.gitignore`
4. Create `.github/workflows/deploy.yml`
5. Run `npm install` to generate `package-lock.json`

## Success Criteria
- `npm start` boots server at localhost:3000
- GitHub Actions workflow file is valid YAML
- `.gitignore` excludes `node_modules/`

## Notes
- GitHub Pages serves `public/` via `peaceiris/actions-gh-pages`
- Node.js server also usable for traditional hosting (Render, Railway, etc.)
- No build step needed — pure static frontend
