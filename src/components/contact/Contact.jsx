import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "899d8fcd-324e-4d19-a9b0-0d503a0b901c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I’m a passionate web developer who loves turning ideas into
            functional, visually appealing websites. Whether you're a business
            looking to establish an online presence or someone with a personal
            project in mind, I’m here to help. Let's collaborate to create a
            website that not only looks great but also performs seamlessly. Feel
            free to reach out with your ideas, questions, or projects, and I’ll
            be happy to assist. Together, we can bring your vision to life.
            Let’s start a conversation and see how I can contribute to your
            online success!
          </p>
          <div className="cotact-details">
            <div className="contact-detail">
              <MdOutlineEmail /> <p>shukratamang.npl@gmail.com</p>
            </div>
            <div className="contact-detail">
              <MdAddCall /> <p>+61452098078</p>
            </div>
            <div className="contact-detail">
              <MdLocationPin />{" "}
              <p>42 Walz street, Rockdale NSW Australia 2216</p>
            </div>
          </div>

          <h2>Social Media</h2>
          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=100008699173238"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://github.com/shukrat29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/shukra-tamang-73298126b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
