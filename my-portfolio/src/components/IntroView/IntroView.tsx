const IntroView = () => {



    return (

        <div className="min-h-screen bg-zinc-900 text-black flex items-center justify-center"
        id="about">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-30 px-2">

                <div className="text-center md:text-left">
                    <h1 className="text-5xl font-bold font-bebas"><span className="text-yellow-400">WEB</span><br /> <span className="ml-4 text-white">DEVELOPER</span>
                    </h1>

                    <p className="mt-7 text-gray-400 text-xl font-poppins">Hi, I'm <span className="text-white">chrollo333 | Lukáš Heinz.</span> <br />
                        Based in the Czech Republic, I’m a web developer with over 8 months experience building responsive, user-friendly web applications.
                        I try to keep a good balance of aesthetics and good UI/UX design in my projects but while trying not to stay too minimalistic.
                    </p>
                    <div className="space-x-5 mt-13 flex justify-left">
                        <a
                            href="https://github.com/chrollo333"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 hover:scale-110"
                                src="/portfolio/assets/imgs/github.svg"
                                alt="GitHub" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/luk%C3%A1%C5%A1-heinz-9b9234303/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 hover:scale-110"
                                src="/portfolio/assets/imgs/linkedin.svg"
                                alt="Linkedin" />
                        </a>
                        <a
                            href="https://www.instagram.com/lukas.heinz1/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 hover:scale-110"
                                src="/portfolio/assets/imgs/instagram.svg"
                                alt="Instagram" />
                        </a>
                        <a
                            href="/portfolio/resume.pdf"
                            download
                            className="inline-flex items-center px-6 py-3 text-yellow-400 bg-zinc-800/70 hover:bg-yellow-400 hover:text-zinc-900 hover:scale-105 transition-all duration-300 rounded-xl shadow-md font-poppins text-lg gap-2 backdrop-blur-sm border-1"
                        >
                            <img
                                src="/portfolio/assets/imgs/download.svg"
                                alt="Download"
                                className="w-5 h-5 invert brightness-150"
                            />
                            DOWNLOAD RESUME
                        </a>
                    </div>
                    <div className="space-x-5 flex justify-left mt-5">
                        <img
                            className="w-7 h-7 invert brightness-150"
                            src="/portfolio/assets/imgs/phone.svg"
                            alt="phone"
                        />
                        <p className=" text-white text-xl font-poppins">+420722931923</p></div>

                </div>


                <div className="w-full flex justify-center">
                    <img
                        src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png"
                        alt="Web Dev"
                        className="w-800 h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default IntroView;