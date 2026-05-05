# Deployment Guide

## Overview

The Dr. Kielhorn website is deployed to **GitHub Pages** via automated **GitHub Actions**. The site is a static SPA (single-page application) served from the `gh-pages` branch of the repository.

## Prerequisites

- GitHub account with repository access
- Repository with main branch containing code
- GitHub Actions enabled (default on public repos)

## Automatic Deployment (GitHub Actions)

### Workflow File
**Location:** `.github/workflows/deploy.yml`

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
      - name: Checkout
        uses: actions/checkout@v4

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
          publish_branch: gh-pages
          force_orphan: true
```

### Trigger
- **Event:** Push to `main` branch
- **What happens:** GitHub Actions automatically builds and deploys

### Deployment Process

1. **Developer pushes to main**
   ```bash
   git push origin main
   ```

2. **GitHub Actions triggered**
   - Checks out latest code
   - Runs peaceiris/actions-gh-pages@v4
   - Publishes `./public` directory to `gh-pages` branch

3. **GitHub Pages serves from gh-pages**
   - Files become live at https://username.github.io/repo-name/
   - Or custom domain if CNAME file is configured

### Deployment Status
Monitor in GitHub:
1. Go to repository → Actions tab
2. View latest workflow run
3. Green checkmark = successful deployment
4. Red X = failed (check logs for errors)

## Local Development

### Setup
```bash
# Install dependencies
npm install

# Run local server
npm start
```

Server runs on `http://localhost:3000` and serves from `./public` directory.

### Testing Before Deploy
```bash
# Ensure code builds locally
npm start

# Visit http://localhost:3000 in browser

# Test all sections scroll
# Test language switcher (EN/VI)
# Test mobile menu on small screen
# Test anchor links (#services, #team, etc.)

# Check browser console for JS errors
# Check network tab for missing images

# If satisfied, commit and push:
git add .
git commit -m "Update content or fix"
git push origin main
```

## Manual GitHub Pages Configuration

### In Repository Settings

1. **Navigate to Settings → Pages**
2. **Source:** Select `gh-pages` branch (auto-created by workflow)
3. **Custom Domain (Optional):**
   - Add CNAME file to `./public/CNAME` with domain name (e.g., `zahnarzt-kielhorn-winsen.de`)
   - Configure DNS records at domain registrar
   - GitHub Pages will auto-verify

### Build & Deployment

```
Branch: gh-pages
Root: / (unless custom subdirectory)
Custom Domain: Optional
HTTPS: Automatic (Let's Encrypt)
```

## Troubleshooting Deployment

### Issue: Workflow Failed

**Check logs:**
1. Go to Actions tab
2. Click failed workflow
3. Expand "Deploy to GitHub Pages" step
4. Read error message

**Common causes:**
- Syntax error in workflow YAML (check indentation)
- Missing permissions in settings
- GITHUB_TOKEN not available (ensure permissions: contents: write)

### Issue: Files Not Updating

**Problem:** Changes pushed but site still shows old content

**Solution:**
1. Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Check deployment status in Actions tab
3. Verify files were pushed to main (git log)
4. Wait 30–60 seconds for GitHub Pages cache to invalidate

### Issue: 404 on Custom Domain

**Problem:** Site returns 404 on custom domain but works on github.io URL

