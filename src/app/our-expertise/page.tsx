
import {
  ArrowUpRight,
  BookOpen,
  ShieldCheck,
  Heart,
  Music2,
  Users,
  Film,
  Tv,
  Video,
  Play,
  Sparkles,
  Clapperboard,
  type LucideIcon,
} from "lucide-react";

const devotionalApproach: {
  title: string;
  description: string;
}[] = [
    {
      title: "Research-led Scripts",
      description:
        "Stories are built from authentic sources, traditions and the guidance of subject experts.",
    },
    {
      title: "Cultural & Spiritual Consultation",
      description:
        "Sensitive subjects are reviewed with knowledgeable advisors before and during production.",
    },
    {
      title: "Respectful Treatment",
      description:
        "Sacred figures, rituals and symbols are portrayed with dignity and understanding.",
    },
    {
      title: "Cinematic Quality",
      description:
        "Music, locations, costume and design support the emotional and spiritual tone of the story.",
    },
  ];

const fictionGenres = [
  "Family & Relationship Dramas",
  "Social & Contemporary Stories",
  "Inspirational & Coming-of-Age Narratives",
  "Mystery, Thriller & Suspense",
  "Short Films & Anthology Formats",
];

const formats: {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
    {
      number: "01",
      icon: Film,
      title: "Feature Films",
      description:
        "Theatrical and platform releases in devotional and fiction genres.",
    },
    {
      number: "02",
      icon: Tv,
      title: "Web Series",
      description:
        "Multi-episode series created for OTT and digital platforms.",
    },
    {
      number: "03",
      icon: Play,
      title: "Limited Series",
      description:
        "Story-driven series with a defined, compact run.",
    },
    {
      number: "04",
      icon: Video,
      title: "Short Films",
      description:
        "Festival-ready and platform-ready short stories.",
    },
    {
      number: "05",
      icon: Sparkles,
      title: "Devotional Shorts",
      description:
        "Spiritual and heritage content for digital audiences.",
    },
    {
      number: "06",
      icon: Clapperboard,
      title: "Documentary-style Content",
      description:
        "Informative and heritage-based storytelling.",
    },
  ];

