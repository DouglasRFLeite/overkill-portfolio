import { FileBadge, Github, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/shadcn/ui/tooltip";

interface HeroSocialsProps {
  size?: string;
}

export default function HeroSocials({ size = "2rem" }: HeroSocialsProps) {
  return (
    <div className="flex gap-5">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://github.com/DouglasRFLeite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={size} className="hover:size-[2.1rem]" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Github</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://www.linkedin.com/in/douglas-rocha-leite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={size} className="hover:size-[2.1rem]" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>LinkedIn</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FileBadge size={size} className="hover:size-[2.1rem]" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Curriculo (não implementado)</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
