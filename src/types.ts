export interface Brand {
  name: string;
  tagline: string;
  logo: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Nav {
  links: NavLink[];
  cta: string;
}

export interface Hero {
  eyebrow: string;
  title: string;
  description: string;
  cta_primary: string;
  cta_secondary: string;
  image: string | null;
}

export interface DivisionItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  cta: string;
  accent: "red" | "green";
}

export interface Divisions {
  badge: string;
  title: string;
  items: DivisionItem[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Vision {
  badge: string;
  title: string;
  description: string;
  stats: Stat[];
  image: string;
}

export interface Contact {
  title: string;
  description: string;
  cta: string;
  email: string;
}

export interface Footer {
  about: string;
  copyright: string;
}

export interface Content {
  brand: Brand;
  nav: Nav;
  hero: Hero;
  divisions: Divisions;
  vision: Vision;
  contact: Contact;
  footer: Footer;
}
