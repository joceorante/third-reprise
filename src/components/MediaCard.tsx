interface MediaCardProps {
  label?: string;
  href?: string;
}

/**
 * Rounded media placeholder matching the Figma "#353535" tiles. Video/embed
 * thumbnails were not part of the exportable assets, so each tile renders as a
 * play-button placeholder ready to be swapped for a real embed or thumbnail.
 */
export default function MediaCard({ label, href = "#" }: MediaCardProps) {
  return (
    <a
      href={href}
      aria-label={label ?? "Play media"}
      className="group relative flex aspect-[516/287] w-full items-center justify-center overflow-hidden rounded-[30px] bg-surface transition-colors hover:bg-[#3f3f3f]"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-transform group-hover:scale-110">
        <svg viewBox="0 0 24 24" className="h-7 w-7 translate-x-[2px] fill-white">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </a>
  );
}
