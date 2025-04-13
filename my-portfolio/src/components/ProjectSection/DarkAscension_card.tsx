import "./DarkAscension_card.css";

const DarkAscensionCard = () => {
  return (
    <div className="background-style py-12 px-4">

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center md:text-left">

        {/* title  */}
        <div className="w-full mb-8">
          <h1 className="text-4xl text-white font-poppins mb-3 font-bold">
            <span className="text-purple-800">DARK</span> ASCENSION
          </h1>
          <h2 className="text-l text-white font-poppins italic ml-5">
            a shadow priest guide.
          </h2>
        </div>

        {/* image and text */}
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-12">
          {/* image */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src="/portfolio/assets/imgs/darkascension_scr.png"
              alt="Dark Ascension"
              className="w-full max-w-[600px] h-auto  shadow-[0_0_30px_rgba(128,0,255,0.3)] dark:shadow-[0_0_40px_rgba(178,102,255,0.4)] transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* description and tech stack box */}
          <div className="flex-1">
            <p className="text-xl text-white font-sans leading-relaxed">
              Being very passionate about World of Warcraft, I decided to make a guide for the Shadow Priest specialization
              because I couldn't find any specific websites with a guide. <br className="hidden md:block" />
              The website includes detailed guides on both hero talents, consumables, rotation, as well as a discussion page and a WoWHead news page that automatically updates hourly.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/chrollo333/DarkAscension"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2  text-white bg-zinc-900/60 border border-purple-800 shadow-[0_0_8px_rgba(128,0,255,0.2)] hover:shadow-[0_0_18px_rgba(178,102,255,0.4)] hover:bg-purple-900/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm font-poppins text-lg"
              >
                GitHub
              </a>
              <a
                href="https://yourwebsiteurl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2  text-white bg-zinc-900/60 border border-purple-800 shadow-[0_0_8px_rgba(128,0,255,0.2)] hover:shadow-[0_0_18px_rgba(178,102,255,0.4)] hover:bg-purple-900/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm font-poppins text-lg"
              >
                Visit Website
              </a>
            </div>
            <div className="inline-flex flex-wrap gap-4 p-6 bg-zinc-800 rounded-full mt-40 shadow-[0_0_15px_grey] justify-center md:justify-start relative">
              <img src="/portfolio/assets/imgs/react.svg" alt="React" className="w-10 h-10" />
              <img src="/portfolio/assets/imgs/javascript.svg" alt="JavaScript" className="w-10 h-10" />
              <img src="/portfolio/assets/imgs/html-5.svg" alt="HTML5" className="w-10 h-10" />
              <img src="/portfolio/assets/imgs/django.svg" alt="Django" className="w-10 h-10" />
              <img src="/portfolio/assets/imgs/postgre.svg" alt="PostgreSQL" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkAscensionCard;