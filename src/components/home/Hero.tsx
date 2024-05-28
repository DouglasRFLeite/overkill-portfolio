import { Spotlight } from "../ui/aceternity/Spotlight";
import HeroSocials from "./HeroSocials";

export default function Hero({ title }: { title: string }) {

  function decodeParameter(title : string) {
    return decodeURIComponent(title.replace(/\+/g, ' '));
 }


  return (
    <section className="flex flex-col items-center justify-center h-screen text-left max-w-[80%] w-[1000px] mx-auto">
      <Spotlight />
      <div className="flex justify-between items-start text-left w-[100%]">
        <h2 className="text-3xl font-semibold text-gray-500 mb-4">
          OLÁ 🖖 MEU NOME É DOUGLAS, EU SOU
        </h2>
        <HeroSocials />
      </div>
      <h1 className="text-[8rem] leading-none font-semibold text-gray-500 w-[100%] mb-8">
        {decodeParameter(title).toUpperCase()}
      </h1>
      
    </section>
  );
}
