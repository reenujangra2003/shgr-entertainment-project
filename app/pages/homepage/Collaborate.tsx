
import {
  Clapperboard,
  Wallet,
  MonitorPlay,
  PenTool,
  Landmark,
} from "lucide-react";

import Link from "next/link";
import styles from "../../css/Collaborate.module.css";

const partnerships = [
  {
    number: "01",
    title: "Producers & Co-Producers",
    description:
      "Build meaningful projects through creative and production partnerships.",
    icon: Clapperboard,
  },
  {
    number: "02",
    title: "Investors & Financiers",
    description:
      "Explore opportunities to support original film and series projects.",
    icon: Wallet,
  },
  {
    number: "03",
    title: "OTT Platforms & Distributors",
    description:
      "Connect with us for platform, broadcast and distribution opportunities.",
    icon: MonitorPlay,
  },
  {
    number: "04",
    title: "Writers, Directors & Creative Talent",
    description:
      "Bring fresh ideas, stories and creative perspectives to the table.",
    icon: PenTool,
  },
  {
    number: "05",
    title: "Government & Institutional Bodies",
    description:
      "Explore collaborations that support meaningful cultural storytelling.",
    icon: Landmark,
  },
];

export default function Collaborate() {
  return (
    <section
      className="overflow-hidden bg-white py-[55px] sm:py-[70px] md:py-20 lg:py-[100px]"
      id="collaborate"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Heading */}
        <div className="grid grid-cols-1 items-end gap-6 border-b border-[#e9dfd2] pb-10 sm:pb-[50px] md:grid-cols-[1.1fr_0.75fr] md:gap-[35px] lg:gap-20 lg:pb-[65px]">

          {/* Heading */}
          <div>
            <span className="mb-5 inline-flex items-center gap-3 text-[9px] font-extrabold tracking-[1.8px] text-[var(--red-dark)] sm:mb-6 sm:text-[11px] sm:tracking-[2px]">
              <i className="h-0.5 w-7 bg-[var(--gold-dark)]" />
              COLLABORATE WITH SHGR
            </span>

            <h2 className="font-heading text-[38px] font-medium leading-[1.12] tracking-[-1px] text-[var(--brown)] sm:text-[48px] md:text-[55px] lg:text-[68px] lg:tracking-[-1.8px]">
              Great stories
              <br />
              <em className="font-medium text-[var(--red-dark)]">
                bring people together.
              </em>
            </h2>
          </div>

          {/* Introduction */}
          <div className="max-w-[410px] justify-self-start md:justify-self-end">
            <p className="mb-[15px] text-[13px] font-medium leading-[1.85] text-[#55463c] sm:text-sm sm:leading-[1.9] md:text-[15px]">
              We believe that meaningful entertainment is created
              through shared ideas, creative thinking and strong
              professional partnerships.
            </p>

            <p className="mb-0 text-[13px] font-medium leading-[1.85] text-[#55463c] sm:text-sm sm:leading-[1.9] md:text-[15px]">
              Whether you are a filmmaker, investor, platform or
              creative professional, let's explore what we can
              create together.
            </p>
          </div>
        </div>

        {/* Opportunities */}
        <div className="pt-7 sm:pt-[35px]">

          {/* Section Label */}
          <div className="mb-5 flex items-center justify-between gap-3 sm:mb-7 sm:gap-5">
            <span className="text-[9px] font-extrabold tracking-[1.3px] text-[var(--red-dark)] sm:text-[10px] sm:tracking-[1.8px]">
              PARTNERSHIP OPPORTUNITIES
            </span>

            <span className="text-right text-[8px] font-bold tracking-[1px] text-[#79685b] sm:text-[10px] sm:tracking-[1.5px]">
              LET'S CREATE TOGETHER
            </span>
          </div>

          {/* Partnership Cards */}
          <div className="grid grid-cols-1 border-l border-t border-[#e9dfd2] sm:grid-cols-2 lg:grid-cols-3">

            {partnerships.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className={`group relative flex min-h-0 flex-col border-b border-r border-[#e9dfd2] bg-white px-[18px] py-[21px] transition-colors duration-300 hover:bg-[#fffaf0] sm:min-h-[225px] sm:p-6 lg:min-h-[235px] lg:px-[27px] lg:pb-[25px] lg:pt-[27px] ${styles.collaborateCard}`}
                >

                  {/* Card Top */}
                  <div className="mb-[19px] flex items-center justify-between sm:mb-7">
                    <span className="font-heading text-[18px] font-semibold text-[var(--gold-dark)]">
                      {item.number}
                    </span>

                    {/* Icon */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#efdfbc] bg-[#fff8e9] text-[var(--red-dark)] transition-all duration-300 group-hover:border-[var(--red-dark)] group-hover:bg-[var(--red-dark)] group-hover:text-white sm:h-12 sm:w-12">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Card Content */}
                  <h3 className="mb-[11px] font-heading text-[19px] font-semibold leading-[1.4] text-[#24150e] sm:text-[21px]">
                    {item.title}
                  </h3>

                  <p className="mb-0 max-w-[330px] flex-1 text-xs font-medium leading-[1.85] text-[#65564b] sm:text-[13px]">
                    {item.description}
                  </p>

                  {/* Animated Bottom Line */}
                  <span
                    className={`mt-[23px] block h-0.5 w-8 origin-left bg-[var(--gold-dark)] transition-all duration-300 group-hover:w-[65px] ${styles.cardLine}`}
                  />
                </article>
              );
            })}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-[35px] flex flex-col items-start gap-5 border-l-[3px] border-[var(--gold-dark)] bg-[#fff8e9] px-5 py-6 sm:mt-[45px] sm:px-7 sm:py-7 md:flex-row md:items-center md:justify-between md:gap-6 lg:mt-[55px] lg:px-[35px] lg:py-[30px]">

          <div>
            <span className="text-[9px] font-extrabold tracking-[1.7px] text-[var(--red-dark)] sm:text-[10px]">
              BUILD SOMETHING MEANINGFUL
            </span>

            <h3 className="mt-[9px] font-heading text-[25px] font-medium leading-[1.3] text-[var(--brown)] sm:text-[30px] lg:text-[35px]">
              Let's create{" "}
              <em className="text-[var(--red-dark)]">
                something remarkable.
              </em>
            </h3>
          </div>

          <Link
            href="/contact-us"
            className={`inline-flex w-full items-center justify-center gap-4 bg-[var(--red-dark)] px-[23px] py-4 text-[10px] font-extrabold tracking-[1.2px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brown)] sm:w-auto sm:text-[11px] ${styles.collaborateButton}`}
          >
            START A CONVERSATION
            <span className="text-lg leading-none">↗</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
