import "./hero.scss";
import conections from "/conections.png";
import {motion} from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h1 variants={textVariants}>Стань частью Tbilink</motion.h1>
          <motion.h2 variants={textVariants}>Социальная cеть и карта для легкой адаптации и комфортной жизни</motion.h2>
          
          <motion.div variants={textVariants}className="button">
            <motion.button variants={textVariants}>Начать</motion.button>
          </motion.div>
          <motion.p variants={textVariants}>Для русскоязычных в Грузии: место, где чувствуешь себя как дома</motion.p>
        </motion.div>
        <div className="imageContainer">
          <img src={conections} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
