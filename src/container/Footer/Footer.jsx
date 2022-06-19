import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrapper, MotionWrapper } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((username, email, message)) {
      setLoading(true);
      setFormData({ username: "", email: "", message: "" });

      const contact = {
        _type: "contact",
        name: formData.username,
        email: formData.email,
        message: formData.message,
      };

      client
        .create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Fill All The Fields");
    }
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto: olivercommercial000@gmail.com" className="p-text">
            olivercommercial000@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+88 01716777564" className="p-text">
            +8801716777564
          </a>
        </div>
      </div>
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="username"
            value={username}
            onChange={handleChangeInput}
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>
          {!loading ? "Send Message" : "Sending..."}
        </button>
      </div>
      {isFormSubmitted && (
        <div>
          <h3 className="head-text" style={{ color: "#3ab0ff" }}>
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrapper(
  MotionWrapper(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
