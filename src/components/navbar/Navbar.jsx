import "./navbar.scss";
import logo from "/tbilink-logo2.png";
import facebook from "/facebook.png";
import instagram from "/instagram.png";
import {motion} from "framer-motion";
import Sidebar from "./sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}><img src={logo} alt="logo" /></motion.span>
        <div className="sign">
          <button>Войти</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
