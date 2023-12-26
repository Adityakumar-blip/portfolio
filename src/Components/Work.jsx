import React, { useEffect, useState } from "react";
import socialpubli from "../assets/videos/socialpubli.mp4";
import All from "../assets/videos/All.mp4";
import SelfStudy from "../assets/videos/SelfStudy.mp4"
import gsap from "gsap";
import "./Work.css";

const Work = () => {
  const [colorChange, setColorChange] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY >= 10) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavColor);

  const Projects = [
    {
      id: 0,
      name: "SocialPubli",
      media: socialpubli,
      description: "Dummy description for SocialPubli project.",
    },
    {
      id: 1,
      name: "Self Study",
      media: SelfStudy,
      description: "Dummy description for Kooky project.",
    },
    {
      id: 2,
      name: "Decorus",
      media: socialpubli,
      description: "Dummy description for Decorus project.",
    },
    {
      id: 3,
      name: "Explore All Projects",
      media: All,
      description: "Dummy description for Decorus project.",
    },
  ];

  return (
    <div className="work" id="work">
      <h4>Work</h4>
      <div className="projects">
        {Projects.map((item, index) => (
          <div className="project-div">
            <div key={item.id}>
              <video
                src={item?.media}
                alt={item.name}
                style={{ borderRadius: "5px", height: "300px", width: "100p%" }}
                loop
                autoPlay
                muted
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <h5 className="project-heading">{item?.name}</h5>
              <p>{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
