import Wordmark from "./Wordmark";

/**
 * Hero / "Top" section.
 *
 * The Figma design places a full-bleed band photograph across the right of
 * this section. That photo shipped as a binary image asset which is not
 * available to this build, so the photo area is rendered as a styled
 * placeholder (`data-photo-slot`) that mirrors the original framing and warm
 * stage lighting. Drop the real image in at `background-image` to finish it.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] w-full overflow-hidden bg-ink pt-[72px]"
    >
      {/* Photo slot — replace the gradient with the band photograph */}
      <div
        data-photo-slot="band-hero"
        aria-label="Third Reprise band photo"
        className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[68%]"
        style={{
          background:
            "radial-gradient(120% 90% at 75% 30%, #5c2018 0%, #2a120d 45%, #13110e 80%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>

      {/* Logo + CTA, anchored bottom-left */}
      <div className="relative z-10 mx-auto flex h-full min-h-[calc(92vh-72px)] max-w-[1441px] flex-col justify-end px-8 pb-16 md:px-[84px] md:pb-[64px]">
        <Wordmark className="mb-8" />
        <a
          href="#signup"
          className="inline-flex w-fit items-center justify-center rounded-full bg-white px-[30px] py-5 font-mono text-lg font-bold uppercase capitalize text-black transition-transform hover:scale-[1.03]"
        >
          Sign Up For Updates
        </a>
      </div>
    </section>
  );
}
