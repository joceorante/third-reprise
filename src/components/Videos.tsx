import MediaCard from "./MediaCard";

export default function Videos() {
  return (
    <section id="videos" className="w-full bg-ink py-16">
      <div className="mx-auto max-w-[1441px] px-8 md:px-[185px]">
        <h2 className="mb-12 text-center font-serif text-5xl tracking-tight text-white md:text-[61px]">
          Watch on Youtube
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <MediaCard key={i} label={`Third Reprise video ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
