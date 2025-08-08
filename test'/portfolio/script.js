// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('fade-out');
  }, 1000);
});

// Typewriter effect
const typewriter = document.getElementById('typewriter');
const roles = ["Web Developer", "UI/UX Designer", "Animator", "Creative Coder"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typewriter.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriter.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  const speed = isDeleting ? 50 : 150;
  setTimeout(type, speed);
}
type();

// Animate skills bars
gsap.utils.toArray('.skill').forEach((skill, i) => {
  const percent = skill.getAttribute('data-skill');
  gsap.from(skill, {
    scrollTrigger: {
      trigger: skill,
      start: "top 80%"
    },
    '--after-width': '0%',
    duration: 1.5,
    delay: i * 0.2
  });
});

// Floating circles animation
gsap.to('.c1', { y: -50, x: 30, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
gsap.to('.c2', { y: 40, x: -20, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });
gsap.to('.c3', { y: -30, x: 10, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });

// Nav hide on scroll
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScrollTop = scrollTop;
});

// Animate sections on scroll
gsap.utils.toArray('.section').forEach((section, i) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 70%"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});