import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

import { MenuBar } from "./Menu";

const LogoLink = () => {
  return (
    <div className="flex gap-5">
      <li className="rounded-full hover:bg-green-400 bg-gray-200  items-center flex justify-center w-10 h-10">
        <Link to="/about">
          <span className="">
            <FaFacebookSquare size={25} />
          </span>
        </Link>
      </li>
      <li className="rounded-full hover:bg-green-400 bg-gray-200  items-center flex justify-center w-10 h-10">
        <Link to="/about">
          <span>
            <FaTwitterSquare size={25} />
          </span>
        </Link>
      </li>
      <li className="rounded-full hover:bg-green-400 bg-gray-200  items-center flex justify-center w-10 h-10">
        <Link to="/about">
          <span>
            <FaYoutubeSquare size={25} />
          </span>
        </Link>
      </li>
      <li className="rounded-full hover:bg-green-400 bg-gray-200  items-center flex justify-center w-10 h-10">
        <Link to="/about">
          <span>
            <FaGithubSquare size={25} />
          </span>
        </Link>
      </li>
      <li className="rounded-full hover:bg-green-400 bg-gray-200  items-center flex justify-center w-10 h-10">
        <Link to="/about">
          <span>
            <ImLinkedin size={23} />
          </span>
        </Link>
      </li>
    </div>
  );
};

const Navbar = () => {
  const pathname = window.location.pathname;

  return (
    <div className="w-full flex shadow-md fixed z-10 h-[70px] bg-white">
      <div className="md:w-[90%] my-0 mx-auto flex justify-between items-center">
        <div className="w-[40%] flex justify-between items-center">
          <Link to="/" className="absolute z-20 left-10 md:left-20 lg:left-32">
            <div className="text-green-500 text-[30px] font-bold">
              C͓̽h͓̽e͓̽l͓̽l͓̽<span className="text-cyan-400 font-bold">C͓̽h͓̽o͓̽r͓̽d͓̽s͓̽</span>
            </div>
          </Link>

          <MenuBar>
            <LogoLink />
          </MenuBar>
        </div>
        <div className="hidden  w-[60%] lg:flex items-center justify-end  ">
          <ul className="flex justify-between items-center gap-5">
            <li
              className={`hover:text-red-400 ${
                pathname === "/" ? "text-red-500 text-[18px]" : "text-black"
              } font-bold`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`hover:text-red-400 ${
                pathname === "/admin"
                  ? "text-red-500 text-[18px]"
                  : "text-black"
              } font-bold`}
            >
              <Link to="/admin">Admin</Link>
            </li>

            <LogoLink />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
