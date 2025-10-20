const LoungeChatCard = () => {
  return (
    <div className="py-12 px-4 flex justify-center">
      <div className="relative rounded-3xl p-10 w-full max-w-6xl shadow-[0_0_40px_rgba(16,185,129,0.25)] backdrop-blur-md bg-emerald-950/60 flex flex-col gap-10 border border-emerald-700/40">
        <div className="md:absolute md:top-6 md:right-6 flex flex-wrap gap-4 md:flex-row flex-col mb-4 md:mb-0 self-end md:self-auto">
          <a
            href="https://github.com/chrollo333/chat_app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-900/60 shadow-[0_0_8px_rgba(16,185,129,0.3)] hover:shadow-[0_0_18px_rgba(52,211,153,0.6)] hover:bg-emerald-800/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm rounded-xl"
          >
            <img
              src="/portfolio/assets/imgs/github.svg"
              alt="GitHub"
              className="w-6 h-6"
            />
          </a>

          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-white bg-emerald-900/60 shadow-[0_0_8px_rgba(16,185,129,0.3)] hover:shadow-[0_0_18px_rgba(52,211,153,0.6)] hover:bg-emerald-800/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm font-poppins text-lg rounded-xl flex items-center gap-2"
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
          <h1 className="text-4xl text-emerald-300 font-poppins font-bold mb-1 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
            LoungeChat
          </h1>
          <h2 className="text-lg text-emerald-100 font-poppins italic ml-1">
            connect.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src="/portfolio/assets/imgs/loungechat.png"
              alt="Aestha"
              className="w-full max-w-[600px] h-auto rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.4)]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <p className="text-emerald-100 text-lg font-sans leading-relaxed">
              LoungeChat is my first attempt at a live-interaction web
              application. It is a chat application that allows users to pick
              their own username, chat color, and send messages in real-time
              with more to come. Built on TypeScript with a React frontend and
              Node.js backend, it utilizes WebSockets for seamless communication
              and MongoDB for data storage.
            </p>

            <div className="inline-flex flex-wrap gap-4 p-4 bg-zinc-800/60 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] w-fit self-start border border-emerald-700/40">
              <img
                src="/portfolio/assets/imgs/react.svg"
                alt="React"
                className="w-10 h-10"
              />
              <img
                src="/portfolio/assets/imgs/typescript.svg"
                alt="TypeScript"
                className="w-10 h-10"
              />
              <img
                src="/portfolio/assets/imgs/html-5.svg"
                alt="HTML5"
                className="w-10 h-10"
              />
              <img
                src="/portfolio/assets/imgs/nodejs.svg"
                alt="NodeJS"
                className="w-10 h-10"
              />
              <img
                src="/portfolio/assets/imgs/mongodb.svg"
                alt="MongoDB"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoungeChatCard;
