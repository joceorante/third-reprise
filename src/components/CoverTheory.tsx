import { tourStops } from "../data/tour";

export default function CoverTheory() {
  return (
    <section id="tour" className="w-full bg-cream py-20 text-black">
      <div className="mx-auto max-w-[1441px] px-8 md:px-[114px]">
        <h2 className="mb-14 text-center font-display text-[15vw] leading-[0.78] tracking-tight md:text-[185px]">
          Cover Theory
        </h2>

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
                className="inline-flex items-center justify-center rounded-full bg-ink px-[30px] py-4 font-mono text-sm font-bold uppercase capitalize text-white transition-transform hover:scale-[1.04] md:text-lg"
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
