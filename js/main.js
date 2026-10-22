const Theme = Object.freeze({
  Light: 'light',
  Dark: 'dark',
});

const JobType = Object.freeze({
  FullTime: 'full-time',
  PartTime: 'part-time',
  Contract: 'contract',
  Freelance: 'freelance',
});

const jobTypeLabels = {
  [JobType.FullTime]: 'Full-time',
  [JobType.PartTime]: 'Part-time',
  [JobType.Contract]: 'Project-based contract',
  [JobType.Freelance]: 'Freelance',
};

const services = [
  {
    icon: 'bi-grid-1x2',
    title: 'UI kits & design systems',
    text: 'Reusable component libraries, shared form controls and directives, documented in Storybook.',
  },
  {
    icon: 'bi-ui-checks',
    title: 'Complex forms & builders',
    text: 'Dynamic form builders and multi-step flows with validation — no hard-coded screens.',
  },
  {
    icon: 'bi-broadcast',
    title: 'Real-time & payments',
    text: 'SignalR / WebSocket multi-session handling with offline support, and multi-gateway payments.',
  },
  {
    icon: 'bi-search',
    title: 'SSR, SEO & i18n',
    text: 'Server-rendered Next.js pages, JSON-LD, sitemaps, analytics, Arabic/English RTL and dark mode.',
  },
];

const projects = [
  {
    name: 'Dwelleo',
    company: 'York Towers',
    summary: 'Real estate platform with SSR property pages, map-based search with ROI and market data, AI price prediction, an AI sales-agent dashboard and Nafath identity verification — in Arabic & English, light & dark.',
    tags: ['Next.js', 'TypeScript', 'SEO', 'RTL / LTR'],
    url: 'https://www.dwelleo.sa/en',
    featured: true,
  },
  {
    name: 'CHECK',
    company: 'Youxel Technology',
    summary: 'Role-based inspection platform with a form builder package, real-time SignalR sessions and a payment module.',
    tags: ['Angular', 'SignalR', 'Storybook'],
    url: 'https://www.youxel.com/products/check',
    featured: true,
  },
  {
    name: 'Club Management',
    company: 'Alternatives',
    summary: 'Multi-role club booking system with calendars, workflow automation and multi-gateway payments.',
    tags: ['Angular', 'UI Kit', 'Payments'],
    url: 'https://ahmedalipodc.github.io/GameGuru_Front_Admin_MVP1/auth/let-start',
  },
  {
    name: 'Omani Military Judiciary',
    company: 'Data Boat',
    summary: 'Government judiciary portal built on a scalable modular architecture.',
    tags: ['Angular', 'Gov'],
    url: 'https://judiciaryportal.databoat.app/',
  },
  {
    name: 'National Museum Booking',
    company: 'Data Boat',
    summary: 'Ticketing and visit booking for the National Museum of Oman.',
    tags: ['Angular', 'Gov'],
    url: 'https://booking.nm.gov.om/overview',
  },
  {
    name: 'GDUPC Portal',
    company: 'Data Boat',
    summary: 'Stakeholder portal with a dynamic form builder and a shared NGX Table.',
    tags: ['Angular', 'Form builder'],
    url: 'https://gdupc.databoat.app/auth/sign-in',
  },
  {
    name: 'Elham LXP',
    company: 'Elham',
    summary: 'Learning experience platform using micro-frontends, DDD and NgRx.',
    tags: ['Angular', 'NgRx', 'NG-ZORRO'],
    url: 'https://www.elham.sa/ar/products/lxp',
  },
  {
    name: 'Sakina',
    company: 'Sakina',
    summary: 'Tourism platform and its admin dashboard, built from the ground up.',
    tags: ['Angular', 'Dashboard'],
    url: 'https://sakina.global/en',
  },
];

