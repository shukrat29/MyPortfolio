import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img
            className="about-img"
            src="./src/assets/Shukra_Profile_Picture.JPG"
            alt=""
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              As a recent graduate with a master’s degree in information
              technology, specializing in Software Engineering, my career
              objective is to secure a position as a Web Developer. With a
              strong academic foundation and a passion for web development, I am
              eager to apply my technical skills and knowledge in a professional
              setting. Throughout my studies, I have gained expertise in various
              programming languages, web development frameworks, and database
              management systems. I am excited to further enhance my skills and
              gain practical experience in the dynamic field of web development.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              omnis illo. Eveniet nemo mollitia in culpa vitae saepe eum ex,
              quidem eligendi minus placeat quod quae cumque ducimus voluptatum
              temporibus inventore tempore, aliquid eaque, eos quam amet. Optio,
              nostrum deserunt.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-title">
              <h1>Skills</h1>
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind CSS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Express</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
          <hr />
        </div>
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
          <hr />
        </div>
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default About;
