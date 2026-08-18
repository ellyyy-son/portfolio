"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "profile", label: "Profile" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =========================
     Track Scroll Position
  ========================= */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

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
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
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

  const goTo = (e, id) => {
    e.preventDefault();

    setOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <>
      {/* =========================
          FIXED NAVBAR
      ========================= */}

      <div className="fixed left-0 top-0 z-[100] flex w-full justify-center px-4 py-4">

        <nav
          className={`flex w-full max-w-4xl items-center justify-between gap-6 rounded-2xl border px-5 py-3 transition-all duration-300 ${
            scrolled
              ? "border-white/20 bg-zinc-800/95 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              : "border-white/15 bg-zinc-800/90 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.8)] backdrop-blur-lg"
          }`}
        >

          {/* =========================
              LOGO
          ========================= */}

          <Link
            href="#home"
            onClick={(e) => goTo(e, "home")}
            className="shrink-0 text-lg font-bold tracking-tight text-white"
          >
            Elly<span className="text-[#00FFFF]">.</span>
          </Link>


          {/* =========================
              DESKTOP LINKS
          ========================= */}

          <ul className="hidden items-center gap-1 md:flex">

            {LINKS.map((link) => (
              <li key={link.id}>

                <Link
                  href={`#${link.id}`}
                  onClick={(e) => goTo(e, link.id)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    active === link.id
                      ? "bg-[#00FFFF] text-black shadow-[0_0_18px_-5px_#00FFFF]"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>

              </li>
            ))}

          </ul>


          {/* =========================
              MOBILE BUTTON
          ========================= */}

          <button
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 text-white transition-all duration-200 hover:border-[#00FFFF]/50 hover:bg-white/10 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? (
              <HiX size={20} />
            ) : (
              <HiOutlineMenu size={20} />
            )}
          </button>

        </nav>


        {/* =========================
            MOBILE DROPDOWN
        ========================= */}

        {open && (
          <div className="absolute left-1/2 top-[4.75rem] z-[110] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 flex-col gap-1 rounded-2xl border border-white/15 bg-zinc-800/95 p-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl md:hidden">

            {LINKS.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => goTo(e, link.id)}
                className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-200 ${
                  active === link.id
                    ? "bg-[#00FFFF] text-black"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

          </div>
        )}

      </div>
    </>
  );
}