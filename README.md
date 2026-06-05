# Portfolio — Muhammad Agung Zulfikar

React + Vite portfolio dengan light/dark mode.

## Setup

```bash
# Install dependencies
pnpm install
# atau
npm install

# Run dev server
pnpm dev
# atau
npm run dev

# Build production
pnpm build
```

## Struktur

```
src/
├── App.jsx              # Root component + theme state
├── main.jsx             # Entry point
├── styles/
│   └── index.css        # Global styles + CSS variables (light/dark)
└── components/
    ├── Cursor.jsx        # Custom cursor
    ├── Navbar.jsx        # Nav + theme toggle button
    ├── Hero.jsx          # Landing section
    ├── About.jsx         # About + stats + cards
    ├── Skills.jsx        # Pills + animated bars
    ├── Experience.jsx    # Timeline + sertifikat + CV bar
    ├── Services.jsx      # Service cards
    ├── Contact.jsx       # Contact links + WA form
    ├── Footer.jsx        # Footer
    ├── ScrollTop.jsx     # Scroll-to-top button
    └── CertModal.jsx     # Certificate image modal
```

## Assets

Letakkan file berikut di folder `public/assets/`:
- `profile.jpg` — foto profil
- `cert-isms.jpg`, `cert-java-fundamentals.jpg`, `cert-java-programming.jpg`, `cert-bnsp.jpg` — sertifikat
- `CV - Muhammad Agung Zulfikar.pdf` — CV

## Theme

Light mode adalah default. Toggle dark/light dengan tombol bulan/matahari di navbar.
CSS variables di `src/styles/index.css` menggunakan `[data-theme]` attribute pada `<html>`.
