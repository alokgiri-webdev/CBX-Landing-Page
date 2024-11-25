import styles from "./NavBar.module.css";
import companyLogo from "../assets/CBX-Logo.png";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <motion.header
      className={styles.header}
      initial={{ y: "-100px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
    >
      <a href="/">
        <img className={styles.logo} src={companyLogo} alt="company-logo" />
      </a>
      <nav className={styles.navbar}>
        <a href="/">All Products</a>
        <a href="/">About</a>
        <a href="/">Contact us</a>
        <button className={styles.signInOutButton} type="button">
          Sign in/Login
        </button>
      </nav>
    </motion.header>
  );
}

export default NavBar;
