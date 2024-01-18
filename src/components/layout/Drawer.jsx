import { AnimatePresence, motion } from "framer-motion";
import IconButton from "../atoms/IconButton";
import { useEffect, useState } from "react";

export default function Drawer({ title, children }) {
    const [drawerOpen, setDrawerOpen] = useState(true);
    const [drawerButtonVisible, setDrawerButtonVisible] = useState(false);
    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 860) {
                setDrawerOpen(true);
                setDrawerButtonVisible(false);
            } else {
                setDrawerButtonVisible(true);
            }
        };
        window.onload = handleResize;
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col space-y-6 items-center w-full md:w-96 md:max-h-screen md:overflow-y-auto dark:bg-neutral-800 bg-neutral-100">
            <div className="flex flex-row justify-between items-center w-full relative h-14 dark:bg-neutral-800 bg-neutral-100">
                {drawerButtonVisible && <IconButton icon="hamburger" className="absolute top-1.5 left-2 z-50" onClick={() => toggleDrawer()} />}
                <h1 className="text-2xl font-serif font-bold w-full text-center">{title}</h1>
            </div>

            <AnimatePresence>
                {drawerOpen && <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: drawerOpen ? "auto" : 0 }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex flex-col space-y-6 items-center w-full">
                    {children}
                </motion.div>}
            </AnimatePresence>

        </div>
    )
}