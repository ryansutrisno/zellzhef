export const config = {
  whatsapp: import.meta.env.PUBLIC_WHATSAPP_NUMBER || '6281234567890',
  metaPixelId: import.meta.env.PUBLIC_META_PIXEL_ID || '00000000000000'
};

export const brand = {
  name: 'Zellzhef',
  tagline: 'Solusi Perbaikan Handphone & Laptop',
  description: 'Layanan teknis profesional, terpercaya, dan transparan untuk perangkat Anda. Kami mengembalikan performa optimal hardware Anda dengan presisi.',
} as const;

export const meta = {
  title: 'Zellzhef | Solusi Perbaikan Handphone & Laptop',
  description: 'Layanan teknis profesional, terpercaya, dan transparan untuk perangkat Anda. Kami mengembalikan performa optimal hardware Anda dengan presisi.',
  image: '/images/Thumbnail-Zellzhef.png',
  imageAlt: 'Zellzhef',
} as const;

export const nav = {
  ctaLabel: 'Kontak Kami',
  waMessage: 'Halo Zellzhef, saya tertarik dengan layanan perbaikan yang ditawarkan. Boleh info lebih lanjut?',
} as const;

import heroImg from '../assets/images/hero.jpg';

export const hero = {
  headline: 'Solusi Perbaikan',
  headlineAccent: 'Handphone & Laptop',
  subtitle: 'Layanan teknis profesional, terpercaya, dan transparan untuk perangkat Anda. Kami mengembalikan performa optimal hardware Anda dengan presisi.',
  ctaLabel: 'Konsultasi via WhatsApp',
  ctaMessage: 'Halo Zellzhef, saya ingin konsultasi mengenai perbaikan perangkat saya.',
  heroImage: heroImg,
} as const;

export const services = [
  {
    id: 'service-handphone',
    title: 'Service Handphone',
    description: 'Perawatan dan perbaikan menyeluruh untuk berbagai merk handphone.',
    icon: 'smartphone',
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
    name: 'SSD NVMe',
    spec: 'SPEC: M.2 NVMe / High Speed',
    image: product1Img,
    size: 'large', // to determine grid span
    badge: 'IN STOCK',
  },
  {
    id: 'ssd',
    name: 'SSD',
    spec: 'SATA 2.5"',
    image: product2Img,
    size: 'small',
  },
  {
    id: 'ram',
    name: 'RAM',
    spec: 'DDR4 / High Performance',
    image: product3Img,
    size: 'small',
  },
  {
    id: 'baterai-laptop',
    name: 'Baterai Laptop',
    spec: 'OEM Replacement',
    image: product4Img,
    size: 'small',
  },
  {
    id: 'baterai-handphone',
    name: 'Baterai Handphone',
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
  name: 'Zellzhef Repair & Hardware',
  address: 'XMVG+C7C, Mojo, Ngeposari, Semanu, Gunungkidul Regency, Special Region of Yogyakarta 55893',
  city: 'Gunungkidul Regency',
  schedule: 'Senin - Sabtu: 09:00 - 21:00',
  phone: '+62 856-2957-000',
  mapImage: mapImg,
  mapUrl: 'https://www.google.com/maps?q=Zellzhef+Repair+Hardware+Semanu',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.927189322762!2d110.6756382!3d-8.0064338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb500625589bf%3A0x7028a87d777a5435!2sZellzhef!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid',
} as const;

export const footer = {
  copyright: `© ${new Date().getFullYear()} Zellzhef. Professional Repair Handphone & Hardware Solutions.`,
} as const;

export const stickyWA = {
  waMessage: 'Halo Zellzhef, saya ingin konsultasi mengenai perangkat saya.',
} as const;
