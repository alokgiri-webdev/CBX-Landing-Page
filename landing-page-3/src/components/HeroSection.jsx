import styles from "./HeroSection.module.css";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <>
      {/* First Hero Section Animation */}
      <motion.div
        className={styles.heroSectionFirst}
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1, // Delayed animation starts after NavBar animation
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        <h1 className={styles.heroContent}>
          All-in-one
          <span className={styles.heroContentBold}>Digital Platform</span>
        </h1>
      </motion.div>

      {/* Second Hero Section Animation */}
      <motion.div
        className={styles.heroSectionSecond}
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.5, // Slight delay after the first Hero Section animation
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        <h1 className={styles.heroContentSecond}>For you</h1>
      </motion.div>
    </>
  );
}

export default HeroSection;
