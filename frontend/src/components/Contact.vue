<script setup>
import SectionTitle from './SectionTitle.vue'

const year = new Date().getFullYear()
</script>

<template>
  <!-- Latar belakang diubah menjadi lebih gelap untuk kesan yang lebih dalam -->
  <footer id="kontak" class="py-20 bg-neutral-900 text-white">
    <div class="container mx-auto px-6 text-center">
      <!-- Judul dan teks dengan gaya font serif yang konsisten -->
      <SectionTitle title="Summon Me" class="font-serif text-glow-red" />
      <p class="text-xl text-gray-400 mb-8 font-serif">Kekuatanmu akan diselimuti kegelapan.</p>

      <!-- Tombol diubah menjadi gaya gotik yang tajam dan berbasis border -->
      <a
        href="mailto:ferdevilx@gmail.com"
        class="bg-transparent text-red-600 font-bold py-3 px-6 rounded-none border-2 border-red-700 hover:bg-red-800 hover:text-white hover:border-red-800 transition-all duration-300 inline-block mb-12"
      >
        Kirim Pesan
      </a>

      <!-- Ikon sosial disajikan dalam medali melingkar dengan efek glow -->
      <div class="flex justify-center space-x-6 mb-8">
        <!-- GitHub -->
        <a
          href="https://github.com/FERDEVIL87"
          target="_blank"
          class="social-icon-link"
          aria-label="GitHub Profile"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            class="w-8 h-8 invert"
          />
        </a>

        <!-- YouTube -->
        <a
          href="https://www.youtube.com/@ferdevil87"
          target="_blank"
          class="social-icon-link"
          aria-label="YouTube Channel"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
            alt="YouTube"
            class="w-8 h-8 invert"
          />
        </a>
      </div>
      <!-- Teks hak cipta dengan font serif, menyerupai tulisan kuno -->
      <p class="text-gray-500 text-sm font-serif">
        © {{ year }} Ferdy Syaifanoor. Disummon dengan Vue.js, Tailwind CSS, dan React.js.
      </p>
    </div>
  </footer>
</template>

<style scoped>
/*
  Gaya untuk medali ikon sosial.
  Menciptakan bingkai melingkar seperti segel kuno atau koin.
*/
.social-icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;  /* Sedikit lebih besar untuk ikon yang lebih besar */
  height: 56px;
  border-radius: 50%;
  border: 2px solid #374151; /* Border abu-abu gelap (gray-700) */
  transition: all 0.3s ease-in-out;
}

/*
  Efek hover untuk medali sosial.
  Memberikan cahaya merah membara di sekitar ikon.
*/
.social-icon-link:hover {
  border-color: #991b1b; /* Border merah pekat (red-800) */
  box-shadow: 0 0 15px rgba(185, 28, 28, 0.7); /* Cahaya merah */
}

/*
  Kelas kustom untuk menambahkan efek cahaya (glow) pada teks.
  (Dapat digunakan kembali dari komponen profil)
*/
.text-glow-red {
  text-shadow: 0 0 12px rgba(153, 27, 27, 0.7); /* red-700 dengan transparansi */
}
</style>