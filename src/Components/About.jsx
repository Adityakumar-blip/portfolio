import React from "react";
import "./About.css";

import pdf from "../assets/Aditya101.pdf";

import img1 from "../assets/Lost.gif";

const About = () => {
  return (
    <div className="about" id="about">
      <h4>About Me</h4>
      <div>
        <div className="about-container">
          <div className="">
            <div className="about-body">
              <p className="social-title">
                Hey there! I'm a software developer with a solid two-year track
                record in the field, and I've got to say, I'm addicted to the
                thrill of overcoming challenges. My fascination with technology
                isn't just a passing interest; it's a burning passion. There's
                something deeply satisfying about diving into the intricate
                workings of different technologies, unraveling their
                complexities, and harnessing their power to solve real-world
                problems.
                <br />
                <br />
                Over the past couple of years, I've had the privilege of
                immersing myself in various projects, each presenting its own
                set of hurdles to overcome. Whether it's developing sleek user
                interfaces, optimizing algorithms for performance, or
                architecting robust backend systems, I've been there, sleeves
                rolled up, ready to tackle whatever comes my way. But what truly
                sets my heart racing is the opportunity to explore the bleeding
                edge of technology. I thrive on the challenge of mastering new
                frameworks, languages, and tools, constantly pushing myself to
                stay ahead of the curve.
                <br />
                <br />
                It's this insatiable curiosity and drive for innovation that
                keeps me on my toes, eager to learn, adapt, and evolve in a
                rapidly changing industry. So, here I am, ready to embark on the
                next leg of my journey in software development. Armed with a
                passion for technology, a hunger for challenges, and a knack for
                problem-solving, I'm excited to see where this adventure takes
                me. Who knows what amazing things we'll create together? Let's
                dive in and find out!
              </p>
            </div>
          </div>
          <div className="col-md-6 colum img-container">
            <img src={img1} class="img-fluid  " alt="..." />
          </div>
        </div>
      </div>
      <div className="about-btns">
        <div className="button">
          <a href={pdf} download>
            <p>Download CV</p>
          </a>
        </div>
        {/* <button>Contact</button> */}
      </div>
    </div>
  );
};

export default About;
