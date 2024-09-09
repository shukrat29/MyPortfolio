import React from "react";
import "./Footer.css";
import { AiOutlineUser } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            {" "}
            Stay up to date with my latest web development projects, insights,
            and updates by subscribing. Be the first to know about new features,
            launches, and exclusive content from my personal portfolio!
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <AiOutlineUser />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @2024 Shukra Tamang. All Rights Reserved!
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
