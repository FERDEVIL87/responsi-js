<template>
  <!-- Latar belakang hitam pekat dengan efek vignette untuk memfokuskan pandangan ke tengah -->
  <section id="profil" class="bg-black py-20 section-vignette">
    <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <!-- Judul yang muncul dari jurang, dengan teks yang lebih berani -->
        <h1 class="gothic-title animate-fade-in-up" style="animation-delay: 200ms;">
          Hi, Saya <span class="highlight-name">Ferdy</span>
        </h1>
        
        <!-- Narasi yang merayap masuk -->
        <p class="text-xl text-gray-400 mb-8 font-serif animate-fade-in-up" style="animation-delay: 500ms;">
          Seorang Necromancer di dalam era digital, menghidupkan realitas dari untaian kode dan kegelapan yang dalam.
        </p>

        <!-- Tombol pemanggilan dengan efek bara api -->
        <a href="#kontak" class="summon-button animate-fade-in-up" style="animation-delay: 800ms;">
          Summon Me?
        </a>
      </div>
      <div class="md:w-1/2 flex justify-center animate-fade-in" style="animation-delay: 1000ms;">
        <!-- Bingkai yang kini "berdenyut" dengan energi gelap -->
        <div class="gothic-frame">
          <img src="https://cdn.topuplive.com/uploads/images/goods/20250526/1748241293_319y78ziaP.jpg" alt="Potret Diri" class="w-80 h-80 object-cover filter grayscale brightness-75 contrast-125 group-hover:filter-none transition-all duration-700">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Menambahkan efek vignette (gelap di pinggir) ke seluruh section */
.section-vignette {
  background-image: radial-gradient(ellipse at center, 
    rgba(0, 0, 0, 0) 40%, 
    rgba(0, 0, 0, 0.9) 100%);
}

/* Judul Utama */
.gothic-title {
  font-size: 3.5rem; /* Lebih besar */
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  color: #d1d5db; /* gray-300 */
  margin-bottom: 1rem;
  text-shadow: 0 0 8px rgba(0,0,0,0.8);
}

/* Bagian nama yang disorot */
.gothic-title .highlight-name {
  color: #991b1b; /* red-800 */
  text-shadow: 0 0 12px rgba(220, 38, 38, 0.7);
  transition: all 0.3s ease;
}
.gothic-title:hover .highlight-name {
  color: #ef4444; /* red-500 */
  text-shadow: 0 0 20px rgba(239, 68, 68, 1);
}

/* Tombol Pemanggilan (Summon Button) */
.summon-button {
  display: inline-block;
  background: transparent;
  color: #dc2626; /* red-600 */
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: 2px solid #7f1d1d; /* red-800 */
  text-shadow: 0 0 5px rgba(220, 38, 38, 0.5);
  transition: all 0.3s ease-in-out;
  box-shadow: inset 0 0 10px rgba(127, 29, 29, 0.5);
}

.summon-button:hover {
  background-color: #991b1b; /* red-800 */
  color: #fecaca; /* red-200 */
  border-color: #dc2626; /* red-600 */
  box-shadow: 0 0 20px rgba(220, 38, 38, 0.8), inset 0 0 15px rgba(0,0,0,0.5);
  transform: translateY(-2px);
}

/* Bingkai Gotik yang Ditingkatkan */
.gothic-frame {
  position: relative;
  border: 8px solid #111827; /* gray-900 */
  padding: 12px;
  background-color: #000;
  /* Animasi denyut untuk lapisan merah */
  animation: pulseFrame 5s infinite ease-in-out;
  transition: all 0.4s ease-in-out;
}

.gothic-frame:hover {
  /* Saat di-hover, animasi berhenti dan cahayanya menjadi lebih kuat */
  animation-play-state: paused;
  box-shadow: 
    inset 0 0 20px rgba(0, 0, 0, 1),
    0 0 0 8px #7f1d1d, /* red-800 */
    0 0 50px rgba(127, 29, 29, 0.8);
}

/* Keyframes untuk denyut pada bingkai */
@keyframes pulseFrame {
  0%, 100% {
    box-shadow: 
      inset 0 0 15px rgba(0, 0, 0, 0.9),
      0 0 0 6px #450a0a, /* red-950 */
      0 5px 25px rgba(0, 0, 0, 1);
  }
  50% {
    box-shadow: 
      inset 0 0 15px rgba(0, 0, 0, 0.9),
      0 0 0 8px #6b21a8, /* Ganti warna denyut menjadi ungu gelap */
      0 5px 35px rgba(0, 0, 0, 1);
  }
}

/* Animasi Kustom */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.8s both;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 1.2s both;
}
</style>