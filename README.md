# Burke Music Academy homepage concept

A responsive, static homepage concept for a premium Squarespace-style BMA redesign. It uses BMA’s public program information, faculty credentials, student stories, photographs, reviews, and music releases. It is a visual concept for rebuilding in BMA’s existing Squarespace site, not a replacement stack or a change to the live site.

## Preview locally

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000). Fonts, photographs, and album artwork load from their existing public hosts, so an internet connection is needed for the full design.

## Deployment

The website is published from the dedicated `gh-pages` branch. Run `./scripts/deploy-pages.sh` to publish or update it. In the repository, choose **Settings → Pages → Deploy from a branch → `gh-pages` → `/ (root)`** for the initial setup. The preview URL appears in the Pages settings after the first deployment.

The preview intentionally carries a “concept preview” banner and a `noindex` directive. GitHub Pages sites are publicly accessible to anyone with the URL; `noindex` asks search engines not to list the preview but does not restrict access. The source repository is private.

## Content and links

- Consultation CTAs point to BMA’s existing [`/bma-application`](https://www.burkemusicacademy.com/bma-application) inquiry.
- Voice, Piano, and Strings link to the matching BMA program pages. Musical Theater leads to the consultation section because a dedicated page was not listed on BMA’s Programs page when this concept was prepared.
- Faculty names, roles, and selected credits link to BMA’s team page.
- Student stories, reviews, and albums link to BMA’s site or the original Apple Music releases.
- The footer uses the hours shown on BMA’s homepage: Tuesday–Friday 10am–8pm, Saturday 9am–5pm, and Sunday 1pm–4pm.
- Photos and album artwork remain hot-linked to the original Squarespace CDN and Apple Music artwork host.

## Rebuild in Squarespace

See [`SQUARESPACE.md`](SQUARESPACE.md) for the section order, content notes, and implementation checklist. Update [`CLIENT-REPLY.txt`](CLIENT-REPLY.txt) with real availability before sending it.
