import type { Contact as ContactType } from "../types.js";

export const Contact = (contact: ContactType): string => {
  return `
    <div class="container">
        <h2 class="reveal-up">${contact.title}</h2>
        <p class="reveal-up delay-1">${contact.description}</p>
        <div class="reveal-up delay-2">
            <a href="mailto:${contact.email}" class="btn btn-dark">${contact.cta}</a>
        </div>
        <div class="contact-info reveal-up delay-2">
            <span class="contact-chip"><strong>Email :</strong> ${contact.email}</span>
            <span class="contact-chip"><strong>Zone :</strong> Afrique Centrale</span>
        </div>
    </div>
  `;
};
