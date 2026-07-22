const items = [
  { label: "Tour", href: "#tour" },
  { label: "Videos", href: "#videos" },
  { label: "Music", href: "#music" },
  { label: "Merch", href: "#merch" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  active?: string;
}

export default function Navbar({ active = "Videos" }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/70 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-[1441px] items-center justify-center px-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:gap-x-[62px]">
          {items.map(({ label, href }) => {
            const isActive = label === active;
            return (
              <li key={label}>
                <a
                  href={href}
                  className={`block border-b-4 pb-[5px] font-mono text-base font-bold uppercase tracking-[0.72px] transition-colors sm:text-[24px] ${
                    isActive
                      ? "border-flame text-flame"
                      : "border-transparent text-white hover:text-flame"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
