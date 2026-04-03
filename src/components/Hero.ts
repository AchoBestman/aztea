import type { Hero as HeroType } from "../types.js";

export const Hero = (hero: HeroType): string => {
  return `
    <div class="hero-inner reveal-up">
        ${hero.eyebrow ? `<span class="eyebrow">${hero.eyebrow}</span>` : ''}
        <h1>${hero.title}</h1>
        <p>${hero.description}</p>
        <div class="hero-actions">
            <a href="#divisions" class="btn btn-outline-green">${hero.cta_primary}</a>
            <a href="#about" class="btn btn-link">${hero.cta_secondary}</a>
        </div>
        <div class="hero-pills">
            <span class="pill"><span class="pill-dot red"></span>Technologie</span>
            <span class="pill"><span class="pill-dot gold"></span>Élevage</span>
            <span class="pill"><span class="pill-dot green"></span>Agriculture</span>
        </div>
    </div>
  `;
};
