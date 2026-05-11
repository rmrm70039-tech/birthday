// 1. كتابة متحركة
const text = "أحلى أخ في الدنيا ❤️ يارب أشوفك أسعد واحد وأنجح واحد. ربنا يخليك لينا يا غالي 🥳";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
    }
}
window.onload = typeWriter;

// 2. بلالين طايرة
const balloonEmojis = ['🎈', '🎉', '🎊', '🎁', '⭐', '💖'];
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = Math.random() * 5 + 5 + 's';
    balloon.innerHTML = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
    document.body.appendChild(balloon);

    setTimeout(() => balloon.remove(), 10000);
}
setInterval(createBalloon, 800);

// 3. زرار المفاجأة
function celebrate() {
    // شغل موسيقى
    const song = document.getElementById('birthdaySong');
    song.play().catch(e => console.log("الموسيقى محتاجة المستخدم يدوس الأول"));

    // قصاصات ورق كتير
    for (let i = 0; i < 150; i++) {
        createConfetti();
    }

    // غير لون الخلفية
    document.body.style.background = `linear-gradient(135deg, 
        hsl(${Math.random() * 360}, 100%, 50%), 
        hsl(${Math.random() * 360}, 100%, 50%))`;
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
}