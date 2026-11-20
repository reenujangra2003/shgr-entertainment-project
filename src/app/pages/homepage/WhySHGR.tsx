
import {
  BookOpen,
  Landmark,
  ClipboardList,
  Handshake,
  Eye,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";

import Link from "next/link";
import styles from "../../css/WhySHGR.module.css";

const reasons = [
  {
    number: "01",
    title: "Story-First Approach",
    description:
      "Every project begins with a strong script and a clear creative vision.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Cultural Authenticity",
    description:
      "Research and respect guide how we treat devotional and traditional subjects.",
    icon: Landmark,
  },
  {
    number: "03",
    title: "Professional Production Standards",
    description:
      "Structured planning, budgeting and scheduling at every stage.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Collaborative Partnerships",
    description:
      "We work closely with directors, writers, artists, technicians and financiers.",
    icon: Handshake,
  },
  {
    number: "05",
    title: "Transparent Execution",
    description:
      "Clear communication, defined timelines and accountability throughout.",
    icon: Eye,
  },
  {
    number: "06",
    title: "Quality Delivery",
    description:
      "Content prepared to broadcast and platform specifications.",
    icon: BadgeCheck,
  },
];

export default function WhySHGR() {
  return (
    <section
      className="relative overflow-hidden bg-white py-[55px] sm:py-[70px] md:py-20 lg:py-[90px]"
      id="why-shgr"
    >
      {/* Decorative Circles */}
      <div className={`pointer-events-none absolute -right-[130px] -top-[190px] h-[380px] w-[380px] rounded-full border border-[rgba(201,138,8,0.12)] ${styles.decoration}`} />

      <div className={`pointer-events-none absolute -bottom-[150px] -left-[100px] h-[260px] w-[260px] rounded-full border border-[rgba(201,138,8,0.12)] ${styles.decoration}`} />

      <div className="container relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-[35px] max-w-[720px] text-center sm:mb-10 lg:mb-[55px]">
          <span className="mb-[18px] inline-flex items-center justify-center gap-2 text-[8px] font-extrabold tracking-[1.5px] text-[var(--red-dark)] sm:gap-3 sm:text-[10px] sm:tracking-[2.5px] md:text-[11px] md:tracking-[3px]">
            <i className="h-px w-5 bg-[var(--gold-dark)] sm:w-7" />
            THE SHGR DIFFERENCE
            <i className="h-px w-5 bg-[var(--gold-dark)] sm:w-7" />
          </span>

          <h2 className="mb-4 font-heading text-[29px] font-bold leading-[1.3] text-[var(--brown)] sm:text-[36px] md:text-[42px] lg:text-[47px]">
            Why Choose{" "}
            <span className="text-[var(--red)]">
              SHGR Entertainment?
            </span>
          </h2>

          <p className="mx-auto max-w-[610px] text-xs font-medium leading-[1.8] text-[var(--text-secondary)] sm:text-[13px] md:text-sm md:leading-[1.9]">
            A thoughtful approach to storytelling, backed by creative
            collaboration, professional discipline and a commitment to quality.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[5px] border border-[rgba(201,138,8,0.22)] bg-[var(--ivory)] px-5 pb-[19px] pt-[23px] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-transparent hover:bg-[image:linear-gradient(135deg,var(--red-dark),var(--brown))] hover:shadow-[0_18px_40px_rgba(23,20,17,0.2)] sm:px-6 sm:pb-[22px] sm:pt-[27px] lg:min-h-[245px]"
                key={reason.number}
              >
                {/* Animated Golden Top Line */}
                <span className="absolute left-0 top-0 h-[3px] w-0 bg-[image:var(--gradient-gold)] transition-all duration-500 ease-in-out group-hover:w-full" />

                {/* Top Row */}
                <div className="mb-5 flex items-center justify-between sm:mb-[25px]">
                  <span className="font-heading text-[20px] font-bold text-[rgba(201,138,8,0.75)] transition-colors duration-300 group-hover:text-[var(--gold-light)] sm:text-[22px]">
                    {reason.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-gold)] bg-[rgba(249,197,38,0.22)] text-[var(--red-dark)] transition-all duration-300 group-hover:border-transparent group-hover:bg-[image:var(--gradient-gold)] group-hover:text-[var(--brown)] sm:h-12 sm:w-12">
                    <Icon size={23} strokeWidth={1.6} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-3 font-heading text-base font-bold leading-[1.5] text-[var(--brown)] transition-colors duration-300 group-hover:text-white sm:text-[17px]">
                  {reason.title}
                </h3>

                <p className="mb-5 flex-1 text-xs font-medium leading-[1.85] text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-white sm:text-[13px]">
                  {reason.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-[rgba(201,138,8,0.22)] pt-[15px] text-[var(--red-dark)] transition-all duration-300 group-hover:border-[rgba(255,226,122,0.3)] group-hover:text-[var(--gold-light)]">
                  <span className="text-[9px] font-extrabold tracking-[1.8px]">
                    OUR COMMITMENT
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-[3px] group-hover:translate-x-[3px]"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-[30px] flex flex-wrap items-center gap-4 rounded-[5px] border border-[var(--border-gold)] bg-[var(--ivory)] p-[22px] sm:mt-10 sm:gap-[18px] sm:p-[25px] lg:mt-[45px] lg:gap-[25px] lg:px-[30px]">

          {/* Logo */}
          <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[image:var(--gradient-dark)] p-3 sm:h-[75px] sm:w-[75px] sm:p-4">
            <img
              src="/images/logo.png"
              alt="SHGR Entertainment logo"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Promise */}
          <div className="min-w-0 flex-1">
            <span className="text-[9px] font-extrabold tracking-[2px] text-[var(--red-dark)]">
              OUR PROMISE
            </span>

            <h3 className="mt-[7px] font-heading text-base font-bold text-[var(--brown)] sm:text-[18px] lg:text-[19px]">
              Creative Vision. Professional Execution.
            </h3>
          </div>

          {/* CTA */}
          <Link
            href="/contact-us"
            className={`inline-flex w-full items-center justify-center gap-[10px] rounded-[3px] bg-[image:var(--gradient-gold)] px-5 py-[13px] text-[10px] font-extrabold tracking-[1px] text-[var(--brown)] sm:w-auto ${styles.footerLink}`}
          >
            WORK WITH US
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
