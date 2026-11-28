"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { MdWorkOutline, MdGroups } from "react-icons/md";
import {
  PixelHeart,
  Potion,
  Shield,
  SmallKey,
  Thunderbolt,
} from "./Whimsy";

/* =========================
   Types
========================= */

type Experience = {
  date: string;
  title: string;
  /** Short name shown on the map pin */
  short: string;
  program?: string;
  company: string;
  location?: string;
  current?: boolean;
  marker?: ReactNode;
  description: string[];
};

/* =========================
   Professional Experience
========================= */

const professionalExperience: Experience[] = [
  {
    date: "September 2026 – December 2026",
    title: "Personal Care – Integrated Planning Intern",
    short: "Unilever",
    program: "Business Week 2026",
    company: "Unilever Philippines Inc.",
    location: "Taguig City, PH",
    marker: <Potion className="h-5 w-5 text-lav-300" />,
    description: [
      "Selected as 1 of only 35 participants from 6,000+ applicants nationwide for Unilever Philippines' Business Week 2026.",
      "Developed a 200+ page end-to-end process playbook for the Personal Care Innovations Unit, mapping 70+ process steps across 15+ teams; identified around 20 pain points and recommended targeted process improvements.",
      "Spearheaded the planning team's automation efforts by building tools in Microsoft Power Platform (Apps and Automate) and Microsoft Copilot agents now in daily team use, reducing task turnaround time by 95%.",
    ],
  },

  {
    date: "June 2026 – August 2026",
    title: "Fraud – Projects and Analytics Intern",
    short: "Shopee",
    program: "Apprentice Program 2026",
    company: "Shopee Philippines Inc.",
    location: "Mandaluyong City, PH",
    marker: <Shield className="h-5 w-5 text-sky" />,
    description: [
      "Selected as 1 of only 22 students nationwide from thousands of applicants to join Batch 6 of Shopee Philippines' Apprentice Program.",
      "Leveraged SQL and Python to extract, join, and analyze 100M+ records spanning user, financial, listing, and behavioral data to uncover fraud patterns.",
      "Researched, designed, and proposed novel fraud detection rules using linkage signals and account behavior to surface prohibited listings and bad actors evading existing detection, flagging 3,000+ high-risk seller accounts.",
      "Validated rule precision through manual review of flagged accounts, confirming fraud missed by existing rules and documenting findings for the fraud team.",
      "Offered a fast track for the Shopee Graduate Development Program (GDP) application based on internship performance.",
    ],
  },
];

/* =========================
   Organizational Experience
========================= */

const organizationalExperience: Experience[] = [
  {
    date: "October 2025 – Present",
    title: "IT Skills and Development Officer",
    short: "Ateneo MISA",
    company: "Ateneo Management Information Systems Association",
    location: "Quezon City, PH",
    current: true,
    marker: <Thunderbolt className="h-5 w-5 text-butter" />,
    description: [
      "Created and facilitated technical training modules for 40+ internal members and external participants, mentoring attendees and providing hands-on support to reinforce learning.",
      "Led a team of four developers using Agile methodologies, delivering three client website projects on schedule, all of which have been adopted and are actively used.",
    ],
  },

  {
    date: "July 2025 – July 2026",
    title: "Deputy for Website Management",
    short: "Ateneo Gabay",
    company: "Ateneo Gabay",
    location: "Quezon City, PH",
    marker: <SmallKey className="h-5 w-5 text-butter-deep" />,
    description: [
      "Managed and maintained the organization's main website, ensuring reliability, usability, and timely updates.",
      "Designed and implemented a custom shortlinking system to streamline link sharing.",
      "Oversaw and supported all domain-related needs, including configuration, troubleshooting, and domain management for organizational platforms.",
    ],
  },
];

const LOGS = {
  professional: {
    label: "Main Quests",
    sub: "Professional",
    region: "Career Plains",
    Icon: MdWorkOutline,
    quests: professionalExperience,
    mapClass:
      "bg-lav-50 bg-[linear-gradient(var(--color-lav-100)_1px,transparent_1px),linear-gradient(90deg,var(--color-lav-100)_1px,transparent_1px)] bg-[size:12.5%_16.66%]",
  },
  organizational: {
    label: "Side Quests",
    sub: "Organizational",
    region: "Campus Isles",
    Icon: MdGroups,
    quests: organizationalExperience,
    mapClass: "bg-sky",
  },
} as const;

