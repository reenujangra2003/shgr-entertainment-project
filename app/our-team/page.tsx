
import {
  ArrowUpRight,
  Clapperboard,
  Camera,
  PenTool,
  Film,
  Music2,
  Palette,
  Users,
  Quote,
  type LucideIcon,
} from "lucide-react";

const creativeRoles: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: PenTool,
    title: "Writers",
    description: "Developing stories, screenplays and dialogues.",
  },
  {
    icon: Clapperboard,
    title: "Directors",
    description: "Shaping the creative vision of every project.",
  },
  {
    icon: Camera,
    title: "Cinematographers",
    description: "Bringing stories to life through visuals.",
  },
  {
    icon: Film,
    title: "Editors",
    description: "Crafting the final narrative through editing.",
  },
  {
    icon: Music2,
    title: "Composers",
    description: "Creating music and sound that support each story.",
  },
  {
    icon: Palette,
    title: "Designers",
    description: "Building the visual world of a production.",
  },
];

export default function Team() {
  return (
    <main className="custom-team-page w-full overflow-hidden bg-[var(--white)] font-body text-[var(--brown)]">

      {/* HERO */}
      <section className="bg-[radial-gradient(circle_at_85%_20%,rgba(249,197,38,0.15),transparent_28%),var(--ivory)] pt-14 sm:pt-16 lg:pt-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="pb-16 sm:pb-20 lg:pb-[95px]">
            <span className="mb-5 inline-block text-xs font-extrabold tracking-[2px] text-[var(--gold-dark)] sm:text-sm">
              THE PEOPLE BEHIND THE STORIES
            </span>

            <h1 className="font-heading text-[clamp(38px,6vw,76px)] font-semibold leading-[1.12] tracking-[-1.5px] sm:tracking-[-2px]">
              Creative Minds.
              <span className="block italic text-[var(--red-dark)]">
                One Shared Vision.
              </span>
            </h1>

            <p className="mt-5 mb-6 text-[13px] leading-[1.9] text-[var(--text-secondary)] sm:text-sm">
              Meaningful cinema is built through collaboration.
              Meet the leadership and creative network behind
              SHGR Entertainment.
            </p>

            <a
              href="#team-leadership"
              className="group inline-flex items-center gap-3 border-b border-[var(--gold-dark)] pb-[9px] text-[10px] font-extrabold tracking-[1.3px] text-[var(--brown)] no-underline"
            >
              MEET OUR TEAM
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
              />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-[var(--border-gold)] py-5 text-[8px] font-extrabold tracking-[1px] text-[var(--text-secondary)] sm:gap-x-[17px] sm:text-[9px]">
            <span>VISION</span>
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--gold-dark)]" />
            <span>CREATIVITY</span>
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--gold-dark)]" />
            <span>COLLABORATION</span>
          </div>

        </div>
      </section>

      {/* LEADERSHIP */}
      <section
        className="bg-[var(--white)] py-16 sm:py-20 lg:py-[105px]"
        id="team-leadership"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-9 sm:mb-11">
            <span className="mb-4 inline-block text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)] sm:text-sm">
              LEADERSHIP
            </span>

            <h2 className="max-w-[700px] font-heading text-[clamp(35px,4.5vw,55px)] font-semibold leading-[1.2]">
              A Vision That
              <span className="italic text-[var(--red-dark)]">
                {" "}Leads the Way.
              </span>
            </h2>
          </div>

          {/* Founder Card */}
          <div className="grid items-center gap-8 border border-[var(--border-gold)] bg-[var(--ivory)] p-5 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[75px] lg:p-[35px]">

            {/* Founder Visual */}
            <div className="relative min-w-0">
              <div className="relative flex min-h-[290px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_40%,rgba(249,197,38,0.18),transparent_45%),linear-gradient(145deg,var(--brown),var(--black))] sm:min-h-[340px] lg:min-h-[390px]">

                {/* Decorative Circles */}
                <span className="pointer-events-none absolute h-[190px] w-[190px] rounded-full border border-[rgba(249,197,38,0.3)] sm:h-[240px] sm:w-[240px]" />
                <span className="pointer-events-none absolute h-[250px] w-[250px] rounded-full border border-[rgba(249,197,38,0.13)] sm:h-[310px] sm:w-[310px]" />

                {/* Initials */}
                <div className="relative z-[1] flex items-center font-heading text-[85px] font-medium tracking-[-12px] text-[var(--gold-light)] sm:text-[105px] sm:tracking-[-15px]">
                  <span>S</span>
                  <span className="text-white">K</span>
                </div>

                {/* Caption */}
                <div className="absolute right-0 bottom-0 left-0 z-[2] flex flex-col gap-1.5 bg-gradient-to-t from-black/70 to-transparent px-5 pt-11 pb-5 text-white sm:px-[25px] sm:pt-[45px] sm:pb-[22px]">
                  <span className="text-[9px] font-extrabold tracking-[1.8px] text-[var(--gold-light)]">
                    SHGR ENTERTAINMENT
                  </span>
                  <strong className="font-heading text-[23px] font-medium">
                    Leadership
                  </strong>
                </div>
              </div>

              <span className="absolute -top-3 -right-3 flex h-11 w-11 items-center justify-center bg-[var(--red-dark)] text-[11px] font-extrabold text-white sm:-top-[17px] sm:-right-[17px] sm:h-12 sm:w-12">
                01
              </span>
            </div>

            {/* Founder Details */}
            <div className="py-2 sm:px-1 lg:py-5 lg:pr-[15px]">
              <span className="mb-4 inline-block text-[10px] font-extrabold tracking-[1.7px] text-[var(--gold-dark)]">
                FOUNDER / DIRECTOR*
              </span>

              <h3 className="mb-4 font-heading text-[31px] font-semibold sm:text-[36px] lg:text-[clamp(34px,4vw,48px)]">
                Shashi Kulshreshtha
              </h3>

              <p className="max-w-[480px] text-[13px] leading-[1.8] text-[var(--text-secondary)] sm:text-sm">
                The leadership behind SHGR Entertainment's vision
                and creative direction.
              </p>

              <div className="mt-7 border-l-[3px] border-[var(--gold-dark)] bg-[var(--white)] px-5 py-5 sm:mt-[35px] sm:px-[25px] sm:py-[22px]">
                <span className="text-[9px] font-extrabold tracking-[1.4px] text-[var(--red-dark)]">
                  LEADERSHIP BIOGRAPHY
                </span>

                <p className="mt-2.5 mb-0 text-xs leading-[1.8] text-[var(--text-secondary)]">
                  Add a short biography covering professional background,
                  creative vision and role in the company.
                </p>
              </div>

              <p className="mt-4 mb-0 text-[10px] italic text-[var(--text-secondary)]">
                *Designation to be confirmed.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CREATIVE TEAM */}
      <section className="bg-[var(--ivory)] py-16 sm:py-20 lg:py-[105px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-12 lg:mb-[55px] lg:flex-row lg:items-end lg:gap-11">
            <div>
              <span className="mb-4 inline-block text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)] sm:text-sm">
                CREATIVE & PRODUCTION TEAM
              </span>

              <h2 className="max-w-[700px] font-heading text-[clamp(35px,4.5vw,55px)] font-semibold leading-[1.2]">
                Great Stories
                <span className="block italic text-[var(--red-dark)]">
                  Are Never Made Alone.
                </span>
              </h2>
            </div>

            <p className="mb-1 max-w-[410px] text-[12px] leading-[1.9] text-[var(--text-secondary)] sm:text-[13px]">
              We work with a growing network of writers, directors,
              cinematographers, editors, composers, designers and
              production professionals, brought together for each
              project according to its needs.
            </p>
          </div>

          {/* Creative Role Cards */}
          <div className="grid grid-cols-1 border-t border-l border-[var(--border-gold)] sm:grid-cols-2 lg:grid-cols-3">
            {creativeRoles.map((role, index) => {
              const Icon = role.icon;

              return (
                <article
                  key={role.title}
                  className="group relative min-h-[195px] overflow-hidden border-r border-b border-[var(--border-gold)] p-6 transition-colors duration-300 hover:bg-[var(--white)] sm:min-h-[220px] sm:p-7"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-[var(--gold-dark)]">
                      0{index + 1}
                    </span>

                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-[var(--red-dark)]"
                    />
                  </div>

                  <h3 className="mb-2.5 font-heading text-[22px] font-semibold sm:text-2xl">
                    {role.title}
                  </h3>

                  <p className="m-0 max-w-[290px] text-xs leading-[1.8] text-[var(--text-secondary)]">
                    {role.description}
                  </p>

                  <div className="mt-[22px] h-[2px] w-0 bg-[var(--gold-dark)] transition-all duration-300 group-hover:w-[45px]" />
                </article>
              );
            })}
          </div>

          {/* Network Note */}
          <div className="mt-7 flex items-start gap-4 bg-[var(--brown)] px-5 py-5 text-white sm:mt-[30px] sm:gap-[18px] sm:px-[27px] sm:py-[23px]">
            <Users
              size={22}
              strokeWidth={1.5}
              className="mt-0.5 flex-none text-[var(--gold-light)]"
            />

            <p className="m-0 text-xs leading-[1.8] text-[var(--text-light)]">
              Our creative and production network grows with every project,
              bringing together the right talent for every story.
            </p>
          </div>

        </div>
      </section>

      {/* FOUNDER'S NOTE */}
      <section className="relative bg-[radial-gradient(circle_at_10%_90%,rgba(249,197,38,0.1),transparent_35%),linear-gradient(130deg,var(--black),var(--brown))] py-16 text-white sm:py-20 lg:py-[110px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid gap-7 lg:grid-cols-[0.65fr_1.35fr] lg:gap-[65px]">

            {/* Note Label */}
            <div className="flex flex-row items-center gap-4 sm:gap-5 lg:flex-col lg:items-start">
              <span className="mb-0 text-[10px] font-extrabold tracking-[2px] text-[var(--gold-light)] sm:text-xs lg:mb-0">
                A MESSAGE FROM OUR FOUNDER
              </span>

              <Quote
                size={38}
                strokeWidth={1.2}
                className="flex-none text-[var(--gold-light)] opacity-80 sm:size-[42px] lg:mt-5"
              />
            </div>

            {/* Note Content */}
            <div>
              <h2 className="mb-7 font-heading text-[clamp(32px,4vw,49px)] leading-[1.2] sm:mb-[30px]">
                A belief in stories
                <span className="block text-[var(--gold-light)]">
                  that bring us together.
                </span>
              </h2>

              <blockquote className="m-0 font-heading text-[17px] italic leading-[1.8] text-[rgba(255,248,233,0.88)] sm:text-[18px] lg:text-[clamp(18px,2vw,23px)] lg:leading-[1.9]">
                “Cinema has the power to comfort, to inspire and to bring
                families together. At SHGR Entertainment, our aim is to
                create films and series that carry meaning and are made
                with honesty and care. We are building this company step
                by step, with a commitment to quality in every frame and
                respect for every story we tell. We invite writers,
                creators and partners who share this belief to walk
                with us.”
              </blockquote>

              <div className="mt-8 flex items-center gap-3.5 sm:mt-[35px]">
                <span className="h-px w-[38px] bg-[var(--gold-light)]" />

                <div className="flex flex-col gap-1">
                  <strong className="font-heading text-[17px] font-medium sm:text-lg">
                    Shashi Kulshreshtha
                  </strong>

                  <small className="text-[9px] tracking-[1.2px] text-[var(--gold-light)] uppercase">
                    Founder / Director*
                  </small>
                </div>
              </div>

              <p className="mt-3 mb-0 ml-[52px] text-[10px] italic text-[rgba(255,248,233,0.5)]">
                *Designation to be confirmed.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-[var(--white)] py-16 text-center sm:py-20 lg:py-[85px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <span className="mb-5 inline-block text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)] sm:text-xs">
            BUILT THROUGH COLLABORATION
          </span>

          <h2 className="mx-auto mb-7 font-heading text-[clamp(34px,4.5vw,55px)] leading-[1.2]">
            Every Story Begins
            <span className="block italic text-[var(--red-dark)]">
              With People.
            </span>
          </h2>

          <a
            href="#contact"
            className="group inline-flex items-center gap-5 bg-[var(--red-dark)] px-[22px] py-[15px] text-[10px] font-extrabold tracking-[1.2px] text-white no-underline transition-colors duration-300 hover:bg-[var(--brown)]"
          >
            WORK WITH US
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </div>
      </section>

    </main>
  );
}
