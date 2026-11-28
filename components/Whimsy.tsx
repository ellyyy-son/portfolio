/* =========================
   Little game-inspired icons
   Hand-drawn SVGs nodding to Zelda & Pokémon:
   Triforce, sword, shield, bomb, small key, potion, fairy, rupee, heart,
   Poké/Great/Ultra Ball, thunderbolt, egg, rare candy, sparkle
========================= */

import type { CSSProperties, ReactElement } from "react";

const INK = "#2f2452";

type IconProps = {
  className?: string;
  title?: string;
};

function a11y(title?: string) {
  return title
    ? { role: "img" as const, "aria-label": title }
    : { "aria-hidden": true as const };
}

/* ---------- Zelda-ish ---------- */

export function Triforce({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 100 87" fill="currentColor" className={className} {...a11y(title)}>
      <polygon points="50,0 75,43.3 25,43.3" />
      <polygon points="25,43.3 50,86.6 0,86.6" />
      <polygon points="75,43.3 100,86.6 50,86.6" />
    </svg>
  );
}

export function Sword({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...a11y(title)}>
      <polygon
        points="12,0.8 14,3.8 14,15 10,15 10,3.8"
        fill="currentColor"
        stroke={INK}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <line x1="12" y1="4" x2="12" y2="13.8" stroke="#ffffff" strokeWidth="0.9" opacity="0.7" />
      <path
        d="M5.5 15.2Q8 13.8 12 15q4-1.2 6.5.2l-1 1.8q-3-.6-5.5 0-2.5-.6-5.5 0z"
        fill="#9a7ae0"
        stroke={INK}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <rect x="10.9" y="17" width="2.2" height="4.2" fill="#5e429c" stroke={INK} strokeWidth="0.8" />
      <circle cx="12" cy="22.2" r="1.3" fill="#f2c94c" stroke={INK} strokeWidth="0.8" />
    </svg>
  );
}

export function Shield({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...a11y(title)}>
      <path
        d="M12 1.5 20.5 4.8V11c0 5.6-3.6 9.3-8.5 11.5C7.1 20.3 3.5 16.6 3.5 11V4.8z"
        fill="currentColor"
        stroke={INK}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M12 4 18 6.4V11c0 4.1-2.5 7-6 8.8-3.5-1.8-6-4.7-6-8.8V6.4z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <g fill="#f2c94c" stroke={INK} strokeWidth="0.4" strokeLinejoin="round">
        <polygon points="12,6.5 13.6,9.3 10.4,9.3" />
        <polygon points="10.4,9.3 12,12.1 8.8,12.1" />
        <polygon points="13.6,9.3 15.2,12.1 12,12.1" />
      </g>
    </svg>
  );
}

export function Bomb({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...a11y(title)}>
      <path d="M13 6.5q2-3.6 5.5-3" fill="none" stroke={INK} strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M19.5 0.8c.3 1.6 1 2.3 2.5 2.6-1.5.3-2.2 1-2.5 2.6-.3-1.6-1-2.3-2.5-2.6 1.5-.3 2.2-1 2.5-2.6z"
        fill="#f2c94c"
      />
      <rect x="8.8" y="5.6" width="4.4" height="2.8" rx="0.6" fill="#5e429c" stroke={INK} strokeWidth="1" />
      <circle cx="11" cy="15" r="7.4" fill="currentColor" stroke={INK} strokeWidth="1.4" />
      <circle cx="8.3" cy="12.3" r="1.7" fill="#ffffff" opacity="0.65" />
    </svg>
  );
}

