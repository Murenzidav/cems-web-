import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMetadata(
  title: string,
  description: string,
  path = "/",
): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${site.name}`;

  return {
    title: path === "/" ? { absolute: fullTitle } : fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_RW",
      type: "website",
      images: [{ url: "/images/logo.jpg", alt: `${site.name} logo` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