export default function Expertise() {
  return (
    <main className="custom-expertise w-full overflow-hidden bg-[var(--white)] font-body text-[var(--brown)]">

      {/* HERO */}
      <section className="relative bg-[radial-gradient(circle_at_85%_15%,rgba(249,197,38,0.13),transparent_28%),var(--ivory)] pt-14 sm:pt-16 lg:pt-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pb-16 sm:pb-20 lg:pb-[95px]">
            <span className="mb-5 inline-block text-xs font-extrabold tracking-[2.5px] text-[var(--gold-dark)] sm:mb-[22px] sm:text-sm">
              OUR CREATIVE EXPERTISE
            </span>

            <h1 className="font-heading text-[clamp(38px,6vw,76px)] font-semibold leading-[1.12] tracking-[-1.5px] sm:tracking-[-2px]">
              Stories with
              <span className="block italic text-[var(--red-dark)]">
                Purpose & Perspective.
              </span>
            </h1>

            <p className="mt-5 mb-6 text-[13px] leading-[1.9] text-[var(--text-secondary)] sm:text-[15px]">
              From devotional cinema rooted in India's cultural heritage
              to fiction driven by human emotions, we explore stories
              that deserve to be experienced on screen.
            </p>

            <a
              href="#expertise-domains"
              className="group inline-flex items-center gap-3 border-b border-[var(--gold-dark)] pb-[9px] text-[11px] font-extrabold tracking-[1.3px] text-[var(--brown)] no-underline"
            >
              EXPLORE OUR EXPERTISE
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
              />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-[var(--border-gold)] py-5 text-[9px] font-extrabold tracking-[1.2px] text-[var(--text-secondary)] sm:gap-x-[18px] sm:text-[10px]">
            <span>DEVOTIONAL CINEMA</span>
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--gold-dark)]" />
            <span>FICTION STORYTELLING</span>
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--gold-dark)]" />
            <span>FILM & DIGITAL CONTENT</span>
          </div>
        </div>
      </section>

      {/* DEVOTIONAL CINEMA */}
      <section
        className="bg-[var(--white)] py-16 sm:py-20 lg:py-[105px]"
        id="expertise-domains"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-9 lg:grid-cols-12 lg:gap-10 xl:gap-12">

            {/* Image */}
            <div className="lg:col-span-5">
              <div className="group relative h-[340px] overflow-hidden bg-[var(--cream)] sm:h-[450px] lg:h-[450px] xl:h-[530px]">
                <img
                  src="/images/p3.pngs"
                  alt="Cinematic visual representing devotional storytelling"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute right-0 bottom-0 left-0 flex flex-col gap-[7px] bg-gradient-to-t from-[rgba(23,20,17,0.88)] to-transparent px-5 pt-12 pb-6 text-white sm:px-7 sm:pt-[35px] sm:pb-[25px]">
                  <span className="text-[10px] font-bold tracking-[1.8px]">
                    01 / OUR STORYTELLING
                  </span>
                  <strong className="font-heading text-2xl font-medium sm:text-[28px]">
                    Devotional Cinema
                  </strong>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <div>
                <span className="mb-4 inline-block text-[11px] font-extrabold tracking-[2px] text-[var(--gold-dark)] sm:text-xs">
                  FAITH • CULTURE • HERITAGE
                </span>

                <h2 className="mb-5 font-heading text-[clamp(32px,4vw,49px)] leading-[1.2]">
                  Devotional Cinema:
                  <span className="italic text-[var(--red-dark)]">
                    {" "}Our Approach
                  </span>
                </h2>

                <p className="mb-3 text-[14px] leading-[1.85] text-[var(--text-secondary)] sm:text-[15px]">
                  Devotional storytelling demands more than good visuals.
                  It demands accuracy, sensitivity and trust.
                </p>

                <div>
                  {devotionalApproach.map((item, index) => {
                  

                    return (
                      <div
                        key={item.title}
                        className="grid grid-cols-[36px_minmax(0,1fr)] items-start gap-3 border-b border-[#eee5d8] py-4 sm:grid-cols-[44px_minmax(0,1fr)] sm:gap-4 sm:py-[17px]"
                      >
                        {/* Number */}
                        <span className="pt-0.5 text-[10px] font-extrabold tracking-wide text-[#b9a58a] sm:text-[11px]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Content */}
                        <div className="min-w-0">
                          <h3 className="mb-1.5 text-[13px] font-extrabold leading-snug text-[var(--text-primary)] sm:text-sm">
                            {item.title}
                          </h3>

                          <p className="m-0 line-clamp-2 text-[11px] leading-[1.75] text-[var(--text-secondary)] sm:text-xs">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* <div className="mt-7 border-l-[3px] border-[var(--gold-dark)] bg-[var(--ivory)] p-5 sm:p-[22px]">
                  <span className="text-[10px] font-extrabold tracking-[1.5px] text-[var(--red-dark)]">
                    THEMES WE EXPLORE
                  </span>
                  <p className="mt-2.5 mb-0 text-[12px] leading-[1.85] text-[var(--text-secondary)] sm:text-[13px]">
                    Lives of saints and spiritual masters, devotional
                    legends, pilgrimage and sacred places, faith and human
                    transformation, and values-based family stories.
                  </p>
                </div> */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FICTION STORYTELLING */}
      <section className="bg-[var(--ivory)] py-16 sm:py-20 lg:py-[105px]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-12">

            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="lg:pr-6">
                <span className="mb-4 inline-block text-[11px] font-extrabold tracking-[2px] text-[var(--gold-dark)] sm:text-xs">
                  HUMAN STORIES • REAL EMOTIONS
                </span>

                <h2 className="mb-5 font-heading text-[clamp(32px,4vw,49px)] leading-[1.2]">
                  Fiction Storytelling:
                  <span className="italic text-[var(--red-dark)]">
                    {" "}Our Approach
                  </span>
                </h2>

                <p className="mb-7 text-[14px] leading-[1.85] text-[var(--text-secondary)] sm:text-[15px]">
                  Our fiction slate focuses on stories with emotional
                  truth and strong characters.
                </p>

                <div className="mt-8">
                  {fictionGenres.map((genre, index) => (
                    <div
                      key={genre}
                      className="group grid grid-cols-[35px_minmax(0,1fr)_20px] items-center gap-3 border-b border-[var(--border-gold)] py-[19px]"
                    >
                      <span className="text-[11px] font-extrabold text-[var(--gold-dark)]">
                        0{index + 1}
                      </span>

                      <h3 className="m-0 text-[13px] font-bold sm:text-sm">
                        {genre}
                      </h3>


                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="group relative h-[340px] overflow-hidden bg-[var(--cream)] sm:h-[450px] lg:h-[450px] xl:h-[530px]">
                <img
                  src="/images/p2.avif"
                  alt="Cinematic fiction storytelling"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute right-0 bottom-0 left-0 flex flex-col gap-[7px] bg-gradient-to-t from-[rgba(23,20,17,0.88)] to-transparent px-5 pt-12 pb-6 text-white sm:px-7 sm:pt-[35px] sm:pb-[25px]">
                  <span className="text-[10px] font-bold tracking-[1.8px]">
                    02 / OUR STORYTELLING
                  </span>
                  <strong className="font-heading text-2xl font-medium sm:text-[28px]">
                    Fiction & Drama
                  </strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="bg-[var(--white)] py-16 sm:py-20 lg:py-[105px]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mb-9 flex flex-col justify-between gap-4 md:mb-12 lg:flex-row lg:items-end lg:gap-10">
            <div>
              <span className="mb-4 inline-block text-[11px] font-extrabold tracking-[2px] text-[var(--gold-dark)] sm:text-xs">
                FROM STORIES TO SCREENS
              </span>

              <h2 className="font-heading text-[clamp(35px,4.5vw,55px)] leading-tight">
                Formats{" "}
                <span className="italic text-[var(--red-dark)]">
                  We Create.
                </span>
              </h2>
            </div>

            <p className="mb-1 max-w-[390px] text-[13px] leading-[1.8] text-[var(--text-secondary)] sm:text-sm">
              Different stories deserve different formats. We explore
              multiple forms of film and digital storytelling.
            </p>
          </div>

          {/* Format Cards */}
          <div className="grid grid-cols-1 border-t border-l border-[var(--border-gold)] sm:grid-cols-2 lg:grid-cols-3">
            {formats.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative min-h-[210px] border-r border-b border-[var(--border-gold)] p-6 transition-colors duration-300 hover:bg-[var(--ivory)] sm:min-h-[235px] sm:p-[30px]"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-[var(--gold-dark)]">
                      {item.number}
                    </span>
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-[var(--red-dark)]"
                    />
                  </div>

                  <h3 className="mb-3 font-heading text-[21px] font-semibold sm:text-[23px]">
                    {item.title}
                  </h3>

                  <p className="m-0 max-w-[290px] text-[12px] leading-[1.8] text-[var(--text-secondary)] sm:text-[13px]">
                    {item.description}
                  </p>

                  <div className="mt-6 h-[2px] w-0 bg-[var(--gold-dark)] transition-all duration-300 group-hover:w-[45px]" />
                </article>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}
