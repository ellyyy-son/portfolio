"use client";

import { useRef } from "react";
import type { PointerEvent, ReactNode } from "react";
import { SiGithub } from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";
import { Pokeball, Rupee, Sparkle } from "./Whimsy";

/* =========================
   Projects as holo trading cards
========================= */

type Tone = "lav" | "sky";

type Move = {
  name: string;
  cost: number;
  damage?: string;
  desc: string;
};

type CardProject = {
  /** Full project title, shown under the card */
  title: string;
  /** Short name printed on the card */
  cardName: string;
  stage: string;
  hp: string;
  type: { label: string; tone: Tone };
  art: ReactNode;
  info: string;
  moves: Move[];
  weakness: string;
  tools: string[];
  /** Main "Go to Project" link. Leave as "" to show "Link coming soon". */
  projectHref: string;
  githubHref?: string;
};

/* ---------- Card art ---------- */

function ChatArt() {
  return (
    <div className="relative flex h-full w-full flex-col justify-center gap-2.5 bg-lav-50 bg-[linear-gradient(var(--color-lav-100)_1px,transparent_1px),linear-gradient(90deg,var(--color-lav-100)_1px,transparent_1px)] bg-[size:16px_16px] px-3 py-3">
      <span className="absolute right-2 top-2 rounded-md bg-screen/85 px-1.5 py-0.5 font-pixel text-[6px] tracking-widest text-butter">
        TAGLISH
      </span>

      {/* constructive comment */}
      <div className="flex items-end gap-1.5">
        <span className="h-6 w-6 shrink-0 rounded-full border-2 border-ink bg-lav-300" />
        <div className="max-w-[78%]">
          <p className="rounded-2xl rounded-bl-sm border-2 border-ink bg-white px-2.5 py-1 text-[10px] leading-snug text-ink">
            Ganda ng design! Pero pwede pa i-optimize yung load time.
          </p>
          <span className="mt-1 inline-block rounded-full border border-ink bg-[#cdeccd] px-1.5 text-[8px] font-extrabold tracking-wide text-ink">
            CONSTRUCTIVE ✓
          </span>
        </div>
      </div>

      {/* hate speech comment */}
      <div className="flex flex-row-reverse items-end gap-1.5">
        <span className="h-6 w-6 shrink-0 rounded-full border-2 border-ink bg-sky" />
        <div className="flex max-w-[78%] flex-col items-end">
          <p className="rounded-2xl rounded-br-sm border-2 border-ink bg-white px-2.5 py-1 text-[10px] leading-snug text-ink">
            Ang{" "}
            <span className="inline-block h-2 w-8 translate-y-px rounded-sm bg-ink align-middle" />{" "}
            mo, wag ka na mag-post.
          </p>
          <span className="mt-1 inline-block rounded-full border border-ink bg-[#f8b8d0] px-1.5 text-[8px] font-extrabold tracking-wide text-ink">
            HATE ⚠
          </span>
        </div>
      </div>
    </div>
  );
}

function AnomalyArt() {
  const bars = [28, 40, 34, 46, 30, 62, 38, 44];

  return (
    <div className="relative flex h-full w-full items-end justify-center bg-gradient-to-b from-sky/50 to-white px-4 pb-3 pt-4">
      <svg viewBox="0 -10 120 82" className="h-full w-full" aria-hidden>
        <line
          x1="4"
          y1="22"
          x2="116"
          y2="22"
          stroke="#9a7ae0"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        {bars.map((h, i) => {
          const flagged = i === 5;
          const x = 8 + i * 14;
          return (
            <rect
              key={x}
              x={x}
              y={70 - h}
              width="9"
              height={h}
              rx="2"
              fill={flagged ? "#f2c94c" : i % 2 ? "#b89cf2" : "#6aaeea"}
              stroke="#2f2452"
              strokeWidth="1.2"
            />
          );
        })}
        <g transform="translate(82.5 -2)">
          <circle r="5.5" fill="#ffffff" stroke="#2f2452" strokeWidth="1.2" />
          <text
            y="2.6"
            textAnchor="middle"
            fontSize="7.5"
            fontWeight="800"
            fill="#2f2452"
          >
            !
          </text>
        </g>
      </svg>

      <Rupee className="absolute left-3 top-3 h-6 w-6 text-sky" />
    </div>
  );
}

