import SocialIcons from "./SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-contact py-16 text-white">
      <div className="mx-auto flex max-w-[1441px] flex-col items-center px-8">
        <h2 className="mb-10 text-center font-serif text-5xl tracking-tight md:text-[61px]">
          Get in touch
        </h2>

        {/* Embed / newsletter slot — a rounded card placeholder from the design */}
        <div
          id="signup"
          data-embed-slot="contact"
          className="mb-10 aspect-[432/210] w-full max-w-[432px] rounded-[23px] bg-black"
        />

        <div className="mb-8 h-px w-full max-w-[1441px] bg-white/50" />

        <p className="text-center font-mono text-lg font-bold uppercase leading-relaxed tracking-[-0.88px] text-white">
          Management, booking &amp; sheet music
        </p>
        <a
          href="mailto:thirdreprise@gmail.com"
          className="mb-10 text-center font-mono text-lg uppercase text-white/90 transition-colors hover:text-flame"
        >
          thirdreprise@gmail.com
        </a>

        <SocialIcons />
      </div>
    </section>
  );
}
