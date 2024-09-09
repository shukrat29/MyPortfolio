import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="/Footer-icon.JPG" alt="footer-logo" />
          <p> I am a frontend developer, Australia</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src="/Footer-icon.JPG" alt="user-icon-image" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
