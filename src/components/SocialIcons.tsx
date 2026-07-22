import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const Instagram = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const TikTok = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.5 3c.3 2.2 1.6 3.8 3.9 4v2.6c-1.4 0-2.7-.4-3.9-1.1v6.2a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.7a3 3 0 1 0 2.1 2.9V3h2.7Z" />
  </svg>
);

const YouTube = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.5 7.2a3 3 0 0 0-2.1-2.1C18.6 4.6 12 4.6 12 4.6s-6.6 0-8.4.5A3 3 0 0 0 1.5 7.2 31 31 0 0 0 1 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-4.8ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z" />
  </svg>
);

const Spotify = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.4a.75.75 0 0 1-1 .25c-2.8-1.7-6.3-2.1-10.4-1.1a.75.75 0 1 1-.34-1.46c4.5-1 8.4-.6 11.5 1.3.36.22.47.68.24 1.02Zm1.2-2.7a.94.94 0 0 1-1.28.3c-3.2-2-8-2.5-11.8-1.36a.94.94 0 1 1-.54-1.8c4.3-1.3 9.7-.7 13.3 1.6.44.27.58.85.32 1.26Zm.1-2.8C14.2 8.6 7.9 8.4 4.2 9.5a1.12 1.12 0 1 1-.65-2.15C7.8 6.1 14.8 6.3 19 8.8a1.12 1.12 0 1 1-1.15 1.92l-.05-.02Z" />
  </svg>
);

const AppleMusic = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm3.2 4.6a.9.9 0 0 1 .7.9v6.9a2 2 0 1 1-1.4-1.9V9.1l-4.6 1v5a2 2 0 1 1-1.4-1.9V8.4c0-.5.3-.8.7-.9l5.3-1.1a.6.6 0 0 1 .7.2Z" />
  </svg>
);

const Bandcamp = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 16.5 7.2 7.5H21l-4.2 9H3Z" />
  </svg>
);

interface SocialLink {
  label: string;
  href: string;
  Icon: (props: IconProps) => JSX.Element;
}

const links: SocialLink[] = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "TikTok", href: "#", Icon: TikTok },
  { label: "YouTube", href: "#", Icon: YouTube },
  { label: "Spotify", href: "#", Icon: Spotify },
  { label: "Apple Music", href: "#", Icon: AppleMusic },
  { label: "Bandcamp", href: "#", Icon: Bandcamp },
];

interface SocialIconsProps {
  className?: string;
}

export default function SocialIcons({ className = "" }: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-white/90 transition-colors hover:text-flame"
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}
