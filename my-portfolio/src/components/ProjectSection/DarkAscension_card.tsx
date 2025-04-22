import "./DarkAscension_card.css";

const DarkAscensionCard = () => {
  return (
    <div className="py-12 px-4 flex justify-center">
      <div className="relative rounded-3xl p-10 w-full max-w-6xl shadow-[0_0_40px_rgba(128,0,255,0.2)] backdrop-blur-md background-style flex flex-col gap-10">

        {/* Buttons */}
        <div className="md:absolute md:top-6 md:right-6 flex flex-wrap gap-4 md:flex-row flex-col mb-4 md:mb-0 self-end md:self-auto">
          <a
            href="https://github.com/chrollo333/DarkAscension"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-900/60 shadow-[0_0_8px_rgba(128,0,255,0.2)] hover:shadow-[0_0_18px_rgba(178,102,255,0.4)] hover:bg-purple-900/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm rounded-xl"
          >
            <img
              src="/portfolio/assets/imgs/github.svg"
              alt="GitHub"
              className="w-6 h-6"
            />
          </a>

          <a
            href="https://yourwebsiteurl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-white bg-purple-900/60 shadow-[0_0_8px_rgba(128,0,255,0.2)] hover:shadow-[0_0_18px_rgba(178,102,255,0.4)] hover:bg-purple-900/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm font-poppins text-lg rounded-xl flex items-center gap-2"
          >
            <img
              src="/portfolio/assets/imgs/arrow.svg"
              alt="Arrow"
              className="w-5 h-5"
            />
            Visit Website
          </a>
        </div>

        {/* Title */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl text-white font-poppins font-bold mb-1">
            <span className="text-purple-800">DARK</span> ASCENSION
          </h1>
          <h2 className="text-lg text-white font-poppins italic ml-1">
            a shadow priest guide.
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Image */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src="/portfolio/assets/imgs/darkascension_scr.png"
              alt="Dark Ascension"
              className="w-full max-w-[600px] h-auto rounded-xl shadow-[0_0_30px_rgba(128,0,255,0.3)]"
            />
          </div>

          {/* Text & Stack */}
          <div className="flex-1 flex flex-col gap-6">
            <p className="text-white text-lg font-sans leading-relaxed">
              Being very passionate about World of Warcraft, I decided to make a guide for the Shadow Priest specialization
              because I couldn't find any specific websites with a guide. The website includes detailed guides on both hero
              talents, consumables, rotation, as well as a discussion page and a WoWHead news page that automatically updates
              hourly.
            </p>

            {/* Tech stack */}
            <div className="inline-flex flex-wrap gap-4 p-4 bg-zinc-800 rounded-full shadow-[0_0_15px_grey] w-fit self-start">
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
