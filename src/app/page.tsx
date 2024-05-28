import { Spotlight } from "@/components/ui/aceternity/Spotlight";
import Hero from "@/components/home/Hero";
import JobPage from "./[job]/page";

export default function Home() {
  return (
    <main>
      <JobPage params={{ job: "engenheiro de software" }} />
    </main>
  );
}
