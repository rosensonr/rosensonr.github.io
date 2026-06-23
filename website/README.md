# Rachel Rosenson — Portfolio

A static, self-hosted version of the personal site (originally built in Framer).
Plain HTML, CSS, and JavaScript — no build step required.

## Structure

```
website/
├── index.html            # all page content
├── css/styles.css        # styling (matches the original design)
├── js/main.js            # mobile menu + footer year
├── assets/images/        # avatar.svg, favicon.svg (placeholders)
├── .nojekyll             # tells GitHub Pages to serve files as-is
└── .gitignore
```

## Preview locally

Just open `index.html` in a browser, or run a tiny local server:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Replace placeholder images

The avatar and content thumbnails currently use placeholders.
To use real images:

1. Drop your files into `assets/images/` (e.g. `avatar.jpg`, `card-1.jpg`).
2. Profile photo — replace `assets/images/avatar.svg` references in `index.html`
   (the `nav__avatar` and `contact__avatar` `<img>` tags).
3. Content card thumbnails — each card uses a CSS gradient on `.card__media`.
   To use a real image, add an `<img>` inside `.card__media`, or set a
   `background-image` on that element.

## Deploy to GitHub Pages

1. **Create a repo** on GitHub (e.g. `rachelrosenson.github.io` for a user site,
   or any name like `website` for a project site).

2. **Push this folder:**
   ```bash
   cd website
   git init
   git add .
   git commit -m "Initial self-hosted portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Enable Pages:** in the repo, go to
   **Settings → Pages → Build and deployment**,
   set **Source = Deploy from a branch**, **Branch = `main` / root**, then **Save**.

4. Your site goes live at:
   - `https://<your-username>.github.io/` (if repo is `<username>.github.io`), or
   - `https://<your-username>.github.io/<repo-name>/` (for a project repo).

### Custom domain (optional)

If you want your own domain (e.g. `rachelrosenson.com`):

1. In **Settings → Pages → Custom domain**, enter your domain and save
   (this creates a `CNAME` file in the repo).
2. At your domain registrar, add DNS records pointing to GitHub Pages:
   - `A` records → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - or a `CNAME` for `www` → `<your-username>.github.io`
3. Back in GitHub Pages settings, enable **Enforce HTTPS** once the domain verifies.
