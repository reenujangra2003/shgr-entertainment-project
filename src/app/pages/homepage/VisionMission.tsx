
import {
  Flower2,
  Clapperboard,
  Layers3,
  Handshake,
  ArrowUpRight,
} from "lucide-react";

import styles from "../../css/VisionMission.module.css";

const missionPoints = [
  {
    icon: Flower2,
    title: "Honour Our Roots",
    description:
      "Celebrate faith, culture and timeless values with sensitivity and respect.",
  },
  {
    icon: Clapperboard,
    title: "Create Impactful Content",
    description:
      "Develop original, engaging and well-crafted fiction and devotional cinema.",
  },
  {
    icon: Layers3,
    title: "Work with Excellence",
    description:
      "Maintain high production standards, transparency and timely delivery.",
  },
  {
    icon: Handshake,
    title: "Grow Together",
    description:
      "Build lasting partnerships with creators, platforms, broadcasters and investors.",
  },
];

export default function VisionMission() {
  return (
    <section
      className={`relative overflow-hidden bg-[var(--ivory)] py-[50px] sm:py-[60px] md:py-[75px] lg:py-[90px] lg:pb-[100px] ${styles.sectionBackground}`}
      id="vision-mission"
    >
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-8 text-center sm:mb-10 lg:mb-12">
          <span className="mb-4 inline-flex items-center justify-center gap-2 text-[8px] font-extrabold tracking-[1.5px] text-[var(--red-dark)] sm:gap-3 sm:text-[10px] sm:tracking-[2px] md:gap-[14px] md:text-[11px] md:tracking-[3px]">
            <i className="block h-px w-[22px] bg-[var(--gold-dark)] sm:w-[28px] md:w-[34px]" />
            OUR PURPOSE &amp; DIRECTION
            <i className="block h-px w-[22px] bg-[var(--gold-dark)] sm:w-[28px] md:w-[34px]" />
          </span>

          <h2 className="font-heading text-[30px] font-semibold leading-[1.2] tracking-[-0.8px] text-[var(--brown)] sm:text-[36px] md:text-[44px] lg:text-[54px]">
            What We <em className="text-[var(--red)]">Believe In.</em>
          </h2>
        </div>

        {/* Vision and Mission Layout */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-[30px]">

          {/* Vision Panel */}
          <div className="relative isolate min-h-[410px] overflow-hidden rounded-[10px] bg-[var(--brown)] sm:min-h-[450px] md:min-h-[490px] lg:min-h-[550px]">
            <div className={`absolute inset-0 overflow-hidden ${styles.visionImage}`}>
              <img
                src="/images/about.png"
                alt="Film crew working on a cinematic production set"
                className="block h-full w-full object-cover object-center"
              />
            </div>

            {/* Vision Overlay */}
            <div className="absolute inset-x-0 bottom-0 z-[2] bg-[linear-gradient(to_bottom,transparent_0%,rgba(23,20,17,0.45)_20%,rgba(75,10,20,0.94)_55%,rgba(65,12,18,0.98)_100%)] px-[19px] pb-5 pt-[30px] text-white sm:px-[25px] sm:pb-[23px] sm:pt-[35px] md:px-7 md:pb-[25px] lg:px-10 lg:pb-[30px] lg:pt-[45px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[11px] font-extrabold tracking-[2.5px] text-[var(--gold-light)]">
                  OUR VISION
                </span>
                <i className="h-0.5 w-[35px] bg-[var(--gold)]" />
              </div>

              <h3 className="mb-[18px] max-w-[490px] font-heading text-[27px] font-semibold leading-[1.25] sm:text-[32px] md:text-[36px] lg:text-[40px]">
                Creating Stories That
                <em className="block text-[var(--gold-light)]">
                  Connect Generations.
                </em>
              </h3>

              <p className="max-w-[520px] text-xs font-medium leading-[1.7] text-[rgba(255,248,233,0.94)] sm:text-[13px] sm:leading-[1.85]">
                To be a trusted name in Indian entertainment, known
                for authentic devotional storytelling and high-quality
                fiction that connects with audiences across generations.
              </p>

              <div className="mt-[18px] flex items-center justify-between gap-4 border-t border-[rgba(255,226,122,0.28)] pt-[17px] text-[var(--gold-light)] sm:mt-[25px]">
                <span className="text-[9px] font-extrabold tracking-[2px]">
                  SHGR ENTERTAINMENT
                </span>
                <ArrowUpRight
                  size={20}
                  className={styles.visionArrow}
                />
              </div>
            </div>
          </div>

          {/* Mission Panel */}
          <div className="flex min-w-0 flex-col justify-between rounded-[10px] border border-[rgba(201,138,8,0.55)] bg-[rgba(255,255,255,0.72)] px-[17px] py-[25px] sm:px-[23px] sm:py-7 md:px-[25px] md:py-7 lg:px-[38px] lg:pb-[25px] lg:pt-8">

            {/* Mission Heading */}
            <div className="mb-[18px]">
              <div className="mb-[17px] flex items-center gap-[15px]">
                <span className="text-[10px] font-extrabold tracking-[2.5px] text-[var(--red-dark)] sm:text-xs">
                  OUR MISSION
                </span>
                <i className="h-px w-[65px] bg-[var(--gold-dark)]" />
              </div>

              <h3 className="font-heading text-[27px] font-semibold leading-[1.25] text-[var(--brown)] sm:text-[31px] md:text-[35px] lg:text-[39px]">
                Purpose Behind
                <em className="text-[var(--gold-dark)]">
                  {" "}Every Frame.
                </em>
              </h3>
            </div>

            {/* Mission List */}
            <div className="flex flex-1 flex-col">
              {missionPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="group grid grid-cols-[48px_2px_minmax(0,1fr)] items-center gap-[10px] border-b border-[rgba(201,138,8,0.18)] px-0 py-4 transition-colors duration-300 last:border-b-0 sm:grid-cols-[58px_2px_minmax(0,1fr)] sm:gap-[13px] md:grid-cols-[76px_2px_minmax(0,1fr)] md:gap-5 md:px-2 md:py-[17px]"
                    key={item.title}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--cream)] text-[var(--red-dark)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[var(--red-dark)] group-hover:text-white sm:h-[58px] sm:w-[58px] md:h-[76px] md:w-[76px] md:rounded-[15px]">
                      <Icon
                        size={27}
                        strokeWidth={1.6}
                        className="h-5 w-5 sm:h-[23px] sm:w-[23px] md:h-[27px] md:w-[27px]"
                      />
                    </div>

                    <div className="h-[38px] w-0.5 bg-[var(--gold-dark)] md:h-[42px]" />

                    <div className="min-w-0">
                      <h4 className="mb-[5px] font-heading text-[15px] font-bold leading-[1.3] text-[var(--brown)] sm:text-[17px] md:text-xl">
                        {item.title}
                      </h4>
                      <p className="text-[11px] font-medium leading-[1.6] text-[var(--text-secondary)] sm:text-xs md:text-[13px] md:leading-[1.65]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mission Footer */}
            <div className="mt-[15px] flex items-center gap-[15px] border-t border-[rgba(201,138,8,0.2)] pt-4">
              <span className="whitespace-nowrap text-[8px] font-extrabold tracking-[1px] text-[var(--red-dark)] sm:text-[9px] sm:tracking-[1.8px]">
                OUR COMMITMENT TO EVERY STORY
              </span>
              <div className="h-0.5 w-[45px] shrink-0 bg-[var(--gold-dark)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