export function SmallKey({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...a11y(title)}>
      <circle cx="12" cy="6" r="4.2" fill="none" stroke={INK} strokeWidth="4" />
      <circle cx="12" cy="6" r="4.2" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M10.8 9.6h2.4V15h2.8v2h-2.8v1.4h2.2v2h-2.2v2.2h-2.4z"
        fill="currentColor"
        stroke={INK}
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Potion({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...a11y(title)}>
      <path
        d="M9.5 5h5v3c3 1.5 4.5 4 4.5 7a7 7 0 0 1-14 0c0-3 1.5-5.5 4.5-7z"
        fill="#ffffff"
        stroke={INK}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M5.4 14.2h13.2a6.6 6.6 0 0 1-13.2 0z" fill="currentColor" />
      <circle cx="10" cy="17" r="1" fill="#ffffff" opacity="0.8" />
      <circle cx="13.5" cy="15.6" r="0.7" fill="#ffffff" opacity="0.8" />
      <rect x="9.6" y="1.6" width="4.8" height="3.6" rx="1" fill="#d9b48a" stroke={INK} strokeWidth="1" />
    </svg>
  );
}

export function Fairy({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...a11y(title)}>
      <circle cx="12" cy="12" r="7.5" fill="currentColor" opacity="0.18" />
      <ellipse cx="7.2" cy="8.4" rx="4.4" ry="2.6" transform="rotate(-28 7.2 8.4)" fill="currentColor" opacity="0.65" />
      <ellipse cx="16.8" cy="8.4" rx="4.4" ry="2.6" transform="rotate(28 16.8 8.4)" fill="currentColor" opacity="0.65" />
      <ellipse cx="8" cy="15" rx="3" ry="1.8" transform="rotate(25 8 15)" fill="currentColor" opacity="0.45" />
      <ellipse cx="16" cy="15" rx="3" ry="1.8" transform="rotate(-25 16 15)" fill="currentColor" opacity="0.45" />
      <circle cx="12" cy="12" r="3.2" fill="#ffffff" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function Rupee({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...a11y(title)}>
      <polygon
        points="12,1 19,6.5 19,17.5 12,23 5,17.5 5,6.5"
        fill="currentColor"
        stroke={INK}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <polygon points="12,5.5 15,8.5 15,15.5 12,18.5 9,15.5 9,8.5" fill="#ffffff" opacity="0.45" />
    </svg>
  );
}

const HEART_ROWS = [".XX.XX.", "XXXXXXX", "XXXXXXX", ".XXXXX.", "..XXX..", "...X..."];

export function PixelHeart({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 7 6" fill="currentColor" shapeRendering="crispEdges" className={className} {...a11y(title)}>
      {HEART_ROWS.flatMap((row, y) =>
        row.split("").map((cell, x) =>
          cell === "X" ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null
        )
      )}
      <rect x="1" y="1" width="1" height="1" fill="#ffffff" opacity="0.6" />
    </svg>
  );
}

/* ---------- Pokémon-ish ---------- */

export function Pokeball({
  className,
  title,
  variant = "poke",
}: IconProps & { variant?: "poke" | "great" | "ultra" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} {...a11y(title)}>
      <circle cx="50" cy="50" r="45" fill="#ffffff" stroke={INK} strokeWidth="7" />
      <path d="M5 50a45 45 0 0 1 90 0z" fill="currentColor" stroke={INK} strokeWidth="7" strokeLinejoin="round" />

      {variant === "great" && (
        <g fill="#f6a6c1">
          <path d="M17 34Q23 19 36 14l-2 17z" />
          <path d="M83 34Q77 19 64 14l2 17z" />
        </g>
      )}

      {variant === "ultra" && (
        <g fill="#ffe58f">
          <rect x="30" y="15" width="9" height="31" rx="2" />
          <rect x="61" y="15" width="9" height="31" rx="2" />
        </g>
      )}

      <circle cx="50" cy="50" r="14" fill="#ffffff" stroke={INK} strokeWidth="7" />
      <circle cx="50" cy="50" r="5" fill={INK} opacity="0.15" />
    </svg>
  );
}

/* =========================
   Original pocket critters (not real Pokémon!)
   One round body + a little feature per species.
========================= */

export type CritterKind = "cat" | "sprout" | "bun" | "horn" | "star" | "wing";

