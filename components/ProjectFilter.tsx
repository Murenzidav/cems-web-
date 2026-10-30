"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projectCategories, type Project } from "@/content/projects";

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<"All" | (typeof projectCategories)[number]>("All");

  const filtered = useMemo(() => {
    if (category === "All") return projects;
    return projects.filter((project) => project.category === category);
  }, [category, projects]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
        {(["All", ...projectCategories] as const).map((item) => {
          const active = category === item;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                active ? "btn-gradient text-white" : "bg-cream text-navy hover:bg-navy/10"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
      {filtered.length === 0 ? (
        <p className="text-muted">No projects in this category yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
