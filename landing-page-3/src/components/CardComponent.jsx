import styles from "./CardComponent.module.css";
import PropTypes from "prop-types";

const CardComponent = ({ title, logoSrc, dashboardSrc }) => {
  return (
    <div className={styles.cardComponent}>
      <div className={styles.logoContainer}>
        <img src={logoSrc} alt="Company Logo" className={styles.logo} />
      </div>

      <h2 className={styles.cardTitle}>{title}</h2>

      <div className={styles.imageContainer}>
        <img
          src={dashboardSrc}
          alt="Dashboard Screenshot"
          className={styles.dashboardImage}
        />
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.learnMoreButton}>
          Learn More <span className={styles.arrow}>➜</span>
        </button>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  dashboardSrc: PropTypes.string.isRequired,
};

export default CardComponent;
