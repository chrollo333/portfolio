import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TechItem from './TechItem';


const TechStack = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <div className="min-h-screen bg-zinc-900 text-black flex items-center justify-center w-[6O%]">
            <div className="w-[60%] space-y-25">
                <h2 className="text-2xl text-white font-poppins mb-10">MY STACK</h2>

                <motion.div 
                ref={ref}
                initial={{opacity: 0, y: 50}}
                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                transition={{duration: 0.6, ease: "easeInOut"}}
                className="flex items-start gap-8">
                    <h1 className="text-7xl font-bold text-white font-bebas">FRONTEND</h1>
                    <div className="flex flex-wrap gap-15 mt-5 ml-15">
                        <TechItem techImage="/portfolio/assets/imgs/react.svg" techName="React" />
                        <TechItem techImage="/portfolio/assets/imgs/figma.svg" techName="Figma" />
                        <TechItem techImage="/portfolio/assets/imgs/javascript.svg" techName="JavaScript" />
                        <TechItem techImage="/portfolio/assets/imgs/html-5.svg" techName="HTML 5" />
                        <TechItem techImage="/portfolio/assets/imgs/tailwind.svg" techName="Tailwind CSS" />
                        <TechItem techImage="/portfolio/assets/imgs/framer-motion.svg" techName="Framer Motion" />
                    </div>
                </motion.div>
                <motion.div ref={ref}
                initial={{opacity: 0, y: 50}}
                animate={isInView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.6, ease: "easeOut"}}
                className="flex items-start gap-8">
                    <h1 className="text-7xl font-bold text-white font-bebas">BACKEND</h1>
                    <div className="flex flex-wrap gap-15 mt-5 ml-15">
                    <TechItem techImage="/portfolio/assets/imgs/django.svg" techName="Django" />
                    <TechItem techImage="/portfolio/assets/imgs/flask.svg" techName="Flask" />
                    </div>
                </motion.div>

                <motion.div ref={ref}
                initial={{opacity: 0, y: 50}}
                animate={isInView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.6, ease: "easeOut"}}
                className="flex items-start gap-8">
                    <h1 className="text-7xl font-bold text-white font-bebas">DATABASE</h1>
                    <div className="flex flex-wrap gap-15 mt-5 ml-15">
                    <TechItem techImage="/portfolio/assets/imgs/postgre.svg" techName="PostgreSQL" />
                    </div>
                </motion.div>
            </div>
        </div>







    )

}

export default TechStack;