
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clapperboard,
  Film,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "DEVOTIONAL CINEMA",
    format: "FEATURE FILM",
    title: "The Path of Faith",
    description:
      "A devotional story exploring faith, belief and the spiritual strength that guides people through life's most challenging moments.",
    image: "/images/p1.jpg",
    imageAlt: "Traditional heritage architecture",
  },
  {
    number: "02",
    category: "FICTION & DRAMA",
    format: "WEB SERIES",
    title: "Rishton Ke Dhaage",
    description:
      "A character-driven story exploring family relationships, emotions and the invisible bonds that connect generations.",
    image: "/images/p2.avif",
    imageAlt: "Cinematic fiction and drama visual",
  },
  {
    number: "03",
    category: "FICTION",
    format: "DRAMA SERIES",
    title: "Virasat – The Legacy",
    description:
      "A story of family, heritage and the choices that shape the legacy we leave behind.",
    image: "/images/p3.webp",
    imageAlt: "Cinematic storytelling visual",
  },
  {
    number: "04",
    category: "DEVOTIONAL",
    format: "EPISODIC SERIES",
    title: "Anant – Stories of Devotion",
    description:
      "An episodic collection inspired by devotion, timeless values and stories that continue to touch generations.",
    image: "/images/p4.webp",
    imageAlt: "Devotional storytelling visual",
  },
];

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
              Explore our creative slate across devotional cinema, fiction
              films and original episodic storytelling.
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
      <section
        id="project-list"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
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
              From meaningful devotional narratives to engaging fiction,
              every project reflects our commitment to thoughtful storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 lg:gap-x-9 lg:gap-y-16">
            {projects.map((project) => (
              <article key={project.number} className="group min-w-0">

                {/* IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden border border-[var(--border-gold)] bg-[var(--cream)]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />

                  <span className="absolute left-5 top-5 border border-white/60 bg-white/90 px-3 py-2 text-[9px] font-extrabold tracking-[1.5px] text-[var(--red-dark)]">
                    {project.category}
                  </span>

                  <span className="absolute bottom-5 right-5 font-heading text-4xl font-semibold text-white/90">
                    {project.number}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="border-b border-[var(--gold-dark)] py-6">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-[9px] font-extrabold tracking-[1.4px] text-[var(--gold-dark)]">
                    <span>{project.format}</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--red)]" />
                    <span>SHGR ENTERTAINMENT</span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--red-dark)] sm:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mt-3 max-w-xl h-[56] line-clamp-2 text-[14px] leading-7 text-[var(--text-secondary)]">
                        {project.description}
                      </p>
                    </div>

                    {/* <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-gold)] text-[var(--red-dark)] transition-all duration-300 group-hover:border-[var(--red-dark)] group-hover:bg-[var(--red-dark)] group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </span> */}
                  </div>
                </div>

              </article>
            ))}
          </div>



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
              We bring creative thinking and structured production together
              to move every idea towards the screen.
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
