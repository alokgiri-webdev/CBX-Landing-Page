import styles from "./Circle.module.css";
import { motion } from "framer-motion";

function Circle() {
  return (
    <motion.div
      className={styles.circle}
      initial={{ scale: 1, x: "-50%", y: "-50%" }} // Start with the original size
      animate={{ scale: 10, x: "-50%", y: "-50%" }} // Grow 10x to cover the screen
      transition={{ delay: 6, duration: 1.5, ease: "easeInOut" }}
    ></motion.div>
  );
}

export default Circle;