/* ---------- Data ---------- */

const PROJECTS: CardProject[] = [
  {
    title:
      "Hate Speech and Constructive Criticism Classification in Code-Switched Text",
    cardName: "Code-Switch Classifier",
    stage: "ONGOING",
    hp: "???",
    type: { label: "NLP", tone: "lav" },
    art: <ChatArt />,
    info: "Undergraduate Thesis · Ateneo Social Computing Lab",
    moves: [
      {
        name: "Hate Speech Detect",
        cost: 2,
        desc: "Classifies hate speech in Filipino-English code-switched text.",
      },
      {
        name: "Constructive Read",
        cost: 2,
        desc: "Spots constructive criticism in a low-resource language domain.",
      },
      {
        name: "Benchmark",
        cost: 1,
        desc: "Tests models on accuracy and reliability to set baselines.",
      },
    ],
    weakness: "Low-resource data",
    tools: ["Python", "scikit-learn", "NLTK"],
    projectHref: "", // ← paste your project link here
  },
  {
    title: "DPWH Transparency Dashboard",
    cardName: "DPWH Transparency",
    stage: "CLEARED",
    hp: "10K+",
    type: { label: "DATA", tone: "sky" },
    art: <AnomalyArt />,
    info: "Anomaly Detection · Public Infrastructure Records",
    moves: [
      {
        name: "Isolation Forest",
        cost: 3,
        damage: "10K+",
        desc: "Surfaces 10,000+ irregularities across project records.",
      },
      {
        name: "Random Forest",
        cost: 2,
        desc: "Assigns each project an initial risk score.",
      },
      {
        name: "Dashboard Beam",
        cost: 1,
        desc: "Lets anyone monitor transparency and explore risk insights.",
      },
    ],
    weakness: "Missing records",
    tools: ["Python", "scikit-learn"],
    projectHref: "", // ← paste your project link here
  },
];

/* ---------- Pieces ---------- */

const TONE: Record<Tone, { card: string; energy: string }> = {
  lav: {
    card: "bg-gradient-to-b from-lav-200 via-lav-100 to-white",
    energy: "bg-lav-400",
  },
  sky: {
    card: "bg-gradient-to-b from-sky via-sky/50 to-white",
    energy: "bg-sky-deep",
  },
};

function Energy({ tone, big = false }: { tone: Tone; big?: boolean }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full border-2 border-ink ${TONE[tone].energy} ${
        big ? "h-6 w-6" : "h-4 w-4"
      }`}
    >
      <Sparkle className={big ? "h-3 w-3 text-white" : "h-2 w-2 text-white"} />
    </span>
  );
}

function TradingCard({
  project,
  index,
  total,
}: {
  project: CardProject;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const tone = project.type.tone;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;

    el.style.setProperty("--rx", `${(0.5 - y) * 14}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 16}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="flex w-full max-w-[22rem] flex-col items-center gap-5 md:row-span-3 md:grid md:grid-rows-subgrid">
      <div className="w-full [perspective:1000px] md:h-full">
        <div
          ref={ref}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          className="holo-card relative flex h-full flex-col rounded-[1.4rem] border-[3px] border-ink bg-gradient-to-br from-butter via-[#fff3c4] to-butter-deep p-2.5 shadow-[0_10px_0_var(--color-lav-300)]"
        >
          <article
            className={`relative flex flex-1 flex-col overflow-hidden rounded-[1rem] border-2 border-ink/70 px-3 pb-2.5 pt-2.5 ${TONE[tone].card}`}
          >
            {/* Header */}
            <div className="flex items-end justify-between gap-2">
              <div className="min-w-0">
                <span className="rounded-sm border border-ink/40 bg-white/80 px-1.5 py-0.5 font-pixel text-[6px] tracking-widest text-ink">
                  {project.stage}
                </span>
                <h3 className="mt-1.5 truncate font-display text-xl font-bold leading-tight text-ink">
                  {project.cardName}
                </h3>
              </div>

              <div className="flex shrink-0 items-center gap-1.5">
                <span className="text-[10px] font-extrabold text-lav-700">
                  HP
                </span>
                <span className="font-display text-2xl font-bold leading-none text-ink">
                  {project.hp}
                </span>
                <Energy tone={tone} big />
              </div>
            </div>

            {/* Art */}
            <div className="relative mt-2 h-40 overflow-hidden rounded-md border-[3px] border-butter-deep shadow-[0_0_0_2px_var(--color-ink)]">
              {project.art}
            </div>

            {/* Info strip */}
            <p className="mx-3 rounded-b-md border-x-2 border-b-2 border-butter-deep bg-butter/80 px-2 py-0.5 text-center text-[10px] font-semibold italic text-ink">
              {project.info}
            </p>

            {/* Moves */}
            <ul className="mb-1 mt-2 flex flex-col divide-y divide-ink/10">
              {project.moves.map((move) => (
                <li key={move.name} className="py-2">
                  <div className="flex items-center gap-2">
                    <span className="flex gap-0.5">
                      {Array.from({ length: move.cost }, (_, i) => (
                        <Energy key={i} tone={tone} />
                      ))}
                    </span>
                    <span className="flex-1 text-sm font-extrabold text-ink">
                      {move.name}
                    </span>
                    {move.damage && (
                      <span className="font-display text-lg font-bold leading-none text-ink">
                        {move.damage}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[11px] leading-snug text-ink/75">
                    {move.desc}
                  </p>
                </li>
              ))}
            </ul>

            {/* Footer stats */}
            <div className="mt-auto grid grid-cols-2 gap-2 border-t-2 border-ink/15 pt-2 text-[10px]">
              <div>
                <p className="font-bold uppercase tracking-wide text-ink-soft">
                  Weakness
                </p>
                <p className="font-semibold text-ink">{project.weakness}</p>
              </div>
              <div>
                <p className="font-bold uppercase tracking-wide text-ink-soft">
                  Tools
                </p>
                <p className="font-semibold text-ink">
                  {project.tools.join(" · ")}
                </p>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between text-[9px] font-bold text-ink-soft">
              <span>Illus. Elly O.</span>
              <span>
                {String(index + 1).padStart(3, "0")}/
                {String(total).padStart(3, "0")} ★
              </span>
            </div>

            {/* Holo shine */}
            <div aria-hidden className="holo-shine pointer-events-none absolute inset-0" />
          </article>
        </div>
      </div>

      {/* Full title + links */}
      <p className="max-w-[22rem] text-center text-sm font-semibold leading-snug text-ink">
        {project.title}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {project.projectHref ? (
          <a
            href={project.projectHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-lav-700 bg-lav-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_0_var(--color-lav-700)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-lav-700 active:translate-y-0.5 active:shadow-none"
          >
            <Pokeball className="h-4 w-4 text-butter" />
            Go to Project
            <HiArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border-2 border-dashed border-lav-300 px-5 py-2.5 text-sm font-semibold text-ink-soft">
            <Pokeball className="h-4 w-4 text-lav-200" />
            Link coming soon
          </span>
        )}

        {project.githubHref && (
          <a
            href={project.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-lav-200 bg-white px-5 py-2.5 text-sm font-semibold text-lav-700 shadow-[0_4px_0_var(--color-lav-200)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <SiGithub size={16} />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectCards() {
  return (
    <div className="flex w-full flex-col items-center gap-10 md:grid md:grid-cols-[repeat(2,22rem)] md:items-stretch md:justify-center md:gap-x-6 md:gap-y-5">
      {PROJECTS.map((project, i) => (
        <TradingCard
          key={project.title}
          project={project}
          index={i}
          total={PROJECTS.length}
        />
      ))}
    </div>
  );
}
