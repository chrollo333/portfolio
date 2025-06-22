import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TechStack = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const stackSection = (
        title: string,
        items: { name: string; image: string }[]
    ) => (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-start gap-8"
        >
            <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins">
                {title}
            </h1>
            <div className="flex flex-wrap gap-6">
                {items.map(({ name, image }) => (
                    <div
                        key={name}
                        className="flex items-center gap-3 px-4 py-2 bg-zinc-800 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.05)] text-white"
                    >
                        <img src={image} alt={name} className="w-8 h-8" />
                        <span className="text-lg font-poppins">{name}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-zinc-900 text-black flex items-center justify-center px-4"
        id="stack">
            <div className="w-full md:w-[80%] lg:w-[60%] space-y-24">
                <h2 className="flex whitespace-nowrap text-6xl font-bebas font-semibold text-white justify-center gap-3 mb-5">
                    / MY <span className="text-yellow-400"> STACK </span>/
                </h2>
                <div className="flex justify-center"><div className="w-full h-px bg-gradient-to-r from-purple-900 via-purple-700 to-yellow-500 opacity-70 shadow-sm shadow-yellow-500/20 mt-5"></div></div>
                {stackSection("FRONTEND", [
                    { name: "React", image: "/portfolio/assets/imgs/react.svg" },
                    { name: "Figma", image: "/portfolio/assets/imgs/figma.svg" },
                    { name: "JavaScript", image: "/portfolio/assets/imgs/javascript.svg" },
                    { name: "HTML 5", image: "/portfolio/assets/imgs/html-5.svg" },
                    { name: "Tailwind CSS", image: "/portfolio/assets/imgs/tailwind.svg" },
                    { name: "Framer Motion", image: "/portfolio/assets/imgs/framer-motion.svg" },
                ])}

                {stackSection("BACKEND", [
                    { name: "Django", image: "/portfolio/assets/imgs/django.svg" },
                    { name: "Flask", image: "/portfolio/assets/imgs/flask.svg" },
                    { name: "NodeJS", image: "/portfolio/assets/imgs/nodejs.svg" },
                    { name: "SocketIO", image: "/portfolio/assets/imgs/socket.svg" },
                ])}

                {stackSection("DATABASE", [
                    { name: "PostgreSQL", image: "/portfolio/assets/imgs/postgre.svg" },
                    { name: "MongoDB", image: "/portfolio/assets/imgs/mongodb.svg" },
                ])}
            </div>
        </div>
    );
};

export default TechStack;