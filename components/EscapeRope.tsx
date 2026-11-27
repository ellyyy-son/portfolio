"use client";

import { useEffect, useState } from "react";
import { Pokeball } from "./Whimsy";

/* Floating "Escape Rope": a Poké Ball that takes you back to the top */

export default function EscapeRope() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-5 right-5 z-50 flex items-center gap-2 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="pointer-events-none rounded-xl bg-screen px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
        Use Escape Rope?
      </span>

      <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-lav-200 bg-white shadow-[0_4px_0_var(--color-lav-200)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-20deg]">
        <Pokeball className="h-10 w-10 text-lav-400" />
      </span>
    </button>
  );
}
