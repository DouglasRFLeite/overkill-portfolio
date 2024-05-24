import { FileBadge, Github, Linkedin } from "lucide-react";

export default function HeroSocials({size = "2rem"} : { size?: string}){
    return (
        <div className="flex gap-5">
            <Github size={size}/>
            <Linkedin size={size}/>
            <FileBadge size={size}/>
        </div>
    )
}