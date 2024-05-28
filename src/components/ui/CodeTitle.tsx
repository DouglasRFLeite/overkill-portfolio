import { Code, CodeXml } from "lucide-react";
import { defaultConfig } from "next/dist/server/config-shared";
import React from "react";

interface CodeTitleProps {
  className?: string;
  children: React.ReactNode;
}

export default function CodeTitle({ children }: CodeTitleProps) {
  return (
    <div className="flex w-fit m-auto gap-10 items-baselin">
      <Code size={"2rem"} color="rgb(107 114 128 / 500)" />
      <h2 className="text-4xl text-center font-semibold text-gray-400 mb-4">
        {children}
      </h2>
      <CodeXml size={"2rem"} color="rgb(107 114 128 / 500)" />
    </div>
  );
}