type LogKey = keyof typeof LOGS;

/* Every quest from both logs, used to size the details panel to the longest one */
const ALL_QUESTS = (Object.keys(LOGS) as LogKey[]).flatMap((key) =>
  LOGS[key].quests.map((quest, index) => ({ key, index, quest }))
);

/* Pin spots on the map (percent of map width / height), newest quest first */
const PIN_SPOTS = [
  { x: 70, y: 34 },
  { x: 30, y: 70 },
  { x: 50, y: 52 },
  { x: 24, y: 30 },
];

function pathThrough(points: { x: number; y: number }[]) {
  if (points.length < 2) return "";
  const [first, ...rest] = points;
  return rest.reduce((d, p, i) => {
    const prev = points[i];
    const cx = (prev.x + p.x) / 2;
    return `${d} Q ${cx} ${Math.min(prev.y, p.y) - 12} ${p.x} ${p.y}`;
  }, `M ${first.x} ${first.y}`);
}

/* Side quests: little islands in a pastel sea */
function IslandTerrain() {
  const wave = (x: number, y: number) =>
    `M${x} ${y}q2-2.5 4 0t4 0`;

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
      className="absolute inset-0 h-full w-full"
    >
      {/* waves */}
      <g fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8">
        {[
          [8, 12], [40, 8], [88, 62], [60, 88], [6, 44], [46, 46], [90, 8], [20, 94],
        ].map(([x, y]) => (
          <path key={`${x}-${y}`} d={wave(x, y)} vectorEffect="non-scaling-stroke" />
        ))}
      </g>

      {/* big island (top right) */}
      <path
        d="M50 32C52 16 70 10 84 16c13 6 12 26 0 33-12 7-32 1-34-17z"
        fill="#fff3c4"
        stroke="#f2c94c"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <path d="M58 31c2-9 14-12 21-7 7 5 3 15-6 16-9 1-16-2-15-9z" fill="#cdeccd" />

      {/* island (bottom left) */}
      <path
        d="M10 70c0-13 15-19 28-15 13 4 13 23 2 29-12 7-30 1-30-14z"
        fill="#fff3c4"
        stroke="#f2c94c"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <path d="M17 70c1-7 10-10 17-7 7 3 5 12-3 13-8 1-15-1-14-6z" fill="#cdeccd" />

      {/* islets */}
      <ellipse cx="88" cy="82" rx="6" ry="5" fill="#fff3c4" stroke="#f2c94c" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      <ellipse cx="14" cy="22" rx="5" ry="4" fill="#fff3c4" stroke="#f2c94c" strokeWidth="2" vectorEffect="non-scaling-stroke" />

      {/* houses */}
      <g stroke="#2f2452" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeLinejoin="round">
        <rect x="80" y="22" width="5" height="5" fill="#ffffff" />
        <polygon points="79,22 82.5,17.5 86,22" fill="#b89cf2" />
        <rect x="16" y="63" width="5" height="5" fill="#ffffff" />
        <polygon points="15,63 18.5,58.5 22,63" fill="#6aaeea" />
      </g>

      {/* palm-ish trees */}
      <g fill="#9ddc8f">
        <circle cx="62" cy="40" r="2.4" />
        <circle cx="36" cy="76" r="2.4" />
        <circle cx="88" cy="80" r="2" />
      </g>
    </svg>
  );
}

/* Main quests: soft pastel overworld */
function MapTerrain() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
      className="absolute inset-0 h-full w-full"
    >
      {/* water */}
      <path d="M62 100 C66 84 80 78 100 76 V100 Z" fill="#c4e4ff" />
      <path
        d="M0 58 C14 54 20 64 34 60 S56 46 66 52 S84 70 100 66"
        fill="none"
        stroke="#c4e4ff"
        strokeWidth="5"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
      />
      {/* fields */}
      <ellipse cx="80" cy="18" rx="16" ry="11" fill="#fff3c4" />
      <ellipse cx="18" cy="86" rx="14" ry="9" fill="#fff3c4" />
      {/* mountains */}
      <g fill="#e6daff" stroke="#d2bffb" strokeWidth="1.5" vectorEffect="non-scaling-stroke">
        <polygon points="6,40 14,22 22,40" />
        <polygon points="16,40 24,26 32,40" />
        <polygon points="40,20 46,8 52,20" />
      </g>
      {/* trees */}
      <g fill="#cdeccd">
        <circle cx="88" cy="48" r="3" />
        <circle cx="92" cy="54" r="2.5" />
        <circle cx="84" cy="56" r="2.2" />
        <circle cx="42" cy="84" r="2.6" />
        <circle cx="48" cy="88" r="2.2" />
      </g>
    </svg>
  );
}

