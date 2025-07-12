// backend/data.js
const educationHistory = [  
 { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
 { id: 2, period: '2019 - 2022', institution: 'SMK Negeri 1 Godean', major: 'Multimedia' },
  { id: 3, period: '2017 - 2019', institution: 'SMP Negeri 4 Gamping', major: 'Kelas - F' },
  { id: 4, period: '2011 - 2016', institution: 'SD Negeri Semarangan 5', major: '-' }
];
const skills = [ 
  { name: 'Vue.js', level: 'Mahir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'JavaScript', level: 'Mahir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind CSS', level: 'Mahir', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Node.js', level: 'Menengah', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', level: 'Menengah', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Git & GitHub', level: 'Mahir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'HTML5 & CSS3', level: 'Mahir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Laravel', level: 'Menengah', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/laravel/laravel-plain.svg' },
  { name: 'MySQL', level: 'Menengah', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Adobe', level: 'Mahir', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGXTAIhtPuRMQYopEfpFucu33nFTiAxhoRg&s' },
];
const projects = [ 
{ title: 'JWR Comp', image: 'https://rekomendasiteman.com/wp-content/uploads/2024/05/Rekomendasi-Toko-Laptop-dan-Komputer-di-Jogja.jpg',
description: 'Platform e-commerce dengan fitur keranjang belanja.', tech: ['Vue.js','Bootstrap', 'Laravel',
'MySQL'], link: 'https://github.com/EgidiusDicky/Santapin' }
];
module.exports = { educationHistory, skills, projects };