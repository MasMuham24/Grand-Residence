// Grand Residence 2026 - Main JavaScript

// Init AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// KPR Simulation Logic
function hitungKPR() {
    const harga = document.getElementById('hargaRumah').value;
    const dpPersen = document.getElementById('dpPersen').value;
    const tenor = document.getElementById('tenor').value;
    const bungaTahunan = 0.08; // Flat 8% per tahun

    const nilaiDP = harga * (dpPersen / 100);
    const plafon = harga - nilaiDP;
    const totalBulan = tenor * 12;
    const bungaBulanan = bungaTahunan / 12;

    // Rumus Anuitas
    const cicilan = (plafon * bungaBulanan) / (1 - Math.pow(1 + bungaBulanan, -totalBulan));

    document.getElementById('nilaiDP').innerText = formatRupiah(nilaiDP);
    document.getElementById('totalPinjaman').innerText = formatRupiah(plafon);
    document.getElementById('cicilanBulan').innerText = formatRupiah(Math.round(cicilan));
}

// Format Rupiah Helper
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
}

// Form Submit Handler
document.getElementById('bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Berhasil!',
        text: 'Terima kasih, tim marketing kami akan segera menghubungi Anda.',
        icon: 'success',
        confirmButtonColor: '#15803D'
    });
    e.target.reset();
});

// Initial KPR Calculation on page load
hitungKPR();
