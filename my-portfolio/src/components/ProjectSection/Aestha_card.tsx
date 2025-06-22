const AesthaCard = () => {
  return (
    <div className="py-12 px-4 flex justify-center">
      <div className="relative rounded-3xl p-10 w-full max-w-6xl shadow-[0_0_40px_rgba(128,128,128,0.2)] backdrop-blur-md bg-zinc-950/60 flex flex-col gap-10">

        <div className="md:absolute md:top-6 md:right-6 flex flex-wrap gap-4 md:flex-row flex-col mb-4 md:mb-0 self-end md:self-auto">
          <a
            href="https://github.com/chrollo333/aestha"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-zinc-800/60 shadow-[0_0_8px_rgba(128,128,128,0.2)] hover:shadow-[0_0_18px_rgba(200,200,200,0.4)] hover:bg-gray-700/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm rounded-xl"
          >
            <img
              src="/portfolio/assets/imgs/github.svg"
              alt="GitHub"
              className="w-6 h-6"
            />
          </a>

          <a
            href="google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-white bg-zinc-800/60 shadow-[0_0_8px_rgba(128,128,128,0.2)] hover:shadow-[0_0_18px_rgba(200,200,200,0.4)] hover:bg-gray-700/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm font-poppins text-lg rounded-xl flex items-center gap-2"
          >
            <img
              src="/portfolio/assets/imgs/arrow.svg"
              alt="Arrow"
              className="w-5 h-5"
            />
            Visit Website (WIP)
          </a>
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-4xl text-white font-poppins font-bold mb-1">
            <span className="text-white">AESTHA</span>
          </h1>
          <h2 className="text-lg text-white font-poppins italic ml-1">
            for your fashion.
          </h2>
        </div>


        <div className="flex flex-col md:flex-row gap-10 items-start">

          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src="/portfolio/assets/imgs/aestha.png"
              alt="Aestha"
              className="w-full max-w-[600px] h-auto rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            />
          </div>


          <div className="flex-1 flex flex-col gap-6">
            <p className="text-white text-lg font-sans leading-relaxed">
              Aestha is a fashion magazine/social media combination. It uses sleek aesthetic design to showcase the user a randomly generated selection of fashion-based images and the latest news in fashion pulling from a news API.
            </p>


            <div className="inline-flex flex-wrap gap-4 p-4 bg-zinc-800 rounded-full shadow-[0_0_15px_grey] w-fit self-start">
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