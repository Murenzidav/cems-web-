import Image from "next/image";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/CTABanner";
import { getProject, projects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata(project.title, project.summary, `/projects/${project.slug}`);
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative isolate min-h-[50vh]">
        <Image
          src={project.coverImage}
          alt={`${project.title} cover photo`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6">
          <p className="text-sm font-semibold tracking-widest text-orange uppercase">{project.category}</p>
          <h1 className="mt-2 text-4xl font-heading font-extrabold text-white sm:text-5xl">{project.title}</h1>
          <p className="mt-3 text-white/80">
            {project.location} · {project.year}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-lg leading-relaxed text-muted">{project.description}</p>
      </article>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 sm:px-6 sm:grid-cols-2">
        {project.images.map((image) => (
          <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="50vw" />
          </div>
        ))}
      </section>

      <CTABanner />
    </>
  );
}
