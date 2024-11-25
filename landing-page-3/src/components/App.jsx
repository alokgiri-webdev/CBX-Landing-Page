import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowCircleRight } from "react-icons/fa";
import CardComponent from "./CardComponent";
import Circle from "./Circle";
import companyLogo from "../assets/CBX-Logo.png";
import cbxstartdashboard from "../assets/Component-Dashboards/CBXStartDashboard.png";
import InventoryManagementSystemDB from "../assets/Component-Dashboards/InventoryManagementSystemDB.png";
import DelegationDashboard from "../assets/Component-Dashboards/DelegationDashboard.png";
import PeopleDirectoryDashboard from "../assets/Component-Dashboards/PeopleDirectoryDashboard.png";
import CBXNotesDashboard from "../assets/Component-Dashboards/CBXNotesDashboard.png";
import Testimonials from "./Testimonials";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";

function App() {
  const cardWidthPercentage = 90; // Each card moves by 90% of its width
  const maxClicks = 4;

  const cbxStartControls = useAnimation();
  const imsControls = useAnimation();
  const delegationControls = useAnimation();
  const peopleDirectoryControls = useAnimation();
  const cbxNotesControls = useAnimation();
  const textControls = useAnimation();

  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0); // Track the number of button clicks
  const [positions, setPositions] = useState({
    cbxStart: -200,
    ims: -90,
    delegation: 20,
    peopleDirectory: 130,
    cbxNotes: 240,
  });

  const handleButtonClick = () => {
    const newClickCount = clickCount + 1;

    if (newClickCount <= maxClicks) {
      // Update positions dynamically
      setPositions((prevPositions) => ({
        cbxStart: prevPositions.cbxStart + cardWidthPercentage,
        ims: prevPositions.ims + cardWidthPercentage,
        delegation: prevPositions.delegation + cardWidthPercentage,
        peopleDirectory: prevPositions.peopleDirectory + cardWidthPercentage,
        cbxNotes: prevPositions.cbxNotes + cardWidthPercentage,
      }));

      // Trigger the moveRight animation for all cards
      cbxStartControls.start({
        x: `${positions.cbxStart + cardWidthPercentage}%`,
      });
      imsControls.start({ x: `${positions.ims + cardWidthPercentage}%` });
      delegationControls.start({
        x: `${positions.delegation + cardWidthPercentage}%`,
      });
      peopleDirectoryControls.start({
        x: `${positions.peopleDirectory + cardWidthPercentage}%`,
      });
      cbxNotesControls.start({
        x: `${positions.cbxNotes + cardWidthPercentage}%`,
      });

      setClickCount(newClickCount);
    } else {
      // Reset to initial "second" positions after 4 clicks
      setPositions({
        cbxStart: -200,
        ims: -90,
        delegation: 20,
        peopleDirectory: 130,
        cbxNotes: 240,
      });

      cbxStartControls.start({ x: "-200%" });
      imsControls.start({ x: "-90%" });
      delegationControls.start({ x: "20%" });
      peopleDirectoryControls.start({ x: "130%" });
      cbxNotesControls.start({ x: "240%" });

      setClickCount(0); // Reset click count
    }
  };

  useEffect(() => {
    async function startAnimations() {
      // Delay for 6 seconds before starting the animations
      await new Promise((resolve) => setTimeout(resolve, 6000));

      // Initial animations
      await Promise.all([
        cbxStartControls.start("first"),
        imsControls.start("first"),
        delegationControls.start("first"),
        peopleDirectoryControls.start("first"),
        cbxNotesControls.start("first"),
      ]);

      // Text animation
      await textControls.start({
        x: "10%",
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut", delay: 1 },
      });

      // Second animations
      await Promise.all([
        cbxStartControls.start("second"),
        imsControls.start("second"),
        delegationControls.start("second"),
        peopleDirectoryControls.start("second"),
        cbxNotesControls.start("second"),
      ]);

      // Show button
      setTimeout(() => {
        setIsButtonVisible(true);
      }, 500);
    }

    startAnimations();
  }, [
    cbxStartControls,
    imsControls,
    delegationControls,
    peopleDirectoryControls,
    cbxNotesControls,
    textControls,
  ]);

  return (
    <>
      <NavBar />
      <HeroSection />
      <div className="mainContainer">
        <Circle />

        <motion.div
          className="introText"
          initial={{ x: "-100%", opacity: 0 }}
          animate={textControls}
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            fontFamily: "sans-serif",
            fontSize: "48px",
            color: "#fff",
            fontWeight: "700",
            lineHeight: "1.5",
            textAlign: "left",
          }}
        >
          <span>
            &quot;Explore Our Comprehensive Range <br /> of Digital Tools&quot;
          </span>
        </motion.div>

        <center className="cardContainer">
          {/* CBX Start Card */}
          <motion.div
            className="cbxstart"
            initial="initial"
            animate={cbxStartControls}
            variants={{
              initial: { x: "-140%", y: "-65%", rotate: -40 },
              first: { x: "-140%", y: "-80%", rotate: 0, zIndex: 1 },
              second: { x: "-200%", y: "-60%", rotate: 0, zIndex: 1 },
            }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            <CardComponent
              title="CBX Start"
              logoSrc={companyLogo}
              dashboardSrc={cbxstartdashboard}
            />
          </motion.div>

          {/* IMS Card */}
          <motion.div
            className="ims"
            initial="initial"
            animate={imsControls}
            variants={{
              initial: { x: "-95%", y: "-85%", rotate: -40 },
              first: { x: "-90%", y: "-75%", rotate: 0, zIndex: 2 },
              second: { x: "-90%", y: "-60%", rotate: 0 },
            }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            <CardComponent
              title="Inventory Management System(IMS)"
              logoSrc={companyLogo}
              dashboardSrc={InventoryManagementSystemDB}
            />
          </motion.div>

          {/* Delegation Card */}
          <motion.div
            className="delegation"
            initial="initial"
            animate={delegationControls}
            variants={{
              initial: { x: "-50%", y: "-95%", rotate: 0, zIndex: 4 },
              first: { x: "-50%", y: "-65%", rotate: 0 },
              second: { x: "20%", y: "-60%", rotate: 0 },
            }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            <CardComponent
              title="Delegation"
              logoSrc={companyLogo}
              dashboardSrc={DelegationDashboard}
            />
          </motion.div>

          {/* People Directory Card */}
          <motion.div
            className="peopledirectory"
            initial="initial"
            animate={peopleDirectoryControls}
            variants={{
              initial: { x: "-5%", y: "-85%", rotate: 40, zIndex: 2 },
              first: { x: "5%", y: "-75%", rotate: 0 },
              second: { x: "130%", y: "-60%", rotate: 0 },
            }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            <CardComponent
              title="People Directory"
              logoSrc={companyLogo}
              dashboardSrc={PeopleDirectoryDashboard}
            />
          </motion.div>

          {/* CBX Notes Card */}
          <motion.div
            className="cbxnotes"
            initial="initial"
            animate={cbxNotesControls}
            variants={{
              initial: { x: "35%", y: "-65%", rotate: 40 },
              first: { x: "70%", y: "-80%", rotate: 0, zIndex: 1 },
              second: { x: "240%", y: "-60%", rotate: 0 },
            }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            <CardComponent
              title="CBX Notes"
              logoSrc={companyLogo}
              dashboardSrc={CBXNotesDashboard}
            />
          </motion.div>

          {isButtonVisible && (
            <button
              style={{
                position: "absolute",
                top: "40%",
                right: "-1100%",
                transform: "translateY(-50%)",
                zIndex: 7,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "2rem",
                color: "#fff",
                opacity: 0.56,
              }}
              onClick={handleButtonClick}
            >
              <FaArrowCircleRight size={50} color="#4D8733" />
            </button>
          )}
        </center>
      </div>
      <Testimonials />
    </>
  );
}

export default App;
