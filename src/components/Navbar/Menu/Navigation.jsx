import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const link = [
  { name: "Home", link: "/" },
  { name: "Admin", link: "/admin" },

];
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants} className="p-[20px]   w-[80%] ">
    {link.map((i, index) => (
      <MenuItem i={i} key={index} />
    ))}
  </motion.ul>
);
