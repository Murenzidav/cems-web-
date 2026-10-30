import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABanner } from "@/components/CTABanner";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Services",
  "Building construction, infrastructure rehabilitation and MEP, wastewater treatment plants, and construction materials from CEMS LTD in Kigali.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <Hero
        image="/images/service-building.jpg"
        imageAlt="Placeholder image for CEMS LTD services"
        title="Our services"
        subtitle="Four complementary capabilities — from new buildings to WWTP systems and materials supply."
        compact
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