export function Critter({
  kind,
  body,
  className,
  title,
}: IconProps & { kind: CritterKind; body: string }) {
  const outline = { stroke: INK, strokeWidth: 1.6, strokeLinejoin: "round" as const };

  return (
    <svg viewBox="0 0 32 32" className={className} {...a11y(title)}>
      {/* features behind the body */}
      {kind === "cat" && (
        <g fill={body} {...outline}>
          <polygon points="7,13 9,4 15,10" />
          <polygon points="25,13 23,4 17,10" />
        </g>
      )}
      {kind === "bun" && (
        <g fill={body} {...outline}>
          <ellipse cx="11" cy="7" rx="2.6" ry="6" transform="rotate(-12 11 7)" />
          <ellipse cx="21" cy="7" rx="2.6" ry="6" transform="rotate(12 21 7)" />
        </g>
      )}
      {kind === "horn" && (
        <g fill="#fff3c4" {...outline}>
          <path d="M9 12 7 5l6 5z" />
          <path d="M23 12l2-7-6 5z" />
        </g>
      )}
      {kind === "wing" && (
        <g fill="#ffffff" {...outline}>
          <path d="M6 18C1 15 1 9 4 8c2 3 4 5 5 8z" />
          <path d="M26 18c5-3 5-9 2-10-2 3-4 5-5 8z" />
        </g>
      )}
      {kind === "sprout" && (
        <g {...outline}>
          <path d="M16 10V4" fill="none" />
          <path d="M16 5c-1-3-5-3-6-1 2 2 4 2 6 1z" fill="#9ddc8f" />
          <path d="M16 6c1-3 5-3 6-1-2 2-4 2-6 1z" fill="#9ddc8f" />
        </g>
      )}
      {kind === "star" && (
        <g {...outline}>
          <path d="M16 10V5" fill="none" />
          <path
            d="M16 .8l1.2 2.4 2.6.4-1.9 1.8.5 2.6L16 6.8 13.6 8l.5-2.6-1.9-1.8 2.6-.4z"
            fill="#f2c94c"
            strokeWidth="1"
          />
        </g>
      )}

      {/* body */}
      <ellipse cx="16" cy="19.5" rx="11" ry="10" fill={body} {...outline} />
      <ellipse cx="12.5" cy="14.5" rx="3" ry="1.6" fill="#ffffff" opacity="0.45" />

      {/* face */}
      <ellipse cx="12" cy="19" rx="1.5" ry="2" fill={INK} />
      <ellipse cx="20" cy="19" rx="1.5" ry="2" fill={INK} />
      <circle cx="12.5" cy="18.2" r="0.6" fill="#ffffff" />
      <circle cx="20.5" cy="18.2" r="0.6" fill="#ffffff" />
      <ellipse cx="8.8" cy="22" rx="1.8" ry="1.1" fill="#f6a6c1" opacity="0.7" />
      <ellipse cx="23.2" cy="22" rx="1.8" ry="1.1" fill="#f6a6c1" opacity="0.7" />
      <path d="M14.5 22.5q1.5 1.4 3 0" fill="none" stroke={INK} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/* A humble wooden starter sword */
export function WoodenSword({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...a11y(title)}>
      <path
        d="M10.4 15V4.2L12 1.5l1.6 2.7V15z"
        fill="#e2bd8c"
        stroke={INK}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M11.4 5v8.5M12.6 7.5v5" stroke="#b98a55" strokeWidth="0.6" strokeLinecap="round" />
      <rect x="7" y="15" width="10" height="2.2" rx="1" fill="#a87443" stroke={INK} strokeWidth="1" />
      <rect x="11" y="17.2" width="2" height="4.3" rx="0.6" fill="#c99561" stroke={INK} strokeWidth="0.9" />
      <circle cx="12" cy="22.3" r="1.1" fill="#a87443" stroke={INK} strokeWidth="0.8" />
    </svg>
  );
}

/* A legendary sword resting in its stone pedestal.
   `lift` (0–1) raises the sword partway out of the stone. */
export function SwordPedestal({
  className,
  title,
  lift = 0,
}: IconProps & { lift?: number }) {
  return (
    <svg viewBox="0 0 60 72" className={className} {...a11y(title)}>
      {/* glow (brightens while the sword is pulled) */}
      <ellipse className="sword-glow" cx="30" cy="30" rx="18" ry="24" fill="#c4e4ff" opacity="0.55" />

      {/* sword (slides up on hover; blade continues hidden inside the stone) */}
      <g
        className="sword-pull"
        style={
          {
            "--lift": `${-lift * 9}px`,
            transform: "translateY(var(--lift))",
            transition: "transform 1.5s ease-out",
          } as React.CSSProperties
        }
      >
        <polygon
          points="27.5,19 32.5,19 32.5,62 27.5,62"
          fill="#eef6ff"
          stroke={INK}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <line x1="30" y1="21" x2="30" y2="60" stroke="#6aaeea" strokeWidth="1.2" />
        <path
          d="M19 16.5q5-2.2 11-.8 6-1.4 11 .8l-1.6 3q-4.7-1.2-9.4-.2-4.7-1-9.4.2z"
          fill="#9a7ae0"
          stroke={INK}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <rect x="28.4" y="7" width="3.2" height="9" rx="0.8" fill="#5e429c" stroke={INK} strokeWidth="1.4" />
        <circle cx="30" cy="5.5" r="2.6" fill="#f2c94c" stroke={INK} strokeWidth="1.4" />
      </g>

      {/* pedestal tiers */}
      <g stroke={INK} strokeWidth="1.8" strokeLinejoin="round">
        <rect x="16" y="43" width="28" height="8" rx="2" fill="#e6daff" />
        <rect x="9" y="51" width="42" height="9" rx="2" fill="#d2bffb" />
        <rect x="3" y="60" width="54" height="9" rx="2.5" fill="#b89cf2" />
      </g>

      {/* carved mark */}
      <g fill="#f2c94c">
        <polygon points="30,53 31.6,55.8 28.4,55.8" />
        <polygon points="28.4,55.8 30,58.6 26.8,58.6" />
        <polygon points="31.6,55.8 33.2,58.6 30,58.6" />
      </g>

      {/* grass tufts */}
      <g fill="none" stroke="#6fbf73" strokeWidth="1.6" strokeLinecap="round">
        <path d="M2 69l1.5-4M5 69l-.5-5M8 69l1.5-3.5" />
        <path d="M52 69l1.5-4M55 69l-.5-5M58 69l1-3.5" />
      </g>

      {/* sparkles */}
      <g fill="#f2c94c">
        <path d="M46 10c.4 2 1.2 2.8 3 3.2-1.8.4-2.6 1.2-3 3.2-.4-2-1.2-2.8-3-3.2 1.8-.4 2.6-1.2 3-3.2z" />
        <path d="M12 24c.3 1.5.9 2.1 2.3 2.4-1.4.3-2 .9-2.3 2.4-.3-1.5-.9-2.1-2.3-2.4 1.4-.3 2-.9 2.3-2.4z" />
      </g>
    </svg>
  );
}

/* A pointy yellow ear with a dark tip (wear two for maximum electricity) */
export function PikaEar({ className, title }: IconProps) {
  const ear = "M20 2C30 26 38 56 36 98H4C2 56 10 26 20 2z";

  return (
    <svg viewBox="0 0 40 100" className={className} {...a11y(title)}>
      <path d={ear} fill="#ffd95a" />
      <path d="M20 2c4 9 7 19 9.5 29Q20 36 10.5 31 14 18 20 2z" fill={INK} />
      <path d="M14 46c1-8 3-14 6-20 3 6 5 12 6 20" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      <path d={ear} fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

export function Thunderbolt({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...a11y(title)}>
      <polygon
        points="13.5,1.5 3.5,14 11.5,14 10,22.5 20.5,9.5 12.5,9.5"
        fill="currentColor"
        stroke={INK}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PokeEgg({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...a11y(title)}>
      <path
        d="M12 2c4.4 0 7.5 6.2 7.5 11.5 0 4.7-3.3 8.5-7.5 8.5s-7.5-3.8-7.5-8.5C4.5 8.2 7.6 2 12 2z"
        fill="#ffffff"
        stroke={INK}
        strokeWidth="1.3"
      />
      <g fill="currentColor">
        <circle cx="9" cy="10" r="2.1" />
        <circle cx="15.2" cy="13.8" r="2.5" />
        <circle cx="10" cy="17.6" r="1.5" />
        <circle cx="14.4" cy="7.4" r="1.2" />
      </g>
    </svg>
  );
}

export function RareCandy({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...a11y(title)}>
      <g fill="#ffffff" stroke={INK} strokeWidth="1.1" strokeLinejoin="round">
        <polygon points="7,12 1.8,7.8 2.8,12 1.8,16.2" />
        <polygon points="17,12 22.2,7.8 21.2,12 22.2,16.2" />
      </g>
      <circle cx="12" cy="12" r="5.6" fill="currentColor" stroke={INK} strokeWidth="1.3" />
      <path d="M8.2 10.2q3.8 2.2 7.6 0" fill="none" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M8.2 13.8q3.8 2.2 7.6 0" fill="none" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function Sparkle({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...a11y(title)}>
      <path d="M12 0c.9 6.6 4.4 10.4 12 12-7.6 1.6-11.1 5.4-12 12-.9-6.6-4.4-10.4-12-12C7.6 10.4 11.1 6.6 12 0z" />
    </svg>
  );
}

/* =========================
   Drifting background sprites
========================= */


const SPRITES: {
  Icon: (props: IconProps) => ReactElement;
  className: string;
  iconClass?: string;
  delay: string;
}[] = [
  /* left side */
  { Icon: Triforce, className: "left-[4%] top-[12%] h-7 w-8 text-butter-deep/40", delay: "0s" },
  { Icon: Sword, className: "left-[3%] top-[32%] h-10 w-10 text-sky opacity-50", iconClass: "-rotate-[25deg]", delay: "0.8s" },
  { Icon: PokeEgg, className: "left-[6%] top-[52%] h-8 w-8 text-sky opacity-50", iconClass: "-rotate-12", delay: "4.2s" },
  { Icon: Rupee, className: "left-[3.5%] top-[70%] h-7 w-7 text-sky opacity-50", delay: "2s" },
  { Icon: Potion, className: "left-[6%] top-[88%] h-7 w-7 text-lav-300 opacity-50", delay: "3.2s" },
  /* right side */
  { Icon: Pokeball, className: "right-[4%] top-[18%] h-8 w-8 text-lav-300 opacity-45", delay: "1.5s" },
  { Icon: Thunderbolt, className: "right-[6%] top-[37%] h-7 w-7 text-butter opacity-60", iconClass: "rotate-12", delay: "2.6s" },
  { Icon: Shield, className: "right-[3.5%] top-[56%] h-9 w-9 text-lav-300 opacity-50", iconClass: "rotate-6", delay: "1.1s" },
  { Icon: Fairy, className: "right-[6%] top-[74%] h-7 w-7 text-sky-deep opacity-45", delay: "3.6s" },
  { Icon: RareCandy, className: "right-[4%] top-[90%] h-7 w-7 text-lav-300 opacity-50", iconClass: "rotate-12", delay: "2.2s" },
];

export function FloatingSprites() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden md:block">
      {SPRITES.map(({ Icon, className, iconClass, delay }, i) => {
        // Give every sprite its own pace and wander so they don't move in sync.
        const dir = i % 2 === 0 ? 1 : -1;
        const style = {
          "--dur": `${10 + ((i * 7) % 6)}s`,
          "--dx": `${dir * (12 + ((i * 5) % 8))}px`,
          "--dy": `${14 + ((i * 3) % 9)}px`,
          "--rot": `${dir * (8 + ((i * 4) % 8))}deg`,
          animationDelay: `-${delay}`,
        } as CSSProperties;
        return (
          <div key={i} className={`sprite-drift absolute ${className}`} style={style}>
            <Icon className={`h-full w-full ${iconClass ?? ""}`} />
          </div>
        );
      })}
    </div>
  );
}
