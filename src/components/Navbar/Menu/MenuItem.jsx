import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="list-none m-3 flex items-center justify-center cursor-pointer"
    >
      <Link
        to={i.link}
        className={`text-placeholder flex items-center text-black justify-center border-radius-5 w-[300px] h-[25px] hover:bg-teal-500 hover:text-white`}
        // style={{ border: `2px solid ${colors[i]}` }}
      >
        {i.name}
      </Link>
    </motion.li>
  );
};
