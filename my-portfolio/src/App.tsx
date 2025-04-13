import IntroView from "./components/IntroView/IntroView";
import TechStack from "./components/TechStack/TechStack";
import './App.css'
import DarkAscensionCard from "./components/ProjectSection/DarkAscension_card";
import AesthaCard from "./components/ProjectSection/Aestha_card";
import HeaderAnimation from "./components/HeaderAnimation";

function App() {


  return (
    <div className="bg-zinc-900">
      <IntroView />
      <TechStack />
   
      <HeaderAnimation />
      <div className="w-full h-12 bg-[repeating-linear-gradient(135deg,#fff_0px,#fff_2px,transparent_2px,transparent_10px)] opacity-10"></div>
      <DarkAscensionCard />


      <AesthaCard />
    </div>
  )
}

export default App
