# Wisdom Isibor — Portfolio

Personal portfolio website for Wisdom Imade Isibor, Full Stack Developer.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS · Framer Motion

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Customization

### 1. Update personal information

Edit `src/lib/data.ts`:
- Replace `YOUR_GITHUB_USERNAME` with your GitHub username
- Replace `wisdomimade14@gmail.com` with your email
- The LinkedIn URL is already set

### 2. Update CV

Replace `public/cv.pdf` with your actual CV file.

### 3. Update OG image

Replace `public/og-image.png` with a 1200×630 Open Graph image.

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Vercel auto-detects Vite — click **Deploy**
4. (Optional) Add custom domain in Project Settings

No additional configuration needed.

### GitHub Pages

1. Install the deployment package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Set `base` in `vite.config.ts`:
   ```ts
   base: '/your-repo-name/'
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. In GitHub repo Settings → Pages → Source → `gh-pages` branch

**Note:** For React Router to work on GitHub Pages, add a `404.html` redirect. See [spa-github-pages](https://github.com/rafgraph/spa-github-pages) for the workaround.

---

## Project Structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer, Layout
│   ├── sections/       # Hero, About, Skills, GitHub sections
│   └── ui/             # ProjectCard, SectionHeader, LoadingSpinner
├── features/
│   ├── home/           # HomePage
│   ├── projects/       # ProjectsPage
│   ├── experience/     # ExperiencePage
│   ├── contact/        # ContactPage
│   └── NotFoundPage    # 404
├── hooks/              # useScrollReveal
├── lib/
│   ├── animations.ts   # Framer Motion variants
│   └── data.ts         # All content data
├── types/              # TypeScript interfaces
├── App.tsx             # Router
├── main.tsx            # Entry point
└── index.css           # Global styles + Tailwind
```

---

## Contact Form

The contact form is UI-only by default. To activate:

- **Formspree:** Add `action="https://formspree.io/f/YOUR_ID"` to the form, switch from the simulated submit to a real `fetch`.
- **EmailJS:** Integrate `emailjs-com` in the `handleSubmit` function.
- **Custom backend:** POST to your own API endpoint.

---

## SEO

Update `index.html`:
- Replace `https://wisdomisibor.dev/` with your actual URL
- Update OG and Twitter card meta tags once you have a deployed URL

---

## Lighthouse

Target: 90+ across all categories.

Tips for max score:
- Serve the OG image in WebP format
- Ensure fonts are `display=swap` (already configured)
- Enable Vercel Edge Network for asset caching
