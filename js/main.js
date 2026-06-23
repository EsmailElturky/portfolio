const skills = [
  'Angular', 'TypeScript', 'RxJS', 'NGRX', 'Redux',
  'HTML', 'CSS', 'SASS', 'Bootstrap', 'Angular Material',
  'Ant Design', 'PrimeNG', 'OOP', 'Domain Driven Design',
  'Unit Testing', 'Storybook'
];

document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  initScrollAnimations();
  initNavbar();
  document.getElementById('year').textContent = new Date().getFullYear();
});

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  skills.forEach((skill, i) => {
    const col = document.createElement('div');
    col.className = 'col-6 col-sm-4 col-md-3 col-lg-2 fade-up';
    if (i % 4 === 1) col.classList.add('delay-1');
    if (i % 4 === 2) col.classList.add('delay-2');
    if (i % 4 === 3) col.classList.add('delay-3');
    col.innerHTML = `<div class="skill-badge">${skill}</div>`;
    grid.appendChild(col);
  });
}

function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));

  document.querySelectorAll('.hero-section .fade-up').forEach((el) => {
    setTimeout(() => el.classList.add('visible'), 200);
  });
}

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    let current = '';
    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const collapse = document.getElementById('navMenu');
      if (collapse.classList.contains('show')) {
        bootstrap.Collapse.getInstance(collapse)?.hide();
      }
    });
  });
}
