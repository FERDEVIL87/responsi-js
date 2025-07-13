<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const skills = ref([]);
const API_URL = import.meta.env.PROD ? '/api/skills' : 'http://localhost:3000/api/skills';

onMounted(async () => {
  try {
    const response = await axios.get(API_URL);
    skills.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data skill:', error);
  }
});
</script>

<template>
  <!-- Latar belakang diubah menjadi lebih gelap agar selaras -->
  <section id="skill" class="py-20 bg-neutral-900 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <!-- Judul diubah menjadi lebih tematik -->
      <SectionTitle title="Segel Kekuatan" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <!-- Loop untuk setiap plakat keahlian -->
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="skill-plaque group"
        >
          <!-- Ikon sebagai sigil utama di plakat -->
          <img
            :src="skill.icon"
            :alt="skill.name"
            class="w-12 h-12 mx-auto mb-4 grayscale group-hover:grayscale-0 transition-all duration-300"
          />
          <!-- Nama keahlian diukir dengan font serif -->
          <h3 class="text-xl font-bold text-gray-200 font-serif">{{ skill.name }}</h3>
          <!-- Tingkat penguasaan sebagai catatan kuno -->
          <p class="text-gray-400 mt-2 font-serif text-sm">Penguasaan: {{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*
  Gaya untuk setiap plakat keahlian.
  Dirancang agar terlihat seperti lempengan batu yang diukir.
*/
.skill-plaque {
  background-color: #1f2937; /* gray-800 */
  padding: 1.5rem; /* p-6 */
  text-align: center;
  border: 2px solid #374151; /* gray-700, untuk efek pahatan */
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.7); /* Bayangan ke dalam, memberi kedalaman */
  transition: all 0.3s ease-in-out;
}

/*
  Efek hover untuk "mengaktifkan" plakat.
  Border dan bayangan berubah menjadi merah, seolah-olah rune tersebut menyala.
*/
.skill-plaque:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: #7f1d1d; /* red-800 */
  box-shadow: 
    inset 0 0 5px rgba(0, 0, 0, 0.5), /* Bayangan dalam yang lebih lembut */
    0 0 20px rgba(127, 29, 29, 0.6); /* Cahaya merah yang membara di luar */
}
</style>