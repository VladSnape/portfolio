import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className=" mx-auto max-w-screen-xl flex flex-col gap-10">
      <Navbar />
     < Hero />
     <Skills/>
     <Projects />
    </main>
  );
}
