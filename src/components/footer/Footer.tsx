import HeroSocials from "../home/HeroSocials";
import { TextGenerateEffect } from "../ui/aceternity/TextGenerateEffect";

export default function Footer() {
  return (
    <div className="flex flex-1 flex-col items-center gap-5 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 p-5">
      <span className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
      &quot;Work willingly at whatever you do, as though you were
        working for the Lord rather than for people.&quot; (Cl 3:23)
      </span>
      <HeroSocials />
    </div>
  );
}
