// 1. Background slideshow
const slides = document.querySelectorAll('.slide');
let current = 0;

function nextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(nextSlide, 6500);
nextSlide(); // start

// 2. Floating hearts & petals
function createFloating(type = 'heart') {
  const el = document.createElement("div");
  el.className = type;
  el.innerHTML = type === 'heart' ? (Math.random() > 0.5 ? '💗' : '❤️') : '🌹';
  
  el.style.left = Math.random() * 100 + "vw";
  el.style.animationDuration = (Math.random() * 10 + (type === 'heart' ? 12 : 9)) + "s";
  el.style.animationDelay = Math.random() * 6 + "s";
  el.style.fontSize = (Math.random() * 1.4 + (type === 'heart' ? 1.1 : 0.9)) + "rem";

  document.getElementById(type === 'heart' ? "hearts" : "petals").appendChild(el);
  setTimeout(() => el.remove(), 20000);
}

setInterval(() => createFloating('heart'), 500);
setInterval(() => createFloating('petal'), 1800);

// 3. Typewriter effect (Nepali + English mix)
const messages = [
  "मेरो सानु जान... 💕",
  "तिमी बिना यो मन अधुरो छ",
  "Every beat says your name",
  "तिमीलाई धेरै माया गर्छु, forever",
  "You are my peace, my home, my everything ♡",
  "हाम्रो कथा सधैं यस्तै सुन्दर रहोस्..."
];

let msgIndex = 0;
let charIndex = 0;
const typewriterEl = document.getElementById("typewriter");

function type() {
  if (charIndex < messages[msgIndex].length) {
    typewriterEl.innerHTML += messages[msgIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 90);
  } else {
    setTimeout(erase, 2800);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterEl.innerHTML = messages[msgIndex].substring(0, --charIndex);
    setTimeout(erase, 50);
  } else {
    msgIndex = (msgIndex + 1) % messages.length;
    setTimeout(type, 1000);
  }
}

type();

// 4. Celebration explosion
function celebrateLove() {
  // Big heart burst
  for(let i = 0; i < 50; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.innerHTML = Math.random() > 0.4 ? "💖" : "💞";
      heart.style.position = "fixed";
      heart.style.left = "50%";
      heart.style.top = "50%";
      heart.style.fontSize = (Math.random() * 3 + 2) + "rem";
      heart.style.pointerEvents = "none";
      heart.style.transform = `translate(-50%, -50%) rotate(${Math.random()*360}deg)`;
      document.body.appendChild(heart);

      heart.animate([
        { transform: `translate(-50%, -50%) translateY(0) scale(1)`, opacity: 1 },
        { transform: `translate(-50%, -50%) translate(${ (Math.random()-0.5)*1000 }px, ${ (Math.random()-0.5)*800 }px) scale(0.1)`, opacity: 0 }
      ], {
        duration: 1400 + Math.random()*1000,
        easing: "ease-out"
      }).onfinish = () => heart.remove();
    }, i * 40);
  }

  // Sparkle effect
  document.querySelector('.heart-btn').style.animation = "none";
  setTimeout(() => {
    document.querySelector('.heart-btn').style.animation = "pulseGlow 1.2s";
  }, 10);
}

const style = document.createElement('style');
style.innerHTML = `
  @keyframes pulseGlow {
    0% { box-shadow: 0 0 40px #ff3366; }
    50% { box-shadow: 0 0 100px #ff1493, 0 0 160px #ff3366; }
    100% { box-shadow: 0 0 40px #ff3366; }
  }
`;
document.head.appendChild(style);
