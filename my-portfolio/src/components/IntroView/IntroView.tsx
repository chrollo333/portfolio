import React from 'react';


const IntroView = () => {

    return (

        <div className="min-h-screen bg-zinc-900 text-black flex items-center justify-center">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-2">

                <div className="text-center md:text-left">
                    <h1 className="text-5xl font-bold font-bebas"><span className="text-sky-300">WEB</span><br /> <span className="ml-4 text-white">DEVELOPER</span>
                    </h1>

                    <p className="mt-7 text-gray-400 text-xl font-poppins">Hi, I'm <span className="text-white">chrollo333 | Lukáš Heinz.</span> <br />
                        A frontend developer from Czech Republic with a focus on user-friendly
                        experience, aesthetics, scalability, and performance for each of my
                        web solutions with 6+ months of experience.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-sky-300 text-black font-semibold font-bebas text-2xl  hover:bg-sky-600 hover:text-white">
                        SOCIALS
                    </button>
                </div>


                <div className="w-full flex justify-center">
                    <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-illustration-download-in-svg-png-gif-file-formats--internet-software-coding-business-and-ecommerce-pack-illustrations-2477356.png"
                        alt="Web Dev"
                        className="w-800 h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default IntroView;