
import {
  Clapperboard,
  MonitorPlay,
  Sparkles,
  Drama,
  PenTool,
  Film,
} from "lucide-react";

import styles from "../../css/WhatWeDo.module.css";

const services = [
  {
    number: "01",
    icon: Clapperboard,
    title: "Film Production",
    description:
      "Feature films and short films, from script development to post-production, with a focus on devotional and fiction genres.",
  },
  {
    number: "02",
    icon: MonitorPlay,
    title: "Web Series & Episodic Content",
    description:
      "Original series designed for OTT platforms, television and digital audiences, with strong narratives and consistent production quality.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Devotional & Spiritual Content",
    description:
      "Films and series based on saints, sacred traditions, mythology and spiritual journeys, told with authenticity and reverence.",
  },
  {
    number: "04",
    icon: Drama,
    title: "Fiction & Drama",
    description:
      "Emotionally engaging stories across drama, family, social and contemporary themes.",
  },
  {
    number: "05",
    icon: PenTool,
    title: "Development & Pre-Production",
    description:
      "Concept development, script and screenplay support, budgeting, scheduling, casting and location planning.",
  },
  {
    number: "06",
    icon: Film,
    title: "Production & Post-Production Management",
    description:
      "End-to-end execution, including crew, equipment, shooting, editing, sound, colour and final delivery.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--ivory)] py-[55px] sm:py-[65px] md:py-[75px] lg:py-[90px]"
      id="services"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-[35px] block md:mb-12 lg:mb-[55px] lg:flex lg:items-end lg:justify-between lg:gap-[45px]">

          <div className="flex-1">
            <span className="mb-5 inline-flex items-center gap-3 text-[9px] font-extrabold tracking-[2px] text-[var(--red-dark)] sm:text-[10px] md:text-[11px] md:tracking-[2.5px]">
              <i className="block h-0.5 w-[30px] bg-[var(--gold-dark)]" />
              WHAT WE DO
            </span>

            <h2 className="font-heading text-[35px] font-semibold leading-[1.13] tracking-[-1px] text-[var(--brown)] sm:text-[42px] md:text-[50px] lg:text-[60px]">
              Bringing Stories
              <br />
              <em className="text-[var(--red-dark)]">
                To Life.
              </em>
            </h2>
          </div>

          <p className="mt-5 max-w-[480px] text-xs font-medium leading-[1.8] text-[var(--text-secondary)] sm:text-[13px] lg:mb-[5px] lg:mt-0 lg:max-w-[390px] lg:border-l lg:border-[var(--border-gold)] lg:pl-[25px] lg:text-sm lg:leading-[1.9]">
            From the first idea to the final frame, we bring together
            creative thinking, production expertise and careful execution
            to create meaningful screen experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 border-l border-t border-[var(--border-gold)] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
  className="group relative flex min-w-0 flex-col justify-between border-b border-r border-[var(--border-gold)] bg-transparent px-[17px] py-[21px] transition-colors duration-300 hover:bg-[#FFF1D0] sm:px-6 sm:py-6 lg:min-h-[245px] lg:px-7 lg:pb-[25px] lg:pt-7"
  key={service.number}
>
                {/* Top Row */}
                <div className="mb-[23px] flex items-center justify-between lg:mb-[30px]">
                  <span className="font-heading text-[19px] font-semibold text-[var(--gold-dark)] sm:text-[21px] lg:text-[22px]">
                    {service.number}
                  </span>

                  <Icon
                    className={`h-[22px] w-[22px] text-[var(--red-dark)] sm:h-6 sm:w-6 lg:h-[25px] lg:w-[25px] ${styles.serviceIcon}`}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Service Content */}
                <div>
                  <h3 className="mb-[11px] font-heading text-[18px] font-semibold leading-[1.4] text-[var(--brown)] sm:text-[19px] lg:text-[21px]">
                    {service.title}
                  </h3>

                  <p className="max-w-[340px] text-[11px] font-medium leading-[1.8] text-[var(--text-secondary)] sm:text-xs lg:text-[13px] lg:leading-[1.85]">
                    {service.description}
                  </p>
                </div>

                {/* Accent Line */}
                <span
                  className={`mt-[17px] block h-0.5 w-0 bg-[var(--red)] lg:mt-5 ${styles.serviceLine}`}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
