<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);
// API URL tidak diubah, karena ini adalah logika
const API_URL = import.meta.env.PROD ? '/api/education' : 'http://localhost:3000/api/education';

onMounted(async () => {
  try {
    const response = await axios.get(API_URL);
    educationHistory.value = response.data;
  } catch (error) {
    console.error('Failed to fetch education data:', error);
  }
});
</script>

<template>
  <!-- Latar belakang diubah menjadi sangat gelap untuk nuansa gotik -->
  <section id="pendidikan" class="py-20 bg-black transition-colors duration-300">
    <div class="container mx-auto px-6">
      <!-- Judul sekarang akan terlihat menonjol di atas latar belakang gelap -->
      <SectionTitle title="Riwayat Pendidikan" />

      <div class="timeline-container">
        <div class="timeline-line"></div>

        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="timeline-item"
        >
          <div class="timeline-content-container" :class="[index % 2 === 0 ? 'left' : 'right']">
            <div class="timeline-dot"></div>

            <a :href="edu.link" target="_blank" rel="noopener noreferrer" class="timeline-card">
              <div class="flex items-center gap-4">
                <div>
                  <!-- Warna aksen diubah dari biru menjadi merah darah, font menjadi serif -->
                  <p class="text-sm text-red-600 dark:text-red-500 font-semibold mb-1 font-serif">{{ edu.period }}</p>
                  <!-- Font menjadi serif untuk tampilan klasik dan warna teks perak/putih pudar -->
                  <h3 class="text-xl font-bold text-gray-200 dark:text-white font-serif">{{ edu.institution }}</h3>
                  <!-- Warna teks deskripsi yang lebih lembut -->
                  <p class="text-gray-400 dark:text-gray-300 font-serif">{{ edu.major }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Base container untuk timeline */
.timeline-container {
  position: relative;
  margin-top: 3rem;
}

/* Garis vertikal tengah diubah menjadi warna abu-abu gelap, seperti besi tempa */
.timeline-line {
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 2px;
  background-color: #374151; /* Tailwind 'gray-700' */
}

/* Kontainer item timeline individual */
.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

/* Kontainer untuk konten dan titik, menangani posisi kiri/kanan */
.timeline-content-container {
  position: relative;
  width: 50%;
  padding: 0 2rem;
}

/* Gaya untuk item di sisi kiri timeline */
.timeline-content-container.left {
  text-align: right;
  margin-right: auto;
}
.timeline-content-container.left .flex {
  flex-direction: row-reverse;
}

/* Gaya untuk item di sisi kanan timeline */
.timeline-content-container.right {
  margin-left: auto;
}

/* Titik melingkar diubah menjadi merah darah yang pekat */
.timeline-dot {
  position: absolute;
  top: 1.25rem;
  z-index: 10;
  width: 1.25rem;
  height: 1.25rem;
  background-color: #991b1b; /* Tailwind 'red-800' */
  border: 4px solid #991b1b; /* Tailwind 'red-800' */
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(220, 38, 38, 0.7); /* Menambahkan cahaya merah */
}

/* Posisi titik untuk item sisi kiri */
.timeline-content-container.left .timeline-dot {
  right: -0.625rem;
}
/* Posisi titik untuk item sisi kanan */
.timeline-content-container.right .timeline-dot {
  left: -0.625rem;
}

/*
  Gaya untuk kartu pendidikan individual.
  Sudut dibuat tajam (tanpa rounded), latar belakang gelap,
  dan bayangan dramatis dengan cahaya merah saat di-hover.
*/
.timeline-card {
  @apply inline-block p-4 md:p-6 bg-neutral-900 border border-neutral-700 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-800/40;
  max-width: 420px;
  width: 100%;
}

/* --- Penyesuaian Responsif untuk layar kecil --- */
@media (max-width: 767px) {
  /* Memindahkan garis vertikal ke tepi kiri */
  .timeline-line {
    left: 10px;
    transform: translateX(0);
  }

  /* Membuat kontainer konten lebar penuh dan menyesuaikan padding/penjajaran teks */
  .timeline-content-container,
  .timeline-content-container.left,
  .timeline-content-container.right {
    width: 100%;
    margin-left: 0;
    padding-left: 45px;
    padding-right: 0;
    text-align: left;
  }

  /* Memastikan arah flex adalah baris untuk semua item di seluler */
  .timeline-content-container.left .flex,
  .timeline-content-container.right .flex {
    flex-direction: row;
  }

  /* Memposisikan titik di sisi kiri untuk semua item di seluler */
  .timeline-dot,
  .timeline-content-container.left .timeline-dot,
  .timeline-content-container.right .timeline-dot {
    left: 2px;
  }
}
</style>