"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { FaTrophy } from "react-icons/fa6";
import { Pokeball, Rupee, Sparkle, Thunderbolt, Triforce } from "./Whimsy";

/* =========================
   Awards as a gym-style badge case.
   Badges show no details until one is pressed.
========================= */

type Award = {
  name: string;
  subtitle: string;
  description: string;
  callout?: string;
  icon: ReactNode;
  /** CSS clip-path polygon for the badge shape */
  shape: string;
  /** gradient for the badge face */
  face: string;
};

const SHAPES = {
  star: "polygon(50% 0,62% 34%,98% 35%,69% 57%,80% 92%,50% 71%,20% 92%,31% 57%,2% 35%,38% 34%)",
  octagon: "polygon(30% 0,70% 0,100% 30%,100% 70%,70% 100%,30% 100%,0 70%,0 30%)",
  hexagon: "polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)",
  diamond: "polygon(50% 0,100% 50%,50% 100%,0 50%)",
  shield: "polygon(50% 0,100% 16%,100% 58%,50% 100%,0 58%,0 16%)",
};

const AWARDS: Award[] = [
  {
    name: "Grand Champion",
    subtitle:
      "Information Management Summit 2026 · Business Case Competition",
    callout: "1st of 30+ teams nationwide. Welcome to the Hall of Fame!",
    description:
      "Architected a digital transformation roadmap for an LGU using an MDM system to centralize data across two AI-integrated modules: e-Services Modernization and Smart Disaster Risk Management.",
    icon: <FaTrophy className="h-5 w-5 text-ink" />,
    shape: SHAPES.star,
    face: "linear-gradient(135deg,#fff7cf 0%,#ffe58f 45%,#f2c94c 100%)",
  },
  {
    name: "Magna Cum Laude Standing",
    subtitle: "BS Computer Science · Ateneo de Manila University",
    callout: "GPA 3.77 / 4.00",
    description:
      "Maintaining Magna Cum Laude standing while specializing in Data Science and Analytics and Enterprise Systems.",
    icon: <Triforce className="h-6 w-7 text-butter" />,
    shape: SHAPES.octagon,
    face: "linear-gradient(135deg,#e6daff 0%,#b89cf2 50%,#7d5cc7 100%)",
  },
  {
    name: "Consistent Dean's Lister",
    subtitle: "Ateneo de Manila University",
    description:
      "Consistently named to the Dean's List for academic excellence throughout college.",
    icon: <Thunderbolt className="h-7 w-7 text-butter" />,
    shape: SHAPES.hexagon,
    face: "linear-gradient(135deg,#e3f1ff 0%,#c4e4ff 45%,#6aaeea 100%)",
  },
  {
    name: "Director's List Scholar",
    subtitle: "Ateneo de Manila University",
    callout: "Top 150 Ateneo applicants",
    description:
      "Scholarship awarded to the top 150 applicants admitted to Ateneo de Manila University.",
    icon: <Rupee className="h-7 w-7 text-sky" />,
    shape: SHAPES.diamond,
    face: "linear-gradient(135deg,#f3ecff 0%,#d2bffb 50%,#9a7ae0 100%)",
  },
  {
    name: "DOST-SEI JLSS Merit Scholar",
    subtitle: "Department of Science and Technology – Science Education Institute",
    description:
      "Merit scholar under the DOST-SEI Junior Level Science Scholarships program.",
    icon: <Pokeball variant="great" className="h-7 w-7 text-sky" />,
    shape: SHAPES.shield,
    face: "linear-gradient(135deg,#e9fbe9 0%,#cdeccd 45%,#9ddc8f 100%)",
  },
];

/* One shiny badge: an ink outline layer + a colored face, both clipped */
function Badge({
  award,
  size = "lg",
}: {
  award: Award;
  size?: "lg" | "sm";
}) {
  const dims = size === "lg" ? "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]" : "h-12 w-12";

  return (
    <span className={`relative block ${dims}`}>
      <span
        className="absolute inset-0 bg-ink"
        style={{ clipPath: award.shape }}
      />
      <span
        className="absolute inset-[3px] flex items-center justify-center overflow-hidden"
        style={{ clipPath: award.shape, background: award.face }}
      >
        {/* glare */}
        <span className="absolute -left-1/4 top-0 h-full w-1/3 -skew-x-12 bg-white/45" />
        <span className="relative">{award.icon}</span>
      </span>
    </span>
  );
}

