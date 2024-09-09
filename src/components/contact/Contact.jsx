import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact">
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
        </div>

        <form className="contact-right">
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
