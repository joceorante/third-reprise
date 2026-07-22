import { tourStops } from "../data/tour";
import lockup from "../assets/cover-theory-lockup.png";
import colors from "../assets/cover-theory-colors.png";

export default function CoverTheory() {
  return (
    <section id="tour" className="w-full overflow-hidden bg-cream pb-20 pt-16 text-black">
      {/* "COVER THEORY — NORTHEAST TOUR" lockup */}
      <h2 className="mx-auto mb-10 max-w-[1441px] px-8 md:px-[114px]">
        <img
          src={lockup}
          alt="Cover Theory — Northeast Tour"
          className="mx-auto w-full max-w-[1180px]"
        />
      </h2>
      {/* Full-bleed color ribbon between the heading and the tour list */}
      <img src={colors} alt="" aria-hidden className="mb-10 w-full" />
      <div className="mx-auto max-w-[1441px] px-8 md:px-[114px]">

        <ul>
          {tourStops.map((stop, i) => (
            <li
              key={`${stop.date}-${stop.city}`}
              className={`flex flex-wrap items-center gap-x-6 gap-y-4 py-6 ${
                i === 0 ? "border-y" : "border-b"
              } border-black/25`}
            >
              <span className="font-didone text-5xl italic md:text-[68px] md:leading-[1]">
                {stop.date}
              </span>
              <span className="flex-1 font-display text-4xl uppercase leading-none tracking-wide md:text-[52px]">
                {stop.city}
              </span>
              <a
                href={stop.ticketUrl}
                className="inline-flex items-center justify-center rounded-full bg-ink px-[30px] py-4 font-mono text-sm font-bold uppercase text-white transition-transform hover:scale-[1.04] md:text-lg"
              >
                Get Tickets
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
