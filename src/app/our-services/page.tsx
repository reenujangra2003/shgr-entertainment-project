
import {
  ArrowUpRight,
  Lightbulb,
  ClipboardList,
  Clapperboard,
  Scissors,
  Send,
  type LucideIcon,
} from "lucide-react";

const services: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}[] = [
  {
    number: "01",
    title: "Development",
    subtitle: "Where every story begins.",
    description:
      "We shape ideas into well-developed stories and build a strong creative foundation for every project.",
    icon: Lightbulb,
    items: [
      "Idea and concept development",
      "Script, screenplay and dialogue development",
      "Story bible and series outline",
      "Research and subject consultation",
      "Project packaging for partners and platforms",
    ],
  },
  {
    number: "02",
    title: "Pre-Production",
    subtitle: "Planning every detail.",
    description:
      "We bring together the people, resources and planning required to move a creative vision towards production.",
    icon: ClipboardList,
    items: [
      "Budgeting and financial planning",
      "Scheduling and production planning",
      "Casting and talent coordination",
      "Location scouting and permissions",
      "Crew hiring and equipment planning",
    ],
  },
  {
    number: "03",
    title: "Production",
    subtitle: "Bringing the vision to life.",
    description:
      "We coordinate the on-ground execution of each project with structured workflows and attention to detail.",
    icon: Clapperboard,
    items: [
      "Line production and set management",
      "Production coordination and logistics",
      "Daily reporting and cost control",
      "Safety and compliance on set",
    ],
  },
  {
    number: "04",
    title: "Post-Production",
    subtitle: "Crafting the final experience.",
    description:
      "We refine every frame, sound and visual element to bring the story together into its final form.",
    icon: Scissors,
    items: [
      "Editing and assembly",
      "Music, background score and sound design",
      "Visual effects and colour grading",
      "Subtitling and quality control",
    ],
  },
  {
    number: "05",
    title: "Delivery & Release Support",
    subtitle: "Preparing stories for audiences.",
    description:
      "We support the final preparation of content for platforms, broadcasters, festivals and distribution channels.",
    icon: Send,
    items: [
      "Platform-ready and broadcast-ready deliverables",
      "Trailers, teasers and promotional content",
      "Festival and distribution coordination",
    ],
  },
];

