import heroImage from "../assets/hero-image.png";
import logo from "../assets/third-reprise-logo.png";

/**
 * Hero / "Top" section: the composited band photograph (mask shape and
 * vignette baked into the asset) with the Third Reprise logo and sign-up CTA
 * anchored bottom-left, per the Figma design.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] w-full overflow-hidden bg-ink pt-[72px]"
    >
      <img
        src={heroImage}
        alt="Third Reprise band portrait against a red curtain"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
      />
      {/* Keep the bottom-left corner legible for the logo + CTA */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex h-full min-h-[calc(92vh-72px)] max-w-[1441px] flex-col justify-end px-8 pb-16 md:px-[84px] md:pb-[48px]">
        <img
          src={logo}
          alt="Third Reprise"
          className="mb-8 w-[280px] md:w-[403px]"
        />
        <a
          href="#signup"
          className="inline-flex w-fit items-center justify-center rounded-full bg-white px-[30px] py-5 font-mono text-lg font-bold uppercase text-black transition-transform hover:scale-[1.03]"
        >
          Sign Up For Updates
        </a>
      </div>
    </section>
  );
}
