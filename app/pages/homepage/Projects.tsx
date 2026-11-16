
import { ArrowUpRight } from "lucide-react";
import styles from "../../css/Projects.module.css";

const projects = [
    {
        number: "01",
        title: "Devotional Cinema",
        category: "DEVOTIONAL",
        format: "FEATURE FILM",
        description:
            "Stories inspired by faith, spiritual heritage and the timeless values of Indian culture.",
        image: "/images/p1.jpg",
        alt: "Indian heritage architecture in a cinematic setting",
    },
    {
        number: "02",
        title: "Fiction & Drama",
        category: "FICTION",
        format: "WEB SERIES",
        description:
            "Emotion-driven narratives exploring human relationships, society and contemporary life.",
        image: "/images/p2.avif",
        alt: "Cinematic fiction and drama storytelling scene",
    },
    {
        number: "03",
        title: "Stories for the Screen",
        category: "ORIGINAL CONTENT",
        format: "FILM & SERIES",
        description:
            "A creative space for distinctive stories developed with imagination, purpose and craft.",
        image: "/images/p3.webp",
        alt: "Professional film camera on a production set",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#fffaf0] py-[55px] sm:py-[70px] md:py-[85px] lg:py-[105px]"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="mb-[38px] grid grid-cols-1 items-end gap-6 sm:mb-12 md:grid-cols-[1.2fr_0.8fr] md:gap-[30px] lg:mb-[58px] lg:gap-[60px]">

                    <div>
                        <span className="mb-[18px] inline-flex items-center gap-[11px] text-[9px] font-extrabold tracking-[1.8px] text-[var(--red-dark)] sm:mb-[22px] sm:text-[11px] sm:tracking-[2.5px]">
                            <i className="h-0.5 w-[27px] bg-[var(--gold-dark)]" />
                            OUR CREATIVE PORTFOLIO
                        </span>

                        <h2 className="font-heading text-[40px] font-medium leading-[1.1] tracking-[-1.5px] text-[var(--brown)] sm:text-[50px] md:text-[56px] lg:text-[70px] lg:tracking-[-2px]">
                            Stories made
                            <br />
                            <em className="font-medium text-[var(--red-dark)]">
                                to be remembered.
                            </em>
                        </h2>
                    </div>

                    {/* Intro */}
                    <div className="max-w-[390px] justify-self-start border-l-2 border-[var(--gold)] pb-[7px] pl-5 sm:pl-6 md:justify-self-end">
                        <span className="text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)]">
                            THE SHGR VISION
                        </span>

                        <p className="mt-[14px] text-xs font-medium leading-[1.85] text-[var(--text-secondary)] sm:text-[13px] md:text-sm md:leading-[1.9]">
                            Every memorable screen experience begins with a story worth
                            telling. We are building a creative slate across devotional
                            cinema and fiction storytelling.
                        </p>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                    {projects.map((project) => (
                        <article
                            key={project.number}
                            className="group min-w-0 border border-[rgba(116,98,83,0.14)] bg-white shadow-none transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(36,21,14,0.20)]"
                        >
                            {/* Project Image */}
                            <div className={`relative h-[225px] overflow-hidden bg-[#e9dfd0] sm:h-[240px] md:h-[250px] lg:h-[270px] ${styles.projectImage}`}>
                                <img
                                    src={project.image}
                                    alt={project.alt}
                                    loading="lazy"
                                    className={`block h-full w-full object-cover ${styles.projectImageContent}`}
                                />

                                {/* Image Overlay */}
                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(23,20,17,0.2),transparent_35%,rgba(23,20,17,0.15))]" />

                                {/* Project Number */}
                                <span className="absolute left-[18px] top-[17px] z-[1] text-[11px] font-extrabold tracking-[2px] text-white">
                                    {project.number}
                                </span>
                            </div>

                            {/* Project Content */}
                            <div className="px-[18px] pb-[18px] pt-5 sm:px-[18px] sm:pb-[18px] sm:pt-[22px] lg:px-[22px] lg:pb-5 lg:pt-6">

                                {/* Meta Information */}
                                <div className="mb-[15px] flex flex-wrap items-center justify-between gap-2">
                                    <span className="text-[9px] font-extrabold tracking-[1.2px] text-[var(--red-dark)] sm:text-[10px]">
                                        {project.category}
                                    </span>

                                    <span className="text-[9px] font-bold tracking-[1px] text-[var(--text-secondary)] sm:text-[10px]">
                                        {project.format}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 font-heading text-[19px] font-semibold leading-[1.35] text-[var(--brown)] sm:text-xl lg:text-[21px]">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="min-h-0 text-xs font-medium leading-[1.8] text-[var(--text-secondary)] sm:min-h-[70px] sm:text-[13px]">
                                    {project.description}
                                </p>

                                {/* Card Footer */}
                                <div className="mt-[18px] flex items-center justify-between border-t border-[rgba(116,98,83,0.17)] pt-[15px]">
                                    <span className="text-[9px] font-extrabold tracking-[1px] text-[var(--text-secondary)] sm:text-[10px] sm:tracking-[1.2px]">
                                        SHGR ENTERTAINMENT
                                    </span>

                                    <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[var(--border-gold)] text-[var(--red-dark)] transition-all duration-300 group-hover:border-[var(--red-dark)] group-hover:bg-[var(--red-dark)] group-hover:text-white">
                                        <ArrowUpRight size={19} />
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}
