<script setup>
defineProps({
  title: String,
  // Menambahkan class agar bisa dikustomisasi dari parent jika perlu
  class: String,
});
</script>

<template>
  <!-- Kontainer utama untuk judul dan ornamennya -->
  <div class="gothic-title-container" :class="class">
    <!-- Judul kini menggunakan font serif tebal dan efek cahaya merah -->
    <h2 class="text-4xl font-bold text-gray-200 font-serif text-glow-red">
      {{ title }}
    </h2>
    <!-- Garis bawah sederhana telah digantikan oleh ornamen CSS yang lebih rumit -->
  </div>
</template>

<style scoped>
/*
  Kontainer untuk judul, diposisikan secara relatif
  untuk menampung ornamen pseudo-elemen.
*/
.gothic-title-container {
  position: relative;
  margin-bottom: 3rem; /* 48px, setara dengan mb-12 */
  padding-bottom: 1rem; /* 16px, memberi ruang untuk ornamen di bawah teks */
  text-align: center;
}

/*
  Membuat garis horizontal utama dari ornamen
  menggunakan pseudo-elemen ::after.
*/
.gothic-title-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 96px; /* Setara dengan w-24 di Tailwind */
  height: 2px;
  background-color: #7f1d1d; /* red-800, warna merah darah pekat */
  box-shadow: 0 0 5px rgba(185, 28, 28, 0.5); /* Cahaya lembut di sekitar garis */
}

/*
  Menambahkan detail dekoratif di tengah garis (seperti permata atau paku keling)
  menggunakan pseudo-elemen ::before.
*/
.gothic-title-container::before {
  content: '';
  position: absolute;
  bottom: -5px; /* Diposisikan sedikit di bawah garis untuk tumpang tindih */
  left: 50%;
  /* Diputar 45 derajat untuk menciptakan bentuk berlian dari sebuah persegi */
  transform: translateX(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background-color: #991b1b; /* red-800 */
  border: 1px solid #450a0a; /* red-950, border yang sangat gelap */
  z-index: 1; /* Memastikan elemen ini berada di atas garis */
}

/*
  Kelas kustom untuk menambahkan efek cahaya (glow) pada teks.
*/
.text-glow-red {
  text-shadow: 0 0 12px rgba(153, 27, 27, 0.8); /* Glow merah yang lebih pekat */
}
</style>