# Phase 02 — Asset Setup

## Overview
- **Priority:** Critical
- **Status:** Pending
- **Desc:** Copy images from `document/img/` to `public/assets/img/`. No processing — direct copy.

## Source → Destination Map

| Source (`document/img/`) | Dest (`public/assets/img/`) | Used In |
|---|---|---|
| `logoKielhorn.svg` | `logo.svg` | Header logo |
| `logoKielhorn.png` | `logo.png` | Fallback |
| `kamps-scaled (1).jpeg` | `dr-kielhorn.jpeg` | Hero + Team featured card |
| `lozhnikova_sua.jpg` | `team-lozhnikova.jpg` | Team grid |
| `FRAU JOCHIM.jpg` | `team-jochim.jpg` | Team grid |
| `MANUELA VAROQUIER-FETT.jpg` | `team-varoquier.jpg` | Team grid |
| `Vera Seitschenko-Dinh.jpg` | `team-vera.jpg` | Team grid |
| `Sirak.jpeg` | `team-sirak.jpeg` | Team grid |
| `ikkardes.jpeg` | `team-ikkardes.jpeg` | Team grid |
| `taifour.jpeg` | `team-taifour.jpeg` | Team grid |
| `thiemann.jpeg` | `team-thiemann.jpeg` | Team grid |
| `FRAU-yurchenko.jpeg` | `team-yurchenko-f.jpeg` | Team grid |
| `Herr-yurchenko.jpeg` | `team-yurchenko-m.jpeg` | Team grid |
| `Kukadiya.jpg` | `team-kukadiya.jpg` | Team grid |
| `img_0368-scaled.jpeg` | `practice-1.jpeg` | Gallery |
| `img_0370-scaled.jpeg` | `practice-2.jpeg` | Gallery |
| `img_0373-scaled.jpeg` | `practice-3.jpeg` | Gallery |
| `img_0383-scaled.jpeg` | `practice-4.jpeg` | Gallery |
| `img_0384-scaled.jpeg` | `practice-5.jpeg` | Gallery |
| `kinderzahnheilkunde.jpg` | `svc-children.jpg` | Services |
| `angstpatienten.jpg` | `svc-anxiety.jpg` | Services |
| `prophylaxe.jpg` | `svc-prevention.jpg` | Services |
| `zahnerhaltung.jpg` | `svc-preservation.jpg` | Services |
| `zahnersatz.jpg` | `svc-dentures.jpg` | Services |
| `oralchirurgie.jpg` | `svc-surgery.jpg` | Services |
| `implantologie.jpg` | `svc-implant.jpg` | Services |
| `about.jpg` | `about.jpg` | About section |
| `practice.jpg` | `practice-exterior.jpg` | Hero/Gallery |
| `laboratory.jpg` | `laboratory.jpg` | About/Practice |
| `angstpatienten.jpg` | `svc-aesthetic.jpg` | Aesthetic service fallback |

## Implementation Steps
1. Create `public/assets/img/` directory
2. Copy all files with renamed destinations (use `cp` commands)
3. Verify all files present before proceeding to HTML phase

## Bash Copy Commands
```bash
mkdir -p public/assets/img
cp "document/img/logoKielhorn.svg" public/assets/img/logo.svg
cp "document/img/logoKielhorn.png" public/assets/img/logo.png
cp "document/img/kamps-scaled (1).jpeg" public/assets/img/dr-kielhorn.jpeg
cp "document/img/lozhnikova_sua.jpg" public/assets/img/team-lozhnikova.jpg
cp "document/img/FRAU JOCHIM.jpg" public/assets/img/team-jochim.jpg
cp "document/img/MANUELA VAROQUIER-FETT.jpg" public/assets/img/team-varoquier.jpg
cp "document/img/Vera Seitschenko-Dinh.jpg" public/assets/img/team-vera.jpg
cp "document/img/Sirak.jpeg" public/assets/img/team-sirak.jpeg
cp "document/img/ikkardes.jpeg" public/assets/img/team-ikkardes.jpeg
cp "document/img/taifour.jpeg" public/assets/img/team-taifour.jpeg
cp "document/img/thiemann.jpeg" public/assets/img/team-thiemann.jpeg
cp "document/img/FRAU-yurchenko.jpeg" public/assets/img/team-yurchenko-f.jpeg
cp "document/img/Herr-yurchenko.jpeg" public/assets/img/team-yurchenko-m.jpeg
cp "document/img/Kukadiya.jpg" public/assets/img/team-kukadiya.jpg
cp "document/img/img_0368-scaled.jpeg" public/assets/img/practice-1.jpeg
cp "document/img/img_0370-scaled.jpeg" public/assets/img/practice-2.jpeg
cp "document/img/img_0373-scaled.jpeg" public/assets/img/practice-3.jpeg
cp "document/img/img_0383-scaled.jpeg" public/assets/img/practice-4.jpeg
cp "document/img/img_0384-scaled.jpeg" public/assets/img/practice-5.jpeg
cp "document/img/kinderzahnheilkunde.jpg" public/assets/img/svc-children.jpg
cp "document/img/angstpatienten.jpg" public/assets/img/svc-anxiety.jpg
cp "document/img/prophylaxe.jpg" public/assets/img/svc-prevention.jpg
cp "document/img/zahnerhaltung.jpg" public/assets/img/svc-preservation.jpg
cp "document/img/zahnersatz.jpg" public/assets/img/svc-dentures.jpg
cp "document/img/oralchirurgie.jpg" public/assets/img/svc-surgery.jpg
cp "document/img/implantologie.jpg" public/assets/img/svc-implant.jpg
cp "document/img/about.jpg" public/assets/img/about.jpg
cp "document/img/practice.jpg" public/assets/img/practice-exterior.jpg
cp "document/img/laboratory.jpg" public/assets/img/laboratory.jpg
cp "document/img/z7157290679656_84fc10d7b746392d3e0dcc38bfdbb96f.jpg" public/assets/img/clinic-exterior.jpg
```

## Success Criteria
- All 30+ image files present in `public/assets/img/`
- `logo.svg` correctly copied (SVG format for header)
