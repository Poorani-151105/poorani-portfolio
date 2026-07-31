// =========================
// Premium portfolio interactions
// =========================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();

```
const target = document.querySelector(this.getAttribute('href'));

if (target) {
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
```

});
});

// Reveal animation
const revealElements = document.querySelectorAll(
'.section, .project-card, .skill-card, .cert-card, .education-card, .achievement-card, .timeline-content, .stat-card'
);

const revealObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('show');
revealObserver.unobserve(entry.target);
}
});
}, {
threshold: 0.15
});

revealElements.forEach(element => {
element.classList.add('hidden');
revealObserver.observe(element);
});

// Active navigation link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
let current = '';

sections.forEach(section => {
const sectionTop = section.offsetTop - 120;
const sectionHeight = section.offsetHeight;

```
if (
  window.scrollY >= sectionTop &&
  window.scrollY < sectionTop + sectionHeight
) {
  current = section.getAttribute('id');
}
```

});

navLinks.forEach(link => {
link.classList.remove('active');

```
if (link.getAttribute('href') === '#' + current) {
  link.classList.add('active');
}
```

});
});

// Header shadow
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
if (window.scrollY > 30) {
header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.35)';
} else {
header.style.boxShadow = 'none';
}
});

// Scroll progress bar
const progressBar = document.getElementById('progress-bar');

window.addEventListener('scroll', () => {
const scrollTop = window.scrollY;
const docHeight =
document.documentElement.scrollHeight - window.innerHeight;

const progress = (scrollTop / docHeight) * 100;

progressBar.style.width = progress + '%';
});

// Parallax effect for profile image
const profileImage = document.querySelector('.hero-image img');

window.addEventListener('mousemove', (e) => {
if (!profileImage) return;

const x = (window.innerWidth / 2 - e.clientX) / 40;
const y = (window.innerHeight / 2 - e.clientY) / 40;

profileImage.style.transform = `translate(${x}px, ${y}px)`;
});

// Button glow
document.querySelectorAll('.btn').forEach(button => {
button.addEventListener('mouseenter', () => {
button.style.transform = 'translateY(-2px)';
});

button.addEventListener('mouseleave', () => {
button.style.transform = 'translateY(0)';
});
});

// Add reveal utility classes dynamically
const style = document.createElement('style');
style.textContent = `.hidden{
  opacity:0;
  transform:translateY(30px);
  transition:all .8s ease;
}
.show{
  opacity:1;
  transform:translateY(0);
}`;
document.head.appendChild(style);
