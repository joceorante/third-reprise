# Third Reprise

Marketing site for the band **Third Reprise**, implementing the "TP Updates"
Figma design (Videos page). Single-page site with tour dates, video/music
embeds, merch teaser, and contact.

## Stack

- [Vite](https://vitejs.dev/) + React 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v3 for styling
- Self-hosted webfonts (see [Fonts](#fonts))

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  components/     # one file per design section
    Navbar.tsx
    Hero.tsx        # "Top" — wordmark + sign-up CTA
    CoverTheory.tsx # tour date list
    Videos.tsx      # "Watch on Youtube"
    Music.tsx       # "Stream on Spotify"
    Merch.tsx       # "Coming Soon"
    Contact.tsx     # "Get in touch"
    Wordmark.tsx    # the "Third Reprise" logotype
    MediaCard.tsx   # rounded video/music placeholder tile
    SocialIcons.tsx # inline-SVG social row
  data/tour.ts    # tour stops (date / city / ticket link)
```

Design tokens (colors + font families) live in `tailwind.config.js`.

## Fonts

Fonts are self-hosted under `src/assets/fonts` and declared in
`src/assets/fonts.css`, so the site has no runtime dependency on a font CDN:

| Role            | Family            |
| --------------- | ----------------- |
| Nav / buttons   | JetBrains Mono    |
| Display headings| Bebas Neue        |
| Section titles  | Instrument Serif  |
| Wordmark script | Pinyon Script     |
| Wordmark / dates| Playfair Display  |

## Notes on assets

Several elements in the Figma file shipped as flattened image assets (the band
photograph, the wordmark, the social-icon strip). Those binaries were not
retrievable in this environment, so they were rebuilt in code where practical:

- **Wordmark** — recreated with webfonts (`Wordmark.tsx`).
- **Social icons** — recreated as inline SVG (`SocialIcons.tsx`).
- **Merch ellipse** — recreated with CSS.
- **Band photo** — rendered as a styled placeholder (`data-photo-slot`) that
  mirrors the original framing; drop the real image in as its `background-image`.
- **Video / music / contact embeds** — rendered as placeholders
  (`data-embed-slot`, `MediaCard`) ready to be swapped for real embeds.
