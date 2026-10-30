import Image from "next/image";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/CTABanner";
import { Hero } from "@/components/Hero";
import { getService, services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata(service.title, service.summary, `/services/${service.slug}`);
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <Hero image={service.image} imageAlt={service.imageAlt} title={service.title} compact />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-start">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image src={service.image} alt={service.imageAlt} fill className="object-cover" sizes="50vw" />
        </div>
        <div>
          <p className="text-lg leading-relaxed text-muted">{service.description}</p>
          <ul className="mt-6 space-y-2">
            {service.points.map((point) => (
              <li key={point} className="flex gap-3 text-navy">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTABanner title="Need this service?" />
    </>
  );
}
