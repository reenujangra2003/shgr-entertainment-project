
import Image from "next/image";
import { unstable_rethrow } from "next/navigation";
import { getTeamMembers } from "@/services/team.service";

export default async function TeamMembers() {
  try {
    const response = await getTeamMembers();
    const directors = response.data;

    return (
      /* DIRECTORS */
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
            {Array.isArray(directors) && directors.length > 0 ? (
              directors.map((director) => (
                <article
                  key={director.id}
                  className="group flex flex-row overflow-hidden border border-[var(--border-gold)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(36,21,14,0.09)]"
                >
                  {/* SMALL IMAGE */}
                  <div className="relative min-h-[220px] w-[38%] shrink-0 overflow-hidden bg-[var(--cream)] sm:min-h-[260px] sm:w-[40%]">
                    <Image
                      src={director.image}
                      alt={`${director.name} - ${director.designation}`}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 40vw, 220px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-6 lg:p-7">
                    <span className="mb-3 text-[9px] font-extrabold tracking-[1.8px] text-[var(--gold-dark)]">
                      {director.designation}
                    </span>

                    <h3 className="font-heading text-xl font-semibold leading-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--red-dark)] sm:text-2xl lg:text-3xl">
                      {director.name}
                    </h3>

                    <p className="mt-3 text-[11px] leading-[1.8] text-[var(--text-secondary)] sm:text-xs">
                      {director.short_description}
                    </p>

                    <div className="mt-4 border-t border-[var(--border-gold)] pt-3">
                      <span className="text-[8px] font-extrabold tracking-[1px] text-[var(--red-dark)] sm:text-[9px]">
                        {director.work?.join(" · ")}
                      </span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p className="col-span-full py-10 text-center text-sm text-[var(--text-secondary)]">
                No team members available right now.
              </p>
            )}
          </div>

          <div className="mt-9 border-t border-[var(--border-gold)] pt-6 text-center">
            <p className="font-heading text-lg italic text-[var(--text-primary)] sm:text-xl">
              Two creative perspectives. One shared passion for cinema.
            </p>
          </div>

        </div>
      </section>
    );
  } catch (error: unknown) {
    unstable_rethrow(error);

    console.error("Team Members API Error:", error);

    return (
      <section className="bg-[var(--ivory)] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p
            role="alert"
            className="py-10 text-center text-sm text-red-600"
          >
            Unable to load team members.
          </p>
        </div>
      </section>
    );
  }
}
