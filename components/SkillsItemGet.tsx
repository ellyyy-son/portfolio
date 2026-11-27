"use client";

import { useEffect, useRef, useState } from "react";
import Skills from "./Skills";
import { Sparkle } from "./Whimsy";

/* =========================
   "Item Get!" pop-up for the Skills section.
   Wraps the Skills component and listens for clicks from the outside,
   so Skills.tsx itself stays untouched.
========================= */

const FLAVOR: Record<string, string> = {
  "Power BI": "Turns raw data into dashboards people actually open.",
  Tableau: "Paints insights across the whole map.",
  Pandas: "Wrangles messy DataFrames. Surprisingly gentle.",
  NumPy: "Vectorized power. Loops tremble before it.",
  Matplotlib: "Reveals hidden patterns in plain sight.",
  Seaborn: "Makes every chart look like it went to art school.",
  Plotly: "Charts that move when you poke them.",
  "scikit-learn": "A whole pouch of models. Random Forest included.",
  PyTorch: "Sharply raises your model's attack.",
  "Apache Spark": "Processes huge datasets at lightning speed.",
  Hadoop: "Stores treasure in a very, very large chest.",
  Hive: "Speaks SQL to the big data beasts.",
  Python: "A trusty blade. Works on almost any quest.",
  SQL: "Joins tables at critical-hit speed. Gotta query 'em all!",
  R: "Statistics-type move. Super effective against p-values.",
  Javascript: "Builds interactive maps... like the one on this page!",
  Java: "Sturdy and dependable, like a good shield.",
  "C++": "Blazing fast, but tricky to wield.",
  Git: "Saves your progress at every checkpoint.",
  VSCode: "Home base. Every adventure starts here.",
  "Microsoft Excel": "The original analytics weapon. Never underestimate it.",
  "Microsoft Office Suite": "Essential gear for every party member.",
  "Google Workspace": "Keeps the whole party in sync.",
  "GCloud Platform": "Summons servers from the clouds.",
  React: "Builds whole worlds out of tiny components.",
  "Next.js": "The engine running this very portfolio!",
  Flask: "Small flask, surprisingly powerful potion.",
  Django: "Comes with batteries (and an admin panel) included.",
  "Node.js": "Runs JavaScript far beyond the browser.",
  Express: "Speedy routes to every destination.",
  "Data Modeling": "Gives the world structure so insights can be found.",
  "Dashboard Design": "Puts every key stat right on the HUD.",
  "KPI Reporting": "Tracks the party's progress, quest by quest.",
  "Data Visualization": "Turns numbers into a map anyone can read.",
  "Applied Machine Learning": "Teaches the machine new moves.",
};

const FALLBACK = "A handy item for any data adventure!";

const ITEM_SELECTOR =
  '[role="tabpanel"] div:has(> h1), [role="tabpanel"] span[class*="rounded-full"]';

type Item = { name: string; svg: string | null };

function findItem(target: EventTarget | null): Item | null {
  if (!(target instanceof Element)) return null;

  const el = target.closest(ITEM_SELECTOR);
  if (!el) return null;

  const heading = el.querySelector(":scope > h1");
  const name = (heading ?? el).textContent?.trim();
  if (!name) return null;

  const svg = el.querySelector(":scope > svg")?.outerHTML ?? null;
  return { name, svg };
}

