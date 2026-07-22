interface MediaCardProps {
  label?: string;
  href?: string;
  className?: string;
}

/**
 * Rounded media placeholder tile. The real YouTube/Spotify embeds are wired
 * up separately (integrations pending), so each tile renders as a
 * play-button placeholder matching the mockup's card framing.
 */
export default function MediaCard({
  label,
  href = "#",
  className = "aspect-[516/287] rounded-[30px] border border-white",
}: MediaCardProps) {
  return (
    <a
      href={href}
      aria-label={label ?? "Play media"}
      className={`group relative flex w-full items-center justify-center overflow-hidden bg-surface transition-colors hover:bg-[#3f3f3f] ${className}`}
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-transform group-hover:scale-110">
        <svg viewBox="0 0 24 24" className="h-7 w-7 translate-x-[2px] fill-white">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </a>
  );
}
