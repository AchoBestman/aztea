import type { DivisionItem, Divisions as DivisionsType } from "../types.js";

export const Divisions = (divisions: DivisionsType): string => {
  return `
    <div class="section-head">
        <div class="left">
            <span class="section-label">${divisions.badge}</span>
            <h2 class="section-title">${divisions.title}</h2>
            <p class="section-sub">Chaque division combine expertise, bonnes pratiques et passion du terrain — pour un impact concret sur votre quotidien.</p>
        </div>
    </div>

    <div class="division-grid">
        ${divisions.items.map((item: DivisionItem, index: number) => `
            <div class="division-card reveal-up${index > 0 ? ' delay-' + index : ''}">
                <div class="card-img">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
                <div class="card-body">
                    <span class="card-num">${item.id} / ${divisions.items.length.toString().padStart(2, '0')}</span>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <ul class="card-features">
                        ${item.features.map((f: string) => `<li>${f}</li>`).join('')}
                    </ul>
                    <div class="card-footer">
                        <a href="#contact" class="btn btn-outline-${item.accent} sm">${item.cta}</a>
                    </div>
                </div>
            </div>
        `).join('')}
    </div>
  `;
};