const experience = [
  {
    company: 'Youxel Technology',
    role: 'Senior Front-End Developer',
    type: JobType.FullTime,
    remote: true,
    period: '09/2023 — Present',
    points: [
      'Spearheaded large-scale, role-based applications: the Survey Project, Form Builder Package and Inspection Project.',
      'Built a library of shared controls and directives for reactive and template-driven forms.',
      'Designed and implemented a payment module together with the wider product team.',
      'Integrated SignalR for real-time multi-session handling with offline support and resilient WebSockets.',
      'Documented systems in Storybook and set up the unit testing framework.',
    ],
    links: [{ label: 'CHECK Platform', url: 'https://www.youxel.com/products/check' }],
  },
  {
    company: 'York Towers',
    role: 'Senior Front-End Developer',
    type: JobType.Contract,
    period: '07/2026 — 10/2026',
    context: 'Dwelleo — real estate platform built with Next.js, TypeScript and Claude Design.',
    points: [
      'Improved SEO with server-side rendered property, project and listing pages, dynamic metadata, JSON-LD, sitemap, robots.txt, GTM and Analytics.',
      'Built the property search and filtering system: modular filters, pagination and map-based browsing with ROI and market data.',
      'Refactored the codebase into shared components and typed models, added server-side lookup caching, and made the app work in Arabic/English (RTL/LTR) and light/dark mode.',
      'Delivered core features end to end: multi-step add/edit property flow, AI price prediction and investment scoring, AI sales-agent dashboard, subscriptions & payments, and Nafath identity verification.',
    ],
    links: [{ label: 'Dwelleo', url: 'https://www.dwelleo.sa/en' }],
  },
  {
    company: 'Alternatives',
    role: 'Senior Front-End Developer',
    type: JobType.PartTime,
    remote: true,
    period: '09/2025 — 04/2026',
    points: [
      'Built a multi-role club management and booking system for admins, staff and customers, with booking calendars, workflow automation and multi-gateway payments.',
      'Designed and implemented a reusable UI Kit, first adopted in this large-scale application.',
    ],
    links: [{ label: 'Club Management Admin', url: 'https://ahmedalipodc.github.io/GameGuru_Front_Admin_MVP1/auth/let-start' }],
  },
  {
    company: 'Data Boat',
    role: 'Front-End Developer',
    type: JobType.PartTime,
    remote: true,
    period: '03/2024 — 04/2025',
    points: [
      'Led the architecture of Ministry of Education web applications, with scalable modules for students, private universities and other stakeholders.',
      'Designed a dynamic form builder for user-driven content without hard-coded changes.',
      'Built a shared, highly customizable NGX Table component reused across modules.',
      'Supported governmental projects for the Ministry of Justice and the National Museum of Oman.',
    ],
    links: [
      { label: 'Omani Military Judiciary', url: 'https://judiciaryportal.databoat.app/' },
      { label: 'National Museum Booking', url: 'https://booking.nm.gov.om/overview' },
      { label: 'GDUPC Portal', url: 'https://gdupc.databoat.app/auth/sign-in' },
    ],
  },
  {
    company: 'Elham',
    role: 'Full Stack Developer',
    type: JobType.FullTime,
    remote: true,
    period: '12/2021 — 09/2023',
    points: [
      'Drove front-end development with micro-frontend architecture and domain-driven design.',
      'Implemented advanced Angular features with NgRx state management.',
      'Designed and launched a role-based dashboard with NG-ZORRO, RxJS and NgRx.',
      'Led a back-office platform with Google SSO and multi-server communication channels.',
      'Maintained a monolithic Django/DRF application with a focus on clean architecture.',
    ],
    links: [{ label: 'Elham LXP', url: 'https://www.elham.sa/ar/products/lxp' }],
  },
  {
    company: 'Sakina',
    role: 'Front-End Developer',
    type: JobType.Freelance,
    remote: true,
    period: '02/2021 — 12/2021',
    points: [
      "Designed and built a full dashboard from scratch for a tourism company's web application.",
      'Evaluated and selected the UI library, and structured the dashboard with a SOLID, component-based architecture.',
      'Contributed to the main tourism website and its integration with internal tools.',
    ],
    links: [{ label: 'Sakina', url: 'https://sakina.global/en' }],
  },
];

