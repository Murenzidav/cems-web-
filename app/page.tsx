import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { about } from "@/content/about";
import { getFeaturedProjects } from "@/content/projects";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  `${site.name} | Civil engineering in Kigali`,
  "CEMS LTD builds, rehabilitates and supplies civil engineering works in Kigali, Rwanda. High Commitment.",
  "/",
);

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Hero
        image="/images/hero.jpg"
        imageAlt="Placeholder aerial view representing CEMS LTD construction work in Kigali"
        title="Civil engineering that puts clients first"
        subtitle="Building construction, infrastructure rehabilitation, wastewater systems and materials — delivered from Kigali with high commitment."
        primaryHref="/contact"
        primaryLabel="Request a quote"
        secondaryHref="/services"
        secondaryLabel="Our services"
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-sm font-semibold tracking-[0.2em] text-orange uppercase">About us</p>
        <div className="mt-3 grid gap-10 md:grid-cols-2 md:items-center">
          <h2 className="text-3xl font-heading font-extrabold sm:text-4xl">{about.headline}</h2>
          <div>
            <p className="text-muted leading-relaxed">{about.intro}</p>
            <Link href="/about" className="mt-5 inline-flex font-semibold text-red hover:text-orange">
              Read more about CEMS
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-orange uppercase">Services</p>
              <h2 className="mt-2 text-3xl font-heading font-extrabold sm:text-4xl">What we do</h2>
            </div>
            <Link href="/services" className="hidden font-semibold text-red sm:inline">
              All services
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-[0.2em] text-orange uppercase">Projects</p>
          <h2 className="mt-2 text-3xl font-heading font-extrabold sm:text-4xl">Featured work</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Sample projects with placeholder photos. Swap them for real jobs in content/projects.ts.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link href="/projects" className="mt-8 inline-flex font-semibold text-red hover:text-orange">
          View all projects
        </Link>
      </section>

      <CTABanner />
    </>
  );
}
