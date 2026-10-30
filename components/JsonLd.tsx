import { site } from "@/content/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.legalName,
    legalName: site.legalName,
    slogan: site.tagline,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/images/logo.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.district,
      postalCode: site.address.poBox,
      addressCountry: "RW",
    },
    areaServed: "Rwanda",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
