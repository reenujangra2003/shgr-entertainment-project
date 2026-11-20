import Image from "next/image";
import { unstable_rethrow } from "next/navigation";
import { getProjects } from "@/services/project.service";

export default async function ProjectCards() {
  try {
    const response = await getProjects();
    console.log("✅ PROJECT API RESPONSE:", response);

    const projects = response.data;

    if (!Array.isArray(projects) || projects.length === 0) {
      return (
        <p className="text-center text-sm text-[var(--text-secondary)]">
          No projects available right now.
        </p>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 lg:gap-x-9 lg:gap-y-16">
        {projects.map((project, index) => (
          <article key={project.id} className="group min-w-0">
            {/* IMAGE */}
            <div className="relative aspect-[16/10] overflow-hidden border border-[var(--border-gold)] bg-[var(--cream)]">
              <Image
                src={project.image}
                alt={project.title || "Project image"}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />
              <span className="absolute left-5 top-5 border border-white/60 bg-white/90 px-3 py-2 text-[9px] font-extrabold tracking-[1.5px] text-[var(--red-dark)]">
                {project.projectType}
              </span>
              <span className="absolute bottom-5 right-5 font-heading text-4xl font-semibold text-white/90">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* CONTENT */}
            <div className="border-b border-[var(--gold-dark)] py-6">
           
<div className="mb-3 flex flex-wrap items-center gap-3 text-[9px] font-extrabold tracking-[1.4px] text-[var(--gold-dark)]">
  {project.tags.map((tag, index) => (
    <span key={`${tag}-${index}`} className="inline-flex items-center gap-3">
      {index > 0 && (
        <span
          aria-hidden="true"
          className="h-1 w-1 shrink-0 rounded-full bg-[var(--red)]"
        />
      )}

      <span>{tag}</span>
    </span>
  ))}
</div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--red-dark)] sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-xl line-clamp-2 text-[14px] leading-7 text-[var(--text-secondary)]">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    );
  } catch (error: unknown) {
    // Preserve Next.js framework errors such as prerendering and redirects.
    unstable_rethrow(error);
    console.error("❌ Project request failed:", error);
    return (
      <p
        className="text-center text-sm text-[var(--text-secondary)]"
        role="alert"
      >
        Projects could not be loaded. Please try again later.
      </p>
    );
  }
}
