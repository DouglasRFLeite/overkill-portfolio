import { Award, Briefcase, GraduationCap, Linkedin, Newspaper, SquareTerminal } from "lucide-react";
import { BentoGrid, BentoGridItem } from "../ui/aceternity/BentoGrid";
import CodeTitle from "../ui/CodeTitle";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Educação e Certificações",
    description: "Minhas conquistas acadêmicas e certificações que atestam meu conhecimento.",
    header: <Skeleton />,
    icon: <GraduationCap />,
    className: "row-span-3"
  },
  {
    title: "Projetos em Destaque",
    description: "Uma seleção dos meus projetos mais notáveis, mostrando minhas habilidades em desenvolvimento de software.",
    header: <Skeleton />,
    icon: <SquareTerminal />,
  },
  {
    title: "Artigos",
    description: "Artigos e conteúdos escritos que produzi para estudo ou disseminação de informação.",
    header: <Skeleton />,
    icon: <Newspaper />,
    className: "md:row-span-2"
  },
  {
    title: "Histórico Profissional",
    description:
      "Um resumo das minhas experiências profissionais mais relevantes na área de tecnologia.",
    header: <Skeleton />,
    icon: <Briefcase />,
  },
  {
    title: "Habilidades Profissionais",
    description: "Algumas das minhas habilidades profissionais (hard e soft) que não se enquadram como linguagens de programação.",
    header: <Skeleton />,
    icon: <Award />,
    className: "md:col-span-2"
  },
];

export default function WorkBento() {
  return (
    <section>
      <CodeTitle>
        TRABALHOS
      </CodeTitle>
      <BentoGrid className="max-w-[80%] w-[1200px] mx-auto py-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={item?.className}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