export default function Services() {
  return (
    <main className="custom-services-page w-full overflow-hidden bg-[var(--white)] font-body text-[var(--brown)]">

      {/* HERO */}
      <section className="bg-[radial-gradient(circle_at_88%_20%,rgba(249,197,38,0.15),transparent_28%),var(--ivory)] pt-14 sm:pt-16 lg:pt-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="pb-16 sm:pb-20 lg:pb-[100px]">
            <span className="mb-5 inline-block text-[10px] font-extrabold tracking-[2.2px] text-[var(--gold-dark)]">
              WHAT WE BRING TO THE SCREEN
            </span>

            <h1 className="font-heading text-[clamp(38px,6vw,76px)] font-semibold leading-[1.13] tracking-[-1.5px] sm:tracking-[-2px]">
              From the First Idea
              <span className="block italic text-[var(--red-dark)]">
                to the Final Frame.
              </span>
            </h1>

            <p className="mt-5 mb-7 text-[13px] leading-[1.9] text-[var(--text-secondary)] sm:text-sm">
              Every production takes a story through multiple stages.
              We bring creative development, planning and production
              execution together to shape stories for the screen.
            </p>

            <a
              href="#services-detail"
              className="group inline-flex items-center gap-3 border-b border-[var(--gold-dark)] pb-[9px] text-[10px] font-extrabold tracking-[1.3px] text-[var(--brown)] no-underline"
            >
              EXPLORE OUR SERVICES
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
              />
            </a>
          </div>

          {/* Hero Footer */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-[var(--border-gold)] py-5 text-[8px] font-extrabold tracking-[1px] text-[var(--text-secondary)] sm:gap-x-[17px] sm:text-[9px]">
            <span>DEVELOPMENT</span>
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--gold-dark)]" />
            <span>PRODUCTION</span>
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--gold-dark)]" />
            <span>POST-PRODUCTION</span>
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--gold-dark)]" />
            <span>RELEASE</span>
          </div>

        </div>
      </section>

      {/* SERVICES IN DETAIL */}
      <section
        className="bg-[var(--white)] py-16 sm:py-20 lg:py-[50px]"
        id="services-detail"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="mb-9 flex flex-col justify-between gap-4 md:mb-12 lg:flex-row lg:items-end lg:gap-10">
            <div>
              <span className="mb-5 inline-block text-[10px] font-extrabold tracking-[2.2px] text-[var(--gold-dark)]">
                SERVICES IN DETAIL
              </span>

              <h2 className="max-w-[650px] font-heading text-[clamp(35px,4.5vw,56px)] font-semibold leading-[1.2]">
                Every Stage.
                <span className="italic text-[var(--red-dark)]">
                  {" "}Thoughtfully Managed.
                </span>
              </h2>
            </div>

            <p className="mb-1 max-w-[390px] text-[12px] leading-[1.9] text-[var(--text-secondary)] sm:text-[13px]">
              From developing the initial concept to preparing the final
              deliverables, each stage contributes to a well-executed
              production.
            </p>
          </div>

          {/* Services List */}
          <div className="border-t border-[var(--border-gold)]">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group relative grid grid-cols-[42px_minmax(0,1fr)] gap-x-3 gap-y-5 overflow-hidden border-b border-[var(--border-gold)] px-1 py-8 transition-colors duration-300 hover:bg-[var(--ivory)] sm:grid-cols-[55px_minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-x-5 sm:px-3 sm:py-10 lg:grid-cols-[75px_minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-[35px] lg:px-[15px] lg:py-[42px]"
                >

                  {/* Number */}
                  <div className="relative z-[1] pt-1 font-heading text-[22px] font-semibold text-[var(--gold-dark)] sm:text-[25px] lg:text-[27px]">
                    {service.number}
                  </div>

                  {/* Main Content */}
                  <div className="relative z-[1] min-w-0">
                    <div>
                      <span className="mb-3 block text-[9px] font-extrabold uppercase tracking-[1px] text-[var(--red-dark)] sm:text-[10px]">
                        {service.subtitle}
                      </span>

                      <h3 className="mb-3 font-heading text-[22px] font-semibold leading-[1.2] sm:text-[28px] lg:text-[31px]">
                        {service.title}
                      </h3>

                      <p className="m-0 max-w-[360px] text-[11px] leading-[1.9] text-[var(--text-secondary)] sm:text-xs">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="relative z-[1] col-start-2 flex gap-3 sm:col-start-auto sm:gap-5">
                    <div className="flex h-[38px] w-[38px] flex-none items-center justify-center border border-[var(--border-gold)] bg-[var(--ivory)] text-[var(--red-dark)] transition-all duration-300 group-hover:border-[var(--red-dark)] group-hover:bg-[var(--red-dark)] group-hover:text-white sm:h-[42px] sm:w-[42px] lg:h-[46px] lg:w-[46px]">
                      <Icon size={23} strokeWidth={1.5} />
                    </div>

                    <ul className="m-0 grid min-w-0 gap-3 p-0">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[11px] leading-[1.6] text-[var(--text-secondary)] sm:text-xs"
                        >
                          <span className="mt-[6px] h-[6px] w-[6px] flex-none rounded-full bg-[var(--gold-dark)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Watermark */}
                  <div className="pointer-events-none absolute right-2 bottom-[-45px] font-heading text-[90px] font-bold text-[rgba(201,138,8,0.045)] sm:text-[120px] lg:right-[10px] lg:text-[150px]">
                    {service.number}
                  </div>

                </article>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}