const skillGroups = [
  { title: 'Frameworks & Libraries', icon: 'bi-boxes', items: ['Angular', 'React', 'Next.js', 'RxJS', 'NgRx', 'Redux'] },
  { title: 'Languages', icon: 'bi-code-slash', items: ['TypeScript', 'JavaScript', 'Python'] },
  { title: 'UI & Styling', icon: 'bi-palette', items: ['HTML', 'CSS', 'Sass', 'Bootstrap', 'Angular Material', 'Ant Design', 'PrimeNG'] },
  { title: 'Architecture & Practices', icon: 'bi-diagram-3', items: ['OOP', 'Domain-Driven Design', 'SOLID', 'Micro-Frontends', 'Unit Testing'] },
  { title: 'Tools', icon: 'bi-tools', items: ['Storybook', 'Git', 'SignalR / WebSockets'] },
];

const primaryStack = ['Angular', 'React', 'Next.js'];

const marqueeItems = [
  'Angular', 'React', 'Next.js', 'TypeScript', 'RxJS', 'NgRx', 'SignalR',
  'Storybook', 'SSR & SEO', 'RTL / LTR', 'Micro-Frontends', 'Design Systems',
];

// [token class, text] pairs for the hero code card.
const codeTokens = [
  ['k', 'const '], ['v', 'esmail'], ['p', ' = {\n'],
  ['p', '  role: '], ['s', "'Senior Front-End Developer'"], ['p', ',\n'],
  ['p', '  stack: ['], ['s', "'Angular'"], ['p', ', '], ['s', "'React'"], ['p', ', '], ['s', "'Next.js'"], ['p', '],\n'],
  ['p', '  experience: '], ['s', "'5+ years'"], ['p', ',\n'],
  ['p', '  loves: ['], ['s', "'UI/UX'"], ['p', ', '], ['s', "'clean code'"], ['p', '],\n'],
  ['p', '  basedIn: '], ['s', "'Alexandria, EG'"], ['p', ',\n'],
  ['p', '  openToWork: '], ['k', 'true'], ['p', ',\n'],
  ['p', '};'],
];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderProjects();
  renderExperience();
  renderSkills();
  renderMarquee();
  initCodeCard();
  initTheme();
  initNavbar();
  initReveal();
  initCounters();
  initCopyEmail();
  initSpotlight();
  document.getElementById('year').textContent = new Date().getFullYear();
});

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function renderServices() {
  document.getElementById('servicesGrid').innerHTML = services.map((service, i) => `
    <article class="service spotlight reveal">
      <span class="service-num">0${i + 1}</span>
      <i class="bi ${service.icon}"></i>
      <h3>${service.title}</h3>
      <p>${service.text}</p>
    </article>`).join('');
}

function renderProjects() {
  document.getElementById('projectsGrid').innerHTML = projects.map((project) => `
    <a class="project spotlight reveal${project.featured ? ' project-featured' : ''}" href="${project.url}" target="_blank" rel="noopener">
      <div class="project-top">
        <span class="project-company">${project.company}</span>
        <i class="bi bi-arrow-up-right project-arrow"></i>
      </div>
      <h3>${project.name}</h3>
      <p>${project.summary}</p>
      <ul class="tags">${project.tags.map((tag) => `<li>${tag}</li>`).join('')}</ul>
    </a>`).join('');
}

function renderExperience() {
  const tabs = document.getElementById('xpTabs');
  tabs.innerHTML = experience.map((job, i) => `
    <button class="xp-tab" type="button" role="tab" id="xp-tab-${i}" aria-controls="xpPanel" data-index="${i}">
      <span>${job.company}</span>
      <small>${job.period}</small>
    </button>`).join('');

  tabs.addEventListener('click', (event) => {
    const tab = event.target.closest('.xp-tab');
    if (tab) selectExperience(Number(tab.dataset.index));
  });

  tabs.addEventListener('keydown', (event) => {
    const keys = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const current = Number(document.activeElement.dataset.index ?? 0);
    const step = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
    const next = (current + step + experience.length) % experience.length;
    selectExperience(next);
    tabs.children[next].focus();
  });

  selectExperience(0);
}