/* =========================
   Adventure Log
   (Experience shown on a Sheikah Slate–style device)
========================= */

export default function AdventureLog() {
  const [log, setLog] = useState<LogKey>("professional");
  const [selected, setSelected] = useState(0);

  const quests = LOGS[log].quests;

  const switchLog = (key: LogKey) => {
    setLog(key);
    setSelected(0);
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6">
      {/* Quest tabs */}
      <div
        role="tablist"
        aria-label="Quest type"
        className="flex items-center gap-1 rounded-full border-2 border-lav-200 bg-white p-1.5 shadow-[0_4px_0_var(--color-lav-200)]"
      >
        {(Object.keys(LOGS) as LogKey[]).map((key) => {
          const { label, sub, Icon } = LOGS[key];
          const active = log === key;

          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => switchLog(key)}
              className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-200 sm:px-6 lg:text-sm ${
                active
                  ? "bg-lav-600 text-white shadow-[0_3px_0_var(--color-lav-700)]"
                  : "text-ink-soft hover:bg-lav-100 hover:text-ink"
              }`}
            >
              <Icon size={16} />
              {label}
              <span className="hidden font-semibold opacity-75 md:inline">
                · {sub}
              </span>
            </button>
          );
        })}
      </div>

      {/* Map + quest details */}
      <div className="w-full">
        <div className="pop-card grid gap-4 bg-gradient-to-br from-white via-lav-50 to-sky/30 p-3 hover:translate-y-0 sm:p-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:p-5">
          {/* Map */}
          <div
            key={log}
            className={`animate-in fade-in relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-lav-200 duration-300 md:aspect-auto md:h-full md:min-h-96 ${LOGS[log].mapClass}`}
          >
            {log === "professional" ? <MapTerrain /> : <IslandTerrain />}

            {/* Route between quests (oldest → newest) */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
              className="absolute inset-0 h-full w-full"
            >
              <path
                d={pathThrough(
                  quests.map((_, i) => PIN_SPOTS[i % PIN_SPOTS.length]).reverse()
                )}
                fill="none"
                stroke="#9a7ae0"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Map chrome */}
            <span className="absolute left-2.5 top-2.5 rounded-md bg-screen/85 px-2 py-1 font-pixel text-[7px] tracking-widest text-sky">
              MAP · {LOGS[log].region.toUpperCase()}
            </span>

            <span
              aria-hidden
              className="absolute bottom-2.5 left-2.5 flex flex-col items-center gap-0.5"
            >
              <span className="font-pixel text-[7px] leading-none text-lav-700">
                N
              </span>
              <svg viewBox="0 0 40 40" className="h-11 w-11 drop-shadow-[0_2px_0_rgb(94_66_156/0.2)]">
                <circle cx="20" cy="20" r="18" fill="#ffffff" stroke="#b89cf2" strokeWidth="2" />
                <circle cx="20" cy="20" r="13.5" fill="none" stroke="#e6daff" strokeWidth="1" />
                {/* ticks */}
                <g stroke="#b89cf2" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="20" y1="3.5" x2="20" y2="6" />
                  <line x1="20" y1="34" x2="20" y2="36.5" />
                  <line x1="3.5" y1="20" x2="6" y2="20" />
                  <line x1="34" y1="20" x2="36.5" y2="20" />
                </g>
                {/* rose */}
                <polygon points="20,20 26.5,26.5 20,22.5 13.5,26.5" fill="#d2bffb" opacity="0.6" />
                <polygon points="20,20 26.5,13.5 22.5,20 26.5,26.5" fill="#d2bffb" opacity="0.6" />
                <polygon points="20,20 13.5,13.5 17.5,20 13.5,26.5" fill="#d2bffb" opacity="0.6" />
                <polygon points="34,20 20,23 20,17" fill="#e6daff" stroke="#2f2452" strokeWidth="0.8" strokeLinejoin="round" />
                <polygon points="6,20 20,23 20,17" fill="#e6daff" stroke="#2f2452" strokeWidth="0.8" strokeLinejoin="round" />
                <polygon points="20,34 23,20 17,20" fill="#ffffff" stroke="#2f2452" strokeWidth="0.8" strokeLinejoin="round" />
                <polygon points="20,6 23,20 17,20" fill="#7d5cc7" stroke="#2f2452" strokeWidth="0.8" strokeLinejoin="round" />
                <circle cx="20" cy="20" r="2.2" fill="#f2c94c" stroke="#2f2452" strokeWidth="0.8" />
              </svg>
            </span>

            {/* Pins */}
            {quests.map((q, i) => {
              const spot = PIN_SPOTS[i % PIN_SPOTS.length];
              const active = i === selected;

              return (
                <button
                  key={q.title}
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-pressed={active}
                  aria-label={`${q.company}: ${q.title}`}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className="group absolute flex -translate-x-1/2 -translate-y-full flex-col items-center focus:outline-none"
                >
                  {q.current && (
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-[1.1rem] h-11 w-11 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-butter/60"
                    />
                  )}

                  <span
                    className={`relative flex items-center justify-center rounded-full border-[3px] bg-white transition-all duration-200 group-hover:-translate-y-1 group-focus-visible:ring-4 group-focus-visible:ring-lav-300 ${
                      active
                        ? "h-11 w-11 border-ink shadow-[0_4px_0_var(--color-lav-400)]"
                        : "h-9 w-9 border-lav-400"
                    }`}
                  >
                    {q.marker ?? <PixelHeart className="h-4 w-4 text-lav-400" />}
                  </span>

                  <span
                    aria-hidden
                    className={`-mt-0.5 h-2.5 w-2.5 rotate-45 border-b-[3px] border-r-[3px] bg-white ${
                      active ? "border-ink" : "border-lav-400"
                    }`}
                  />

                  <span
                    className={`absolute top-full mt-1 whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-bold transition-colors ${
                      active
                        ? "bg-ink text-white"
                        : "bg-white/90 text-ink group-hover:bg-butter"
                    }`}
                  >
                    {q.current && "★ "}
                    {q.short}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quest details: every quest is laid out in the same cell (hidden ones
              invisible) so the card is always as tall as the longest quest */}
          <div className="grid">
          {ALL_QUESTS.map(({ key, index, quest }) => {
            const visible = key === log && index === selected;

            return (
          <article
            key={`${key}-${index}`}
            aria-hidden={!visible}
            className={`rounded-2xl border-2 border-lav-200 bg-white p-5 [grid-area:1/1] lg:p-7 ${
              visible
                ? "animate-in fade-in slide-in-from-right-2 duration-300"
                : "invisible"
            }`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold text-ink-soft lg:text-sm">
                {quest.date}
              </span>

              {quest.current ? (
                <span className="rounded-full bg-butter px-3 py-1 font-pixel text-[9px] tracking-wider text-ink">
                  ★ QUEST ACTIVE
                </span>
              ) : (
                <span className="rounded-full bg-[#cdeccd] px-3 py-1 font-pixel text-[9px] tracking-wider text-ink">
                  ✓ QUEST CLEARED
                </span>
              )}
            </div>

            <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-lav-700 lg:text-2xl">
              {quest.title}
            </h3>

            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-sm font-semibold text-ink lg:text-base">
                {quest.company}
              </span>

              {quest.location && (
                <span className="text-xs text-ink-soft lg:text-sm">
                  · {quest.location}
                </span>
              )}

              {quest.program && (
                <span className="rounded-full bg-sky px-3 py-0.5 text-xs font-semibold text-ink">
                  {quest.program}
                </span>
              )}
            </div>

            <ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed text-ink/80">
              {quest.description.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-[0.45rem] h-2 w-2 shrink-0 rotate-45 rounded-[2px] bg-lav-400"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}
