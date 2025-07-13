<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const navItems = [
  { label: 'Profil', href: '#profil' },
  { label: 'Pendidikan', href: '#pendidikan' },
  { label: 'Keahlian', href: '#skill' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Kontak', href: '#kontak' }
];
</script>

<template>
  <!-- Background lebih pekat, bayangan merah di bawah untuk efek bara api -->
  <header class="bg-black border-b-2 border-red-900/70 shadow-lg shadow-red-900/10 sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Judul yang "berdenyut" dan menyala lebih terang saat disentuh -->
      <div class="text-2xl font-bold font-serif gothic-title">Ferdy Amikom</div>

      <!-- Menu Desktop dengan efek hover yang dramatis -->
      <ul class="hidden md:flex space-x-8 items-center">
        <li v-for="item in navItems" :key="item.href">
          <a :href="item.href" class="nav-link">
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- Tombol Burger dengan efek hover -->
      <button class="md:hidden text-gray-400 hover:text-red-500 transition-colors duration-300" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle Menu">
        <svg v-if="!isMenuopen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Dropdown Mobile yang muncul seperti bayangan -->
    <transition name="shadow-fade">
      <div v-if="isMenuOpen" class="md:hidden bg-black/95 backdrop-blur-sm absolute w-full shadow-lg">
        <ul class="flex flex-col p-4">
          <li v-for="item in navItems" :key="item.href" class="border-b border-gray-800">
            <a :href="item.href" @click="isMenuOpen = false" class="flex items-center space-x-2 text-gray-300 hover:text-red-500 py-3 w-full">
              <span>{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<style scoped>
/* Judul yang "Hidup" */
.gothic-title {
  color: #991b1b; /* red-800 */
  /* Animasi denyut jantung yang halus */
  animation: pulseGlow 4s infinite ease-in-out;
  transition: all 0.3s ease;
}

/* Saat judul di-hover, cahayanya menjadi lebih kuat dan warnanya lebih pekat */
.gothic-title:hover {
  color: #ef4444; /* red-500 */
  text-shadow: 
    0 0 15px rgba(220, 38, 38, 1),
    0 0 5px rgba(255, 100, 100, 1);
  cursor: pointer;
}

/* Keyframes untuk animasi denyut pada judul */
@keyframes pulseGlow {
  0%, 100% {
    text-shadow: 0 0 10px rgba(220, 38, 38, 0.6);
  }
  50% {
    text-shadow: 0 0 14px rgba(220, 38, 38, 0.8);
  }
}

/* Tautan Navigasi dengan Efek Goresan Darah */
.nav-link {
  position: relative;
  padding-bottom: 8px; /* Memberi ruang untuk garis bawah */
  color: #d1d5db; /* gray-300 */
  font-family: 'Times New Roman', Times, serif; /* Font serif untuk kesan klasik */
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

/* Garis bawah merah darah yang tersembunyi */
.nav-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ef4444; /* red-500 */
  transform: scaleX(0); /* Sembunyikan garisnya */
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

/* Saat tautan di-hover, teks menyala dan garis "tergambar" dari kanan ke kiri */
.nav-link:hover {
  color: #fca5a5; /* red-300 */
  text-shadow: 0 0 8px rgba(239, 68, 68, 0.7);
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

/* Transisi untuk menu mobile yang muncul seperti bayangan */
.shadow-fade-enter-active, 
.shadow-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.shadow-fade-enter-from, 
.shadow-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>