function selectExperience(index) {
  const job = experience[index];
  const panel = document.getElementById('xpPanel');

  document.querySelectorAll('.xp-tab').forEach((tab, i) => {
    const selected = i === index;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  panel.setAttribute('aria-labelledby', `xp-tab-${index}`);

  panel.innerHTML = `
    <div class="xp-content">
      <h3>${job.role} <span>@ ${job.company}</span></h3>
      <div class="xp-meta">
        <span class="badge badge-${job.type}">${jobTypeLabels[job.type]}</span>
        ${job.remote ? '<span class="badge">Remote</span>' : ''}
        <span class="xp-period"><i class="bi bi-calendar3"></i> ${job.period}</span>
      </div>
      ${job.context ? `<p class="xp-context">${job.context}</p>` : ''}
      <ul class="xp-points">${job.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}</ul>
      <div class="xp-links">
        ${job.links.map((link) => `<a href="${link.url}" target="_blank" rel="noopener">${link.label} <i class="bi bi-arrow-up-right"></i></a>`).join('')}
      </div>
    </div>`;
}

function renderSkills() {
  document.getElementById('skillsGrid').innerHTML = skillGroups.map((group) => `
    <article class="skill-group spotlight reveal">
      <h3><i class="bi ${group.icon}"></i> ${group.title}</h3>
      <ul class="chips">
        ${group.items.map((item) => `<li class="${primaryStack.includes(item) ? 'chip-primary' : ''}">${item}</li>`).join('')}
      </ul>
    </article>`).join('');
}

function renderMarquee() {
  const row = marqueeItems.map((item) => `<span>${item}</span><i class="bi bi-asterisk"></i>`).join('');
  // Two copies so the CSS loop is seamless.
  document.getElementById('marqueeTrack').innerHTML = row + row;
}

function initCodeCard() {
  const ghost = document.getElementById('codeGhost');
  const typed = document.getElementById('codeTyped');
  const fullHtml = codeTokens.map(([cls, text]) => `<span class="t-${cls}">${escapeHtml(text)}</span>`).join('');
  ghost.innerHTML = fullHtml;

  if (prefersReducedMotion) {
    typed.innerHTML = fullHtml;
    return;
  }

  let tokenIndex = 0;
  let charIndex = 0;
  let span = null;
  const caret = document.createElement('span');
  caret.className = 'caret';
  typed.appendChild(caret);

  const tick = () => {
    if (tokenIndex >= codeTokens.length) return;
    const [cls, text] = codeTokens[tokenIndex];
    if (!span) {
      span = document.createElement('span');
      span.className = `t-${cls}`;
      typed.insertBefore(span, caret);
    }
    span.textContent += text[charIndex++];
    if (charIndex >= text.length) {
      tokenIndex++;
      charIndex = 0;
      span = null;
    }
    setTimeout(tick, text[charIndex - 1] === '\n' ? 140 : 22);
  };
  setTimeout(tick, 700);
}

function initTheme() {
  document.getElementById('themeToggle').addEventListener('click', () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === Theme.Dark ? Theme.Light : Theme.Dark;
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
  });
}

function initNavbar() {
  const nav = document.getElementById('nav');
  const menu = document.getElementById('navMenu');
  const toggle = document.getElementById('navToggle');
  const links = menu.querySelectorAll('a');
  const sections = document.querySelectorAll('main section[id]');

  const setMenu = (open) => {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.innerHTML = `<i class="bi ${open ? 'bi-x-lg' : 'bi-list'}"></i>`;
  };

  toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  links.forEach((link) => link.addEventListener('click', () => setMenu(false)));

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);

    let current = '';
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) current = section.id;
    });
    links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach((el) => observer.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const run = (el) => {
    const target = Number(el.dataset.count);
    if (prefersReducedMotion) {
      el.textContent = target;
      return;
    }
    const start = performance.now();
    const duration = 1200;
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (!('IntersectionObserver' in window)) {
    counters.forEach(run);
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        run(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  counters.forEach((el) => observer.observe(el));
}

function initCopyEmail() {
  const button = document.getElementById('copyEmail');
  const feedback = document.getElementById('copyFeedback');
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('en.esmailelturky@gmail.com');
      feedback.textContent = 'Copied!';
    } catch (e) {
      feedback.textContent = 'Copy failed';
    }
    setTimeout(() => { feedback.textContent = ''; }, 1800);
  });
}

// Cursor-following glow on cards.
function initSpotlight() {
  document.addEventListener('pointermove', (event) => {
    const card = event.target.closest('.spotlight');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  });
}
