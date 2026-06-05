# Portfolio — Muhammad Agung Zulfikar

React + Vite portfolio dengan light/dark mode, Boxicons, dan auto-deploy ke GitHub Pages.

## Setup

```bash
npm install
npm run dev       # development
npm run build     # production build
npm run preview   # preview build
```

## Assets — PENTING

Letakkan semua file asset di folder **`src/assets/`** (bukan `public/assets/`):

```
src/assets/
├── profile.jpg
├── cert-isms.jpg
├── cert-java-fundamentals.jpg
├── cert-java-programming.jpg
├── cert-bnsp.jpg
└── CV - Muhammad Agung Zulfikar.pdf
```

## Deploy ke GitHub Pages (Otomatis)

1. Push ke branch `main`
2. Di Settings GitHub repo → Pages → Source: **GitHub Actions**
3. GitHub Actions akan otomatis build & deploy setiap push

## Deploy Manual (opsional)

```bash
npm run deploy
```

## Struktur

```
src/
├── App.jsx
├── main.jsx
├── assets/          ← letakkan foto, sertifikat, CV di sini
├── styles/
│   └── index.css
└── components/
    ├── Cursor.jsx
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Skills.jsx
    ├── Experience.jsx
    ├── Services.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    ├── ScrollTop.jsx
    └── CertModal.jsx
```
