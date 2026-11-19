
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Clapperboard,
  Heart,
  PenTool,
  Film,
  Handshake,
  Award,
  Music2,
  Camera,
} from "lucide-react";

const leadership = [

  {
    number: "01",
    name: "Shashi Kulshreshtha",
    role: "PRODUCER",
    subtitle: "SHGR Entertainment",
    image: "/images/producer.jpeg",
    alt: "Shashi Kulshreshtha",
    paragraphs: [
      <>
        Shashi Kulshreshtha is the driving force behind a 26-episode fiction
        series on the life and teachings of Baba Neem Karoli. A devotee of
        Baba and Hanuman, she has nurtured the project from its earliest idea.
      </>,
      <>
        As producer, she leads the project&apos;s vision, creative direction
        and partnerships, working alongside an Executive Producer and Line
        Producer with experience in television and film production.
      </>,
      <>
        Working with writer Dr. Kumar Hridayesh, her focus is to present
        Baba Neem Karoli&apos;s life and message in a manner that is
        authentic, respectful and professionally produced.
      </>,
    ],
    highlight: "PRODUCER'S VISION",
    highlightText: "A story of faith and devotion, presented with authenticity and respect.",
    icon: Film,
  },
  {
    number: "02",
    name: "Dr. Kumar Hirdesh",
    role: "FOUNDER & SCRIPT WRITER",
    subtitle: "Hindi Poet · Lyricist · Author",
    image: "/images/script-writer.jpeg",
    alt: "Dr. Kumar Hirdesh",
    paragraphs: [
      <>
        Dr. Kumar Hirdesh is a Delhi-based Hindi poet,
        lyricist and author with a postgraduate degree in Hindi Literature
        and doctoral research focused on poet Rahim. His creative work
        includes poems, stories, articles, bhajans and songs.
      </>,
      <>
        His book <strong>Chetna ke Swar</strong> was released by the Speaker
        of the Delhi Legislative Assembly in 2019 and approved by the Delhi
        Government in 2020 for Class 11–12 study in its schools. He was also
        honoured at the Rashtriya Kavi Sammelan for his poem <em>Nav Bharat</em>.
      </>,
      <>
        A lifelong devotee of Baba Neem Karoli and Hanuman, he has written
        bhajans and researched Baba&apos;s life. His long-held wish is to
        bring Baba&apos;s life and teachings to audiences through a serial.
      </>,
    ],
    highlight: "CREATIVE CONTRIBUTION",
    highlightText: "Bringing the life and teachings of Baba Neem Karoli to the screen.",
    icon: PenTool,
  },
];

const directors = [
  {
    number: "01",
    name: "Jayant Gupta",
    role: "DIRECTOR · WRITER",
    image: "/images/jayant-director.png",
    alt: "Jayant Gupta - Writer and Director",
    description:
      "Mumbai-based writer and director trained at Whistling Woods International. He has directed one feature film, seven short films, four sketches and over 30 vertical dramas. He has worked with Mukta Arts, Merry Go Round, Leo Media Collective and Ultra Media and Entertainment.",
    achievement:
      "His work streams on JioHotstar, Amazon Prime Video, Story TV and Hungama. A Filmfare Award nominee, he has won over 25 national and international awards for his work in films and digital entertainment.",
    focus: "FILMMAKING · WRITING · STORYTELLING",
  },
  {
    number: "02",
    name: "Koushish Varade",
    role: "DIRECTOR · FILMMAKER",
    image: "/images/kaushis-director.png",
    alt: "Koushish Varade - Filmmaker and Director",
    description:
      "A filmmaker with over 12 years of experience across films, commercials and documentaries. His work includes the Tri-Services Documentary, Murder in Mahim and Illegal Season 2 on JioHotstar, as well as Yeh Saali Aashiqui on Zee TV and multiple brand films.",
    achievement:
      "Honoured at the Dadasaheb Phalke Film Festival 2026 for excellence in filmmaking, he specialises in cinematic storytelling and production.",
    focus: "CINEMATIC STORYTELLING · PRODUCTION",
  },
];

const values = [
  {
    icon: Heart,
    title: "Meaningful Stories",
    description: "Stories rooted in faith, culture and human experiences.",
  },
  {
    icon: BookOpen,
    title: "Creative Thinking",
    description: "Thoughtful writing and strong narrative foundations.",
  },
  {
    icon: Camera,
    title: "Visual Excellence",
    description: "A considered approach to cinematic presentation.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "Working together to bring every creative vision to life.",
  },
];

