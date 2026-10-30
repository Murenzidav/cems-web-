import { CTABanner } from "@/components/CTABanner";
import { Hero } from "@/components/Hero";
import { ProjectFilter } from "@/components/ProjectFilter";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Projects",
  "Browse CEMS LTD projects by category: commercial, residential, roads and infrastructure, and water treatment.",
  "/projects",
);

export default function ProjectsPage() {
  return (
    <>
      <Hero
        image="/images/project-1.jpg"
        imageAlt="Placeholder image for CEMS LTD projects gallery"
        title="Projects"
        subtitle="A sample gallery you can replace with real work. Filter by category."
        compact
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ProjectFilter projects={projects} />
      </section>
      <CTABanner />
    </>
  );
}
