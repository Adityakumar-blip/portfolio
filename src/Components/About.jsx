import React from "react";
import "./About.css";

import pdf from "../assets/Aditya101.pdf";

import img1 from "../assets/Lost.gif";

const About = () => {
  return (
    <div className="about" id="about">
      <h4>About Me</h4>
      <div className="about-container">
        <div className="row g-0">
          <div className="col-md-6 colum">
            <div className="about-body">
              <p className="social-title">
                My name is Aditya Kumar and I love to work and experiment on web
                & Internet.I develop websites with HTML, CSS and JavaScript. I
                have top skills in using design softwares like Figma, Adobe XD,
                Invision and PhotoShop; with prototype tools like Framer and
                Protopie.
                <br />
                <br /> Being a diligent, hardworking and result oriented person,
                I always work towards achieving best result on each project I
                lay my hands on. I am passionate about leveraging my diverse
                backgrounds to decipher challenging problems and create
                delightful experiences. I honed my skills at web development,
                technical writing, product design and SEO analytics.
              </p>
            </div>
          </div>
          <div className="col-md-6 colum img-container">
            <img src={img1} class="img-fluid  " alt="..." />
          </div>
        </div>
      </div>
      <div className="button">
        <a href={pdf} download>
          <p>Download CV</p>
        </a>
      </div>
    </div>
  );
};

export default About;
