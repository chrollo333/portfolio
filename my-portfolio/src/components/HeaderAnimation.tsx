import { motion } from "framer-motion";

const HeaderAnimation = () => {
  return (
    
    <div className="w-full overflow-hidden py-4 bg-zinc-900 ">
      <motion.div
        className="flex whitespace-nowrap text-6xl font-bebas font-semibold text-white"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <span className="px-4">
        {Array(20)
            .fill(
              <>
                MY <span className="text-yellow-400">PROJECTS</span> /{" "}
              </>
            )
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </span>
      </motion.div>
    </div>
  );
};

export default HeaderAnimation;