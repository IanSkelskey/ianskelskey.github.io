import { AnimatePresence, motion } from "framer-motion";
export default function Page({ children, title, blurb }) {
  return (
    <AnimatePresence>
      {/** Pages slide in and out */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.35 }}
        className="lg:w-10/12 md:w-11/12 w-full mx-auto md:py-12 flex flex-col gap-6 lg:gap-12 bg-white dark:bg-black z-50">
        {(title || blurb) && (
          <div className="flex flex-col gap-4 text-center p-4">
            {title && <h1 className="text-4xl font-bold font-serif">{title}</h1>}
            {blurb && <div className="subtle-text">{blurb}</div>}
          </div>
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
