import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.section layout className="flex flex-col space-y-2 justify-center items-center text-4">
      <p>© 2024 Ian Skelskey. All rights reserved.</p>
    </motion.section>
  );
}
