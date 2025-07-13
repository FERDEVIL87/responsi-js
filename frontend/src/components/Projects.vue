<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);
// Logika pengambilan data API tidak berubah
const API_URL = import.meta.env.PROD ? '/api/projects' : 'http://localhost:3000/api/projects';

onMounted(async () => {
  try {
    const response = await axios.get(API_URL);
    projects.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data proyek:', error);
  }
});
</script>

<template>
  <!-- Latar belakang diubah menjadi hitam pekat untuk konsistensi tema -->
  <section id="proyek" class="py-20 bg-black transition-colors duration-300">
    <div class="container mx-auto px-6">
      <!-- Judul dan narasi diubah menjadi lebih puitis dan megah -->
      <SectionTitle title="Karya-Karya Terpilih" class="font-serif text-glow-red" />

      <div class="grid md:grid-cols-2 gap-12 mt-12">
        <!-- Loop untuk setiap kartu proyek -->
        <div
          v-for="project in projects"
          :key="project.title"
          class="project-card-gothic"
        >
          <!-- Gambar dengan efek filter gelap dan transisi saat di-hover -->
          <div class="overflow-hidden">
             <img :src="project.image" :alt="`Gambar untuk ${project.title}`" class="project-image" />
          </div>
         
          <div class="p-6">
            <!-- Judul proyek dengan font serif -->
            <h3 class="text-2xl font-bold text-gray-200 dark:text-white mb-2 font-serif">
              {{ project.title }}
            </h3>
            <!-- Deskripsi dengan font serif -->
            <p class="text-gray-400 dark:text-gray-300 mb-4 font-serif">
              {{ project.description }}
            </p>
            <!-- Tag teknologi diubah menjadi seperti segel atau prasasti kecil -->
            <div class="mb-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block bg-red-900/50 text-red-400 border border-red-800/60 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
              >
                {{ t }}
              </span>
            </div>
            <!-- Tautan diubah agar sesuai dengan tema -->
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-red-600 font-semibold hover:text-red-400 transition-colors duration-300 group"
            >
              Ungkap Rahasia <span class="group-hover:translate-x-1 inline-block transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*
  Gaya untuk kartu proyek gotik.
  Menggunakan sudut tajam, latar belakang gelap, dan bayangan yang dramatis.
*/
.project-card-gothic {
  background-color: #111827; /* gray-900 */
  border: 1px solid #374151; /* gray-700 */
  overflow: hidden; /* Memastikan gambar tetap di dalam border */
  transition: all 0.4s ease-in-out;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
}

/*
  Efek hover untuk kartu.
  Mengangkat kartu dan memberikan cahaya merah yang membara.
*/
.project-card-gothic:hover {
  transform: translateY(-8px);
  border-color: #7f1d1d; /* red-800 */
  box-shadow: 0 10px 30px rgba(127, 29, 29, 0.5); /* Cahaya merah */
}

/*
  Gaya untuk gambar proyek.
  Memberikan filter gelap dan efek zoom saat kartu di-hover.
*/
.project-image {
  width: 100%;
  height: 224px; /* 14rem */
  object-fit: cover;
  filter: grayscale(80%) brightness(60%) contrast(110%);
  transition: all 0.4s ease-in-out;
}

/*
  Efek hover pada kartu akan memicu perubahan pada gambar.
  Filter dihilangkan dan gambar sedikit membesar untuk efek dinamis.
*/
.project-card-gothic:hover .project-image {
  filter: grayscale(0%) brightness(100%) contrast(100%);
  transform: scale(1.05);
}

/*
  Kelas kustom untuk menambahkan efek cahaya (glow) pada teks.
*/
.text-glow-red {
  text-shadow: 0 0 12px rgba(153, 27, 27, 0.7);
}
</style>