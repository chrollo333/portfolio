import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const IntroView = () => {
    const [showModal, setShowModal] = useState(false)


    return (

        <div className="min-h-screen bg-zinc-900 text-black flex items-center justify-center">
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center px-4"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-zinc-800 text-white shadow-2xl p-6 md:p-8 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-w-md z-50 relative rounded-lg"
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition"
                            >
                                <X size={24} />
                            </button>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400 font-bebas">
                                CONNECT WITH ME
                            </h2>
                            <div className="space-y-6">
                                <a
                                    href="https://github.com/chrollo333"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 hover:bg-zinc-700 px-4 py-3 rounded-lg transition"
                                >
                                    <img
                                        className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 hover:scale-110"
                                        src="/portfolio/assets/imgs/github.svg"
                                        alt="GitHub"
                                    />
                                    <span className="text-gray-300 text-base md:text-lg font-poppins">
                                        github.com/chrollo333
                                    </span>
                                </a>

                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 hover:bg-zinc-700 px-4 py-3 rounded-lg transition"
                                >
                                    <img
                                        className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 hover:scale-110"
                                        src="/portfolio/assets/imgs/gmail.svg"
                                        alt="Gmail"
                                    />
                                    <span className="text-gray-300 text-base md:text-lg font-poppins">
                                        lukasheinz777@gmail.com
                                    </span>
                                </a>

                                <a
                                    href="https://www.instagram.com/lukas.heinz1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 hover:bg-zinc-700 px-4 py-3 rounded-lg transition"
                                >
                                    <img
                                        className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 hover:scale-110"
                                        src="/portfolio/assets/imgs/instagram.svg"
                                        alt="Instagram"
                                    />
                                    <span className="text-gray-300 text-base md:text-lg font-poppins">
                                        @lukas.heinz1
                                    </span>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-2">

                <div className="text-center md:text-left">
                    <h1 className="text-5xl font-bold font-bebas"><span className="text-yellow-400">WEB</span><br /> <span className="ml-4 text-white">DEVELOPER</span>
                    </h1>

                    <p className="mt-7 text-gray-400 text-xl font-poppins">Hi, I'm <span className="text-white">chrollo333 | Lukáš Heinz.</span> <br />
                    Based in the Czech Republic, with 6+ months of experience in learning Web Development, fueled by my competitive nature and aesthetic sense, I strive to develop responsive, performant and aesthetic web solutions.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold font-bebas text-2xl hover:scale-110 transition-colors-transform duration-500 hover:bg-yellow-600 hover:text-white"
                        onClick={() => setShowModal(true)}
                    >
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