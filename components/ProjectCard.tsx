import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300">
      <h3 className="mb-2 text-lg font-semibold text-zinc-900">
        {project.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-600">
        {project.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 transition-colors hover:text-indigo-500"
          >
            GitHub &rarr;
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 transition-colors hover:text-indigo-500"
          >
            Live &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
