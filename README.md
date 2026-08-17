# 🔧 Zellzhef

**Solusi Perbaikan Handphone & Laptop**

Proyek ini dibangun menggunakan [Astro](https://astro.build) dan [TailwindCSS](https://tailwindcss.com), untuk menampilkan profil, produk, dan layanan perbaikan Zellzhef.

## ✨ Fitur

- 🚀 **Astro Framework** - Static site generation yang cepat dan ringan
- 🎨 **TailwindCSS** - Styling framework yang modern dan responsif
- 🔄 **CI/CD Ready** - GitHub workflows untuk auto release & changelog (menggunakan Semantic Release)
- 🗺️ **Interactive Maps** - Google Maps yang di-embed langsung
- 💬 **WhatsApp Integration** - Navigasi langsung ke chat WhatsApp

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [TailwindCSS](https://tailwindcss.com)

## 📁 Project Structure

```
zellzhef/
├── .github/
│   └── workflows/
│       └── release.yml      # Auto create release & bump version
├── src/                     # Source code (komponen, halaman Astro)
├── public/                  # Static assets
├── .releaserc.json          # Konfigurasi semantic-release
├── astro.config.mjs         # Astro config
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development

```bash
# Development server dengan hot reload
npm run dev

# Open browser
open http://localhost:4321
```

## 📦 Deployment & Release Workflow

Proyek ini menggunakan `semantic-release` untuk manajemen versi secara otomatis.

Auto-release akan dipicu saat Anda melakukan *push* ke branch `main`. Pastikan *commit message* menggunakan format **Conventional Commits**:
- `feat: ...` -> Update versi minor (misal: 1.0.0 -> 1.1.0)
- `fix: ...` -> Update versi patch (misal: 1.0.0 -> 1.0.1)
- `chore: ...`, `style: ...`, `refactor: ...`, `docs: ...` -> Update versi patch

Silakan pantau halaman Release di repositori GitHub untuk versi dan catatan rilis (*changelog*) terbaru.
