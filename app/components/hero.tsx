import Link from "next/link";
import { IoMdCodeWorking } from "react-icons/io";




type Props = {}

const Hero = (props: Props) => {
  return (
    <div className=' w-full mb-10 p-5'>
        <div className=" mt-10 flex flex-col gap-5 sm:flex-row-reverse justify-center w-full items-center">
        <IoMdCodeWorking className=" text-[200px] flex-1"/>
        <div className='flex flex-col gap-5 flex-1'>
        <h1 className='text-3xl text-center'>an aspiring <span className='font-bold text-primary text-4xl'>software developer</span></h1>
        <p className='font-semibold text-lg text-center'> With a fervent drive for innovation in full satck developement
             I offer expertise in Next.js
             , TypeScript, and Tailwind CSS. Ready to infuse fresh
              ideas and adaptability into your team, Im eager to
               leverage my skills in Supabase, Firebase, and Flutter
                to deliver impactful
             solutions and grow alongside your talented team.</p>
             <Link href={"mailto:snapevladimir@gmail.com"} className="hover:text-green-400 hover:scale-105 hover:rotate-1"><h1 className=" underline text-4xl font-bold decoration-primary text-center">Contact Me</h1></Link>

        </div>
       
        </div>

       
        
    </div>
    
  )
}

export default Hero