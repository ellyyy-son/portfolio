"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Sparkle, SwordPedestal, WoodenSword } from "./Whimsy";

/* =========================
   Education as a weapon upgrade:
   High School (wooden starter sword) → Ateneo (the legendary sword).
========================= */

const GRADUATION = new Date(2027, 4, 31).getTime();

function StageCard({
  stage,
  status,
  statusTone,
  emblem,
  equipped,
  degree,
  detail,
  school,
  extra,
  dates,
  className = "",
}: {
  stage: string;
  status: string;
  statusTone: string;
  emblem: ReactNode;
  equipped: string;
  degree: string;
  detail: string;
  school: string;
  extra?: string;
  dates: string;
  className?: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center gap-3">
      <span className="font-pixel text-[8px] tracking-widest text-lav-500">
        {stage}
      </span>

      <article
        className={`pop-card flex w-full flex-1 flex-col items-center p-7 text-center ${className}`}
      >
        {/* Emblem */}
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-b from-sky/50 via-lav-50 to-transparent">
          {emblem}
        </div>

        <p className="mt-2 rounded-full border-2 border-ink bg-white px-3 py-1 font-pixel text-[7px] tracking-widest text-ink">
          EQUIPPED: {equipped}
        </p>

        <span
          className={`mt-4 rounded-full px-3 py-1 font-pixel text-[9px] tracking-wider text-ink ${statusTone}`}
        >
          {status}
        </span>

        <h4 className="mt-3 font-display text-xl font-semibold text-lav-700 lg:text-2xl">
          {degree}
        </h4>

        <p className="mt-2 text-sm text-ink-soft">{detail}</p>

        <p className="mt-4 font-semibold text-ink">{school}</p>

        {extra && <p className="mt-1 text-sm text-ink-soft">{extra}</p>}

        <p className="mt-auto pt-3 text-xs text-ink-soft lg:text-sm">
          {dates}
        </p>
      </article>
    </div>
  );
}

function UpgradeTrail() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center lg:mt-6 lg:w-24 lg:self-center"
    >
      <div className="flex flex-col items-center gap-1.5 lg:flex-row">
        <span className="h-5 w-0.5 border-l-[3px] border-dashed border-lav-300 lg:h-0.5 lg:w-4 lg:border-l-0 lg:border-t-[3px]" />
        <span className="flex flex-col items-center gap-1">
          <Sparkle className="h-3.5 w-3.5 text-butter-deep" />
          <span className="font-pixel text-[7px] tracking-widest text-lav-600">
            UPGRADE
          </span>
        </span>
        <span className="h-5 w-0.5 border-l-[3px] border-dashed border-lav-300 lg:h-0.5 lg:w-4 lg:border-l-0 lg:border-t-[3px]" />
      </div>
    </div>
  );
}

export default function EducationPath() {
  const [graduated, setGraduated] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setGraduated(Date.now() >= GRADUATION), 0);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="flex w-full flex-col items-stretch gap-2 lg:flex-row lg:gap-0">
      <StageCard
        stage="STAGE 1"
        status="CLEARED"
        statusTone="bg-sky"
        emblem={
          <WoodenSword
            title="Wooden starter sword"
            className="h-20 w-20 -rotate-12 drop-shadow-[0_4px_0_rgb(94_66_156/0.15)]"
          />
        }
        equipped="WOODEN SWORD"
        degree="High School Diploma"
        detail="Academic Track: Science, Technology, Engineering, and Mathematics (STEM)"
        school="Quezon City Science High School"
        dates="June 2017 – July 2023"
      />

      <UpgradeTrail />

      <StageCard
        stage={graduated ? "STAGE 2" : "STAGE 2 · CURRENT"}
        status={graduated ? "CLEARED" : "IN PROGRESS"}
        statusTone={graduated ? "bg-sky" : "bg-butter"}
        className="group"
        emblem={
          <SwordPedestal
            title="Legendary sword in its pedestal (hover the card to pull it)"
            className="h-28 w-24 overflow-visible drop-shadow-[0_5px_0_rgb(94_66_156/0.2)]"
          />
        }
        equipped="LEGENDARY SWORD"
        degree="BS Computer Science"
        detail="Specialization in Data Science and Analytics (DSA) and Enterprise Systems (ES)"
        school="Ateneo de Manila University"
        extra="GPA 3.77 / 4.00 · Magna Cum Laude Standing"
        dates={
          graduated
            ? "August 2023 – May 2027"
            : "August 2023 – Expected May 2027"
        }
      />
    </div>
  );
}
