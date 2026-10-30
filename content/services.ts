export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "building-construction",
    title: "Building construction",
    shortTitle: "Buildings",
    summary:
      "Commercial, industrial, administrative and residential buildings, including interior and exterior design.",
    description:
      "We plan and deliver building works for private and public clients in Kigali and across Rwanda. From structural works to finishing, we coordinate trades so the result is durable, usable and aligned with the brief.",
    points: [
      "Commercial and industrial buildings",
      "Administrative and civic facilities",
      "Residential developments",
      "Interior and exterior design coordination",
    ],
    image: "/images/service-building.jpg",
    imageAlt: "Placeholder image for building construction projects",
  },
  {
    slug: "rehabilitation-maintenance",
    title: "Rehabilitation and maintenance",
    shortTitle: "Rehab & MEP",
    summary:
      "Rehabilitation and maintenance of roads and buildings, including mechanical, electrical and plumbing (MEP).",
    description:
      "Existing assets need care as much as new ones. We rehabilitate and maintain roads and buildings, and we handle MEP so mechanical, electrical and plumbing systems keep working safely.",
    points: [
      "Road rehabilitation and upkeep",
      "Building repairs and upgrades",
      "Mechanical, electrical and plumbing (MEP)",
      "Planned maintenance programmes",
    ],
    image: "/images/service-rehab.jpg",
    imageAlt: "Placeholder image for infrastructure rehabilitation",
  },
  {
    slug: "wastewater-treatment",
    title: "Wastewater treatment plants",
    shortTitle: "WWTP",
    summary:
      "Installation and maintenance of wastewater treatment plant (WWTP) systems.",
    description:
      "We install and maintain wastewater treatment plant systems so communities and facilities can treat effluent reliably. Our teams support commissioning, routine servicing and corrective work.",
    points: [
      "WWTP installation and commissioning",
      "Preventive and corrective maintenance",
      "System upgrades and troubleshooting",
      "Support for institutional and private clients",
    ],
    image: "/images/service-wwtp.jpg",
    imageAlt: "Placeholder image for wastewater treatment systems",
  },
  {
    slug: "construction-materials",
    title: "Construction materials",
    shortTitle: "Materials",
    summary: "Wholesale and retail of construction materials.",
    description:
      "We supply construction materials at wholesale and retail, helping contractors and property owners source what they need for build and maintenance programmes.",
    points: [
      "Wholesale supply for contractors",
      "Retail for smaller works and homeowners",
      "Materials aligned with site requirements",
      "Reliable local availability in Kigali",
    ],
    image: "/images/service-materials.jpg",
    imageAlt: "Placeholder image for construction materials supply",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