**Solution:**
1. Ensure CNAME file in ./public/CNAME has domain name only (no https://)
2. DNS A records point to GitHub Pages IP:
   ```
   A record: 185.199.108.153
   A record: 185.199.109.153
   A record: 185.199.110.153
   A record: 185.199.111.153
   ```
3. Or use CNAME record pointing to username.github.io
4. Wait up to 24 hours for DNS propagation

### Issue: Assets Not Loading

**Problem:** Images or CSS not loading (broken links)

**Solution:**
1. Check file paths in index.html
2. If on subdirectory (not root), update paths to relative or absolute from /
3. Ensure image files exist in ./public/assets/img/
4. Run `npm start` locally to test paths work

### Issue: Language Switcher Not Working

**Problem:** Changing language doesn't update text

**Solution:**
1. Open browser DevTools → Console
2. Check for JavaScript errors
3. Verify i18n.js is loaded (Network tab)
4. Clear localStorage: DevTools → Storage → localStorage → Clear
5. Refresh page
6. If still broken, check i18n.js TRANSLATIONS object for syntax errors

## Environment Variables

### Build-time
- **NODE_ENV:** Defaults to development in server.js
- No sensitive environment variables needed (static site)

### Runtime
- **PORT:** Process port (default 3000 for local dev)
- Example: `PORT=8000 npm start`

## Rollback

To revert to a previous version:

```bash
# Find previous commit
git log --oneline

# Checkout and re-push
git checkout <commit-hash>
git push origin main --force  # Use with caution!
```

**Warning:** Force pushing rewrites history. Only do this if absolutely necessary and no one else is pushing to main.

**Safer approach:** Revert with a new commit
```bash
git revert <commit-hash>
git push origin main
```

## Domain Configuration

### Option 1: GitHub Pages Default (Free)
Site available at: `https://username.github.io/dr-kielhorn/`

### Option 2: Custom Domain (Via CNAME)

**1. Update DNS at registrar (e.g., GoDaddy, Namecheap)**
```
CNAME record:
Name: www
Value: username.github.io
TTL: 3600 (or default)

A records (or alternatively):
@ → 185.199.108.153
@ → 185.199.109.153
@ → 185.199.110.153
@ → 185.199.111.153
```

**2. Create CNAME file**
```bash
echo "zahnarzt-kielhorn-winsen.de" > public/CNAME
git add public/CNAME
git commit -m "Add custom domain CNAME"
git push origin main
```

**3. GitHub Pages auto-verifies**
- Wait for GitHub Actions to deploy
- Go to Settings → Pages
- Confirm domain is verified
- GitHub auto-provisions HTTPS cert (may take 24 hours)

**4. Site live at**
```
https://zahnarzt-kielhorn-winsen.de
https://www.zahnarzt-kielhorn-winsen.de (if A records configured)
```

## Performance Optimization Post-Deploy

### Monitor Site Performance

1. **Google PageSpeed Insights**
   - Visit https://pagespeed.web.dev
   - Enter site URL
   - Review recommendations

2. **GitHub Pages Speed**
   - Static site served from CDN automatically
   - No additional optimization needed
   - Typical FCP: 1–2 seconds globally

### Image Optimization (Optional)

If images are slow, optimize locally before committing:
```bash
# Install imagemin CLI
npm install -g imagemin-cli

# Compress images
imagemin public/assets/img/*.{jpg,png} --out-dir=public/assets/img/
```

### Cache Invalidation

GitHub Pages has built-in cache invalidation. Hard refresh works for users:
- **Windows:** Ctrl+Shift+R
- **Mac:** Cmd+Shift+R

## Monitoring & Maintenance

### Monthly Tasks

1. Check GitHub Actions logs for failed builds
2. Review npm security audit: `npm audit`
3. Test site on mobile and desktop
4. Verify all language translations are correct
5. Check external links work (if any)

### Annual Tasks

1. Update dependencies: `npm outdated`, `npm update`
2. Review GSAP version for updates
3. Audit images for optimization opportunities
4. Review analytics (if implemented)
5. Consider PWA or service worker implementation

## Rollback Procedure

### Quick Rollback (Last Few Hours)

If you just pushed a breaking change:

```bash
git log --oneline -5

# Note the commit hash of the previous good version
git revert <hash-of-bad-commit>
git push origin main
```

Site will auto-redeploy with previous version.

### Full Rollback to Specific Date

```bash
git checkout <commit-hash>
git push origin main --force  # ⚠️ Overwrites history
```

## Disaster Recovery

### Site Completely Down

**Steps:**
1. Check GitHub Pages status: https://www.githubstatus.com
2. Verify Actions workflow succeeded
3. Verify files in gh-pages branch exist
4. Clear GitHub Pages cache (wait 5 minutes)
5. If custom domain: check DNS records

### Lost Code

GitHub keeps full history. Restore from any previous commit:

```bash
git log                    # Find commit
git checkout <hash>        # Go back
git checkout -b recovery   # Create recovery branch
git push origin recovery   # Push for inspection
```

## Security in Deployment

1. **Repository Access:** Only push from trusted machines
2. **GitHub Token:** Never commit `.env` with GitHub token (auto-managed by Actions)
3. **No Secrets:** Static site has no secrets to leak
4. **HTTPS:** GitHub Pages auto-provisions SSL/TLS
5. **Security Headers:** Configured in server.js (for local dev); ensure they're set when proxied

## Scheduled Maintenance

No scheduled maintenance needed for static site. GitHub Pages runs 24/7.

If site needs planned downtime:
1. Create maintenance page: `public/maintenance.html`
2. Update server.js to serve maintenance page
3. Push and deploy
4. Fix issue
5. Remove maintenance redirect
6. Re-deploy

## Support & Escalation

**GitHub Pages Status Issues:**
- Check https://www.githubstatus.com
- Or contact GitHub Support

**Repository Issues:**
- Check Actions logs
- Review git history
- Test locally with `npm start`

**Site Content Issues:**
- Edit i18n.js (translations)
- Edit index.html (structure)
- Update images in public/assets/img/
- Commit and push to main

**Custom Domain Issues:**
- Verify DNS records
- Check CNAME file in public/CNAME
- Wait for DNS propagation (up to 24h)
- Test with `nslookup yourdomain.com`
