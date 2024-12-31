// Ngày bắt đầu yêu nhau
const endDate = new Date('2024-12-31T23:59:59');

function updateCounter() {
    const now = new Date();
    const diffTime = endDate - now;

    // Nếu đã đến thời gian đếm ngược, hiển thị lời chúc mừng năm mới
    if (diffTime <= 0) {
        document.getElementById('countdown').innerHTML = "<h2>Chúc Mừng Năm Mới 2025!</h2>";
        clearInterval(countdownInterval);  // Dừng bộ đếm sau khi hết thời gian
    } else {
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
        const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = diffDays;
        document.getElementById('hours').textContent = diffHours;
        document.getElementById('minutes').textContent = diffMinutes;
        document.getElementById('seconds').textContent = diffSeconds;
    }
}

const audio = document.getElementById('myAudio');
    const playBtn = document.getElementById('playBtn');
    const playIcon = '<i class="fas fa-play"></i>';
    const pauseIcon = '<i class="fas fa-pause"></i>';

    playBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playBtn.innerHTML = pauseIcon;
      } else {
        audio.pause();
        playBtn.innerHTML = playIcon;
      }
    });


let slideIndex = 0;
document.addEventListener('DOMContentLoaded', () => {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
      heart.style.setProperty('--i', index);
      heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
      heart.style.left = `${Math.random() * 100}vw`;
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    if (audio) {
        audio.play();
    }
});

updateCounter();
setInterval(updateCounter, 1000);