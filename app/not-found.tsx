import Link from "next/link";
import "./globals.css";
import { Pokeball, Sparkle } from "@/components/Whimsy";

export default function NotFound() {
  return (
    <main className="dot-grid flex min-h-screen flex-col items-center justify-center gap-6 bg-lav-50 px-4 text-center text-ink">
      <div className="relative">
        <Pokeball className="h-24 w-24 animate-float text-lav-400" />
        <Sparkle className="absolute -right-4 -top-2 h-6 w-6 text-butter-deep" />
      </div>

      <p className="font-pixel text-[10px] tracking-widest text-lav-500">
        ERROR 404
      </p>

      <h1 className="font-display text-4xl font-bold lg:text-5xl">
        A wild 404 appeared!
      </h1>

      <div className="textbox max-w-md px-6 py-4 text-sm leading-relaxed">
        The page you&apos;re looking for fled! Maybe it&apos;s hiding in
        the tall grass.
      </div>

      <Link
        href="/"
        className="rounded-full border-2 border-ink bg-butter px-6 py-3 text-sm font-bold shadow-[0_4px_0_var(--color-ink)] transition-all hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_var(--color-ink)]"
      >
        ▸ Got away safely! Back home
      </Link>
    </main>
  );
}
