import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://linkedin.com/in/oliver-ahmed-8a366a202"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/oliver-007" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/oliver.vai" target="_blank">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
