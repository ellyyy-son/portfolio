"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { Critter, Triforce } from "./Whimsy";

/* =========================
   Navbar as a Pokémon party:
   six sections = six Poké Balls. The active one pops open.
========================= */

type NavLink = {
  id: string;
  label: string;
  icon: ReactNode;
  /** lid color of this section's ball */
  lid: string;
};

const CRITTER_CLASS = "h-7 w-7 drop-shadow-[0_1px_0_rgb(47_36_82/0.25)]";

const LINKS: NavLink[] = [
  { id: "home", label: "Home", icon: <Critter kind="cat" body="#e6daff" className={CRITTER_CLASS} />, lid: "bg-[#cdb6fa]" },
  { id: "profile", label: "Profile", icon: <Critter kind="bun" body="#c4e4ff" className={CRITTER_CLASS} />, lid: "bg-[#f8b8d0]" },
  { id: "experience", label: "Experience", icon: <Critter kind="sprout" body="#ffe58f" className={CRITTER_CLASS} />, lid: "bg-[#b5e8c8]" },
  { id: "projects", label: "Projects", icon: <Critter kind="wing" body="#cdb6fa" className={CRITTER_CLASS} />, lid: "bg-[#ffc9a3]" },
  { id: "awards", label: "Awards", icon: <Critter kind="star" body="#fbd3e3" className={CRITTER_CLASS} />, lid: "bg-[#ffe58f]" },
  { id: "contact", label: "Contact", icon: <Critter kind="horn" body="#cdeccd" className={CRITTER_CLASS} />, lid: "bg-[#a9d6ff]" },
];

/* A Poké Ball whose lid swings open to reveal the section icon */
function PartyBall({
  open,
  lid,
  icon,
}: {
  open: boolean;
  lid: string;
  icon: ReactNode;
}) {
  return (
    <span
      className={`relative block h-9 w-9 shrink-0 ${
        open ? "" : "group-hover:animate-[ball-wiggle_0.6s_ease-in-out]"
      }`}
    >
      {/* bottom half */}
      <span className="absolute inset-x-0 bottom-0 z-10 h-1/2 rounded-b-full border-[2.5px] border-t-0 border-ink bg-white" />

      {/* band */}
      <span className="absolute inset-x-0 top-1/2 z-20 h-[3px] -translate-y-1/2 bg-ink" />

      {/* critter popping out of the ball */}
      <span
        className={`absolute left-1/2 top-[34%] z-[25] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all duration-300 ${
          open
            ? "scale-100 opacity-100 animate-[critter-hop_1.6s_ease-in-out_0.3s_infinite]"
            : "scale-0 opacity-0"
        }`}
      >
        {icon}
      </span>

      {/* lid (top half) */}
      <span
        className={`absolute inset-x-0 top-0 z-30 h-1/2 origin-bottom-left rounded-t-full border-[2.5px] border-b-0 border-ink transition-transform duration-300 ${lid} ${
          open ? "-translate-y-1.5 -rotate-[40deg]" : ""
        }`}
      >
        <span className="absolute left-1.5 top-1 h-1.5 w-2 rounded-full bg-white/60" />
      </span>

      {/* center button */}
      <span
        className={`absolute left-1/2 top-1/2 z-40 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2.5px] border-ink bg-white transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
    </span>
  );
}

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);

  /* =========================
     Track Scroll Position
  ========================= */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =========================
     Track Active Section
  ========================= */

  useEffect(() => {
    const sections = LINKS
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =========================
     Smooth Scroll
  ========================= */

  const goTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <div className="fixed left-0 top-0 z-[100] flex w-full justify-center px-3 py-3 sm:px-4 sm:py-4">
      <nav
        className={`relative flex w-full max-w-4xl items-center justify-between gap-2 rounded-2xl border-[3px] border-ink bg-white/95 px-3 py-2 backdrop-blur-xl transition-all duration-300 sm:gap-4 sm:px-4 ${
          scrolled
            ? "shadow-[inset_0_0_0_2px_#ffffff,inset_0_0_0_4px_var(--color-lav-200),0_6px_0_var(--color-lav-300)]"
            : "shadow-[inset_0_0_0_2px_#ffffff,inset_0_0_0_4px_var(--color-lav-200),0_4px_0_var(--color-lav-200)]"
        }`}
      >
        {/* =========================
            TRAINER TAG
        ========================= */}

        <Link
          href="#home"
          onClick={(e) => goTo(e, "home")}
          className="group flex shrink-0 items-center gap-2"
        >
          <Triforce className="h-4 w-5 text-butter-deep transition-transform duration-500 group-hover:rotate-[360deg]" />

          <span className="flex flex-col leading-none">
            <span className="hidden font-pixel text-[6px] tracking-widest text-lav-500 sm:block">
              TRAINER
            </span>
            <span className="font-display text-lg font-bold text-ink sm:mt-1 sm:text-xl">
              Elly<span className="text-lav-500">.</span>
            </span>
          </span>
        </Link>

        {/* =========================
            PARTY (6 balls)
        ========================= */}

        <ul className="flex items-center gap-0.5 sm:gap-1.5">
          {LINKS.map((link) => {
            const isActive = active === link.id;

            return (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
                  onClick={(e) => goTo(e, link.id)}
                  aria-label={link.label}
                  aria-current={isActive ? "true" : undefined}
                  className={`group relative flex items-center rounded-full p-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-lav-300 sm:p-1 ${
                    isActive ? "bg-lav-100 md:gap-2 md:pr-3" : "hover:bg-lav-50"
                  }`}
                >
                  <PartyBall open={isActive} lid={link.lid} icon={link.icon} />

                  {/* name slides out for the active ball */}
                  <span
                    className={`hidden overflow-hidden whitespace-nowrap text-sm font-bold text-lav-700 transition-all duration-300 md:block ${
                      isActive ? "max-w-[7rem] opacity-100" : "max-w-0 opacity-0"
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* tooltip for the others */}
                  {!isActive && (
                    <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-screen px-2 py-1 text-[11px] font-semibold text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 md:block">
                      {link.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

      </nav>
    </div>
  );
}
