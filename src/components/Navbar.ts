import type { Brand, Nav, NavLink } from "../types.js";

export const Navbar = (brand: Brand, nav: Nav): string => {
  return `
    <nav class="container nav-inner">
        <a class="logo" href="#hero">
            <img src="${brand.logo}" alt="${brand.name} Logo">
            <div class="logo-text">
                <span class="brand">${brand.name}</span>
                <span class="tagline">${brand.tagline}</span>
            </div>
        </a>
        
        <div class="nav-right">
            <ul class="nav-links">
                ${nav.links.map((link: NavLink) => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
            </ul>
            <a href="#contact" class="btn btn-nav">${nav.cta}</a>
        </div>

        <button class="mobile-toggle" aria-label="Menu" id="mobile-toggle">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>
  `;
};
