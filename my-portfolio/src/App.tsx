import IntroView from "./components/IntroView/IntroView";
import TechStack from "./components/TechStack/TechStack";
import './App.css'
import DarkAscensionCard from "./components/ProjectSection/DarkAscension_card";
import AesthaCard from "./components/ProjectSection/Aestha_card";


function App() {


  return (
    <div className="bg-zinc-900">
      <IntroView />
      <h2 className="flex whitespace-nowrap text-6xl font-bebas font-semibold text-white flex justify-center gap-3 mt-20">/ MY <span className="text-yellow-400"> PROJECTS </span>/</h2>
      <div className="flex justify-center"><div className="w-[60%] h-px bg-gradient-to-r from-purple-900 via-purple-700 to-yellow-500 opacity-70 shadow-sm shadow-yellow-500/20 mt-5 "></div></div>
      <DarkAscensionCard />
      <AesthaCard />
      <TechStack />
    </div>
  )
}

export default App
