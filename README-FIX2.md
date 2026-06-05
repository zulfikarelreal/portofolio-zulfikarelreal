# Portfolio Fix #2 — Cara Pakai

## Yang diperbaiki di paket ini

1. **Foto profil tidak muncul** — Hero.jsx pakai `import.meta.url` yang lebih robust, fallback ke inisial "Z" jika gambar error
2. **Navbar desktop mengganggu** — Desktop pakai horizontal Navbar biasa, StaggeredMenu HANYA untuk mobile (≤768px)
3. **Lanyard dipindah** — Sekarang jadi section tersendiri paling bawah setelah Contact (`LanyardSection.jsx`)
4. **Blank putih** — `src/styles/index.css` bersih tanpa CSS nesting, `About.css` tanpa override `.reveal`

---

## Struktur file di zip ini

```
portfolio-fix2/
├── index.html                          ← replace
├── src/
│   ├── App.jsx                         ← replace
│   ├── styles/
│   │   └── index.css                   ← replace
│   └── components/
│       ├── Hero.jsx                    ← replace
│       ├── Hero.css                    ← replace
│       ├── Navbar.jsx                  ← replace
│       ├── Navbar.css                  ← replace
│       ├── About.css                   ← replace
│       ├── LanyardSection.jsx          ← FILE BARU (tambahkan)
│       └── LanyardSection.css          ← FILE BARU (tambahkan)
```

## Langkah instalasi

### 1. Hapus file lama yang bermasalah
```bash
# Di root project kamu, hapus src/index.css yang LAMA
rm src/index.css
```

### 2. Copy-paste semua file dari zip ini
Salin ke posisi yang sama di project kamu. Untuk file baru (LanyardSection.jsx/.css),
letakkan di `src/components/`.

### 3. Pastikan AppMenu.css tidak lagi dipakai
`App.jsx` baru tidak lagi import `./components/AppMenu.css`.
File itu boleh dibiarkan atau dihapus — tidak akan error.

### 4. Pastikan asset ada
```
src/assets/profile.jpg          ← foto profil
src/assets/lanyard/card.glb     ← wajib untuk Lanyard 3D
src/assets/lanyard/lanyard.png  ← wajib untuk Lanyard 3D
```

### 5. Jalankan
```bash
npm run dev
```

---

## Cara kerja navbar baru

- **≥769px (desktop)** → Horizontal navbar di atas (Navbar.jsx)
- **≤768px (mobile)** → StaggeredMenu overlay dari kanan

Keduanya tidak akan muncul bersamaan.

## Lanyard Section

Berada setelah section Contact, sebelum Footer.
Jika asset GLB/PNG tidak ada, akan tampil pesan error yang jelas (tidak crash).
