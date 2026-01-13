// ===== HERO / COVER FADE OUT =====
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openInvitation");
  const hero = document.getElementById("hero");

  openBtn.addEventListener("click", function () {
    // Set transition lebih cepat dan sinkron
    hero.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    hero.style.opacity = 0;
    hero.style.transform = "translateY(-30px) scale(1.02)";

    setTimeout(() => {
      hero.style.display = "none";
      document.body.style.overflow = "auto"; // izinkan scroll
    }, 300); // sesuai durasi transition

    // Mainkan backsound
    const backsound = document.getElementById("backsound");
    backsound.play().catch(() => {
      console.log("Autoplay diblokir, klik tombol play untuk musik");
    });
  });
});

// ===== SIMPLY COUNTDOWN =====
document.addEventListener("DOMContentLoaded", function () {
  simplyCountdown("#simply-countdown", {
    year: 2026,
    month: 1,
    day: 24,
    hours: 9,
    minutes: 0,
    seconds: 0,
    words: {
      days: { root: "hari", lambda: (root, n) => root },
      hours: { root: "jam", lambda: (root, n) => root },
      minutes: { root: "menit", lambda: (root, n) => root },
      seconds: { root: "detik", lambda: (root, n) => root },
    },
    plural: false,
    inline: false,
    enableUtc: false,
    onEnd: function () {
      document.querySelector("#simply-countdown").innerHTML =
        "Selamat! Hari Bahagia telah tiba 🎉";
    },
  });
});

// script.js atau langsung di bawah body
document.addEventListener("DOMContentLoaded", function () {
  // target element
  const countdownEl = document.getElementById("simply-countdown");

  // target tanggal (contoh: 24 Januari 2026 pukul 09:00)
  const weddingDate = new Date("January 24, 2026 09:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      countdownEl.innerHTML = "<p>Hari H telah tiba!</p>";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `
      <div class="simply-countdown">
        <div>
          <span class="number">${days}</span>
          <span class="unit">Hari</span>
        </div>
        <div>
          <span class="number">${hours}</span>
          <span class="unit">Jam</span>
        </div>
        <div>
          <span class="number">${minutes}</span>
          <span class="unit">Menit</span>
        </div>
        <div>
          <span class="number">${seconds}</span>
          <span class="unit">Detik</span>
        </div>
      </div>
    `;
  }

  // jalankan pertama kali
  updateCountdown();

  // update setiap 1 detik
  const interval = setInterval(updateCountdown, 1000);
});
