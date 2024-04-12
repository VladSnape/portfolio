import Image from "next/image"
import Link from "next/link"

import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import { SiFlutter } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

const List = [{
  name:"mongooblog",
  teckStack: [FaReact ,SiNextdotjs , SiTailwindcss
     , SiTypescript , SiMongodb],
  link:"https://mongoo-blog.vercel.app/",
  height:350,
  width:500,
  image:"/images/mongoo.png"
} ,{
  name:"jikan",
  teckStack: [FaReact ,SiNextdotjs , SiTailwindcss , SiTypescript
  ],
  link:"https://jikan-omega.vercel.app/",
  height:350,
  width:500,
  image:"/images/jikan.png"
} ,{
  name:"airbnb",
  teckStack: [FaReact ,SiNextdotjs , SiTailwindcss , RiSupabaseFill , SiTypescript],
  link:"https://github.com/VladSnape/airbnbclonewithnext",
  height:350,
  width:500,
  image:"/images/airbnb.png"
} ,{
  name:"uiux",
  teckStack: [FaReact ,SiNextdotjs , SiTailwindcss  , SiTypescript],
  link:"https://github.com/VladSnape/sassuiux",
  height:350,
  width:500,
  image:"/images/uiux.png"
} ,{
    name:"UIux",
    teckStack: [SiDart ,SiFlutter , SiFirebase ],
    link:"https://github.com/VladSnape/fcebookca",
    height:500,
    width:200,
    image:"/images/facebook.png"
} , 
{
  name:"cubbittheme",
  teckStack: [SiDart ,SiFlutter , SiFirebase ],
  link:"https://github.com/VladSnape/cubittheme",
  height:500,
  width:200,
  image:"/images/cubittheme.png"
} 
]


type Props = {}

const Projects = (props: Props) => {
    return (
        <div className=' w-full flex flex-col p-10 items-center mt-10 gap-10'>
            <h1 className=' scale-105 text-4xl font-bold justify-center underline underline-offset-4 
            -rotate-1 decoration-green-400 hover:scale-110'>Projects</h1>
            <ul  className=" grid grid-cols-1 sm:grid-cols-2 gap-10">
            
{List.map((item,index) => {
  return (

    <li
      className="relative flex-col flex gap-3 items-center justify-center"
      key={index}
    >
      <div className="relative hover:scale-105 transition-all duration-300 ease-in shadow-primary shadow-lg rounded-lg  hover:shadow-2xl hover:shadow-green-400">
      <Link href={item.link} className=" shadow-xl">
          <div className="overflow-hidden rounded-none shadow-md hover:scale-105 transition-all ease-in duration-300 hover:shadow-2xl hover:shadow-green-400 ">
            <Image
              src={item.image}
              alt={item.name}
              height={item.height}
              width={item.width}
              className="rounded-xl bg-cover"
            />
          </div>
          <div className=" bg-black inset-0 absolute hover:opacity-100 opacity-20 transition-all rounded-xl"></div>
  
        <div className="absolute inset-0 flex items-end justify-start opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className="text-white p-4 rounded-lg">
            <p className="font-bold">Tech Stack:</p>
            <ul className="flex gap-3">
              {item.teckStack.map((Icon, index) => (
                <li key={index} className="text-white">
                  <Icon className="text-xl" />
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        </Link>

      </div>
    </li>

  );
  
})}
            </ul>
    
            
        </div>
      )
}

export default Projects