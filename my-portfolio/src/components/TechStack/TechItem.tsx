import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface TechItemProps {
    techImage: string;
    techName: string;
}

const TechItem: React.FC<TechItemProps> = ({ techImage, techName }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <motion.div
            className="flex items-center transition-all duration-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={techImage}
                alt={techName}
                className="w-12 h-12 transition-all duration-300"
            />

            {/* name text */}
            <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={hovered 
                    ? { width: 'auto', opacity: 1, marginLeft: 8 } 
                    : { width: 0, opacity: 0, marginLeft: 0 }}
                transition={{ duration: 0.3 }}
                className="whitespace-nowrap text-gray-400 text-xl font-poppins pointer-events-none"
            >
                {techName}
            </motion.span>
        </motion.div>
    );
};
export default TechItem;