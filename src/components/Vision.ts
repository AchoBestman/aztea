import type { Stat, Vision as VisionType } from "../types.js";

export const Vision = (vision: VisionType): string => {
  return `
    <div class="vision-grid">
        <div class="vision-text reveal-left">
            <span class="section-label">${vision.badge}</span>
            <h2 class="section-title">${vision.title}</h2>
            <p>${vision.description}</p>
            <div class="stats-row">
                ${vision.stats.map((s: Stat) => `
                    <div class="stat-item">
                        <span class="val">${s.value}</span>
                        <span class="lbl">${s.label}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="vision-image reveal-right">
            <img src="${vision.image}" alt="Vision Aztea">
        </div>
    </div>
  `;
};
