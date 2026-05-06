// Common Components Rendering
function renderNavbar() {
  const nav = `
    <nav class="fixed top-0 left-0 w-full z-[9995] bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="index.html" class="text-2xl font-bold text-[#A44A3F]">Jogja<span class="text-[#2D3142]">Trip</span></a>
        
        <div class="hidden md:flex space-x-8 font-semibold text-sm">
          <a href="index.html" class="nav-link text-[#2D3142] hover:text-[#A44A3F]">Home</a>
          <a href="paket.html" class="nav-link text-[#2D3142] hover:text-[#A44A3F]">Paket Wisata</a>
          <a href="armada.html" class="nav-link text-[#2D3142] hover:text-[#A44A3F]">Armada</a>
          <a href="gallery.html" class="nav-link text-[#2D3142] hover:text-[#A44A3F]">Gallery</a>
          <a href="tentang-kami.html" class="nav-link text-[#2D3142] hover:text-[#A44A3F]">Tentang Kami</a>
        </div>

        <div class="flex items-center gap-4">
          <a href="https://wa.me/${contactInfo.phone}" target="_blank" class="hidden sm:block bg-[#A44A3F] text-white px-6 py-2 rounded-full hover:bg-[#8e3d34] transition-colors text-sm font-semibold">
            Pesan Via WA
          </a>
          <button id="menu-btn" class="md:hidden text-[#2D3142] focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div id="mobile-menu" class="fixed inset-0 w-full h-screen bg-white z-[9997] flex flex-col items-center pt-32 px-8 transition-transform duration-500 ease-in-out translate-x-full md:hidden">
        <div class="flex flex-col items-center w-full space-y-6">
          <a href="index.html" class="mobile-link text-2xl font-bold text-[#2D3142]">Home</a>
          <a href="paket.html" class="mobile-link text-2xl font-bold text-[#2D3142]">Paket Wisata</a>
          <a href="armada.html" class="mobile-link text-2xl font-bold text-[#2D3142]">Armada</a>
          <a href="gallery.html" class="mobile-link text-2xl font-bold text-[#2D3142]">Gallery</a>
          <a href="tentang-kami.html" class="mobile-link text-2xl font-bold text-[#2D3142]">Tentang Kami</a>
          <a href="https://wa.me/${contactInfo.phone}" target="_blank" class="mt-10 w-full bg-[#A44A3F] text-white py-5 rounded-full text-center text-xl font-bold shadow-2xl">Hubungi Kami</a>
        </div>
      </div>
    </nav>
  `;
  document.body.insertAdjacentHTML('afterbegin', nav);
}

function renderFooter() {
  const footer = `
    <footer class="bg-[#2D3142] text-white py-16">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        <div class="col-span-1 md:col-span-2">
          <a href="index.html" class="text-2xl font-bold text-[#A44A3F] mb-6 block">Jogja<span class="text-white">Trip</span></a>
          <p class="opacity-70 leading-relaxed max-w-sm">
            Agen wisata pilihan di Yogyakarta yang berfokus pada kenyamanan dan pengalaman wisata yang autentik. Menghadirkan kenangan indah di setiap sudut Jogja.
          </p>
        </div>
        <div>
          <h4 class="font-bold mb-6 text-white uppercase tracking-wider">Navigasi</h4>
          <ul class="space-y-3 opacity-70">
            <li><a href="index.html" class="hover:text-[#A44A3F]">Home</a></li>
            <li><a href="paket.html" class="hover:text-[#A44A3F]">Paket Wisata</a></li>
            <li><a href="gallery.html" class="hover:text-[#A44A3F]">Gallery</a></li>
            <li><a href="tentang-kami.html" class="hover:text-[#A44A3F]">Tentang Kami</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6 text-white uppercase tracking-wider">Kontak</h4>
          <p class="opacity-70 mb-2">WhatsApp: +${contactInfo.phone}</p>
          <p class="opacity-70">Email: ${contactInfo.email}</p>
          <p class="opacity-70 mt-4">${contactInfo.address}</p>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-[10px] opacity-40">
        &copy; 2024 JogjaTrip. Didesain dengan hati untuk Yogyakarta Istimewa.
      </div>
    </footer>
    <a href="https://wa.me/${contactInfo.phone}" target="_blank" class="floating-wa">
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      <span>Hubungi Kami</span>
    </a>
  `;
  document.body.insertAdjacentHTML('beforeend', footer);
}

// Menu Logic
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("menu-icon");
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

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();

  const menuBtn = document.getElementById("menu-btn");
  if (menuBtn) menuBtn.addEventListener("click", toggleMobileMenu);

  const mobileLinks = document.querySelectorAll(".mobile-link");
  mobileLinks.forEach(link => {
    link.addEventListener("click", toggleMobileMenu);
  });

  // AOS Init
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quad",
    });
  }
});

// Helper Rendering Functions
function renderPackageCard(p, i) {
  return `
    <div class="card overflow-hidden group" data-aos="fade-up" data-aos-delay="${i * 50}">
      <div class="aspect-16-9">
        <img src="${p.img}" alt="${p.name}">
        <span class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">${p.dur}</span>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2 text-gray-800">${p.name}</h3>
        <div class="price-tag mb-4">Rp ${p.price}</div>
        <p class="text-sm text-gray-500 mb-6 line-clamp-2">${p.desc}</p>
        <div class="flex gap-2">
          <a href="detail-paket.html?id=${p.id}" class="flex-1 btn-outline text-center text-xs">Detail Paket</a>
          <button onclick="bookingWA('${p.name}')" class="flex-1 btn-primary text-xs">Pesan WA</button>
        </div>
      </div>
    </div>
  `;
}

function renderGalleryItem(img, i) {
  return `
    <div class="gallery-item aspect-16-9" data-aos="zoom-in" data-aos-delay="${i * 30}">
      <img src="${img}" alt="Momen Wisatawan Jogja">
    </div>
  `;
}

function bookingWA(packageName) {
  const message = `Halo JogjaTrip, saya tertarik dengan paket *${packageName}*. Mohon info ketersediaannya.`;
  window.open(`https://wa.me/${contactInfo.phone}?text=${encodeURIComponent(message)}`, "_blank");
}

function renderCarCard(c, i) {
  return `
    <div class="card overflow-hidden group" data-aos="fade-up" data-aos-delay="${i * 50}">
      <div class="aspect-16-9">
        <img src="${c.img}" alt="${c.name}">
        <span class="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">${c.type}</span>
      </div>
      <div class="p-6">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-bold text-gray-800">${c.name}</h3>
          <span class="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">${c.capacity}</span>
        </div>
        <div class="price-tag mb-4">Rp ${c.price} <span class="text-[10px] font-normal">/ 12 Jam</span></div>
        <div class="flex flex-wrap gap-1 mb-6">
          ${c.feat.map(f => `<span class="bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-[4px] text-[9px] uppercase font-bold text-gray-400">${f}</span>`).join('')}
        </div>
        <button onclick="bookingCarWA('${c.name}')" class="w-full btn-primary text-sm">Sewa Sekarang</button>
      </div>
    </div>
  `;
}

function bookingCarWA(carName) {
  const message = `Halo JogjaTrip, saya ingin menyewa armada *${carName}*. Mohon info ketersediaan dan harganya.`;
  window.open(`https://wa.me/${contactInfo.phone}?text=${encodeURIComponent(message)}`, "_blank");
}