export default function BadgeCase() {
  const [selected, setSelected] = useState<number | null>(null);
  const award = selected === null ? null : AWARDS[selected];

  return (
    <div className="w-full max-w-4xl rounded-[2.25rem] border-[3px] border-ink bg-gradient-to-b from-lav-400 to-lav-500 p-3 shadow-[0_8px_0_var(--color-lav-700)] sm:p-4">
      {/* Case lid strip */}
      <div className="flex items-center justify-between px-3 pb-3 pt-1">
        <span className="font-pixel text-[9px] tracking-widest text-ink">
          BADGE CASE
        </span>

        <span
          aria-hidden
          className="h-3 w-12 rounded-full border-2 border-ink bg-butter"
        />

        <span className="font-pixel text-[9px] tracking-widest text-ink">
          {AWARDS.length}/{AWARDS.length} ★
        </span>
      </div>

      {/* Felt tray */}
      <div className="rounded-[1.6rem] border-[3px] border-ink bg-lav-50 p-4 shadow-[inset_0_4px_0_var(--color-lav-200)] sm:p-6">
        <ul className="grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-5">
          {AWARDS.map((a, i) => {
            const active = selected === i;

            return (
              <li key={a.name} className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setSelected(active ? null : i)}
                  aria-pressed={active}
                  aria-label={`Badge ${i + 1}: ${a.name}`}
                  className={`group relative flex h-24 w-24 items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-lav-400 sm:h-28 sm:w-28 ${
                    active
                      ? "bg-butter/50 shadow-[inset_0_3px_6px_rgb(47_36_82/0.15),0_0_0_3px_var(--color-butter-deep)]"
                      : "bg-lav-100 shadow-[inset_0_4px_8px_rgb(47_36_82/0.15)] hover:bg-lav-200/60"
                  }`}
                >
                  <span
                    className={`transition-transform duration-300 ${
                      active
                        ? "-translate-y-1 scale-110"
                        : "group-hover:-translate-y-1 group-hover:rotate-6"
                    }`}
                  >
                    <Badge award={a} />
                  </span>

                  {active && (
                    <Sparkle className="absolute right-2 top-2 h-4 w-4 animate-pulse text-butter-deep" />
                  )}

                  <span className="absolute -bottom-2 rounded-full border-2 border-ink bg-white px-2 font-pixel text-[7px] leading-4 text-ink">
                    #{i + 1}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Details */}
        <div
          aria-live="polite"
          className="mt-7 grid grid-cols-1 rounded-2xl border-2 border-ink bg-white p-5 shadow-[inset_0_0_0_3px_#ffffff,inset_0_0_0_5px_var(--color-lav-200)]"
        >
          {/* Every award (and the tip) sits in the same grid cell, so the
              panel is always as tall as the longest award */}
          <div
            aria-hidden={award !== null}
            className={`flex flex-col items-center justify-center gap-2 text-center [grid-area:1/1] ${
              award ? "invisible" : ""
            }`}
          >
            <Sparkle className="h-5 w-5 text-butter-deep" />
            <p className="text-sm text-ink-soft">
              <span className="font-pixel text-[8px] tracking-widest text-lav-500">
                TIP
              </span>{" "}
              Press a badge to inspect it!
            </p>
          </div>

          {AWARDS.map((a, i) => {
            const visible = selected === i;

            return (
              <div
                key={a.name}
                aria-hidden={!visible}
                className={`min-w-0 text-center [grid-area:1/1] sm:text-left ${
                  visible
                    ? "animate-in fade-in slide-in-from-bottom-1 duration-300"
                    : "invisible"
                }`}
              >
                <div className="min-w-0">
                  <p className="font-pixel text-[8px] tracking-widest text-lav-600">
                    BADGE #{i + 1} OBTAINED!
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-bold leading-tight text-ink lg:text-2xl">
                    {a.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-ink-soft">
                    {a.subtitle}
                  </p>
                  {a.callout && (
                    <p className="mt-2 inline-block max-w-full rounded-full bg-butter px-3 py-0.5 text-xs font-bold text-ink">
                      {a.callout}
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-ink/80">
                    {a.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