export default function Team() {
  return (
    <main className="w-full overflow-hidden bg-ivory font-body text-[var(--text-primary)]">

      {/* HERO */}
      <section className="bg-[radial-gradient(circle_at_85%_20%,rgba(249,197,38,0.15),transparent_28%),var(--ivory)] pt-14 sm:pt-16 lg:pt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="pb-14 sm:pb-16 lg:pb-20">
            <span className="mb-5 inline-block text-[10px] font-extrabold tracking-[2.2px] text-[var(--gold-dark)] sm:text-xs">
              THE PEOPLE BEHIND THE STORIES
            </span>

            <h1 className="font-heading text-[clamp(38px,6vw,76px)] font-semibold leading-[1.12] tracking-[-1.5px] sm:tracking-[-2px]">
              Creative Minds.
              <span className="block italic text-[var(--red-dark)]">
                One Shared Vision.
              </span>
            </h1>

            <p className="mt-5 text-[13px] leading-[1.9] text-[var(--text-secondary)] sm:text-sm">
              Meaningful cinema is built through collaboration. Meet the
              people bringing stories of faith, inspiration and human
              experiences to the screen.
            </p>

            <a
              href="#team-leadership"
              className="group mt-6 inline-flex items-center gap-3 border-b border-[var(--gold-dark)] pb-[9px] text-[10px] font-extrabold tracking-[1.3px] text-[var(--brown)] no-underline"
            >
              MEET OUR TEAM
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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
        id="team-leadership"
        className="bg-white py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* SECTION HEADING */}
          <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 lg:flex-row lg:items-end">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)]">
                <span className="h-[2px] w-7 bg-[var(--gold-dark)]" />
                THE PEOPLE BEHIND THE PROJECT
              </span>

              <h2 className="font-heading text-[clamp(34px,4.5vw,54px)] font-semibold leading-[1.15] text-[var(--text-primary)]">
                The Minds Behind
                <span className="block italic text-[var(--red-dark)]">
                  The Story.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-[13px] leading-[1.9] text-[var(--text-secondary)]">
              Meet the creative minds bringing a story of faith, devotion
              and inspiration to audiences through thoughtful writing
              and committed production.
            </p>
          </div>

          {/* PROFILE CARDS */}
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-7">

            {leadership.map((person) => {
              const Icon = person.icon;

              return (
                <article
                  key={person.number}
                  className="group relative flex h-full flex-col overflow-hidden border border-[var(--border-gold)] bg-[var(--ivory)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(36,21,14,0.09)]"
                >
                  {/* TOP ACCENT */}
                  <div className="h-[3px] w-full bg-[var(--gradient-gold)]" />

                  {/* PROFILE HEADER */}
                  <div className="relative grid grid-cols-[120px_minmax(0,1fr)] items-center gap-5 p-5 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6 sm:p-6">

                    {/* IMAGE */}
                    <div className="relative h-[145px] overflow-hidden border border-[var(--border-gold)] bg-[var(--cream)] sm:h-[175px]">
                      <Image
                        src={person.image}
                        alt={person.alt}
                        fill
                        sizes="(max-width: 640px) 120px, 150px"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* NAME & ROLE */}
                    <div className="min-w-0">
                      {/* <span className="mb-3 inline-block text-[9px] font-extrabold tracking-[1.8px] text-[var(--gold-dark)]">
                  PROFILE {person.number}
                </span> */}

                      <h3 className="font-heading text-xl font-semibold leading-tight text-[var(--text-primary)] sm:text-2xl lg:text-[26px]">
                        {person.name}
                      </h3>

                      <span className="mt-3 inline-flex items-center gap-2 bg-white px-3 py-2 text-[12px] font-extrabold tracking-[1.2px] text-[var(--red-dark)]">
                        <Icon size={14} />
                        {person.role}
                      </span>
                    </div>
                  </div>

                  {/* DIVIDER */}
                  <div className="mx-5 border-t border-[var(--border-gold)] sm:mx-6" />

                  {/* PROFILE DETAILS */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">

                    <div className="space-y-3 text-[12px] leading-[1.85] text-[var(--text-secondary)] sm:text-[13px]">
                      {person.paragraphs.map((paragraph, index) => (
                        <p key={index} className="m-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* HIGHLIGHT */}
                    <div className="mt-auto pt-6">
                      <div className="flex gap-3 border-l-[3px] border-[var(--gold-dark)] bg-white px-4 py-4">

                        <div>
                          <span className="text-[9px] font-extrabold tracking-[1.4px] text-[var(--red-dark)]">
                            {person.highlight}
                          </span>

                          <p className="mb-0 mt-1 font-heading text-[13px] italic leading-[1.65] text-[var(--text-primary)] sm:text-sm">
                            {person.highlightText}
                          </p>
                        </div>
                      </div>
                    </div>

                    {person.name === "Shashi Kulshreshtha" && (
                      <div className="mt-6 border-t border-[var(--border-gold)] pt-5">
                        <div className="flex flex-col gap-4 rounded-sm bg-white p-4 sm:flex-row sm:items-center">
                          <div className="relative h-[85px] w-[115px] shrink-0 overflow-hidden border border-[var(--border-gold)] bg-[var(--cream)]">
                            <Image
                              src="/images/membership-card.jpeg"
                              alt="WIFPA Membership Card of Shashi Kulshreshtha"
                              fill
                              sizes="115px"
                              className="object-cover"
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <span className="text-[9px] font-extrabold tracking-[1.5px] text-[var(--gold-dark)]">
                              PROFESSIONAL MEMBERSHIP
                            </span>

                            <h4 className="mt-1 font-heading text-base font-semibold text-[var(--text-primary)]">
                              Western India Film & TV Producers' Association
                            </h4>

                            <p className="mt-1 text-[11px] leading-5 text-[var(--text-secondary)]">
                              WIFPA Membership · Proprietor, SHGR Entertainment
                            </p>

                            <a
                              href="/images/membership-card.jpeg"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 inline-flex items-center gap-2 text-[10px] font-extrabold tracking-wide text-[var(--red-dark)] transition-colors hover:text-[var(--gold-dark)]"
                            >
                              VIEW MEMBERSHIP CARD
                              <ArrowUpRight size={14} />
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>


      {/* DIRECTORS */}
      <section className="bg-[var(--ivory)] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="mb-3 inline-block text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)]">
                THE CREATIVE FORCE
              </span>

              <h2 className="font-heading text-[clamp(32px,4.5vw,52px)] font-semibold leading-tight">
                Behind Every Story,
                <span className="block italic text-[var(--red-dark)]">
                  A Vision.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-[13px] leading-[1.9] text-[var(--text-secondary)]">
              Meet the directors guiding our stories from imagination
              to the screen with a shared passion for meaningful cinema.
            </p>
          </div>

          {/* DIRECTOR CARDS */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-7">
            {directors.map((director) => (
              <article
                key={director.number}
                className="group flex flex-row overflow-hidden border border-[var(--border-gold)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(36,21,14,0.09)]"
              >
                {/* SMALL IMAGE */}
                <div className="relative min-h-[220px] w-[38%] shrink-0 overflow-hidden bg-[var(--cream)] sm:min-h-[260px] sm:w-[40%]">
                  <Image
                    src={director.image}
                    alt={director.alt}
                    fill
                    sizes="(max-width: 768px) 40vw, 220px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-6 lg:p-7">
                  <span className="mb-3 text-[9px] font-extrabold tracking-[1.8px] text-[var(--gold-dark)]">
                    DIRECTOR
                  </span>

                  <h3 className="font-heading text-xl font-semibold leading-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--red-dark)] sm:text-2xl lg:text-3xl">
                    {director.name}
                  </h3>

                  <p className="mt-3 text-[11px] leading-[1.8] text-[var(--text-secondary)] sm:text-xs">
                    {director.description}
                  </p>

                  <div className="mt-4 border-t border-[var(--border-gold)] pt-3">
                    <span className="text-[8px] font-extrabold tracking-[1px] text-[var(--red-dark)] sm:text-[9px]">
                      {director.focus}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 border-t border-[var(--border-gold)] pt-6 text-center">
            <p className="font-heading text-lg italic text-[var(--text-primary)] sm:text-xl">
              Two creative perspectives. One shared passion for cinema.
            </p>
          </div>

        </div>
      </section>


      {/* OUR CREATIVE APPROACH */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-9 text-center sm:mb-12">
            <span className="mb-3 inline-block text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)]">
              WHAT BRINGS US TOGETHER
            </span>

            <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
              A Shared <span className="italic text-[var(--red-dark)]">Creative Spirit.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[13px] leading-[1.9] text-[var(--text-secondary)]">
              Every production is shaped by a commitment to meaningful
              storytelling, creative thought and collaborative work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group border border-[var(--border-gold)] bg-[var(--ivory)] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_28px_rgba(201,138,8,0.10)]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold tracking-[1.5px] text-[var(--gold-dark)]">
                      0{index + 1}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-gold)] bg-white text-[var(--red-dark)] transition-all duration-300 group-hover:border-[var(--red-dark)] group-hover:bg-[var(--red-dark)] group-hover:text-white">
                      <Icon size={19} strokeWidth={1.6} />
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
                    {value.title}
                  </h3>

                  <p className="mb-0 mt-2 text-xs leading-6 text-[var(--text-secondary)]">
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
