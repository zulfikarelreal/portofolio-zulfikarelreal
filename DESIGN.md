# DESIGN.md — Portfolio Muhammad Agung Zulfikar

## Arah
Meja kerja teknisi: datar, rapi, terbaca. Tidak ada dekorasi yang tidak menyampaikan informasi.
Halaman ini dibaca HRD/vendor yang ingin tahu cepat: kerja di mana, bisa apa, bukti sertifikat.

## Token
| Peran | Light | Dark |
|---|---|---|
| bg | #ECEFEC | #111613 |
| bg3 (panel) | #DFE4E0 | #1A211D |
| text | #1B241F | #E6EAE7 |
| text2 | #4A564F | #9AA6A0 |
| accent (teal) | #0E6B63 | #4FC3B6 |
| accent2 (kuning tua, jarang dipakai) | #8A5A00 | #E0A83A |
| rule (garis) | 18% text | 16% text |

## Tipografi
- Judul: Familjen Grotesk 700, letter-spacing -0.02 s/d -0.035em.
- Isi: Public Sans 400/500, line-height 1.65, lebar baris < 80 karakter.
- Judul section: sentence case. Tanpa huruf kapital semua, tanpa label kecil di atas judul.
- Tidak ada satu kata berwarna di tengah judul. Nama di hero satu warna.

## Layout
- Rata kiri semua, satu kolom utama, lebar maks 1040px.
- Section dipisah garis 1px, bukan latar selang-seling.
- Kartu hanya untuk konten yang memang berdiri sendiri (sertifikat, layanan). Radius 6px, tanpa bayangan.
- Timeline: garis tipis dan titik persegi kecil. Urutan memang kronologis.

## Gerak
- Hanya animasi masuk hero (BlurText). Tidak ada reveal per section, tidak ada hover naik.
- Hover = perubahan warna/garis saja. `prefers-reduced-motion` dihormati.

## Dihapus dari versi lama
Blob blur, grid latar, cincin orbit + titik glow + tag melayang di foto, gradient, bayangan biru,
pill huruf kapital, border berputar warna di kartu skill, angka-bayangan "CORE".

## Copy
Bahasa Indonesia konsisten, kata kerja aktif, tombol menyebut aksi ("Hubungi saya", "Unduh CV").
