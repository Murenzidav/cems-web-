export const projectCategories = [
  "Commercial",
  "Residential",
  "Roads & Infrastructure",
  "Water Treatment",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  summary: string;
  description: string;
  coverImage: string;
  images: { src: string; alt: string }[];
  featured?: boolean;
};

/**
 * Sample placeholder projects so the gallery and filters work.
 * Replace titles, locations, copy and image paths with real jobs.
 */
export const projects: Project[] = [
  {
    slug: "kicukiro-commercial-block",
    title: "Kicukiro commercial block",
    category: "Commercial",
    location: "Kicukiro, Kigali",
    year: 2024,
    summary: "New commercial shell and finishes for mixed retail and office use.",
    description:
      "Placeholder project. A multi-storey commercial building with retail at ground level and offices above. Scope includes structure, envelope and interior coordination. Replace this text with the real project description.",
    coverImage: "/images/project-1.jpg",
    images: [
      { src: "/images/project-1.jpg", alt: "Placeholder photo of a commercial building exterior" },
      { src: "/images/gallery-1.jpg", alt: "Placeholder photo of commercial interior works" },
      { src: "/images/service-building.jpg", alt: "Placeholder photo of building construction progress" },
    ],
    featured: true,
  },
  {
    slug: "nyarugenge-admin-offices",
    title: "Nyarugenge administrative offices",
    category: "Commercial",
    location: "Nyarugenge, Kigali",
    year: 2023,
    summary: "Fit-out and exterior works for an administrative office building.",
    description:
      "Placeholder project. Office rehabilitation covering partitions, finishes and exterior upgrades. Replace this text with the real project description.",
    coverImage: "/images/project-2.jpg",
    images: [
      { src: "/images/project-2.jpg", alt: "Placeholder photo of administrative offices" },
      { src: "/images/gallery-3.jpg", alt: "Placeholder photo of office finishing works" },
    ],
    featured: true,
  },
  {
    slug: "kagugu-residences",
    title: "Kagugu residences",
    category: "Residential",
    location: "Gasabo, Kigali",
    year: 2024,
    summary: "Residential construction including interior and exterior design.",
    description:
      "Placeholder project. Family residences with coordinated interior and exterior design. Replace this text with the real project description.",
    coverImage: "/images/project-3.jpg",
    images: [
      { src: "/images/project-3.jpg", alt: "Placeholder photo of residential buildings" },
      { src: "/images/gallery-2.jpg", alt: "Placeholder photo of residential interiors" },
    ],
    featured: true,
  },
  {
    slug: "gikondo-apartments",
    title: "Gikondo apartments",
    category: "Residential",
    location: "Kicukiro, Kigali",
    year: 2022,
    summary: "Apartment building works from structure through to finishes.",
    description:
      "Placeholder project. Multi-unit residential construction. Replace this text with the real project description.",
    coverImage: "/images/project-4.jpg",
    images: [
      { src: "/images/project-4.jpg", alt: "Placeholder photo of apartment construction" },
      { src: "/images/service-building.jpg", alt: "Placeholder photo of residential finishing" },
    ],
  },
  {
    slug: "kk8-access-road",
    title: "KK 8 access improvements",
    category: "Roads & Infrastructure",
    location: "Kicukiro, Kigali",
    year: 2023,
    summary: "Road rehabilitation and drainage along a local access corridor.",
    description:
      "Placeholder project. Road rehabilitation including surfacing and drainage. Replace this text with the real project description.",
    coverImage: "/images/project-5.jpg",
    images: [
      { src: "/images/project-5.jpg", alt: "Placeholder photo of road rehabilitation" },
      { src: "/images/service-rehab.jpg", alt: "Placeholder photo of infrastructure maintenance" },
    ],
    featured: true,
  },
  {
    slug: "kanombe-road-upkeep",
    title: "Kanombe road upkeep",
    category: "Roads & Infrastructure",
    location: "Kicukiro, Kigali",
    year: 2021,
    summary: "Maintenance programme for local roads and associated works.",
    description:
      "Placeholder project. Planned road maintenance. Replace this text with the real project description.",
    coverImage: "/images/project-6.jpg",
    images: [
      { src: "/images/project-6.jpg", alt: "Placeholder photo of road maintenance" },
      { src: "/images/gallery-1.jpg", alt: "Placeholder photo of infrastructure works" },
    ],
  },
  {
    slug: "industrial-wwtp-install",
    title: "Industrial WWTP installation",
    category: "Water Treatment",
    location: "Kigali Special Economic Zone",
    year: 2024,
    summary: "Installation of a wastewater treatment plant for an industrial client.",
    description:
      "Placeholder project. WWTP installation and commissioning. Replace this text with the real project description.",
    coverImage: "/images/project-7.jpg",
    images: [
      { src: "/images/project-7.jpg", alt: "Placeholder photo of a wastewater treatment plant" },
      { src: "/images/service-wwtp.jpg", alt: "Placeholder photo of WWTP equipment" },
    ],
  },
  {
    slug: "institutional-wwtp-maintenance",
    title: "Institutional WWTP maintenance",
    category: "Water Treatment",
    location: "Kigali",
    year: 2023,
    summary: "Ongoing maintenance of an institutional wastewater treatment system.",
    description:
      "Placeholder project. Preventive and corrective WWTP maintenance. Replace this text with the real project description.",
    coverImage: "/images/project-8.jpg",
    images: [
      { src: "/images/project-8.jpg", alt: "Placeholder photo of WWTP maintenance works" },
      { src: "/images/gallery-3.jpg", alt: "Placeholder photo of water treatment infrastructure" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
