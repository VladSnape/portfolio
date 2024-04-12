import React from 'react'
import  ToggleMode  from './mode-toggle'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Link from 'next/link';


type Props = {}

const Navbar = (props: Props) => {
  return (
<nav className='flex justify-between items-center p-5'>
    <h1 className='text-4xl underline font-bold decoration-primary underline-offset-8'><span className='text-4xl text-primary'>Vl</span>ad👨‍💻</h1>
    <div className=' flex gap-5 items-center'>
    <ul className='flex gap-5'>
        <li>    <Link href={'https://github.com/VladSnape'}><FaGithub className='text-3xl'/></Link></li>
        <li>    <Link href={'https://www.linkedin.com/in/vladimir-snape-b36756295/'}><FaLinkedin className='text-3xl'/></Link></li>

    </ul>
    <ToggleMode/>
    </div>
   
</nav>  )
}

export default Navbar