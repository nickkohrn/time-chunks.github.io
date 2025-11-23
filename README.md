

# Time Chunks — Landing Page (static)

This is a simple, mobile-first static landing page for the Time Chunks mobile application.

Included files:

- `index.html` — main landing page (mobile-first)
- `css/styles.css` — stylesheet
- `assets/app-icon-light.png`, `assets/app-icon-dark.png` — app icons

How to run locally:

1. Open the file directly in a browser:

   - Double-click `index.html` or open it from your editor to preview.

2. Run a tiny static server (recommended for consistent behavior). Pick one of these options depending on your environment:

   - If you have Node.js / npx available (installs `http-server` on the fly):

     ```bash
     # from the landing-page directory
     npx http-server -c-1 .
     # then open http://localhost:8080
     ```

   - If `npx` is not available (no Node), use Python 3 (macOS usually includes Python 3):

     ```bash
     # from the landing-page directory
     python3 -m http.server 8080
     # then open http://localhost:8080
     ```

   - If you have Python 2 (older systems), this also works:

     ```bash
     # fallback for Python 2
     python -m SimpleHTTPServer 8000
     # then open http://localhost:8000
     ```

If you want `npx`/Node tooling but don't have Node installed, you can install Node with Homebrew (macOS):

```bash
# install Homebrew if you don't have it (https://brew.sh)
brew install node
# then npx will be available
```

Quick macOS tip: to automatically open the page in your default browser after starting the server, run:

```bash
# example using python3 server on macOS
python3 -m http.server 8080 &
open http://localhost:8080
```

Notes:


- This project is intentionally dependency-free. Replace the placeholder screenshot and update contact details as needed.
- Next steps: wire up real Download links, add analytics, or export assets for the App Store / Play Store pages.

## Publish to GitHub Pages

1. Make sure this `landing-page` folder is the root of the repository you want to publish (GitHub Pages only serves from the repo root or `/docs`). Keep `.nojekyll` in place so GitHub Pages serves the site as plain static files.
2. Commit and push the contents to GitHub (e.g., the `main` branch).
3. In GitHub, open **Settings → Pages**, set **Source** to **Deploy from a branch**, choose your branch (e.g., `main`) and the **root** folder, then **Save**.
4. Wait for the Pages build to finish; GitHub will display the published URL (usually `https://<username>.github.io/<repo>/`).
5. If assets fail to load, confirm that paths are relative (they are in this project) and that `.nojekyll` exists at the repo root to skip Jekyll processing.
