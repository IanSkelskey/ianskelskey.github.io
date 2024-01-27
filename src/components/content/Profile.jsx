import IconLink from "../atoms/IconLink";
import socials from "../../data/socials";
import { AnimatePresence, motion } from "framer-motion";

export default function Profile({ minimize }) {
  const paddingStyle = minimize ? '0.5rem' : '1.5rem';
  const socialsStyle = minimize ? 'flex flex-col space-y-3 items-center' : 'flex flex-row space-x-3 items-center';

  return (
    <motion.div style={{ paddingLeft: paddingStyle, paddingRight: paddingStyle }} className="flex flex-col items-center space-y-4" layout>
      <motion.img
        src="assets/headshot.png"
        alt="Headshot of Ian Skelskey"
        className="rounded-full w-44 aspect-square"
        layout
      />
      <AnimatePresence>
        {!minimize &&
          <motion.p
            className="text-sm subtle-text dark:bg-neutral-900 bg-neutral-200 p-2 rounded-md"
            initial={{ width: 'auto', opacity: 1, scale: 0}}
            animate={{ width: 'auto', opacity: 1, scale: 1 }}
            exit={{ width: 0, opacity: 0, height: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            layout
          >
            B.S. Software Engineering
          </motion.p>
        }
        {!minimize &&
          <motion.p className="text-center subtle-text"
            initial={{ width: 'auto', opacity: 1, scale: 0}}
            animate={{ width: 'auto', opacity: 1, scale: 1 }}
            exit={{ width: 0, opacity: 0, height: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            layout>
            I'm a software engineer and creative. Welcome to my portfolio!
          </motion.p>}
      </AnimatePresence>
      <div className={socialsStyle}>
        {socials.map((social) => (
          <IconLink key={social.name} icon={social.icon} href={social.link} />
        ))}
      </div>
    </motion.div>
  );
}
