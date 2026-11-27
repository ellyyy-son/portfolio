import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

const LINKS = [
  { href: "https://github.com/ellyyy-son", label: "GitHub", Icon: SiGithub },
  { href: "https://linkedin.com/in/hubert-olegario", label: "LinkedIn", Icon: SiLinkedin },
  { href: "https://www.instagram.com/ellyyy_son/", label: "Instagram", Icon: SiInstagram },
];

export default function Socials() {
  return (
    <div className="flex items-center justify-center gap-3">
      {LINKS.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-lav-200 bg-white text-lav-600 shadow-[0_4px_0_var(--color-lav-200)] transition-all duration-200 hover:-translate-y-0.5 hover:border-lav-300 hover:bg-butter hover:text-ink active:translate-y-0.5 active:shadow-none"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
