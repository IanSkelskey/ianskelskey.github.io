import { AnimatePresence, motion } from "framer-motion";
import Drawer from "./Drawer";

export default function DrawerContentFooterLayout({
  drawerContents,
  footer,
  content,
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatePresence>
        <motion.div className="flex md:flex-row flex-col w-full" layout>
          <Drawer title="Ian Skelskey">{drawerContents}</Drawer>
          {/** Main content */}
          <motion.div layout className="flex flex-col w-full dark:bg-black bg-white min-h-[calc(100vh-56px)] md:min-h-screen max-h-screen md:overflow-y-auto">
            {/** Content */}
            <motion.div layout className="w-full flex-grow">{content}</motion.div>
            {/** Footer */}
            <motion.footer layout className="p-6 dark:bg-neutral-900 bg-neutral-150">
              {footer}
            </motion.footer>
          </motion.div>
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
