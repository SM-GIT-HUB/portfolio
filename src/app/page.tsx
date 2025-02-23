import FirstTimes from "../components/FirstTimes";
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero/>
        <Skills/>
        <FirstTimes/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}