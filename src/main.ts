import './styles/style.css';
import type { Content } from './types.js';
import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { Divisions } from './components/Divisions.js';
import { ProductsBand } from './components/ProductsBand.js';
import { Vision } from './components/Vision.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

// Import JSON directly — bundled by Vite at build time (works on Vercel & all static hosts)
import contentData from './data/content.json';

async function initApp() {
  try {
    const data = contentData as unknown as Content;

    // ── Inject Navbar
    const navEl = document.getElementById('navbar');
    if (navEl) navEl.innerHTML = Navbar(data.brand, data.nav);

    // ── Inject Main Content
    const appEl = document.getElementById('app');
    if (appEl) {
      appEl.innerHTML = `
        <section id="hero" class="hero">
          <div class="container">
            ${Hero(data.hero)}
          </div>
        </section>

        <div class="products-band">
          ${ProductsBand()}
        </div>

        <section id="divisions" class="section">
          <div class="container">
            ${Divisions(data.divisions)}
          </div>
        </section>

        <section id="about" class="section bg-off">
          <div class="container">
            ${Vision(data.vision)}
          </div>
        </section>

        <section id="contact" class="contact-section">
          ${Contact(data.contact)}
        </section>
      `;
    }

    // ── Inject Footer
    const footerEl = document.getElementById('footer');
    if (footerEl) footerEl.innerHTML = Footer(data.brand, data.footer, data.nav);

    // ── Init interactions after DOM is ready
    initInteractivity();

  } catch (err) {
    console.error('Aztea App Error:', err);
  }
}

function initInteractivity() {
  // Sticky header on scroll
  const header = document.querySelector('header');
  const onScroll = () => {
    header?.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run once immediately

  // Reveal on scroll observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('[class*="reveal-"]').forEach(el => observer.observe(el));

  // Smooth scroll for anchor links
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      const target = document.querySelector(targetId!);
      if (target) {
        const yOffset = -80;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // Mobile menu
  const mobileToggle = document.getElementById('mobile-toggle');
  const navRight = document.querySelector('.nav-right');
  if (mobileToggle && navRight) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navRight.classList.toggle('mobile-open');
      mobileToggle.classList.toggle('open', isOpen);
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a nav link is clicked
    navRight.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navRight.classList.remove('mobile-open');
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
}

initApp();
