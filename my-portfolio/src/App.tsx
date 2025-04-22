import IntroView from "./components/IntroView/IntroView";
import TechStack from "./components/TechStack/TechStack";
import './App.css'
import DarkAscensionCard from "./components/ProjectSection/DarkAscension_card";
import AesthaCard from "./components/ProjectSection/Aestha_card";
import { User, Rocket, Wrench } from "lucide-react";

function App() {


  return (
    <div className="bg-zinc-900 scroll-smooth">
      {/* PC SIDEBAR */}
      <div className="hidden md:flex fixed top-1/2 -translate-y-1/2 left-4 flex-col gap-4 z-50 bg-zinc-800/60 p-4 rounded-xl border border-yellow-400/20 shadow-[0_0_12px_rgba(255,255,0,0.1)] font-bebas">
        <a href="#about" className="flex items-center gap-2 text-xl text-gray-400 hover:text-yellow-400 transition">
          <User className="w-6 h-6" />
          <span>ABOUT</span>
        </a>
        <a href="#projects" className="flex items-center gap-2 text-xl text-gray-400 hover:text-yellow-400 transition">
          <Rocket className="w-6 h-6" />
          <span>PROJECTS</span>
        </a>
        <a href="#stack" className="flex items-center gap-2 text-xl text-gray-400 hover:text-yellow-400 transition">
          <Wrench className="w-6 h-6" />
          <span>SKILLS</span>
        </a>
      </div>
      {/*PHONE SIDEBAR*/}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 bg-zinc-800/90 backdrop-blur-md rounded-full px-4 py-2 flex gap-6 shadow-md z-50 border-1 border-yellow-600">
        <a href="#about" className="text-yellow-400 text-sm">About</a>
        <a href="#projects" className="text-yellow-400 text-sm">Projects</a>
        <a href="#stack" className="text-yellow-400 text-sm">Skills</a>
      </div>
      <IntroView />
      <h2 className="flex whitespace-nowrap text-6xl font-bebas font-semibold text-white justify-center gap-3 mt-20" id="projects">/ MY <span className="text-yellow-400"> PROJECTS </span>/</h2>
      <div className="flex justify-center"><div className="w-[60%] h-px bg-gradient-to-r from-purple-900 via-purple-700 to-yellow-500 opacity-70 shadow-sm shadow-yellow-500/20 mt-5 "></div></div>
      <DarkAscensionCard />
      <AesthaCard />
      <TechStack />
    </div>
  )
}

export default App
