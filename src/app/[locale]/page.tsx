import About from "@/components/sections/home/about";
import Contact from "@/components/sections/home/contact";
import Expertises from "@/components/sections/home/expertises";
import Hero from "@/components/sections/home/hero";
import Projects from "@/components/sections/home/projects";

export default function Home() {
  return (
    <>
      <div className="mx-5 lg:mx-8">
        <Hero />
        <Expertises />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
