import Socials from "@/components/Socials";
import {
  PixelHeart,
  Pokeball,
  Shield,
  Sword,
  Triforce,
} from "@/components/Whimsy";

export default function Footer() {
  return (
    <footer className="mb-10 mt-24 flex flex-col items-center justify-between gap-6 border-t-2 border-dashed border-lav-200 pt-10 lg:flex-row">
      <div className="flex flex-col items-center gap-2 lg:items-start">
        <p className="flex items-center gap-2 font-display text-xl font-bold text-ink">
          <Triforce className="h-4 w-5 text-butter-deep" />
          Elly Olegario
        </p>

        <p className="flex items-center gap-2 text-xs text-ink-soft">
          Thanks for playing!
          <span className="flex gap-1">
            <PixelHeart className="h-3 w-3.5 text-lav-400" />
            <PixelHeart className="h-3 w-3.5 text-lav-400" />
            <PixelHeart className="h-3 w-3.5 text-lav-400" />
          </span>
        </p>

        <p className="flex items-center gap-2 font-pixel text-[8px] tracking-wider text-ink-soft/80">
          <Sword className="h-4 w-4 -rotate-45 text-sky" />
          <Shield className="h-4 w-4 text-lav-300" />
          <Pokeball className="h-3.5 w-3.5 text-lav-400" />
          PROGRESS SAVED TO THE PC
        </p>
      </div>

      <Socials />
    </footer>
  );
}
