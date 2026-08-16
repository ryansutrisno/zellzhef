export const brand = {
  name: 'ProFix Hardware',
  tagline: 'Solusi Cepat Perbaikan Laptop',
  description: 'Layanan teknis profesional, terpercaya, dan transparan untuk perangkat Anda. Kami mengembalikan performa optimal hardware Anda dengan presisi.',
} as const;

export const meta = {
  title: 'ProFix Repair & Hardware | Solusi Cepat Perbaikan Laptop',
  description: 'Layanan teknis profesional, terpercaya, dan transparan untuk perangkat Anda. Kami mengembalikan performa optimal hardware Anda dengan presisi.',
  image: '/screen.png',
  imageAlt: 'ProFix Repair & Hardware',
} as const;

export const nav = {
  ctaLabel: 'Contact Us',
  waMessage: 'Halo ProFix Hardware, saya tertarik dengan layanan perbaikan yang ditawarkan. Boleh info lebih lanjut?',
} as const;

import heroImg from '../assets/images/hero.jpg';

export const hero = {
  headline: 'Solusi Cepat Perbaikan',
  headlineAccent: 'Laptop & Hardware',
  subtitle: 'Layanan teknis profesional, terpercaya, dan transparan untuk perangkat Anda. Kami mengembalikan performa optimal hardware Anda dengan presisi.',
  ctaLabel: 'Konsultasi via WhatsApp',
  ctaMessage: 'Halo ProFix Hardware, saya ingin konsultasi mengenai perbaikan perangkat saya.',
  heroImage: heroImg,
} as const;

export const services = [
  {
    id: 'service-laptop',
    title: 'Service Laptop',
    description: 'Perawatan dan perbaikan menyeluruh untuk berbagai merk laptop.',
    icon: 'laptop_mac',
  },
  {
    id: 'ganti-lcd',
    title: 'Ganti LCD',
    description: 'Penggantian layar pecah atau bermasalah dengan panel berkualitas.',
    icon: 'aspect_ratio',
  },
  {
    id: 'upgrade-ram-ssd',
    title: 'Upgrade RAM/SSD',
    description: 'Tingkatkan performa dan kecepatan loading sistem Anda.',
    icon: 'memory',
  },
  {
    id: 'service-motherboard',
    title: 'Service Motherboard',
    description: 'Perbaikan tingkat komponen mikro untuk masalah mati total.',
    icon: 'developer_board',
  },
];

import product1Img from '../assets/images/products/ssd-nvme.jpg';
import product2Img from '../assets/images/products/ssd-vgen.jpg';
import product3Img from '../assets/images/products/ram-imperion.jpg';
import product4Img from '../assets/images/products/baterai-samsung.jpg';
import product5Img from '../assets/images/products/baterai-xiaomi.jpg';

export const products = [
  {
    id: 'ssd-nvme',
    name: 'SSD NVMe Imperion',
    spec: 'SPEC: M.2 NVMe / High Speed',
    image: product1Img,
    size: 'large', // to determine grid span
    badge: 'IN STOCK',
  },
  {
    id: 'ssd-vgen',
    name: 'SSD V-GeN Platinum',
    spec: 'SATA 2.5"',
    image: product2Img,
    size: 'small',
  },
  {
    id: 'ram-imperion',
    name: 'RAM Imperion',
    spec: 'DDR4 / High Performance',
    image: product3Img,
    size: 'small',
  },
  {
    id: 'baterai-samsung',
    name: 'Baterai Laptop Samsung',
    spec: 'OEM Replacement',
    image: product4Img,
    size: 'small',
  },
  {
    id: 'baterai-xiaomi',
    name: 'Baterai Xiaomi',
    spec: 'Original Part',
    image: product5Img,
    size: 'small',
  }
];

import macbookImg from '../assets/images/products/macbook-repair.jpg';
import ipadImg from '../assets/images/products/ipad-repair.jpg';

export const decorativeImages = {
  macbook: macbookImg,
  ipad: ipadImg,
};

export const processSteps = [
  {
    id: '01',
    title: 'Diagnosa',
    description: 'Pengecekan masalah secara menyeluruh dan estimasi biaya transparan.',
  },
  {
    id: '02',
    title: 'Perbaikan',
    description: 'Eksekusi perbaikan oleh teknisi berpengalaman dengan sparepart berkualitas.',
  },
  {
    id: '03',
    title: 'Selesai',
    description: 'Pengujian akhir dan perangkat siap diambil dengan garansi servis.',
  }
];

import mapImg from '../assets/images/location-map.jpg';

export const location = {
  name: 'ProFix Repair & Hardware',
  address: 'Jl. Contoh Alamat No. 123',
  city: 'Kota, Provinsi, Kode Pos',
  schedule: 'Senin - Sabtu: 09:00 - 18:00',
  phone: '+62 812-3456-7890',
  mapImage: mapImg,
} as const;

export const footer = {
  copyright: `© ${new Date().getFullYear()} ProFix Repair & Hardware. Professional Computer Solutions.`,
} as const;

export const stickyWA = {
  waMessage: 'Halo ProFix Hardware, saya ingin konsultasi mengenai perangkat saya.',
} as const;
