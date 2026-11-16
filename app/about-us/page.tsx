
import {
  Heart,
  ShieldCheck,
  Clapperboard,
  Handshake,
  Scale,
  type LucideIcon,
} from "lucide-react";

const coreValues: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Reverence",
    description:
      "We handle faith, tradition and sacred subjects with care and research.",
    icon: Heart,
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "We keep our word on budgets, timelines and creative commitments.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Craft",
    description:
      "We invest in strong writing, skilled technicians and finished quality.",
    icon: Clapperboard,
  },
  {
    number: "04",
    title: "Collaboration",
    description:
      "We treat writers, directors, artists, crew and partners as co-creators.",
    icon: Handshake,
  },
  {
    number: "05",
    title: "Responsibility",
    description:
      "We aim to make content that families can watch together.",
    icon: Scale,
  },
];

export default function AboutUs() {
  return (
    <main className="w-full overflow-hidden bg-[var(--white)] text-[var(--brown)]">

      {/* About Hero */}
      <section className="bg-[var(--ivory)] py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block text-[12px] font-extrabold tracking-[2.5px] text-[var(--red-dark)] sm:text-sm">
              ABOUT SHGR ENTERTAINMENT
            </span>

            <h1 className="mt-5 mb-5 font-heading text-[clamp(38px,6vw,76px)] font-medium leading-[1.15] tracking-[-1.5px] sm:tracking-[-2px]">
              Stories with purpose.
              <em className="block not-italic text-[var(--red-dark)]">
                Made with conviction.
              </em>
            </h1>

            <p className="max-w-2xl text-[13px] leading-[1.9] text-[var(--text-secondary)] sm:text-sm">
              Every story has a voice. We believe in bringing meaningful
              stories to the screen with sincerity, creativity and craft.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[var(--white)] py-16 sm:py-20 lg:py-[105px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-[95px]">

            {/* Story Heading */}
            <div>
              <span className="inline-block text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)]">
                01 / OUR STORY
              </span>

              <h2 className="mt-5 mb-6 max-w-[470px] font-heading text-[clamp(35px,4.5vw,57px)] font-medium leading-[1.22]">
                Every culture carries stories
                <em className="block not-italic text-[var(--red-dark)]">
                  worth telling well.
                </em>
              </h2>

              <span className="block h-[2px] w-[55px] bg-[var(--gold-dark)]" />
            </div>

            {/* Story Content */}
            <div className="pt-1">
              <p className="mb-5 font-heading text-[19px] leading-[1.75] text-[var(--brown)] sm:text-[21px]">
                Every culture carries stories that deserve to be told well.
                India’s spiritual traditions, saints, folk legends and
                everyday human dramas are among the richest sources of
                cinema in the world.
              </p>

              <p className="mb-5 text-[13px] leading-[2] text-[var(--text-secondary)] sm:text-sm">
                SHGR Entertainment was founded to bring these stories to
                the screen with sincerity and craft. We are a new-generation
                production house built on a clear belief: a film should
                respect its subject, its audience and the people who make it.
              </p>

              <p className="mb-5 text-[13px] leading-[2] text-[var(--text-secondary)] sm:text-sm">
                We are at the start of our journey, and we approach every
                project with the focus, discipline and humility of a team
                that intends to earn its reputation one film at a time.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[var(--gold-dark)]" />
                <strong className="text-[10px] font-extrabold tracking-[1.8px] text-[var(--red-dark)]">
                  SHGR ENTERTAINMENT
                </strong>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[var(--ivory)] py-16 sm:py-20 lg:pt-[95px] lg:pb-[105px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="mb-9 flex flex-col items-start justify-between gap-4 md:mb-11 lg:flex-row lg:items-end lg:gap-10">
            <div>
              <span className="inline-block text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)]">
                02 / WHAT GUIDES US
              </span>

              <h2 className="mt-4 font-heading text-[clamp(35px,4.5vw,56px)] font-medium leading-tight">
                Our Core <em className="not-italic text-[var(--red-dark)]">Values.</em>
              </h2>
            </div>

            <p className="mb-1 max-w-[380px] text-[13px] leading-[1.9] text-[var(--text-secondary)]">
              The principles that shape our creative decisions,
              our relationships and the way we bring stories to life.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 border-t border-b border-[var(--border-gold)] sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.number}
                  className="group min-w-0 border-x border-b border-[var(--border-gold)] px-5 py-7 transition-all duration-300 ease-in-out hover:bg-white/70 sm:px-5 sm:py-8 lg:border-b-0 lg:border-r-0 lg:last:border-r"
                >
                  <span className="mb-6 block text-[10px] font-extrabold tracking-[1.5px] text-[var(--gold-dark)]">
                    {value.number}
                  </span>

                  <div className="mb-5 grid h-[43px] w-[43px] place-items-center rounded-full border border-[var(--border-gold)] bg-[var(--white)] text-[var(--red-dark)] transition-all duration-300 group-hover:border-[var(--red-dark)] group-hover:bg-[var(--red-dark)] group-hover:text-white group-hover:shadow-[0_5px_15px_rgba(148,22,38,0.18)]">
                    <Icon size={23} strokeWidth={1.5} />
                  </div>

                  <h3 className="mb-3 font-heading text-xl font-semibold text-[var(--brown)] transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="text-xs leading-[1.85] text-[var(--text-secondary)]">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}
