import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  /** In-page section to scroll to (drives the scroll-spy underline). */
  sectionId?: string;
  /** Standalone page link (not part of scroll-spy). */
  href?: string;
}

const items: NavItem[] = [
  { label: "Tour", sectionId: "tour" },
  { label: "Videos", sectionId: "videos" },
  { label: "Music", sectionId: "music" },
  { label: "Merch", sectionId: "merch" },
  { label: "About", href: "/about" },
  { label: "Contact", sectionId: "contact" },
];

const sectionIds = items
  .map((i) => i.sectionId)
  .filter((id): id is string => Boolean(id));

/**
 * Tracks which section is currently under the viewport's reading line and
 * returns its id. Nothing is active until the user scrolls to a section
 * (e.g. while the hero is in view, no link is underlined).
 */
function useActiveSection(): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visible.delete(entry.target.id);
          }
        }
        if (visible.size === 0) {
          setActive(null);
          return;
        }
        // Topmost section crossing the reading line wins.
        const [topId] = [...visible.entries()].sort((a, b) => a[1] - b[1])[0];
        setActive(topId);
      },
      // A thin band near the vertical middle of the viewport.
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function Navbar() {
  const active = useActiveSection();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/70 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-[1441px] items-center justify-center px-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:gap-x-[62px]">
          {items.map((item) => {
            const isActive =
              item.sectionId !== undefined && item.sectionId === active;
            const href = item.sectionId ? `#${item.sectionId}` : item.href ?? "#";
            return (
              <li key={item.label}>
                <a
                  href={href}
                  aria-current={isActive ? "true" : undefined}
                  className={`block border-b-4 pb-[5px] font-mono text-base font-bold uppercase tracking-[0.72px] transition-colors sm:text-[24px] ${
                    isActive
                      ? "border-flame text-flame"
                      : "border-transparent text-white hover:text-flame"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
