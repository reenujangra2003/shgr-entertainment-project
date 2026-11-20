import { ArrowUpRight, Clapperboard, Film, Sparkles } from "lucide-react";

import { Suspense } from "react";
import ProjectCards from "@/components/common/ProjectCards";
import Loader from "@/components/common/Loader";

const journey = [
  {
    number: "01",
    title: "Story Development",
    description:
      "Building meaningful ideas into compelling stories with a strong creative foundation.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Creative Production",
    description:
      "Bringing every story to life through thoughtful planning and professional execution.",
    icon: Clapperboard,
  },
  {
    number: "03",
    title: "Stories for Audiences",
    description:
      "Preparing engaging content for viewers across platforms and formats.",
    icon: Film,
  },
];

export default function OurProjects() {
  return (
    <main className="overflow-hidden bg-[var(--ivory)]">
      {/* HERO */}
      <section className="bg-[radial-gradient(circle_at_88%_20%,rgba(249,197,38,0.15),transparent_28%),var(--ivory)] pt-14 sm:pt-16 lg:pt-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pb-16 sm:pb-20 lg:pb-[100px]">
            <span className="mb-5 inline-block text-[14px] font-extrabold tracking-[2.2px] text-[var(--gold-dark)]">
              OUR CREATIVE PORTFOLIO
            </span>

            <h1 className="font-heading text-[clamp(38px,6vw,76px)] font-semibold leading-[1.13] tracking-[-1.5px] sm:tracking-[-2px]">
              Stories Made
              <span className="block italic text-[var(--red-dark)]">
                to Be Remembered.
              </span>
            </h1>

            <p className="mt-5 mb-7 text-[13px] leading-[1.9] text-[var(--text-secondary)] sm:text-sm">
              Every story begins with an idea and grows into an experience.
              Explore our creative slate across devotional cinema, fiction films
              and original episodic storytelling.
            </p>

            <a
              href="#project-list"
              className="group inline-flex items-center gap-3 border-b border-[var(--gold-dark)] pb-[9px] text-[10px] font-extrabold tracking-[1.3px] text-[var(--brown)] no-underline"
            >
              EXPLORE OUR PROJECTS
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
              />
            </a>
          </div>

          {/* HERO FOOTER */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-[var(--border-gold)] py-5 text-[8px] font-extrabold tracking-[1px] text-[var(--text-secondary)] sm:gap-x-[17px] sm:text-[9px]">
            <span>DEVOTIONAL CINEMA</span>
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--gold-dark)]" />
            <span>FICTION FILMS</span>
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--gold-dark)]" />
            <span>WEB SERIES</span>
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--gold-dark)]" />
            <span>ORIGINAL CONTENT</span>
          </div>
        </div>
      </section>

      {/* PROJECT LIST */}
      <section id="project-list" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
            <div>
              <span className="mb-3 inline-block text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)]">
                A SELECTION OF OUR WORK
              </span>
              <h2 className="font-heading text-3xl font-semibold leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
                Our Creative Slate
                <span className="block italic text-[var(--red-dark)]">
                  Stories with a Purpose.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[var(--text-secondary)]">
              From meaningful devotional narratives to engaging fiction, every
              project reflects our commitment to thoughtful storytelling.
            </p>
          </div>

          <Suspense
            fallback={<Loader text="Loading projects..." size="md" />}
          >
            <ProjectCards />
          </Suspense>

        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--ivory)] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-block text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)]">
              BEHIND EVERY PRODUCTION
            </span>

            <h2 className="font-heading text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
              Every Story Has
              <span className="block italic text-[var(--red-dark)]">
                a Journey.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
              We bring creative thinking and structured production together to
              move every idea towards the screen.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {journey.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative border border-[var(--border-gold)] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_35px_rgba(201,138,8,0.12)] sm:p-9"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-heading text-4xl font-semibold text-[var(--gold-light)] transition-colors duration-300 group-hover:text-[var(--gold-dark)]">
                      {item.number}
                    </span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cream)] text-[var(--red-dark)] transition-all duration-300 group-hover:bg-[var(--red-dark)] group-hover:text-white">
                      <Icon size={21} strokeWidth={1.7} />
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-7 text-[var(--text-secondary)]">
                    {item.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--gold-dark)] transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
