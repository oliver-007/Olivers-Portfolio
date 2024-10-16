import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { AppWrapper, MotionWrapper } from "../../wrapper";

import "./About.scss";
import { client } from "../../client";
import { images } from "../../constants";

const About = () => {
  const [setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, [setAbouts]);

  return (
    <>
      <h2 className="head-text">
        <span>Meet Oliver, Your Full-Stack Alchemist</span>
      </h2>
      <div className="app__profiles">
        <div className="">
          {" "}
          <h4 className="p-text app__profiles-text">
            I don't just code, I craft digital alchemy. From MERN magic to
            Next.js symphonies, I transform ideas into pixelated powerhouses.
            Think React & Tailwind artistry meets MongoDB & Prisma data sorcery.
            Express APIs hum under my touch, while Cloudinary adds a dash of
            visual enchantment.
          </h4>
          <br />
          <h5 className="p-text app__profiles-text">
            {" "}
            HKUST courses forged my skills, but fluency in English bridges the
            tech gap. Hire me, and watch your vision rise from pixels to
            brilliance.
          </h5>
        </div>
        <motion.div
          // whileInView={{ opacity: 1 }}
          // whileHover={{ scale: 1.1 }}
          // transition={{ duration: 0.5, type: "tween" }}
          whileInView={{
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="app__profiles"
        >
          <img src={images.about1} alt={images.name} />
        </motion.div>
      </div>
    </>
  );
};

export default AppWrapper(
  MotionWrapper(About, "app__about"),
  "about",
  "app__whitebg"
);
