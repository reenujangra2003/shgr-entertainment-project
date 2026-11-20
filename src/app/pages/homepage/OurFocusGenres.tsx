
import {
    ArrowUpRight,
    Play,
    Sparkles,
    Clapperboard,
} from "lucide-react";

import styles from "../../css/OurFocusGenres.module.css";

const genres = [
    {
        number: "01",
        title: "Devotional Films",
        subtitle: "FAITH • CULTURE • SPIRITUALITY",
        description:
            "Spiritual stories carry a timeless place in Indian culture. We develop devotional films that present faith, devotion and wisdom with depth, cultural accuracy and cinematic quality, so they resonate with families and audiences of all ages.",
        image: "/images/genre1.jpeg",
        icon: Sparkles,
        imageLabel: "STORIES ROOTED IN FAITH",
    },
    {
        number: "02",
        title: "Fiction Films & Series",
        subtitle: "EMOTION • CHARACTERS • STORYTELLING",
        description:
            "We create original fiction built on strong characters, emotional truth and well-structured storytelling, suited to theatrical, television and OTT audiences.",
        image: "/images/genre2.jpeg",
        icon: Clapperboard,
        imageLabel: "STORIES THAT CONNECT",
    },
];

export default function OurFocusGenres() {
    return (
        <section
            className="relative overflow-hidden bg-[var(--ivory)] py-5 sm:py-7 md:py-8 lg:py-10"
            id="genres"
        >
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="mx-auto mb-[35px] max-w-[720px] text-center sm:mb-10 lg:mb-[55px]">
                    <span className="mb-[18px] inline-flex items-center justify-center gap-2 text-[8px] font-extrabold tracking-[1.5px] text-[var(--red-dark)] sm:gap-3 sm:text-[10px] sm:tracking-[2.5px] md:text-[11px] md:tracking-[3px]">
                        <i className="h-px w-5 bg-[var(--gold-dark)] sm:w-7" />
                        OUR CREATIVE DIRECTION
                        <i className="h-px w-5 bg-[var(--gold-dark)] sm:w-7" />
                    </span>

                    <h2 className="mb-[17px] font-heading text-[30px] font-bold text-[var(--brown)] sm:text-[36px] md:text-[42px] lg:text-5xl">
                        Our Focus{" "}
                        <span className="text-[var(--red)]">Genres</span>
                    </h2>

                    <p className="mx-auto max-w-[620px] text-xs font-medium leading-[1.8] text-[var(--text-secondary)] sm:text-[13px] md:text-[15px] md:leading-[1.9]">
                        Two creative worlds. One commitment to meaningful storytelling.
                        Exploring stories that inspire, entertain and connect with audiences.
                    </p>
                </div>

                {/* Genre Cards */}
                <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
                    {genres.map((genre) => {
                        const Icon = genre.icon;

                        return (
                            <article
                                className={`flex h-full flex-col overflow-hidden rounded-[5px] border border-[rgba(201,138,8,0.2)] bg-white ${styles.genreCard}`}
                                key={genre.number}
                            >
                                {/* Image Section */}
                                <div className={`relative h-[225px] shrink-0 overflow-hidden bg-[var(--brown)] sm:h-[260px] md:h-[290px] lg:h-[340px] ${styles.imageWrap}`}>
                                    <img
                                        src={genre.image}
                                        alt={genre.title}
                                        className={`h-full w-full object-cover ${styles.genreImage}`}
                                    />

                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,20,17,0.48)_0%,transparent_35%,transparent_55%,rgba(23,20,17,0.78)_100%)]" />

                                    {/* Image Top */}
                                    <div className="absolute left-[17px] right-[17px] top-[18px] flex items-center justify-between sm:left-6 sm:right-6 sm:top-[22px]">
                                        <span className="font-heading text-[21px] font-bold text-[var(--gold-light)] sm:text-[25px]">
                                            {genre.number}
                                        </span>

                                        <span className="text-[8px] font-extrabold tracking-[1.5px] text-white sm:text-[9px] sm:tracking-[2px]">
                                            {genre.imageLabel}
                                        </span>
                                    </div>

                                    {/* Image Bottom */}
                                    <div className="absolute bottom-[18px] left-[17px] right-[17px] flex items-center gap-3 sm:bottom-[23px] sm:left-6 sm:right-6 sm:gap-[13px]">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[image:var(--gradient-gold)] text-[var(--brown)] sm:h-11 sm:w-11">
                                            <Icon size={23} strokeWidth={1.6} />
                                        </div>

                                        <span className="text-[9px] font-extrabold tracking-[1.3px] text-white sm:text-[10px] sm:tracking-[1.8px]">
                                            {genre.subtitle}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex flex-1 flex-col px-[18px] pb-[18px] pt-[22px] sm:px-[22px] sm:pb-5 sm:pt-[25px] lg:px-[30px] lg:pb-[22px] lg:pt-[30px]">
                                    <div className="mb-[17px] flex items-center justify-between gap-3">
                                        <div>
                                            <span className="text-[9px] font-extrabold tracking-[2px] text-[var(--red)]">
                                                OUR GENRE
                                            </span>

                                            <h3 className="mt-2 font-heading text-[19px] font-bold text-[var(--brown)] sm:text-[21px] lg:text-2xl">
                                                {genre.title}
                                            </h3>
                                        </div>

                                        <div className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--border-gold)] text-[var(--red-dark)] transition-all duration-300 sm:h-[43px] sm:w-[43px] ${styles.genreArrow}`}>
                                            <ArrowUpRight size={23} />
                                        </div>
                                    </div>

                                    <p className="mb-6 flex-1 text-xs font-medium leading-[1.8] text-[var(--text-secondary)] sm:text-[13px] sm:leading-[1.9]">
                                        {genre.description}
                                    </p>

                                    {/* Card Footer */}
                                    <div className="flex items-center gap-3 border-t border-[rgba(201,138,8,0.2)] pt-[17px] text-[var(--red-dark)]">
                                        <span className="whitespace-nowrap text-[8px] font-extrabold tracking-[1px] sm:text-[9px] sm:tracking-[1.5px]">
                                            SHGR ENTERTAINMENT
                                        </span>

                                        <span className="h-px flex-1 bg-[var(--border-gold)]" />

                                        <Play
                                            size={13}
                                            fill="currentColor"
                                            className="shrink-0 text-[var(--gold-dark)]"
                                        />
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
