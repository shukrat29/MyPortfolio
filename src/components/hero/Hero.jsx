import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img
        className="img"
        src="./src/assets/Shukra_Profile_Picture.JPG"
        alt=""
      />
      <h1>
        <span>I'm Shukra Tamang,</span> Software Developer based in Australia.
      </h1>
      <p>
        As a recent graduate with a master’s degree in information technology,
        specializing in Software Engineering, my career objective is to secure a
        position as a Web Developer. With a strong academic foundation and a
        passion for web development, I am eager to apply my technical skills and
        knowledge in a professional setting. Throughout my studies, I have
        gained expertise in various programming languages, web development
        frameworks, and database management systems. I am excited to further
        enhance my skills and gain practical experience in the dynamic field of
        web development.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
