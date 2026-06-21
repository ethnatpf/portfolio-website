import About from "@/components/layout/home/about";
import Expertises from "@/components/layout/home/expertises";
import Hero from "@/components/layout/home/hero";
import Projects from "@/components/layout/home/projects";

export default function Home() {
  return (
    <>
      <div className="mx-5 lg:mx-8">
        <Hero />
        <Expertises />
        <About />
        <Projects />
      </div>
    </>
  );
}
