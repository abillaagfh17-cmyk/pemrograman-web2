# SIM-ASET Kampus

Prototype Sistem Informasi Manajemen Sarana dan Prasarana untuk demonstrasi Milestone 1-3.

## Fitur

- Portal login demo dengan pemilihan peran.
- Dashboard monitoring sarpras.
- Data master aset dengan pencarian, filter, pengelolaan data, dan ekspor CSV.
- Form registrasi, draf lokal, dan kalkulasi depresiasi.
- Laporan pemeliharaan dan cetak ringkasan.
- Sirkulasi peminjaman dan pengembalian.
- Pengaturan operator dan notifikasi.

## Menjalankan

Buka `index.html` di browser, atau jalankan server statis dari direktori proyek:

```bash
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

Untuk demo login, isi ID dan kata sandi dengan nilai apa pun yang tidak kosong. SSO belum dikonfigurasi.

## Struktur

- `docs/perancangan.md`: rancangan menu dan ERD.
- `docs/design-system.md`: token desain.
- `assets/css/`: styling bersama.
- `assets/js/`: navigasi, state lokal, dan interaksi.
- `assets/img/`: screenshot referensi Stitch.
- `pages/`: dashboard, data master, form, laporan, sirkulasi, dan pengaturan.

Data demo disimpan di `localStorage` browser dan tidak dikirim ke server.
