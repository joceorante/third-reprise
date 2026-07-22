import MediaCard from "./MediaCard";

export default function Music() {
  return (
    <section
      id="music"
      className="w-full border-t-[0.5px] border-white/60 bg-ink py-16"
    >
      <div className="mx-auto max-w-[1441px] px-8 md:px-[193px]">
        <h2 className="mb-12 text-center font-serif text-5xl tracking-tight text-white md:text-[61px]">
          Stream on Spotify
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <MediaCard label="Third Reprise on Spotify" />
          <MediaCard label="Third Reprise latest release" />
        </div>
      </div>
    </section>
  );
}
