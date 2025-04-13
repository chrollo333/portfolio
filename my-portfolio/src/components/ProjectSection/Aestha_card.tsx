const AesthaCard = () => {
  return (
    <div className="border-y-1 border-gray-600 py-12 px-4 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center md:text-left">
        {/* title  */}
        <div className="w-full mb-8">
          <h1 className="text-4xl text-white font-poppins mb-3 font-bold">
            <span className="text-white">AESTHA</span>
          </h1>
          <h2 className="text-l text-white font-poppins italic ml-5">
            for your fashion.
          </h2>
        </div>
        {/* image and text */}
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-12">
          {/* image */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src="/portfolio/assets/imgs/aestha.png"
              alt="Dark Ascension"
              className="w-full max-w-[600px] h-auto border-gray-400 border-1 transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* description and tech stack box */}
          <div className="flex-1">
            <p className="text-xl text-white font-sans leading-relaxed">
              Aestha comes from another one of my passions being fashion. It uses sleek aesthetic design to showcase the user a randomly generated selection of fashion based images.
              <br></br>Another big part of fashion exploration is news from magazines themselves which are also included on this website.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/chrollo333/aestha"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2  text-white bg-zinc-900/60 border border-gray-600 shadow-[0_0_8px_rgba(128,0,255,0.2)] hover:shadow-[0_0_18px_rgba(178,102,255,0.4)] hover:bg-gray-600/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm font-poppins text-lg"
              >
                GitHub
              </a>
              <a
                href="https://yourwebsiteurl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2  text-white bg-zinc-900/60 border border-gray-600 shadow-[0_0_8px_rgba(128,0,255,0.2)] hover:shadow-[0_0_18px_rgba(178,102,255,0.4)] hover:bg-gray-600/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm font-poppins text-lg"
              >
                Visit Website
              </a>
            </div>
            <div className="inline-flex flex-wrap gap-4 p-6 bg-zinc-800 rounded-full mt-30 shadow-[0_0_15px_grey] justify-center md:justify-start">
              <img src="/portfolio/assets/imgs/react.svg" alt="React" className="w-10 h-10" />
              <img src="/portfolio/assets/imgs/javascript.svg" alt="JavaScript" className="w-10 h-10" />
              <img src="/portfolio/assets/imgs/html-5.svg" alt="HTML5" className="w-10 h-10" />
              <img src="/portfolio/assets/imgs/flask.svg" alt="Flask" className="w-10 h-10" />
              <img src="/portfolio/assets/imgs/postgre.svg" alt="PostgreSQL" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AesthaCard;