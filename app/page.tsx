"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import "./globals.css";

import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import SkillsItemGet from "../components/SkillsItemGet";
import AdventureLog from "../components/Timeline";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import EscapeRope from "@/components/EscapeRope";
import ProjectCards from "@/components/ProjectCards";
import BadgeCase from "@/components/BadgeCase";
import EducationPath from "@/components/EducationPath";
import {
  Bomb,
  Fairy,
  FloatingSprites,
  PikaEar,
  PixelHeart,
  Pokeball,
  Potion,
  RareCandy,
  Rupee,
  Shield,
  Sparkle,
  Sword,
  Thunderbolt,
  Triforce,
} from "@/components/Whimsy";

import { HiArrowUpRight, HiOutlineEnvelope } from "react-icons/hi2";
import { FaTrophy } from "react-icons/fa6";

/* =========================
   Content
========================= */

const DIALOGUE = [
  "A wild Elly appeared!",
  "Elly used SQL! It's super effective!",
  "It's dangerous to go alone! Take this: the Resume button below.",
  "You found a Small Key! It opens the Quest Log below.",
  "What? Elly is evolving! ...into a CS graduate in May 2027!",
  "Elly ate a Rare Candy! Elly learned PySpark!",
  "Trainer Elly wants to battle! ...in a business case competition.",
  "Gotta query 'em all!",
  "Psst... someone's peeking out from behind the contact form! ⚡",
  "Hey! Listen! The contact form is at the bottom of the page.",
];

/* EXP bar: progress from first day of college to graduation */
const COLLEGE_START = new Date(2023, 7, 1).getTime();
const GRADUATION = new Date(2027, 4, 31).getTime();

function graduationExp() {
  const pct = ((Date.now() - COLLEGE_START) / (GRADUATION - COLLEGE_START)) * 100;
  return Math.min(100, Math.max(0, Math.round(pct)));
}

const MOVES: {
  name: string;
  type: string;
  pp: string;
  tone: Tone;
  desc: string;
}[] = [
  { name: "SQL Query", type: "DATA", pp: "99/99", tone: "sky", desc: "Joins five tables at once. Rarely misses." },
  { name: "Feature Engineering", type: "ML", pp: "15/15", tone: "lav", desc: "Raises the model's accuracy sharply." },
  { name: "Dashboard Beam", type: "VIZ", pp: "20/20", tone: "butter", desc: "Turns raw data into insight. May cause stakeholder delight." },
  { name: "Process Automation", type: "BIZ", pp: "10/10", tone: "sky", desc: "Cuts manual turnaround time. Hits every week." },
];

const HOTBAR = [
  { label: "Sword: Python", Icon: Sword, className: "text-sky", iconClass: "-rotate-45" },
  { label: "Shield: fraud detection", Icon: Shield, className: "text-lav-300" },
  { label: "Poké Ball: gotta query 'em all (SQL)", Icon: Pokeball, className: "text-lav-400" },
  { label: "Potion: process automation", Icon: Potion, className: "text-sky" },
  { label: "Rare Candy: always leveling up", Icon: RareCandy, className: "text-lav-300" },
];

type Tone = "lav" | "butter" | "sky";

const TONES: Record<Tone, { bubble: string; icon: string }> = {
  lav: { bubble: "bg-lav-100", icon: "text-lav-500" },
  butter: { bubble: "bg-butter/60", icon: "text-butter-deep" },
  sky: { bubble: "bg-sky/70", icon: "text-sky-deep" },
};

/* =========================
   Reusable Components
========================= */

function SectionHeading({
  eyebrow,
  icon,
  label,
  blurb,
}: {
  eyebrow: string;
  icon: ReactNode;
  label: string;
  blurb?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <span className="font-pixel text-[10px] tracking-widest text-lav-500 lg:text-xs">
        {eyebrow}
      </span>

      <div className="flex flex-row items-center justify-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink bg-butter text-ink shadow-[0_4px_0_var(--color-ink)]">
          {icon}
        </div>

        <h2 className="font-display text-4xl font-bold tracking-tight text-ink lg:text-5xl">
          {label}
        </h2>
      </div>

      {blurb && (
        <p className="max-w-2xl text-sm leading-relaxed text-ink-soft lg:text-base">
          {blurb}
        </p>
      )}
    </div>
  );
}

