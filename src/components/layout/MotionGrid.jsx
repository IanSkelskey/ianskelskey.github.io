import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react";

export default function MotionGrid({ children }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isTwoColumnLayout = windowWidth >= 1536;

    return (
            <motion.div  
                className="flex flex-col 2xl:grid 2xl:grid-cols-2 gap-4"
                layout
            >
                <AnimatePresence key={isTwoColumnLayout ? "two-column" : "one-column"}>
                    {children}
                </AnimatePresence>
            </motion.div>

    )
}
