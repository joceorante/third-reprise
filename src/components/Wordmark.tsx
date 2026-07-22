interface WordmarkProps {
  className?: string;
}

/**
 * The "Third Reprise" wordmark, recreated in type:
 * an ornate script "Third" stacked over a high-contrast Didone "REPRISE".
 * (The original Figma export shipped this as a flattened image asset; it is
 * rebuilt here with webfonts so it stays crisp and selectable.)
 */
export default function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <div className={`flex flex-col leading-none text-white ${className}`}>
      <span className="font-script text-[5.5rem] leading-[0.7] -mb-2 pl-6">
        Third
      </span>
      <span className="font-didone font-black uppercase tracking-tight text-[4.75rem] leading-[0.85]">
        Reprise
      </span>
    </div>
  );
}
