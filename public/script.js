// Fungsi untuk memanggil API Hello
async function ambilDataAPI() {
    const hasilDiv = document.getElementById('hasil-api');
    hasilDiv.innerHTML = '<p>⏳ Memuat data...</p>';

    try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        hasilDiv.innerHTML = `<p>✅ Response berhasil!</p><pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        hasilDiv.innerHTML = `<p>❌ Error: ${error.message}</p>`;
    }
}

// Fungsi untuk memanggil API Info
async function ambilInfo() {
    const hasilDiv = document.getElementById('hasil-api');
    hasilDiv.innerHTML = '<p>⏳ Memuat data...</p>';

    try {
        const response = await fetch('/api/info');
        const data = await response.json();
        hasilDiv.innerHTML = `<p>✅ Response berhasil!</p><pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        hasilDiv.innerHTML = `<p>❌ Error: ${error.message}</p>`;
    }
}

// Fungsi untuk form kontak
function kirimPesan(event) {
    event.preventDefault();
    alert('Terima kasih! Pesan Anda telah diterima. 📨');
    event.target.reset();
}

// Fungsi tutup popup
function tutupPopup() {
    document.getElementById('api-popup').classList.add('hidden');
}

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animasi saat scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
});

console.log('🚀 Website berhasil dimuat!');
