# PERANCANGAN SISTEM INFORMASI PERPUSTAKAAN DIGITAL (E-LIBRARY)
**Dokumentasi Milestone 1 - Perencanaan Menu, ER-D, dan Arsitektur UI**

---

## 1. Ringkasan Proyek
Sistem Informasi Perpustakaan Digital (**E-Library**) adalah aplikasi berbasis web yang dirancang untuk mengelola sirkulasi buku digital & fisik, katalog buku, keanggotaan (mahasiswa/dosen/umum), peminjaman, pengembalian, denda keterlambatan, serta pelaporan statistik literasi secara terpadu dan efisien.

---

## 2. Struktur & Hirarki Menu (Navigation Map)

### A. Sidebar Navigation (Admin Panel)
- **Dashboard (`/pages/dashboard.html`)**
  - KPI Stat Cards: Total Koleksi Buku, Total Anggota Aktif, Peminjaman Berjalan, Denda Belum Lunas
  - Tren Sirkulasi Bulanan (Chart.js Line & Bar Chart)
  - Distribusi Kategori Buku (Doughnut Chart)
  - Notifikasi Jatuh Tempo & Quick Activity Log
- **Katalog & Data Master (`/pages/data-master.html`)**
  - Data Buku & E-Book (ISBN, Judul, Pengarang, Penerbit, Stok, Kategori, Status)
  - Kategori & Rak Buku (Dewey Decimal Classification / DDC)
  - Data Anggota / Member (NIM/NIDN, Nama, Program Studi, Status Keaktifan)
  - Data Petugas Perpustakaan
- **Sirkulasi & Transaksi (`/pages/form.html`)**
  - Form Peminjaman Baru (Scan Barcode / Input NIM & ID Buku)
  - Form Pengembalian & Hitung Denda Otomatis
  - Riwayat & Status Reservasi Buku
- **Laporan & Analitik (`/pages/laporan.html`)**
  - Laporan Sirkulasi Harian / Bulanan
  - Rekap Buku Paling Sering Dipinjam (Top 10)
  - Rekap Denda & Pembayaran
  - Export PDF / Excel & Print Friendly View
- **Pengaturan & Manajemen Sistem**
  - Konfigurasi Batas Pinjam & Tarif Denda / Hari
  - Manajemen Akun & Hak Akses (Role-based)

---

## 3. Entity Relationship Diagram (ER-D) Sederhana

Berikut adalah diagram relasi entitas menggunakan sintaks **Mermaid.js**:

```mermaid
erDiagram
    PETUGAS ||--o{ TRANSAKSI_PEMINJAMAN : "melayani"
    ANGGOTA ||--o{ TRANSAKSI_PEMINJAMAN : "melakukan"
    TRANSAKSI_PEMINJAMAN ||--|{ DETAIL_PEMINJAMAN : "memiliki"
    BUKU ||--o{ DETAIL_PEMINJAMAN : "termasuk"
    KATEGORI ||--o{ BUKU : "mengelompokkan"
    TRANSAKSI_PEMINJAMAN ||--o| PENGEMBALIAN_DENDA : "menghasilkan"

    PETUGAS {
        int id_petugas PK
        string nama_petugas
        string email
        string username
        string password
        string role "Admin | Pustakawan"
    }

    ANGGOTA {
        string id_anggota PK "NIM / NIP / ID"
        string nama_lengkap
        string email
        string no_telepon
        string status_keanggotaan "Aktif | Nonaktif"
        date tanggal_bergabung
    }

    KATEGORI {
        int id_kategori PK
        string nama_kategori
        string kode_rak
    }

    BUKU {
        string isbn PK
        string judul_buku
        string pengarang
        string penerbit
        int tahun_terbit
        int stok_tersedia
        int stok_total
        int id_kategori FK
        string status "Tersedia | Dipinjam | Pemeliharaan"
    }

    TRANSAKSI_PEMINJAMAN {
        string kode_transaksi PK
        string id_anggota FK
        int id_petugas FK
        date tanggal_pinjam
        date batas_kembali
        string status_transaksi "Dipinjam | Selesai | Terlambat"
    }

    DETAIL_PEMINJAMAN {
        int id_detail PK
        string kode_transaksi FK
        string isbn FK
        int jumlah
    }

    PENGEMBALIAN_DENDA {
        int id_pengembalian PK
        string kode_transaksi FK
        date tanggal_dikembalikan
        int hari_terlambat
        decimal total_denda
        string status_bayar "Lunas | Belum Lunas"
    }
```

---

## 4. Rencana Arsitektur & Slicing (Milestone 2 & 3)

### Struktur Folder Proyek
```text
elibrary-system/
├── docs/
│   └── perancangan.md            # Dokumentasi Milestone 1
├── assets/
│   ├── css/
│   │   ├── tailwind.min.css      # Framework Utility CSS
│   │   └── custom.css            # Custom Styling & Print Media
│   ├── js/
│   │   ├── main.js               # Toggle Sidebar, Modal, Global Helpers
│   │   ├── dashboard.js          # Inisialisasi Chart.js & Mock KPI
│   │   ├── master-data.js        # DOM Search, Filter & CRUD Mocking
│   │   └── validation.js         # Validasi Form Transaksi & Denda
│   └── img/
│       ├── logo-library.svg
│       └── covers/
├── pages/
│   ├── dashboard.html            # Halaman Dashboard + Visualisasi Grafik
│   ├── data-master.html          # Tabel Master Buku + Modal CRUD
│   ├── form.html                 # Form Transaksi Peminjaman & Validasi
│   └── laporan.html              # Laporan & Cetak Rekapitulasi
├── layout.html                   # Master Shell (Sidebar, Header, Main, Footer)
└── index.html                    # Halaman Login Admin / Gerbang Utama
```

---

## 5. Mockup & Wireframe Design (Stitch & Figma Links)
- **Figma Design System & Hi-Fi UI Link**: `https://www.figma.com/design/sample-elibrary-system`
- **Design Tokens**:
  - Primary Color: Deep Emerald Indigo (`#1E3A8A` / `#0D9488`)
  - Accent / Warning: Amber Gold (`#F59E0B`)
  - Surface Background: Neutral Gray Slate (`#F8FAFC` / `#FFFFFF`)
  - Typography: Inter & Plus Jakarta Sans
