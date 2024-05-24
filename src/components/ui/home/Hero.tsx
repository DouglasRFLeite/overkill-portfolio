import { Spotlight } from "../aceternity/Spotlight";
import { Button } from "@/components/ui/shadcn/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <Spotlight />
      <h2 className="text-5xl font-semibold text-gray-700">
        OLÁ, MEU NOME É DOUGLAS
      </h2>
      <Button>Contato</Button>
    </section>
  );
}
