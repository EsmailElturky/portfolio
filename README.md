# portfolio

Personal portfolio for **Esmail Elturky** — Senior Front-End Developer (Angular · React · Next.js).

Built with plain HTML, CSS and vanilla JavaScript (no framework, no build step). Features light/dark theme,
an interactive experience timeline, a typed code card, and scroll animations that respect `prefers-reduced-motion`.

## Live

https://esmailelturky.github.io/portfolio/ — deployed by `.github/workflows/deploy-pages.yml` on every push to `master`.

## Local preview

Open `index.html` in your browser, or run a simple server:

```bash
npx serve .
```

## Structure

```
portfolio/
├── index.html
├── css/style.css
├── js/main.js            # content data (projects, experience, skills) + interactions
└── assets/
    ├── profile.png
    ├── favicon.ico
    └── Esmail_Elturky_CV.pdf
```

To update content, edit the data arrays at the top of `js/main.js`.
