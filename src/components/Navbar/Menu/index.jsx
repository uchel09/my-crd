import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./UseDimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (width = 1000) => ({
    clipPath: `circle(${width * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

// eslint-disable-next-line react/prop-types
export const MenuBar = ({ children }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className={`absolute top-0 w-full right-0 bottom-0 ${
        isOpen && "z-30"
      }  lg:hidden`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="absolute top-0 right-0 flex items-center  pb-3 flex-col justify-between w-full  bg-[#fff] shadow-lg"
        variants={sidebar}
      >
        <Navigation />

        <motion.div className=" ">{children}</motion.div>
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