export default function SkillsItemGet() {
  const rootRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const [item, setItem] = useState<Item | null>(null);
  const [preview, setPreview] = useState<Item | null>(null);

  const showPreview = (target: EventTarget | null) => {
    const found = findItem(target);
    if (found && found.name !== preview?.name) setPreview(found);
  };

  /* Make each skill focusable + announce it as a button */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const apply = () => {
      root.querySelectorAll<HTMLElement>(ITEM_SELECTOR).forEach((el) => {
        if (!el.hasAttribute("tabindex")) {
          el.tabIndex = 0;
          el.setAttribute("role", "button");
        }
      });
    };

    apply();
    const observer = new MutationObserver(apply);
    observer.observe(root, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const close = () => {
    setItem(null);
    lastFocus.current?.focus();
  };

  const open = (target: EventTarget | null) => {
    const found = findItem(target);
    if (!found) return;
    lastFocus.current = document.activeElement as HTMLElement | null;
    setItem(found);
  };

  /* Escape closes the pop-up */
  const isOpen = item !== null;

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setItem(null);
        lastFocus.current?.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <>
      <div
        ref={rootRef}
        onClick={(e) => open(e.target)}
        onMouseOver={(e) => showPreview(e.target)}
        onFocus={(e) => showPreview(e.target)}
        onMouseLeave={() => setPreview(null)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            if (findItem(e.target)) {
              e.preventDefault();
              open(e.target);
            }
          }
        }}
        className="skills-screen rounded-[2rem] border-2 border-lav-200 bg-gradient-to-br from-white via-lav-50 to-sky/30 p-5 shadow-[0_8px_0_var(--color-lav-200)] lg:p-8"
      >
        <Skills />

        {/* Item description bar */}
        <div
          aria-live="polite"
          className="mt-6 flex min-h-[4.5rem] items-center gap-4 rounded-2xl border-2 border-ink bg-white px-4 py-3 shadow-[inset_0_0_0_3px_#ffffff,inset_0_0_0_5px_var(--color-lav-200)]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-lav-200 bg-lav-50 text-lav-600 [&_svg]:h-6 [&_svg]:w-6 [&_svg]:text-lav-600">
            {preview?.svg ? (
              <span
                className="flex"
                dangerouslySetInnerHTML={{ __html: preview.svg }}
              />
            ) : (
              <Sparkle className="h-5 w-5 text-butter-deep" />
            )}
          </span>

          {preview ? (
            <p className="text-sm leading-snug text-ink">
              <span className="font-display text-base font-semibold text-lav-700">
                {preview.name}
              </span>
              <span className="mx-2 text-lav-300">·</span>
              <span className="text-ink-soft">
                {FLAVOR[preview.name] ?? FALLBACK}
              </span>
            </p>
          ) : (
            <p className="text-sm text-ink-soft">
              <span className="font-pixel text-[8px] tracking-widest text-lav-500">
                TIP
              </span>{" "}
              Hover an item to inspect it. Click to use it!
            </p>
          )}
        </div>
      </div>

      {item && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="item-get-title"
          onClick={close}
          className="animate-in fade-in fixed inset-0 z-[200] flex items-center justify-center bg-ink/45 p-4 backdrop-blur-sm duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-in zoom-in-90 flex w-full max-w-sm flex-col items-center duration-300"
          >
            {/* Item held up with light rays */}
            <div className="relative flex h-48 w-48 items-center justify-center">
              <div
                aria-hidden
                className="absolute inset-0 animate-spin-slow rounded-full bg-[repeating-conic-gradient(var(--color-butter)_0deg_10deg,transparent_10deg_20deg)] [mask-image:radial-gradient(circle,black_25%,transparent_70%)]"
              />
              <div
                aria-hidden
                className="absolute inset-10 rounded-full bg-white/70 blur-xl"
              />

              <div className="animate-in slide-in-from-bottom-8 relative flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-ink bg-white shadow-[0_6px_0_var(--color-lav-300)] duration-500 [&_svg]:h-12 [&_svg]:w-12 [&_svg]:text-lav-600">
                {item.svg ? (
                  <span
                    className="flex"
                    dangerouslySetInnerHTML={{ __html: item.svg }}
                  />
                ) : (
                  <Sparkle className="h-12 w-12 text-butter-deep" />
                )}
              </div>

              <Sparkle className="absolute right-6 top-8 h-5 w-5 animate-pulse text-white" />
              <Sparkle className="absolute bottom-10 left-6 h-4 w-4 animate-pulse text-butter" />
            </div>

            {/* Dialogue */}
            <div className="textbox relative mt-2 w-full px-6 pb-9 pt-5 text-ink">
              <p className="font-pixel text-[9px] tracking-widest text-lav-600">
                ★ ITEM GET! ★
              </p>

              <p
                id="item-get-title"
                className="mt-3 font-display text-2xl font-semibold leading-tight"
              >
                You got{" "}
                <span className="text-lav-600">{item.name}</span>!
              </p>

              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {FLAVOR[item.name] ?? FALLBACK}
              </p>

              <button
                type="button"
                autoFocus
                onClick={close}
                className="absolute bottom-2.5 right-4 flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-bold text-lav-600 hover:bg-lav-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-lav-400"
              >
                Continue
                <span aria-hidden className="animate-blink">
                  ▼
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
