const services = [
  {
    title: "Paket Wisata",
    desc: "Tur privat tematik untuk keluarga maupun rombongan besar.",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  },
  {
    title: "Sewa Mobil",
    desc: "Armada keluaran terbaru dengan driver yang ramah & andal.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
  {
    title: "Tiket Destinasi",
    desc: "Pesan tiket masuk objek wisata favorit tanpa perlu antre.",
    icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
  },
  {
    title: "Custom Trip",
    desc: "Rancang sendiri rencana perjalanan Anda sesuai keinginan.",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  {
    title: "MICE & Gathering",
    desc: "Solusi acara perusahaan, gathering, dan kegiatan rombongan.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Antar Jemput Bandara",
    desc: "Layanan transportasi bandara YIA yang tepat waktu & nyaman.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
];

const tourPackages = [
  {
    name: "Gua Pindul & Pantai Selatan",
    price: "350.000",
    dur: "12 Jam",
    img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=600&auto=format&fit=crop",
    it: ["Cave Tubing Pindul", "Pantai Indrayanti", "HeHa Ocean View"],
    feat: ["Mobil + BBM", "Tiket Masuk"],
  },
  {
    name: "Lava Tour Merapi & Borobudur",
    price: "750.000",
    dur: "12 Jam",
    img: "https://jeeplavatourjogja.com/wp-content/uploads/2019/09/jeep-lava-tour-jogja-26-1024x978.jpg",
    it: ["Jeep Merapi", "Candi Borobudur", "Malioboro"],
    feat: ["Sudah Termasuk Jeep", "Makan Siang"],
  },
  {
    name: "Sunrise Borobudur & Sekitarnya",
    price: "850.000",
    dur: "12 Jam",
    img: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=600&auto=format&fit=crop",
    it: ["Punthuk Setumbu", "Candi Borobudur", "Gereja Ayam"],
    feat: ["Sarapan Pagi", "Sewa Kamera"],
  },
  {
    name: "Warisan Budaya & Prambanan",
    price: "425.000",
    dur: "10 Jam",
    img: "https://www.ayokaltim.com/wp-content/uploads/2026/02/IMG_4088-e1770641060865.jpeg",
    it: ["Keraton Yogyakarta", "Taman Sari", "Candi Prambanan"],
    feat: ["Pemandu Lokal", "Air Mineral"],
  },
  {
    name: "Adrenalin Pantai Timang",
    price: "550.000",
    dur: "12 Jam",
    img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop",
    it: ["Gondola Pantai Timang", "Pantai Nglambor", "HeHa Sky View"],
    feat: ["Tiket Gondola", "Antar Jemput"],
  },
  {
    name: "Jogja Hidden Gem & Pinus",
    price: "375.000",
    dur: "10 Jam",
    img: "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?q=80&w=800&auto=format&fit=crop",
    it: ["Hutan Pinus Mangunan", "Rumah Hobbit", "Puncak Becici Sunset"],
    feat: ["Dokumentasi", "Parkir Semua Lokasi"],
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=400&auto=forma-t&fit=crop",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=400&auto=format&fit=crop",
  "https://nnc-media.netralnews.com/IMG-Netral-News-User-26-X4BIN3RJ7U.jpg",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop",
];

function renderContent() {
  const sContainer = document.getElementById("services-container");
  services.forEach((s, i) => {
    sContainer.innerHTML += `
            <div class="card-flat p-8 rounded-xl text-center" data-aos="fade-up" data-aos-delay="${i * 50}">
              <div class="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-7 h-7 text-[#A44A3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${s.icon}"></path></svg>
              </div>
              <h3 class="text-lg font-bold mb-3 text-gray-800">${s.title}</h3>
              <p class="text-xs text-gray-500 leading-relaxed">${s.desc}</p>
            </div>`;
  });

  const pContainer = document.getElementById("packages-container");
  tourPackages.forEach((p, i) => {
    pContainer.innerHTML += `
            <div class="bg-white border border-gray-100 rounded-2xl overflow-hidden group hover:border-[#A44A3F] transition-all" data-aos="fade-up" data-aos-delay="${i * 50}">
              <div class="relative h-48 overflow-hidden">
                <img src="${p.img}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="${p.name}">
                <span class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-bold shadow-sm">${p.dur}</span>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-bold mb-2 text-gray-800 min-h-[3rem]">${p.name}</h3>
                <div class="price-tag inline-block mb-4">Rp ${p.price}</div>
                <div class="mb-5">
                  <ul class="text-[11px] space-y-1 text-gray-500">
                    ${p.it.map((item) => `<li class="itinerary-item">${item}</li>`).join("")}
                  </ul>
                </div>
                <div class="flex flex-wrap gap-1 mb-6">
                  ${p.feat.map((f) => `<span class="bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-[4px] text-[9px] uppercase font-bold text-gray-400">${f}</span>`).join("")}
                </div>
                <button onclick="bookingWA('${p.name}')" class="w-full bg-[#2D3142] text-white py-3 rounded-lg text-sm font-bold hover:bg-[#A44A3F] transition-colors">Pesan Sekarang</button>
              </div>
            </div>`;
  });

  const gContainer = document.getElementById("gallery-container");
  galleryImages.forEach((img, i) => {
    gContainer.innerHTML += `
            <div class="gallery-item rounded-xl overflow-hidden shadow-sm" data-aos="zoom-in" data-aos-delay="${i * 30}">
              <img src="${img}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Momen Wisatawan">
            </div>`;
  });
}

function bookingWA(packageName) {
  const phoneNumber = "6281234567890";
  const message = `Halo JogjaTrip, saya tertarik dengan paket *${packageName}* untuk rencana perjalanan Jogja. Mohon info ketersediaannya.`;
  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    "_blank",
  );
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("menu-icon");

  // Toggle Tailwind Classes
  menu.classList.toggle("translate-x-full");
  menu.classList.toggle("translate-x-0");

  const isOpen = menu.classList.contains("translate-x-0");

  if (isOpen) {
    icon.setAttribute("d", "M6 18L18 6M6 6l12 12");
    document.body.style.overflow = "hidden";
  } else {
    icon.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
    document.body.style.overflow = "auto";
  }
}

window.onload = () => {
  renderContent();

  // --- Mobile Menu Event Listeners ---
  const menuBtn = document.getElementById("menu-btn");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (menuBtn) {
    menuBtn.addEventListener("click", toggleMobileMenu);
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMobileMenu();
    });
  });

  // --- KONFIGURASI AOS YANG DIPERBAIKI ---
  AOS.init({
    duration: 800, // Durasi animasi (ms)
    offset: 0, // Jarak elemen dari bawah layar sebelum animasi mulai (diatur ke 0 agar cepat muncul)
    anchorPlacement: "top-bottom", // Elemen akan terpicu saat bagian ATAS elemen menyentuh bagian BAWAH viewport
    once: true, // Animasi hanya berjalan satu kali saat scroll ke bawah
    easing: "ease-out-quad",
  });
};
