import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import { FaGitAlt } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";

import { SiFlutter } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { SiFirebase } from "react-icons/si";



const skillList = [
    {name:"React", icon: FaReact },
    {name:"Next.js", icon: SiNextdotjs },
    {name:"TypeScript", icon: SiTypescript },
    {name:"Tailwind CSS", icon: SiTailwindcss },
    {name:"Supabase", icon: RiSupabaseFill },
    {name:"PostgreSQL", icon: BiLogoPostgresql },
    {name:"Git", icon: FaGitAlt },
    {name:"Node.js", icon: TbBrandNodejs },
    {name:"Flutter", icon: SiFlutter },
    {name:"MongoDB", icon: SiMongodb },
    {name:"Dart", icon: SiDart },
    {name:"Firebase", icon: SiFirebase },

    
]

type Props = {}

const Skills = (props: Props) => {
  return (
    <div className=' w-full flex flex-col p-10 items-center mt-10 gap-10'>

        <h1 className=' scale-105 text-4xl font-bold justify-center underline underline-offset-4 
        -rotate-1 decoration-green-400 hover:scale-110'>Skills</h1>
        <ul  className=" grid grid-cols-2 sm:grid-cols-3 gap-10">
            {skillList.map((skill, index) => {
                const Ticon = skill.icon
                return (<li key={index}>
                    <div className=" flex-col flex gap-3 items-center justify-center p-5 border rounded-xl shadow-md
                     shadow-primary hover:scale-105 transition-all ease-in duration-300 hover:shadow-2xl hover:shadow-green-400">
                    <Ticon className=" text-5xl"/>
                    <h1 className=" text-xl font-bold">{skill.name}</h1>
                    </div>
                    </li>)
            })}
        </ul>

        
    </div>
  )
}

export default Skills