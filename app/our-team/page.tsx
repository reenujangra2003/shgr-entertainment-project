
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

      {/* PROJECT LEADERSHIP & KEY PROFILES */}
      <section
        id="team-leadership"
        className="bg-white py-16 sm:py-20 lg:py-[105px]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* SECTION HEADING */}
          <div className="mb-10 sm:mb-14">
            <span className="mb-4 inline-block text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)] sm:text-sm">
              THE PEOPLE BEHIND THE PROJECT
            </span>

            <h2 className="max-w-[800px] font-heading text-[clamp(35px,4.5vw,55px)] font-semibold leading-[1.2]">
              The Minds Behind
              <span className="block italic text-[var(--red-dark)]">
                The Story.
              </span>
            </h2>

            <p className="mt-5 max-w-[650px] text-[13px] leading-[1.9] text-[var(--text-secondary)] sm:text-sm">
              Meet the creative minds bringing this story of faith,
              devotion and inspiration to audiences through thoughtful
              writing and committed production.
            </p>
          </div>

          {/* PROFILE 01 - SCRIPT WRITER */}
          <article className="mb-10 overflow-hidden border border-[var(--border-gold)] bg-[var(--ivory)] lg:mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* IMAGE LEFT */}
              <div className="relative min-h-[380px] overflow-hidden sm:min-h-[480px] lg:min-h-[650px]">
                <img
                  src="/images/script-writer.jpeg"
                  alt="Dr. Kumar Hridayesh - Script Writer"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 z-10 p-6 sm:p-9">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[var(--gold-light)]">
                    PROFILE 01
                  </span>
                  <h3 className="mt-2 font-heading text-3xl font-semibold text-white sm:text-4xl">
                    Dr. Kumar Hridayesh
                  </h3>
                  <p className="mt-2 text-[10px] font-bold tracking-[1.5px] text-white/85">
                    SCRIPT WRITER
                  </p>
                </div>
              </div>

              {/* CONTENT RIGHT */}
              <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12 xl:p-14">
                <span className="mb-4 text-[10px] font-extrabold tracking-[1.8px] text-[var(--gold-dark)]">
                  THE CREATIVE MIND
                </span>

                <h3 className="mb-2 font-heading text-[30px] font-semibold leading-tight text-[var(--brown)] sm:text-[36px]">
                  Dr. Kumar Hridayesh
                </h3>

                <p className="mb-7 text-[10px] font-bold tracking-[1px] text-[var(--red-dark)]">
                  HRIDESH KUMAR · HINDI POET · LYRICIST · AUTHOR
                </p>

                <div className="space-y-4 text-[12px] leading-[1.9] text-[var(--text-secondary)] sm:text-[13px]">
                  <p>
                    Dr. Kumar Hridayesh (Hridesh Kumar) is a Delhi-based Hindi
                    poet, lyricist and author with a postgraduate degree in
                    Hindi Literature and a doctoral research focus on the poet
                    Rahim. Writing since childhood, he has composed poems,
                    stories, articles, bhajans and songs, published in leading
                    newspapers and magazines and in publications of the Delhi
                    Development Authority, Ministry of Railways, Ministry of
                    Culture and Delhi Government.
                  </p>

                  <p>
                    His book <strong className="text-[var(--brown)]">
                      Chetna ke Swar
                    </strong> was released by the Speaker of the Delhi
                    Legislative Assembly in 2019 and approved by the Delhi
                    Government in 2020 for Class 11–12 study in its schools.
                    He has been honoured by the Rashtriya Kavi Sammelan for
                    his poem <em>Nav Bharat</em>.
                  </p>

                  <p>
                    With a career in government and semi-government service
                    as an officer and adviser, and over four years as an RWA
                    president, he combines administrative experience with
                    community leadership. He is also interested in painting
                    and music.
                  </p>

                  <p>
                    A lifelong devotee of Baba Neem Karoli and Hanuman, he
                    has written bhajans and researched Baba&apos;s life, and
                    has long wished to bring it to audiences as a serial.
                  </p>
                </div>

                <div className="mt-7 border-l-[3px] border-[var(--gold-dark)] bg-white px-5 py-4">
                  <span className="text-[9px] font-extrabold tracking-[1.4px] text-[var(--red-dark)]">
                    CREATIVE VISION
                  </span>
                  <p className="mt-2 mb-0 font-heading text-[16px] italic leading-[1.6] text-[var(--brown)] sm:text-[18px]">
                    Bringing the life and teachings of Baba Neem Karoli
                    to audiences through storytelling.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* PROFILE 02 - PRODUCER */}
          <article className="overflow-hidden border border-[var(--border-gold)] bg-[var(--ivory)]">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* CONTENT LEFT */}
              <div className="order-2 flex flex-col justify-center p-6 sm:p-9 lg:order-1 lg:p-12 xl:p-14">
                <span className="mb-4 text-[10px] font-extrabold tracking-[1.8px] text-[var(--gold-dark)]">
                  THE PROJECT VISION
                </span>

                <h3 className="mb-2 font-heading text-[30px] font-semibold leading-tight text-[var(--brown)] sm:text-[36px]">
                  Shashi Kulshreshtha
                </h3>

                <p className="mb-7 text-[10px] font-bold tracking-[1px] text-[var(--red-dark)]">
                  PRODUCER · SHGR ENTERTAINMENT
                </p>

                <div className="space-y-4 text-[12px] leading-[1.9] text-[var(--text-secondary)] sm:text-[13px]">
                  <p>
                    Shashi Kulshreshtha is the driving force behind this
                    project, a 26-episode fiction series on the life and
                    teachings of Baba Neem Karoli. A devotee of Baba and
                    Hanuman, she has nurtured this project from its earliest
                    idea and brings to it the conviction and commitment
                    that a story of this nature demands.
                  </p>

                  <p>
                    As producer, she leads the project&apos;s vision, creative
                    direction and partnerships, working alongside an
                    Executive Producer and Line Producer, who bring
                    experience in television and film production.
                  </p>

                  <p>
                    The series is written by{" "}
                    <strong className="text-[var(--brown)]">
                      Dr. Kumar Hridayesh
                    </strong>
                    , a published Hindi author whose book{" "}
                    <em>Chetna ke Swar</em> is approved by the Delhi
                    Government for school libraries and Class 11–12 study.
                  </p>

                  <p>
                    Her focus is to bring Baba Neem Karoli&apos;s message to
                    audiences in a manner that is authentic, respectful
                    and professionally produced.
                  </p>
                </div>

                <div className="mt-7 border-l-[3px] border-[var(--gold-dark)] bg-white px-5 py-4">
                  <span className="text-[9px] font-extrabold tracking-[1.4px] text-[var(--red-dark)]">
                    PRODUCER&apos;S VISION
                  </span>
                  <p className="mt-2 mb-0 font-heading text-[16px] italic leading-[1.6] text-[var(--brown)] sm:text-[18px]">
                    A story of faith and devotion, presented with authenticity,
                    respect and professional excellence.
                  </p>
                </div>
              </div>

              {/* IMAGE RIGHT */}
              <div className="relative order-1 min-h-[380px] overflow-hidden sm:min-h-[480px] lg:order-2 lg:min-h-[650px]">
                <img
                  src="/images/producer.jpeg"
                  alt="Shashi Kulshreshtha - Producer"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 z-10 p-6 sm:p-9">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[var(--gold-light)]">
                    PROFILE 02
                  </span>
                  <h3 className="mt-2 font-heading text-3xl font-semibold text-white sm:text-4xl">
                    Shashi Kulshreshtha
                  </h3>
                  <p className="mt-2 text-[10px] font-bold tracking-[1.5px] text-white/85">
                    PRODUCER
                  </p>
                </div>
              </div>

            </div>
          </article>

        </div>
      </section>


      {/* CREATIVE TEAM */}
     {/* CREATIVE DIRECTORS */}
