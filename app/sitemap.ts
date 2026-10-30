import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPaths = ["", "/services", "/projects", "/about", "/contact", "/privacy"];

  return [
    ...staticPaths.map((path) => ({
      url: `${site.url}${path}`,
      lastModified,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      lastModified,
    })),
  ];
}
