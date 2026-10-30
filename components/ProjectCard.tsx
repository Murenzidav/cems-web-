import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-lg bg-navy">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[4/3]">
          <Image
            src={project.coverImage}
            alt={`${project.title} — ${project.category} project in ${project.location}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <p className="text-xs font-semibold tracking-widest text-orange uppercase">
              {project.category}
            </p>
            <h3 className="mt-1 text-xl font-heading font-bold">{project.title}</h3>
            <p className="text-sm text-white/75">
              {project.location} · {project.year}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