function SubHeading({
  eyebrow,
  label,
  icon,
}: {
  eyebrow: string;
  label: string;
  icon?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col items-center gap-2 text-center">
      <span className="font-pixel text-[9px] tracking-widest text-sky-deep">
        {eyebrow}
      </span>
      <h3 className="flex items-center gap-3 font-display text-2xl font-bold text-ink lg:text-3xl">
        {icon}
        {label}
      </h3>
    </div>
  );
}

function PillLink({
  href,
  icon,
  children,
  variant = "secondary",
}: {
  href: string;
  icon?: ReactNode;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const external = href.startsWith("http") || href.endsWith(".pdf");

  const styles =
    variant === "primary"
      ? "border-lav-700 bg-lav-600 text-white shadow-[0_4px_0_var(--color-lav-700)] hover:bg-lav-700"
      : "border-lav-200 bg-white text-lav-700 shadow-[0_4px_0_var(--color-lav-200)] hover:border-lav-300 hover:bg-lav-50";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none lg:text-base ${styles}`}
    >
      {icon}
      <span>{children}</span>
      <HiArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

/* =========================
   Main Page
========================= */

export default function Home() {
  const [line, setLine] = useState(0);
  const [exp, setExp] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setExp(graduationExp()), 400);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-x-hidden bg-lav-50 text-ink">
      {/* =========================
          AMBIENT BACKGROUND
      ========================= */}

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-lav-200/70 blur-[120px]" />
        <div className="absolute right-[-8rem] top-1/3 h-[24rem] w-[24rem] rounded-full bg-sky/60 blur-[120px]" />
        <div className="absolute bottom-[-6rem] left-[-6rem] h-[22rem] w-[22rem] rounded-full bg-butter/40 blur-[120px]" />
        <div className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_20%,transparent_75%)]" />
      </div>

      <FloatingSprites />

      {/* =========================
          PAGE CONTENT
      ========================= */}

      <div className="relative z-10 w-full font-sans">
        <Navbar />

        <main className="mx-auto w-[88%] lg:w-[75%]">
          {/* =========================
              HERO
          ========================= */}

          <section
            id="home"
            className="flex min-h-screen scroll-mt-28 flex-col justify-center pb-12 pt-28"
          >
            <div className="flex w-full flex-col-reverse items-center justify-center gap-12 py-8 lg:flex-row lg:gap-16 lg:py-12">
              {/* Hero Text */}

              <div className="flex flex-col items-center justify-center lg:items-start">
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-lav-200 bg-white px-4 py-1.5 text-xs font-semibold text-lav-600 lg:text-sm">
                  <Sparkle className="h-3.5 w-3.5 text-butter-deep" />
                  Data &amp; Business Analytics
                </span>

                <h1 className="mt-6 text-center font-display text-4xl font-semibold tracking-tight text-ink lg:text-left lg:text-5xl">
                  Hello! I am
                </h1>

                <p className="mt-1 text-center font-display text-6xl font-bold leading-[0.95] tracking-tight text-lav-500 lg:text-left lg:text-8xl">
                  Elly
                  <br />
                  <span className="relative inline-block">
                    Olegario
                    <span
                      aria-hidden
                      className="absolute -bottom-1 left-0 -z-10 h-4 w-full rounded-full bg-butter lg:h-5"
                    />
                  </span>
                </p>

                <p className="mt-7 max-w-xl text-center text-sm leading-relaxed text-ink/75 lg:text-left lg:text-base">
                  Computer Science student at Ateneo de Manila
                  specializing in Data Science &amp; Analytics and
                  Enterprise Systems. I turn messy data into useful
                  decisions, from fraud detection rules to supply
                  chain reporting automation.
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-ink-soft">
                  <span className="flex gap-1">
                    <PixelHeart className="h-4 w-[18px] text-lav-400" />
                    <PixelHeart className="h-4 w-[18px] text-lav-400" />
                    <PixelHeart className="h-4 w-[18px] text-lav-400" />
                  </span>
                  <span className="font-pixel text-[9px] tracking-wider">
                    {exp >= 100 ? "LV. MAX · BS CS" : "LV. 4 · BS CS"}
                  </span>
                </div>

                {/* EXP bar */}

                <div className="mt-3 w-full max-w-xs">
                  <div className="flex items-center justify-between font-pixel text-[8px] tracking-wider text-ink-soft">
                    <span>EXP</span>
                    <span>
                      {exp >= 100 ? "GRADUATED! ★" : "NEXT LV: GRADUATE"}
                    </span>
                  </div>

                  <div
                    role="progressbar"
                    aria-label="Progress to graduation"
                    aria-valuenow={exp}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="mt-1.5 h-3.5 rounded-full border-2 border-ink bg-white p-[2px]"
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-deep to-sky transition-[width] duration-[1500ms] ease-out"
                      style={{ width: `${exp}%` }}
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row lg:justify-start">
                  <PillLink
                    href="/resume.pdf"
                    variant="primary"
                    icon={<Triforce className="h-3.5 w-4 text-butter" />}
                  >
                    View Resume
                  </PillLink>

                  <Socials />
                </div>
              </div>

              {/* Hero Image */}

              <div className="flex flex-shrink-0 flex-col items-center gap-6">
                <button
                  type="button"
                  onClick={() => setLine((l) => (l + 1) % DIALOGUE.length)}
                  aria-label="Talk to Elly"
                  className="group relative rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-lav-300"
                >
                  <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-butter via-lav-200 to-sky opacity-80 blur-2xl" />

                  <div className="absolute -inset-4 animate-spin-slow rounded-full border-[3px] border-dashed border-lav-300" />

                  <Image
                    className="relative h-60 w-60 rounded-full border-[6px] border-white object-cover shadow-[0_8px_0_var(--color-lav-200)] transition-transform duration-300 group-hover:scale-[1.02] md:h-64 md:w-64 lg:h-72 lg:w-72"
                    src="/pic.jpeg"
                    alt="Elly Olegario"
                    width={288}
                    height={288}
                    priority
                  />

                  <span className="absolute -right-3 bottom-12 animate-float rounded-2xl border-2 border-lav-200 bg-white p-2 shadow-[0_4px_0_var(--color-lav-200)]">
                    <Triforce className="h-6 w-7 text-butter-deep" />
                  </span>

                  <span
                    className="absolute -left-3 bottom-8 animate-float rounded-full border-2 border-lav-200 bg-white p-1.5 shadow-[0_4px_0_var(--color-lav-200)]"
                    style={{ animationDelay: "1.2s" }}
                  >
                    <Pokeball className="h-8 w-8 text-lav-400" />
                  </span>

                  <span
                    className="absolute -bottom-3 left-[45%] animate-float"
                    style={{ animationDelay: "2.4s" }}
                  >
                    <Sparkle className="h-6 w-6 text-sky-deep" />
                  </span>

                  <span
                    className="absolute -left-10 top-[34%] animate-float"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <Sword className="h-11 w-11 -rotate-[30deg] text-sky" />
                  </span>

                  <span
                    className="absolute -right-9 top-[30%] animate-float"
                    style={{ animationDelay: "3s" }}
                  >
                    <Thunderbolt className="h-9 w-9 rotate-12 text-butter" />
                  </span>

                  <span
                    className="absolute left-1/2 -top-10 -translate-x-1/2 animate-float"
                    style={{ animationDelay: "1.8s" }}
                  >
                    <Fairy className="h-8 w-8 text-sky-deep" />
                  </span>
                </button>

                {/* Dialogue box */}

                <button
                  type="button"
                  onClick={() => setLine((l) => (l + 1) % DIALOGUE.length)}
                  className="textbox relative w-72 px-5 pb-6 pt-4 text-left text-xs leading-relaxed text-ink lg:w-80 lg:text-sm"
                >
                  <span aria-live="polite">{DIALOGUE[line]}</span>
                  <span
                    aria-hidden
                    className="absolute bottom-1.5 right-3 animate-blink text-lav-500"
                  >
                    ▼
                  </span>
                </button>

                {/* Item hotbar */}

                <ul
                  aria-label="Inventory"
                  className="flex items-center gap-2 rounded-2xl border-2 border-lav-200 bg-white/80 p-2 shadow-[0_4px_0_var(--color-lav-200)]"
                >
                  {HOTBAR.map(({ label, Icon, className, iconClass }) => (
                    <li
                      key={label}
                      tabIndex={0}
                      aria-label={label}
                      className="group relative flex h-11 w-11 items-center justify-center rounded-xl border-2 border-lav-100 bg-lav-50 transition-all duration-200 hover:-translate-y-1 hover:border-butter-deep hover:bg-butter/40 focus:outline-none focus-visible:border-lav-500"
                    >
                      <Icon className={`h-7 w-7 ${className} ${iconClass ?? ""}`} />

                      <span className="pointer-events-none absolute -top-10 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-lg bg-screen px-2.5 py-1.5 text-[11px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* =========================
              MAIN SECTIONS
          ========================= */}

          <div className="mt-20 flex flex-col gap-32">
            {/* =========================
                PROFILE
            ========================= */}

            <section
              id="profile"
              className="flex scroll-mt-28 flex-col items-center gap-12"
            >
              <SectionHeading
                eyebrow="POKéDEX ENTRY"
                icon={<Pokeball className="h-7 w-7 text-lav-400" />}
                label="Profile"
              />

              <div className="w-full max-w-6xl">
                {/* =========================
                    POKéDEX DEVICE
                ========================= */}

                <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.8fr)_1.25rem_minmax(0,1.9fr)] lg:gap-0 xl:-mx-12 2xl:-mx-20">
                  {/* ---------- Left panel ---------- */}

                  <div className="flex flex-col justify-between gap-5 rounded-[2rem] border-[3px] border-ink bg-gradient-to-b from-lav-400 to-lav-500 p-5 shadow-[0_8px_0_var(--color-lav-700)] lg:rounded-r-lg lg:p-6">
                    {/* Lens + status lights */}
                    <div className="flex items-start gap-4">
                      <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[3px] border-ink bg-white">
                        <span className="h-11 w-11 animate-pulse rounded-full border-2 border-ink bg-gradient-to-br from-sky to-sky-deep" />
                        <span className="absolute left-[1.15rem] top-[1.15rem] h-3 w-3 rounded-full bg-white/90" />
                      </span>

                      <div className="mt-1 flex gap-2">
                        <span className="h-4 w-4 rounded-full border-2 border-ink bg-rose-300" />
                        <span className="h-4 w-4 rounded-full border-2 border-ink bg-butter" />
                        <span className="h-4 w-4 rounded-full border-2 border-ink bg-emerald-300" />
                      </div>

                      <span className="ml-auto mt-1 font-pixel text-[8px] tracking-widest text-ink">
                        POKéDEX
                      </span>
                    </div>

                    {/* Screen with bezel */}
                    <div className="rounded-2xl rounded-bl-[2.75rem] border-[3px] border-ink bg-lav-50 px-4 pb-3 pt-3">
                      <div className="mb-2 flex justify-center gap-3">
                        <span className="h-2 w-2 rounded-full border border-ink bg-rose-300" />
                        <span className="h-2 w-2 rounded-full border border-ink bg-rose-300" />
                      </div>

                      <div className="relative flex aspect-[16/11] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border-[3px] border-ink bg-[repeating-conic-gradient(from_0deg,var(--color-sky)_0deg_12deg,#e3f1ff_12deg_24deg)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle,rgb(255_255_255/0.85)_0%,transparent_65%)]" />

                        <Sparkle className="absolute left-[18%] top-[22%] h-4 w-4 animate-pulse text-butter-deep" />
                        <Sparkle className="absolute bottom-[26%] right-[18%] h-5 w-5 animate-pulse text-lav-500" />

                        <Pokeball className="relative h-20 w-20 animate-float text-lav-400 lg:h-24 lg:w-24" />

                        <span className="relative rounded-md bg-white/80 px-2.5 py-1 font-pixel text-[8px] tracking-widest text-ink">
                          ENTRY FOUND!
                        </span>

                        <span className="absolute left-2 top-2 rounded-md bg-screen/85 px-2 py-1 font-pixel text-[8px] text-butter">
                          No. 234***
                        </span>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <span className="h-5 w-5 rounded-full border-2 border-ink bg-rose-300" />
                        <span aria-hidden className="flex flex-col gap-1">
                          <span className="h-0.5 w-8 rounded bg-ink" />
                          <span className="h-0.5 w-8 rounded bg-ink" />
                          <span className="h-0.5 w-8 rounded bg-ink" />
                        </span>
                      </div>
                    </div>

                    {/* Controls */}
                    <div aria-hidden className="flex items-center gap-4">
                      <span className="h-11 w-11 shrink-0 rounded-full border-[3px] border-ink bg-screen" />

                      <div className="flex flex-1 flex-col gap-2">
                        <div className="flex gap-2">
                          <span className="h-2.5 w-10 rounded-full border-2 border-ink bg-rose-300" />
                          <span className="h-2.5 w-10 rounded-full border-2 border-ink bg-sky" />
                        </div>
                        <div className="rounded-lg border-[3px] border-ink bg-emerald-200 px-3 py-2 font-pixel text-[8px] tracking-wider text-ink">
                          ELLY · LV.4
                        </div>
                      </div>

                      <svg viewBox="0 0 30 30" className="h-14 w-14 shrink-0">
                        <path
                          d="M10.5 1.5h9v9h9v9h-9v9h-9v-9h-9v-9h9z"
                          fill="#2b2149"
                          stroke="#2f2452"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <circle cx="15" cy="15" r="2.4" fill="#ffffff" opacity="0.25" />
                      </svg>
                    </div>
                  </div>

                  {/* ---------- Hinge ---------- */}

                  <div
                    aria-hidden
                    className="hidden h-full flex-col justify-center py-12 lg:flex"
                  >
                    <div className="flex h-full flex-col justify-between rounded-md border-[3px] border-ink bg-lav-600 py-6">
                      <span className="mx-auto h-1 w-2 rounded bg-ink/40" />
                      <span className="mx-auto h-1 w-2 rounded bg-ink/40" />
                    </div>
                  </div>

                  {/* ---------- Right panel ---------- */}

                  <div className="flex flex-col gap-4 rounded-[2rem] border-[3px] border-ink bg-gradient-to-b from-lav-400 to-lav-500 p-5 shadow-[0_8px_0_var(--color-lav-700)] lg:rounded-l-lg lg:p-6">
                    <div className="grid gap-4 xl:grid-cols-2">
                    {/* Data screen */}
                    <div className="rounded-xl border-[3px] border-ink bg-screen p-5 text-white">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="font-pixel text-[9px] tracking-widest text-lav-300">
                          DATA
                        </span>
                        <span className="font-pixel text-[9px] text-butter">
                          No. 234***
                        </span>
                      </div>

                      <dl className="grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <dt className="text-xs text-lav-300">Name</dt>
                          <dd className="font-display text-2xl font-semibold">
                            Elly Olegario
                          </dd>
                        </div>

                        <div>
                          <dt className="text-xs text-lav-300">Category</dt>
                          <dd>The Insight Pokémon</dd>
                        </div>

                        <div>
                          <dt className="text-xs text-lav-300">Type</dt>
                          <dd className="mt-1 flex gap-2">
                            <span className="rounded-full bg-sky px-3 py-0.5 text-xs font-bold text-screen">
                              DATA
                            </span>
                            <span className="rounded-full bg-butter px-3 py-0.5 text-xs font-bold text-screen">
                              BUSINESS
                            </span>
                          </dd>
                        </div>

                        <div>
                          <dt className="text-xs text-lav-300">Region</dt>
                          <dd>Philippines</dd>
                        </div>

                        <div>
                          <dt className="text-xs text-lav-300">Ability</dt>
                          <dd>Pattern Recognition</dd>
                        </div>

                        <div>
                          <dt className="text-xs text-lav-300">Hidden Ability</dt>
                          <dd>Process Automation</dd>
                        </div>

                        <div>
                          <dt className="text-xs text-lav-300">Weakness</dt>
                          <dd>Unclean spreadsheets</dd>
                        </div>
                      </dl>
                    </div>

                    {/* Entry text screen */}
                    <div className="rounded-xl border-[3px] border-ink bg-lav-50 p-5 text-sm leading-relaxed text-ink/85">
                      <p className="mb-3 font-pixel text-[9px] tracking-widest text-lav-600">
                        DEX ENTRY
                      </p>

                      <p>
                        I&apos;m a 4th year BS Computer Science student
                        at Ateneo de Manila University, specializing in
                        Data Science and Analytics and Enterprise
                        Systems. I like problems where data, process,
                        and people meet: finding the pattern, building
                        the model, then making it genuinely useful for
                        the team that needs it.
                      </p>

                      <p className="mt-3">
                        So far that has meant designing fraud detection
                        rules at Shopee, automating supply chain
                        reporting at Unilever, flagging irregularities
                        in public infrastructure records, and
                        researching hate speech detection in
                        Filipino-English code-switched text for my
                        thesis.
                      </p>
                    </div>
                    </div>

                    {/* Moves */}
                    <div>
                      <p className="mb-3 font-pixel text-[9px] tracking-widest text-ink">
                        MOVES
                      </p>

                      <ul className="grid gap-3 sm:grid-cols-2">
                        {MOVES.map((move) => (
                          <li
                            key={move.name}
                            className="group rounded-xl border-[3px] border-ink bg-white px-4 py-3 shadow-[0_3px_0_var(--color-lav-700)] transition-all duration-200 hover:-translate-y-0.5"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <span className="flex items-center gap-1.5 font-display text-base font-semibold text-ink">
                                <span
                                  aria-hidden
                                  className="text-lav-500 opacity-0 transition-opacity group-hover:opacity-100"
                                >
                                  ▸
                                </span>
                                {move.name}
                              </span>

                              <span className="shrink-0 font-pixel text-[7px] text-ink-soft">
                                PP {move.pp}
                              </span>
                            </div>

                            <div className="mt-1.5 flex items-start gap-2">
                              <span
                                className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-extrabold tracking-wider text-ink ${TONES[move.tone].bubble}`}
                              >
                                {move.type}
                              </span>
                              <span className="text-xs text-ink-soft">
                                {move.desc}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Keypad */}
                    <div aria-hidden className="flex items-center gap-3">
                      <div className="grid flex-1 grid-cols-10 gap-1.5">
                        {Array.from({ length: 10 }, (_, i) => (
                          <span
                            key={i}
                            className="h-5 rounded-md border-2 border-ink bg-sky shadow-[inset_0_-3px_0_rgb(0_0_0/0.12)]"
                          />
                        ))}
                      </div>

                      <span className="h-6 w-6 shrink-0 rounded-full border-2 border-ink bg-butter" />
                      <span className="hidden h-4 w-10 shrink-0 rounded-md border-2 border-ink bg-screen sm:block" />
                    </div>
                  </div>
                </div>

                {/* =========================
                    EDUCATION
                ========================= */}

                <div className="mt-20 w-full">
                  <SubHeading
                    eyebrow="TRAINING GROUNDS"
                    label="Education"
                    icon={<Shield className="h-7 w-7 text-lav-300" />}
                  />

                  <EducationPath />
                </div>

                {/* =========================
                    SKILLS (component untouched; themed from outside)
                ========================= */}

                <div className="mt-20 w-full">
                  <SubHeading
                    eyebrow="INVENTORY"
                    label="Skills"
                    icon={<Bomb className="h-7 w-7 text-lav-300" />}
                  />

                  <SkillsItemGet />
                </div>
              </div>
            </section>

            {/* =========================
                EXPERIENCE
            ========================= */}

            <section
              id="experience"
              className="flex scroll-mt-28 flex-col items-center gap-10"
            >
              <SectionHeading
                eyebrow="ADVENTURE LOG"
                icon={<Triforce className="h-5 w-6 text-butter-deep" />}
                label="Experience"
                blurb="Adventures so far across FMCG, e-commerce, and student organizations, with data and analytics as my weapon of choice."
              />

              {/* Sheikah Slate–style Adventure Log */}

              <AdventureLog />
            </section>

            {/* =========================
                PROJECTS
            ========================= */}

            <section
              id="projects"
              className="flex scroll-mt-28 flex-col items-center gap-12"
            >
              <SectionHeading
                eyebrow="SIDE QUESTS"
                icon={<Rupee className="h-7 w-7 text-sky" />}
                label="Projects"
                blurb="Research and builds, now in holo trading card form. Hover a card to see it shine!"
              />

              <ProjectCards />
            </section>

            {/* =========================
                AWARDS
            ========================= */}

            <section
              id="awards"
              className="flex scroll-mt-28 flex-col items-center gap-12"
            >
              <SectionHeading
                eyebrow="BADGE CASE"
                icon={<FaTrophy size={20} />}
                label="Awards"
                blurb="Badges collected on the journey so far. Press one to see what it's for!"
              />

              <BadgeCase />

            </section>

            {/* =========================
                CONTACT
            ========================= */}

            <section
              id="contact"
              className="flex scroll-mt-28 flex-col items-center gap-12"
            >
              <SectionHeading
                eyebrow="HEY! LISTEN!"
                icon={<Fairy className="h-8 w-8 text-sky-deep" />}
                label="Contact Me!"
                blurb="Want to team up or just connect? Send a message below or reach me directly. I'll reply faster than a Quick Attack."
              />

              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-3 sm:flex-row">
                  <a
                    href="mailto:ellysonolegario@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-lav-200 bg-white px-4 py-2 text-sm text-ink transition hover:border-lav-300 hover:bg-butter"
                  >
                    <HiOutlineEnvelope className="text-lav-500" />
                    ellysonolegario@gmail.com
                  </a>

                  <a
                    href="mailto:hubert.olegario@student.ateneo.edu"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-lav-200 bg-white px-4 py-2 text-sm text-ink transition hover:border-lav-300 hover:bg-butter"
                  >
                    <HiOutlineEnvelope className="text-lav-500" />
                    hubert.olegario@student.ateneo.edu
                  </a>
                </div>

                <Socials />
              </div>

              {/* Contact Form */}

              <div className="group relative mt-10 w-full max-w-3xl">
                {/* Pikachu ears peeking over the form ⚡ */}

                <PikaEar className="absolute -top-14 right-[14%] h-24 w-11 origin-bottom -rotate-[18deg] transition-transform duration-300 group-hover:-translate-y-2 group-hover:-rotate-[30deg] lg:-top-16 lg:h-28 lg:w-12" />
                <PikaEar className="absolute -top-14 right-[5%] h-24 w-11 origin-bottom rotate-[18deg] transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-[30deg] lg:-top-16 lg:h-28 lg:w-12" />

                <div className="relative">
                  <Form />
                </div>
              </div>
            </section>
          </div>

          {/* =========================
              FOOTER
          ========================= */}

          <Footer />
        </main>
      </div>

      <EscapeRope />
    </div>
  );
}
