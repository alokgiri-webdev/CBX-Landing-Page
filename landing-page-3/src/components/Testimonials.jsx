import { useState } from "react";
import styles from "./Testimonials.module.css";
import { motion } from "framer-motion";
import Testimonial1 from "../assets/TestimonialsImages/Testimonial-1.png";

function Testimonials() {
  const testimonials = [
    {
      name: "Jim Sheppard",
      designation: "CEO, Visionary Marketing Co.",
      image: Testimonial1,
      text: `"As a business owner, [Your Company Name] has been a game-changer for me. Their range of websites covers everything I need—from productivity tools to data management. Each platform is easy to use, efficient, and helps streamline my operations. It's a one-stop shop for all my business needs!"`,
    },
    {
      name: "Sarah Connor",
      designation: "Founder, Tech Innovators",
      image: Testimonial1,
      text: `"The solutions provided by [Your Company Name] are incredible. Their user-friendly interfaces and seamless integrations have transformed how my team works. Highly recommended!"`,
    },
    {
      name: "John Doe",
      designation: "Product Manager, Future Tech",
      image: Testimonial1,
      text: `"I've never seen a suite of tools so comprehensive and effective. [Your Company Name] truly understands the needs of modern businesses."`,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleProfileClick = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className={styles.testimonialSection}>
      {/* Testimonial Text */}
      <div className={styles.testimonialText}>
        <motion.div
          key={currentTestimonial}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.testimonialQuote}>
            <span className={styles.quoteMark}>“</span>
            {testimonials[currentTestimonial].text}
          </div>
          <div className={styles.divider}>
            <div
              className={styles.dividerArrow}
              style={{
                left: `calc(${currentTestimonial * 33}% + 10px)`, // Dynamically position pointer
              }}
            ></div>
          </div>
        </motion.div>
      </div>

      {/* Profile Thumbnails */}
      <div className={styles.profileThumbnails}>
        {testimonials.map((profile, index) => (
          <motion.div
            key={index}
            className={`${styles.thumbnail} ${
              currentTestimonial === index
                ? styles.thumbnailActive
                : styles.thumbnailInactive
            }`}
            onClick={() => handleProfileClick(index)}
            initial={{ scale: 0.9 }}
            animate={{
              scale: currentTestimonial === index ? 1.3 : 1,
              borderColor: currentTestimonial === index ? "#4D8733" : "#ccc",
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={profile.image}
              alt={profile.name}
              className={styles.profileImage}
            />
            {currentTestimonial === index && (
              <div className={styles.profileDetails}>
                <h3 className={styles.profileName}>{profile.name}</h3>
                <p className={styles.profileDesignation}>
                  {profile.designation}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
