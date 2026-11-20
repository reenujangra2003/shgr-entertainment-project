
import Link from "next/link";
import {
  ArrowRight,
  Flower2,
  Clapperboard,
  MonitorPlay,
} from "lucide-react";

import styles from "../../css/About.module.css";

const values = [
  {
    icon: Flower2,
    title: "Devotional Cinema",
    description:
      "Stories rooted in India's spiritual heritage and timeless values.",
  },
  {
    icon: Clapperboard,
    title: "Fiction Storytelling",
    description:
      "Engaging, character-driven stories that reflect real human emotions.",
  },
  {
    icon: MonitorPlay,
    title: "Web Series",
    description:
      "High-quality, impactful series for today's digital audiences.",
  },
];

export default function About() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[var(--white)] py-[55px] sm:py-[65px] lg:py-[90px]"
      id="about"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main About Content */}
        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-[70px]">

          {/* Production Image */}
          <div className={`relative w-full max-w-[620px] px-[10px] py-[15px] sm:px-5 sm:py-[18px] ${styles.visual}`}>

            {/* Image Accent */}
            <div className="absolute left-0 top-0 h-[115px] w-[115px] bg-[var(--red-dark)] sm:h-[160px] sm:w-[160px]" />

            {/* Image Frame */}
            <div className={`relative z-[2] h-[285px] w-full overflow-hidden bg-[var(--cream)] sm:h-[350px] lg:h-[495px] ${styles.imageFrame}`}>
              <img
                src="/images/about.png"
                alt="Film production crew working behind the camera on a shoot"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Bottom Image Detail */}
            <div className="absolute bottom-0 right-0 h-[3px] w-[65%] bg-[var(--gold-dark)]" />
          </div>

          {/* About Text */}
          <div className="max-w-[650px]">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-[15px] font-body text-[10px] font-extrabold tracking-[1.5px] text-[var(--brown)] sm:mb-[25px] sm:text-[12px] sm:tracking-[2px]">
              <span className="h-[3px] w-[30px] shrink-0 bg-[var(--red)]" />
              ABOUT SHGR ENTERTAINMENT
            </div>

            {/* Heading */}
            <h2 className="mb-5 font-heading text-[29px] font-semibold leading-[1.25] tracking-[-0.7px] text-[var(--brown)] sm:mb-[25px] sm:text-[38px] lg:text-[clamp(34px,3.4vw,48px)]">
              A Production House
              <br />
              Built on{" "}
              <span className="italic text-[var(--red-dark)]">
                Meaningful Stories.
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 font-body text-[12px] font-medium leading-[1.8] text-[var(--text-secondary)] sm:text-[14px] sm:leading-[1.9]">

              <p>
                SHGR Entertainment is a film and web series production
                house based in the Delhi NCR region. We create devotional
                and fiction content that connects with audiences through
                strong stories, cultural depth and high production values.
              </p>

              <p>
                We believe the strongest stories are those that touch
                the heart and stay with the viewer long after the screen
                goes dark. Our focus is on{" "}
                <strong className="font-extrabold text-[var(--brown)]">
                  devotional cinema
                </strong>{" "}
                that celebrates India's spiritual heritage and{" "}
                <strong className="font-extrabold text-[var(--brown)]">
                  fiction storytelling
                </strong>{" "}
                that entertains, engages and reflects real emotion.
              </p>

              <p>
                Our approach is simple: begin with a strong story,
                back it with a skilled team, and produce it with care
                at every stage, from concept to final delivery. We work
                closely with writers, directors, technicians and
                distribution partners so that every project is executed
                to a professional standard.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/about-us"
              className="group mt-5 inline-flex items-center gap-[13px] py-[13px] font-body text-[12px] font-extrabold text-[var(--red)] transition-colors duration-300 hover:text-[var(--gold-dark)] sm:mt-[10px] sm:text-[13px]"
            >
              Discover Our Approach
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </div>
        </div>

        {/* Creative Focus */}
        <div className="mt-[45px] border-t border-[var(--border-gold)] pt-[30px] sm:mt-[55px] sm:pt-[35px]">

          {/* Heading */}
          <div className="mb-6 sm:mb-8">
            <span className="mb-[10px] block font-body text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)] sm:text-[11px]">
              OUR CREATIVE FOCUS
            </span>

            <h3 className="font-heading text-[27px] font-semibold leading-[1.2] text-[var(--brown)] sm:text-[34px] lg:text-[40px]">
              What Defines Our Stories
            </h3>
          </div>

          {/* Values List */}
          <div className="grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-3">

            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`group flex min-w-0 items-center gap-4 border-b border-[var(--border-gold)] py-5 sm:px-5 lg:border-b-0 lg:border-r lg:py-3 ${
                    index === 0
                      ? "lg:pl-0"
                      : ""
                  } ${
                    index === values.length - 1
                      ? "lg:border-r-0 lg:pr-0"
                      : ""
                  }`}
                >
                  {/* Icon */}
                  <div className={`flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full bg-[var(--cream)] text-[var(--red-dark)] transition-all duration-300 group-hover:bg-[var(--red-dark)] group-hover:text-white sm:h-[65px] sm:w-[65px] lg:h-[76px] lg:w-[76px] ${styles.valueIcon}`}>
                    <Icon
                      size={30}
                      strokeWidth={1.6}
                      className="sm:h-[34px] sm:w-[34px]"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <h4 className="mb-2 font-heading text-[17px] font-semibold leading-[1.3] text-[var(--brown)] sm:text-[19px] lg:text-[20px]">
                      {item.title}
                    </h4>

                    <p className="font-body text-[12px] font-medium leading-[1.65] text-[var(--text-secondary)] sm:text-[13px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
