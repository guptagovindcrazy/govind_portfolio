import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { featuredProjects } from "@/data/projects";

export function Projects() {
  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03 — Work"
          title="Featured projects."
          description="Real repositories from my GitHub — each one links straight to the source."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
