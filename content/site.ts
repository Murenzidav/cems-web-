export const site = {
  name: "CEMS LTD",
  legalName: "CEMS LTD (Civil Engineering & Multi-services)",
  tagline: "High Commitment",
  description:
    "Civil engineering, building construction, infrastructure rehabilitation, wastewater treatment systems, and construction materials in Kigali, Rwanda.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cemsltd.com",
  email: "cemsltd2023@gmail.com",
  phone: "+250 788 452 068",
  phoneTel: "+250788452068",
  whatsappUrl: "https://wa.me/250788452068",
  address: {
    street: "KK 8 Avenue",
    district: "Kicukiro",
    city: "Kigali",
    country: "Rwanda",
    poBox: "P.O. Box 852",
    full: "KK 8 Avenue, Kicukiro, Kigali, Rwanda. P.O. Box 852",
  },
  mapEmbedUrl:
    "https://maps.google.com/maps?q=KK%208%20Avenue%2C%20Kicukiro%2C%20Kigali%2C%20Rwanda&t=&z=15&ie=UTF8&iwloc=&output=embed",
  social: {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
    x: "#",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
