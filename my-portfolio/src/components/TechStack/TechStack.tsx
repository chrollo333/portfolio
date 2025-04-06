const TechStack = () => {

    return (
        <div className="min-h-screen bg-zinc-900 text-black flex items-center justify-center w-[6O%]">
            <div className="w-[60%]">
                <h2 className="text-2xl text-white font-poppins mb-10">MY STACK</h2>

                <div className="flex items-start gap-8 mb-10">
                    <h1 className="text-7xl font-bold text-white font-bebas">FRONTEND</h1>
                    <div className="grid grid-cols-3 gap-30 mt-4 ml-50">
                        <img
                            src="/portfolio/assets/imgs/react.svg"
                            alt="React"
                            className="w-15 h-15"
                        />
                        <img
                            src="/portfolio/assets/imgs/figma.svg"
                            alt="Figma"
                            className="w-15 h-15"
                        />
                        <img
                            src="/portfolio/assets/imgs/html-5.svg"
                            alt="Html"
                            className="w-15 h-15"
                        />
                        <img
                            src="/portfolio/assets/imgs/javascript.svg"
                            alt="Javascript"
                            className="w-15 h-15"
                        />
                        <img
                            src="/portfolio/assets/imgs/framer-motion.svg"
                            alt="Framer"
                            className="w-15 h-15"
                        />
                        <img
                            src="/portfolio/assets/imgs/tailwind.svg"
                            alt="Tailwind"
                            className="w-15 h-15"
                        />
                    </div>
                </div>
                <div className="flex items-start gap-8 mb-10">
                    <h1 className="text-7xl font-bold text-white font-bebas">BACKEND</h1>
                    <div className="grid grid-cols-3 gap-4 mt-4 ml-50">
                    </div>
                </div>
            </div>
        </div>







    )

}

export default TechStack;