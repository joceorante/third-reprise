import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="min-h-screen bg-ink pt-[72px] text-white">
      <article className="mx-auto flex max-w-[676px] flex-col gap-[25px] px-8 pb-24 pt-[140px]">
        <h1 className="font-serif text-5xl leading-[1.05] tracking-[-2.84px] md:text-[71px] md:leading-[74px]">
          Third Reprise was born...
        </h1>
        <div className="flex flex-col gap-[34px] font-sans text-[21px] leading-[34px]">
          <p>
            Third Reprise was born when producer, arranger, music director and
            pianist Daniel Rudin sought to connect the many threads of his
            musical personality. His parents raised him on a healthy diet of
            Broadway cast albums and 80s Rock n Roll, and by middle school his
            curiosity took him to far corners of classical music, jazz fusion,
            funk, and soul. Two years after moving to New York, Daniel was
            splitting his time between conducting and playing on Broadway (MJ:
            The Musical; Caroline, or Change; The Great Gatsby),
            producing/MDing for solo artists, planting roots in the R&B/funk
            jam scene, and composing for film and TV. In July 2023, with honed
            instincts for musical storytelling and an itch to create something
            new, he called his favorite artists from each of these scenes to
            his high school bandmate's Williamsburg storefront-turned-music
            studio to play some fresh and audacious interpretations of the
            music he grew up on.
          </p>
          <p>
            Since then, Third Reprise has been releasing genre-bending and
            wildly adventurous arrangements of showtunes to the applause of
            theater kids and music connoisseurs alike. In just 6 months after
            posting their first video, Third Reprise has exploded online with
            over 10 million views, 750k streams, and a growing tribe of 55k
            followers and subscribers. In March 2024, they played their first
            live show for a sold out Irving Plaza, electrifying a crowd of
            musicians as they opened for their heroes, Dirty Loops.
          </p>
          <p>
            The key to Third Reprise's early success has been pairing the
            virtuosic, luminous artistry of the best singers and
            instrumentalists in NYC with a highly specific body of songs that
            mean a lot to people, while never losing the joy and sense of
            humor that's core to the concept of a musical theater cover band.
            They draw on sounds as diverse as their audience's Spotify
            playlists and affirm our collective right to boogie to Stephen
            Schwartz. On the horizon are planned collaborations with the
            biggest talent on Broadway and beyond and a headline concert in
            Time Square.
          </p>
        </div>
        <Link
          to="/#signup"
          className="mx-auto mt-16 inline-flex w-fit items-center justify-center rounded-full bg-white px-[30px] py-5 font-mono text-lg font-bold uppercase text-black transition-transform hover:scale-[1.03]"
        >
          Sign Up For Updates
        </Link>
      </article>
    </main>
  );
}
