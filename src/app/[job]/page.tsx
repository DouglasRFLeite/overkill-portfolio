import AboutMe from "@/components/about-me/Tecnologias";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/home/Hero";
import WorkBento from "@/components/work-bento/WorkBento";

export default function JobPage({ params }: { params: {job : string} }) {
  return (
    <main>
      <Hero title = {params.job} />
      <AboutMe />
      <WorkBento />
      <Footer />
    </main>
  );

}
