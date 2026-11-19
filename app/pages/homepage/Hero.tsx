
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Film,
  ArrowDown,
} from "lucide-react";

import styles from "../../css/Hero.module.css";

export default function Hero() {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-[var(--ivory)]"
      id="home"
    >
      {/* Background Decorations */}
      <div className={`pointer-events-none absolute left-0 top-0 -z-10 h-full w-[35%] ${styles.decoration}`} />
      <div className="pointer-events-none absolute right-[15%] top-[5%] -z-10 h-[400px] w-[400px] rounded-full bg-[rgba(249,197,38,0.12)] blur-[100px]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Hero Container */}
        <div className="relative z-[2] grid grid-cols-1 items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-[35px] xl:gap-[65px]">

          {/* Left Content */}
          <div className={`relative z-[2] min-w-0 ${styles.content}`}>

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-[13px] font-body text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)] sm:mb-[27px] sm:text-[11px] sm:tracking-[3px]">
              <span className="h-[2px] w-[35px] shrink-0 bg-[var(--red)]" />
              <span>SHGR ENTERTAINMENT</span>
            </div>

            {/* Heading */}
            <h1 className="m-0 font-heading text-[36px] font-semibold leading-[1.3] tracking-[-0.7px] text-[var(--brown)] min-[481px]:text-[clamp(37px,9vw,50px)] lg:text-[clamp(42px,4.5vw,67px)] lg:leading-[1.15] lg:tracking-[-1.5px]">
              Stories That
              <span className="italic text-[var(--red)]"> Inspire.</span>
              <br />
              Cinema That
              <span className="italic text-[var(--red)]"> Endures.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[530px] font-body text-[13px] font-medium leading-[1.8] text-[var(--text-secondary)] sm:mt-[22px] sm:text-[15px] sm:leading-[1.9]">
              SHGR Entertainment is a film and web series production
              house creating devotional and fiction content rooted
              in culture, emotion and craft.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col items-stretch gap-3 min-[481px]:flex-row min-[481px]:flex-wrap sm:mt-[35px] sm:gap-4">

              <Link
                href="/our-services"
                className="group inline-flex min-h-[50px] items-center justify-center gap-3 border border-[var(--gold)] bg-[image:var(--gradient-gold)] px-5 font-body text-[11px] font-extrabold text-[var(--black)] shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--red)] hover:bg-[var(--red)] hover:bg-none hover:text-white sm:min-h-[54px] sm:px-[23px] sm:text-[12px]"
              >
                Explore Our Services
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/partner-form"
                className="group inline-flex min-h-[50px] items-center justify-center gap-3 border border-[rgba(36,21,14,0.25)] bg-transparent px-5 font-body text-[11px] font-extrabold text-[var(--brown)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--red)] hover:text-[var(--red)] sm:min-h-[54px] sm:px-[23px] sm:text-[12px]"
              >
                Partner With Us
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* Genres */}
            <div className="mt-9 flex flex-wrap items-center gap-3 font-body text-[8px] font-extrabold leading-6 tracking-[1px] text-[var(--text-secondary)] sm:mt-[53px] sm:gap-3 sm:text-[9px] sm:tracking-[1.3px]">
              <span>DEVOTIONAL CINEMA</span>
              <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--red)]" />
              <span>FICTION STORYTELLING</span>
              <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--red)]" />
              <span>WEB SERIES</span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-[92%] max-w-[540px] min-w-0 py-[10px] pr-[15px] sm:w-[90%] sm:py-[15px] sm:pr-5 lg:ml-auto lg:w-full">

            {/* Image Frame */}
            <div className="relative h-[340px] w-full sm:h-[420px] lg:h-[430px] xl:h-[500px]">

              {/* Main Image */}
              <div className={`relative z-[1] h-full w-full overflow-hidden rounded-t-[180px] rounded-b-[4px] shadow-[var(--shadow-dark)] sm:rounded-t-[220px] ${styles.image}`}>
                <img
                  src="/images/hero1.jpeg"
                  alt="Indian heritage architecture representing cinematic storytelling"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Gold Border */}
              <div className="pointer-events-none absolute -bottom-[15px] -left-[15px] -right-[15px] -top-[15px] rounded-t-[180px] rounded-b-[4px] border border-[var(--gold-dark)] opacity-65 sm:rounded-t-[220px]" />

              {/* Corner Detail */}
              <div
                className="absolute bottom-[35px] -left-5 -z-10 h-[60px] w-[60px] bg-[image:var(--gradient-gold)] opacity-90 sm:bottom-[45px] sm:-left-[22px] sm:h-[70px] sm:w-[70px]"
                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-1 left-[-15px] z-[3] flex items-center gap-3 border-l-[3px] border-[var(--gold)] bg-white px-3 py-3 shadow-[var(--shadow-dark)] sm:bottom-[55px] sm:left-[-35px] sm:gap-[14px] sm:px-[22px] sm:py-[18px] lg:left-[-25px] xl:left-[-55px]">

              <div className="flex h-[35px] w-[35px] shrink-0 items-center justify-center bg-[var(--cream)] text-[var(--red-dark)] sm:h-[42px] sm:w-[42px]">
                <Film size={23} strokeWidth={1.8} />
              </div>

              <div>
                <span className="block font-body text-[7px] font-extrabold tracking-[1px] text-[var(--text-secondary)] sm:text-[8px] sm:tracking-[1.5px]">
                  OUR CREATIVE VISION
                </span>
                <h4 className="mt-1 font-heading text-[11px] font-semibold text-[var(--brown)] sm:text-[13px]">
                  Stories With Meaning
                </h4>
              </div>
            </div>

            {/* Vertical Text */}
            <div className="absolute right-[-13px] top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] font-body text-[7px] font-extrabold tracking-[2px] text-[var(--gold-dark)] sm:right-[-12px] sm:text-[9px] sm:tracking-[3px]">
              CULTURE · EMOTION · CRAFT
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="relative z-[2] mt-5 flex min-h-[65px] flex-wrap items-center gap-3 border-t border-[rgba(201,138,8,0.25)] py-[18px] sm:gap-[22px]">

          <span className="max-w-[48%] font-body text-[8px] font-extrabold leading-[1.6] tracking-[1px] text-[var(--brown)] sm:max-w-none sm:whitespace-nowrap sm:text-[9px] sm:tracking-[2px]">
            THE ART OF MEANINGFUL STORYTELLING
          </span>

          <div className="hidden h-px flex-1 bg-[rgba(201,138,8,0.3)] sm:block" />

          <Link
            href="/#about"
            className="group ml-auto inline-flex items-center gap-2 whitespace-nowrap font-body text-[8px] font-extrabold tracking-[0.5px] text-[var(--red)] transition-colors duration-300 hover:text-[var(--gold-dark)] sm:gap-3 sm:text-[9px] sm:tracking-[1.5px]"
          >
            DISCOVER OUR STORY
            <ArrowDown
              size={15}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