<section className="relative overflow-hidden bg-[#FFF8E9] py-16 sm:py-20 lg:py-28">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <div className="mb-12 flex flex-col justify-between gap-5 lg:mb-16 lg:flex-row lg:items-end">
      <div>
        <span className="mb-4 inline-block text-[10px] font-extrabold tracking-[3px] text-[var(--gold-dark)]">
          THE CREATIVE FORCE
        </span>

        <h2 className="font-heading text-[clamp(38px,5vw,66px)] leading-[1.08] text-[var(--brown)]">
          Behind Every Story,
          <span className="block italic text-[var(--red-dark)]">
            A Vision.
          </span>
        </h2>
      </div>

      <p className="max-w-[390px] text-sm leading-7 text-[var(--text-secondary)]">
        Meet the creative minds guiding our stories from imagination
        to the screen, with a shared passion for meaningful cinema.
      </p>
    </div>

    {/* Director 01 */}
    <article className="group mb-8 grid overflow-hidden bg-[#24150E] lg:grid-cols-2">

      <div className="relative min-h-[420px] overflow-hidden sm:min-h-[550px] lg:min-h-[610px]">
        <img
          src="/images/jayant-director.png"
          alt="Jayant - Director"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        <span className="absolute bottom-6 left-7 font-heading text-6xl font-semibold text-white/35 sm:text-8xl">
          01
        </span>
      </div>

      <div className="relative flex flex-col justify-center px-7 py-12 text-white sm:px-12 lg:px-14 lg:py-16">
        <span className="mb-7 flex items-center gap-3 text-[10px] font-bold tracking-[2.5px] text-[var(--gold-light)]">
          <span className="h-px w-9 bg-[var(--gold)]" />
          DIRECTOR
        </span>

        <h3 className="font-heading text-[clamp(42px,5vw,65px)] leading-[1.1]">
          Jayant
        </h3>

        <p className="mt-7 max-w-[420px] text-sm leading-8 text-white/70">
          Every story begins with an idea. Through creative direction
          and a thoughtful approach to storytelling, Jayant brings
          ideas to life, shaping narratives into engaging cinematic
          experiences.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <span className="h-px w-12 bg-[var(--gold)]" />
          <span className="text-[9px] font-bold tracking-[2px] text-[var(--gold-light)]">
            CREATIVE VISION · STORYTELLING
          </span>
        </div>

        <span className="pointer-events-none absolute bottom-3 right-7 font-heading text-[110px] leading-none text-white/[0.035] sm:text-[160px]">
          J
        </span>
      </div>
    </article>

    {/* Director 02 */}
    <article className="group grid overflow-hidden bg-[#24150E] lg:grid-cols-2">

      <div className="relative order-1 flex flex-col justify-center px-7 py-12 text-white sm:px-12 lg:order-1 lg:px-14 lg:py-16">
        <span className="mb-7 flex items-center gap-3 text-[10px] font-bold tracking-[2.5px] text-[var(--gold-light)]">
          <span className="h-px w-9 bg-[var(--gold)]" />
          DIRECTOR
        </span>

        <h3 className="font-heading text-[clamp(42px,5vw,65px)] leading-[1.1]">
          Kaushis
        </h3>

        <p className="mt-7 max-w-[420px] text-sm leading-8 text-white/70">
          Great direction is about bringing every creative element
          together. With a focus on narrative flow, visual expression
          and audience connection, Kaushis contributes to shaping
          stories for the screen.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <span className="h-px w-12 bg-[var(--gold)]" />
          <span className="text-[9px] font-bold tracking-[2px] text-[var(--gold-light)]">
            CREATIVE VISION · CINEMA
          </span>
        </div>

        <span className="pointer-events-none absolute bottom-3 right-7 font-heading text-[110px] leading-none text-white/[0.035] sm:text-[160px]">
          K
        </span>
      </div>

      <div className="relative order-2 min-h-[420px] overflow-hidden sm:min-h-[550px] lg:min-h-[610px]">
        <img
          src="/images/kaushis-director.png"
          alt="Kaushis - Director"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        <span className="absolute bottom-6 right-7 font-heading text-6xl font-semibold text-white/35 sm:text-8xl">
          02
        </span>
      </div>
    </article>

    {/* Bottom Statement */}
    <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[var(--border-gold)] pt-8 sm:flex-row">
      <p className="m-0 max-w-[520px] font-heading text-xl italic text-[var(--brown)] sm:text-2xl">
        Two creative perspectives. One shared passion for cinema.
      </p>

      <span className="text-[9px] font-extrabold tracking-[2px] text-[var(--gold-dark)]">
        SHGR ENTERTAINMENT
      </span>
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
