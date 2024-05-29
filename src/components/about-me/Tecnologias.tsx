"use client";

import {
  CircleChevronDown,
  CircleChevronUp,
  Code,
  CodeXml,
} from "lucide-react";
import { HoverEffect } from "../ui/aceternity/CardHoverEffect";
import { useState } from "react";
import { Button } from "../ui/shadcn/button";
import CodeTitle from "../ui/CodeTitle";

const tecnologias = [
  {
    title: "Python",
    description:
      "Para análise de dados, aprendizado de máquina, scripts pequenos, servidores simples e joguinhos.",
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png?20220821155029",
  },
  {
    title: "Java",
    description:
      "Para softwares maiores, mais complexos, mais robustos e com mais tempo para desenvolver. Com Spring é sempre melhor.",
    link: "/imagens/stack-icons/58480979cef1014c0b5e4901.png",
  },
  {
    title: "React",
    description:
      "Para desenvolvimento de plataformas Web-App e PWAs. NextJS é fenomenal, mas Vite dá conta.",
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
  },
  {
    title: "Docker",
    description:
      "Para containerização de aplicações, facilitando o desenvolvimento, testes e implantação consistentes.",
    link: "https://i0.wp.com/letslearnabout.net/wp-content/uploads/2024/01/queesdocker1-768x432-1.webp?w=768&ssl=1",
  },
  {
    title: "SQL",
    description:
      "Linguagem de consulta estruturada para gerenciamento e manipulação de bancos de dados relacionais.",
    link: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
  },
  {
    title: "HTML",
    description:
      "A linguagem de marcação fundamental para estruturar páginas web e aplicativos da web.",
    link: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    title: "CSS",
    description:
      "Para estilizar páginas web, incluindo layout, cores, fontes e muito mais. Fundamental para design responsivo.",
    link: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    title: "JavaScript",
    description:
      "A linguagem de programação essencial para interatividade e dinâmica em páginas web. Melhor amigo do React.",
    link: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    title: "SQL Server",
    description:
      "Sistema de gerenciamento de banco de dados relacional da Microsoft. Ideal para aplicações empresariais.",
    link: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
  },
  {
    title: "Tailwind",
    description:
      "Framework CSS utilitário para estilização rápida e eficiente de interfaces web.",
    link: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    title: "PostgreSQL",
    description:
      "Sistema de banco de dados relacional avançado com suporte a JSON, índices GIN/GiST e consultas complexas.",
    link: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
  {
    title: "Firebase",
    description:
      "Plataforma de desenvolvimento de aplicativos da Google para criação de aplicativos web e móveis.",
    link: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
  },
  {
    title: "GCP",
    description:
      "Plataforma de computação em nuvem da Google, oferecendo uma gama de serviços de computação e armazenamento.",
    link: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
  },
  {
    title: "Pandas",
    description:
      "Biblioteca de análise de dados e manipulação de dados para Python. Excelente para trabalhar com DataFrames.",
    link: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
  },
  {
    title: "Matplotlib",
    description:
      "Biblioteca de plotagem em Python, utilizada para criar gráficos estáticos, animados e interativos.",
    link: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
  },
  {
    title: "Seaborn",
    description:
      "Biblioteca de visualização de dados em Python baseada no Matplotlib. Útil para gráficos estatísticos.",
    link: "https://seaborn.pydata.org/_images/logo-tall-lightbg.svg",
  },
  {
    title: "Scikit Learn",
    description:
      "Biblioteca de aprendizado de máquina para Python, com ferramentas para modelagem estatística e análise de dados.",
    link: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  {
    title: "Spring",
    description:
      "Framework para desenvolvimento de aplicações Java. Facilita a criação de sistemas robustos e escaláveis.",
    link: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
  },
  {
    title: "Bootstrap",
    description:
      "Framework CSS popular para desenvolvimento de sites responsivos e móveis.",
    link: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
  },
  {
    title: "MongoDB",
    description:
      "Banco de dados NoSQL orientado a documentos, popular para armazenamento de dados flexíveis. Conhecimento básico.",
    link: "https://banner2.cleanpng.com/20180702/bgt/kisspng-mongodb-database-nosql-postgresql-mongo-5b39f9e3445fa6.5652746415305261792801.jpg",
  },
  {
    title: "C#",
    description:
      "Ideal para desenvolvimento de aplicações Windows, jogos com Unity, e aplicações empresariais. Conhecimento básico.",
    link: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
  },
  {
    title: "Angular",
    description:
      "Para construção de aplicações web robustas e complexas, com um padrão MVVM. Conhecimento básico.",
    link: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
  },
];

export default function Tecnologias() {
  const [techList, setTechList] = useState(tecnologias.slice(0, 3));
  const [allVisible, setAllVisible] = useState(false);

  const handleClick = () => {
    if (allVisible) {
      setAllVisible(false);
      setTechList(tecnologias.slice(0, 3));
    } else {
      setAllVisible(true);
      setTechList(tecnologias);
    }
  };

  return (
    <section className="max-w-[80%] w-[1200px] m-auto mb-[10rem]">
      <CodeTitle>
        TECNOLOGIAS
      </CodeTitle>
      <HoverEffect items={techList}/>
      <div className="flex justify-center">
        <Button onClick={handleClick} variant={"ghost"} size={"icon"}>
          {allVisible ? (
            <CircleChevronUp color="rgb(107 114 128 / 500)" />
          ) : (
            <CircleChevronDown color="rgb(107 114 128 / 500)" />
          )}
        </Button>
      </div>
    </section>
  );
}
