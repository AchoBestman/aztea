import type { Brand, Footer as FooterType, Nav, NavLink } from "../types.js";

export const Footer = (brand: Brand, footer: FooterType, nav: Nav): string => {
  return `
    <div class="container">
        <div class="footer-inner">
            <div class="footer-brand">
                <a class="logo" href="#hero">
                    <img src="${brand.logo}" alt="${brand.name}">
                    <div class="logo-text">
                        <span class="brand">${brand.name}</span>
                        <span class="tagline">${brand.tagline}</span>
                    </div>
                </a>
                <p>L'excellence par le travail de la terre et de l'esprit. Technologies · Élevages · Agriculture.</p>
            </div>
            <div class="footer-col">
                <h5>Divisions</h5>
                ${nav.links.slice(1, 4).map((l: NavLink) => `<a href="${l.href}">${l.label}</a>`).join('')}
            </div>
            <div class="footer-col">
                <h5>Entreprise</h5>
                <a href="#about">Notre Vision</a>
                <a href="#contact">Nous Contacter</a>
                <a href="mailto:contact@aztea.company">contact@aztea.company</a>
            </div>
        </div>
        <div class="footer-bar">
            <p>${footer.copyright}</p>
            <p>Technologie · Élevage · Agriculture</p>
        </div>
    </div>
  `;
};
