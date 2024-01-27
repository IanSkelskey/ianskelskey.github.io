import { AnimatePresence, motion } from "framer-motion";
import IconButton from "../atoms/IconButton";
import { useEffect, useState, Children, cloneElement, isValidElement } from "react";

export default function Drawer({ title, children }) {
  const DEFAULT_WIDTH = "280px"; // Initial width for large screen
  const MINIMIZED_WIDTH = "60px"; // Initial width for small screen

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(DEFAULT_WIDTH);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 860);

  const toggleDrawer = () => {
    if (isLargeScreen) {
      setDrawerWidth(drawerWidth === DEFAULT_WIDTH ? MINIMIZED_WIDTH : DEFAULT_WIDTH);
    } else {
      setDrawerOpen(!drawerOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const largeScreen = window.innerWidth > 860;
      setIsLargeScreen(largeScreen);
      if (largeScreen) {
        setDrawerOpen(true);
      } else {
        setDrawerOpen(false);
        setDrawerWidth(DEFAULT_WIDTH);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const minimized = drawerWidth !== DEFAULT_WIDTH;

  const enhancedChildren = Children.map(children, child => {
    // Only clone if the child is a valid element
    if (isValidElement(child)) {
      return cloneElement(child, { minimize: minimized });
    }
    return child;
  });

  return (
    <motion.div className="flex flex-col space-y-6 items-center w-full md:max-w-fit md:max-h-screen md:overflow-y-auto md:overflow-x-hidden dark:bg-neutral-800 bg-neutral-100" layout>
      <motion.div className="flex flex-row justify-between items-center w-full relative h-14 dark:bg-neutral-800 bg-neutral-100">
        <IconButton
          icon="hamburger"
          className="absolute top-2.5 left-2 z-50"
          onClick={toggleDrawer}
        />
        <AnimatePresence>
          {!minimized && <motion.h1 className="text-2xl font-serif font-bold w-full text-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0, width: 0, height: 0 }}
          >
            {title}
          </motion.h1>}
        </AnimatePresence>


      </motion.div>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={isLargeScreen ? { width: drawerWidth } : { height: 0 }}
            animate={isLargeScreen ? { width: drawerWidth } : { height: drawerOpen ? "auto" : 0 }}
            exit={{ width: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col space-y-6 items-center w-full"
          >
            {enhancedChildren}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
