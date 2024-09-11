import React from "react";
import "./Mywork.css";
import { mywork_Data } from "../../assets/mywork-data";
import { FaArrowRight } from "react-icons/fa6";

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_Data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Mywork;
