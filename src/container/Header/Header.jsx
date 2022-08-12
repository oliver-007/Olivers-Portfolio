import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrapper } from "../../wrapper";
import "./Header.scss";

const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            {/* <span>👋 </span> */}
            <div style={{ margineLeft: 20 }}>
              <p className="p-text">Hello, this is</p>
              <h3>Faisal Ahmed</h3>
              <h1 className="head-text">
                <span style={{ color: "#9eb23b" }}>Oliver</span>
              </h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer , </p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile-circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className="app__header-circles"
      >
        {[images.tailwind, images.react, images.redux].map((circle, index) => {
          return (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AppWrapper(Header, "home");
