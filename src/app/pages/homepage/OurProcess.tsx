
import { ArrowUpRight } from "lucide-react";
import styles from "../../css/OurProcess.module.css";

const processSteps = [
  {
    number: "01",
    title: "Concept & Script Development",
    description: "We shape the idea, story and screenplay.",
    detail: "IDEA TO SCREENPLAY",
  },
  {
    number: "02",
    title: "Planning & Pre-Production",
    description: "Budgeting, casting, locations, crew and scheduling.",
    detail: "PREPARATION & PLANNING",
  },
  {
    number: "03",
    title: "Production",
    description: "Disciplined shoot management with quality control on set.",
    detail: "BRINGING STORIES TO LIFE",
  },
  {
    number: "04",
    title: "Post-Production",
    description: "Editing, music, sound design, colour grading and finishing.",
    detail: "CRAFTING THE FINAL CUT",
  },
  {
    number: "05",
    title: "Delivery & Distribution",
    description: "Platform-ready delivery and release support.",
    detail: "READY FOR THE AUDIENCE",
  },
];

export default function OurProcess() {
  return (
    <section
      id="process"
      className={`relative overflow-hidden bg-[var(--white)] py-[45px] sm:py-[55px] md:py-[60px] lg:py-[75px] ${styles.reducedMotion}`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-[35px] block md:mb-[50px] lg:mb-[75px] lg:flex lg:items-end lg:justify-between lg:gap-[45px]">

          <div className="flex-1">
            <span className="mb-5 inline-flex items-center gap-3 text-[9px] font-extrabold tracking-[2px] text-[var(--red-dark)] sm:text-[11px] sm:tracking-[2.5px]">
              <i className="block h-0.5 w-[30px] bg-[var(--gold-dark)]" />
              HOW WE WORK
            </span>

            <h2 className="font-heading text-[33px] font-semibold leading-[1.15] tracking-[-0.8px] text-[var(--brown)] sm:text-[39px] md:text-[46px] xl:text-[56px]">
              From First Thought
              <br />
              <em className="text-[var(--red-dark)]">
                To Final Frame.
              </em>
            </h2>
          </div>

          <p className="mt-5 max-w-[480px] text-xs font-medium leading-[1.8] text-[var(--text-secondary)] sm:text-[13px] lg:mb-[5px] lg:mt-0 lg:max-w-[390px] lg:border-l lg:border-[var(--border-gold)] lg:pl-[25px] lg:text-sm lg:leading-[1.9]">
            Every meaningful production follows a thoughtful process.
            We bring creative vision and professional execution together
            at every stage.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative pt-[5px]">

          {/* Continuous Horizontal Line */}
          <div className="absolute left-0 right-0 top-[25px] hidden h-px bg-[rgba(201,138,8,0.35)] lg:block">
            <span className="block h-full w-full bg-[var(--gold-dark)]" />
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-y-[30px] lg:grid-cols-5 lg:gap-0">

            {processSteps.map((step) => (
              <article
                key={step.number}
                className="group relative grid min-w-0 grid-cols-[40px_minmax(0,1fr)] items-start gap-[14px] border-b border-[var(--border-gold)] py-5 last:border-b-0 min-[481px]:grid-cols-[48px_minmax(0,1fr)] min-[481px]:gap-[18px] sm:block sm:border-r sm:px-[22px] sm:pb-[25px] sm:pt-0 sm:odd:border-r sm:even:border-r-0 sm:first:pl-0 sm:even:pr-0 lg:border-b-0 lg:border-r lg:px-[15px] lg:pb-[15px] lg:odd:border-r lg:even:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0 xl:px-[22px]"
              >

                {/* Timeline Marker */}
                <div className="relative z-[2] flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[var(--gold-dark)] bg-[var(--ivory)] transition-all duration-300 ease-in-out group-hover:scale-[1.08] group-hover:border-[var(--red-dark)] group-hover:bg-[var(--red-dark)] min-[481px]:h-[42px] min-[481px]:w-[42px] sm:mb-[22px] lg:mb-8">

                  <span className="font-heading text-xs font-bold text-[var(--red-dark)] transition-colors duration-300 group-hover:text-[var(--gold-light)] min-[481px]:text-sm">
                    {step.number}
                  </span>

                </div>

                {/* Step Content */}
                <div className="min-w-0">

                  {/* Stage Label */}
                  <span className="mb-2 block whitespace-nowrap text-[clamp(8px,0.75vw,13px)] font-extrabold leading-[1.6] tracking-[1.3px] text-[var(--gold-dark)] sm:mb-[10px] lg:min-h-[30px]">
                    {step.detail}
                  </span>

                  {/* Title */}
                  <h3 className="mb-2 font-heading text-[18px] font-semibold leading-[1.4] text-[var(--brown)] sm:text-xl lg:mb-0 lg:min-h-[60px] lg:text-[17px] xl:text-lg">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] font-medium leading-[1.85] text-[var(--text-secondary)] min-[481px]:text-xs sm:text-[13px] lg:text-sm">
                    {step.description}
                  </p>

                </div>

                {/* Animated Bottom Red Line */}
                <span
  className="absolute bottom-0 left-[22px] right-[22px] hidden h-[2px] origin-left scale-x-0 bg-[var(--red)] transition-transform duration-500 ease-in-out group-hover:scale-x-100 sm:block"
/>

              </article>
            ))}

          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[var(--border-gold)] pt-5 sm:mt-[42px] sm:gap-[18px]">

          <span className="w-full whitespace-nowrap text-[9px] font-extrabold tracking-[1.5px] text-[var(--text-secondary)] sm:w-auto">
            SHGR PRODUCTION APPROACH
          </span>

          <div className="hidden h-px flex-1 bg-[var(--border-gold)] sm:block" />

          <p className="flex-1 text-[8px] font-semibold leading-[1.8] tracking-[1px] text-[var(--text-secondary)] sm:flex-none sm:whitespace-nowrap sm:text-[9px]">
            <strong className="text-[var(--red-dark)]">
              ONE PROCESS.
            </strong>{" "}
            FIVE STAGES.
            <em className="not-italic font-extrabold text-[var(--brown)]">
              {" "}ONE CREATIVE VISION.
            </em>
          </p>

          <a
            href="#collaborate"
            aria-label="Collaborate with SHGR Entertainment"
            className="flex h-[37px] w-[37px] shrink-0 items-center justify-center rounded-full border border-[var(--border-gold)] text-[var(--red-dark)] transition-all duration-300 hover:border-[var(--red-dark)] hover:bg-[var(--red-dark)] hover:text-white"
          >
            <ArrowUpRight size={18} />
          </a>

        </div>
      </div>
    </section>
  );
}
