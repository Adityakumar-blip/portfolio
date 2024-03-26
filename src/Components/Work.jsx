import React, { useEffect, useState } from "react";
import socialpubli from "../assets/videos/socialpubli.mp4";
import All from "../assets/videos/All.mp4";
import SelfStudy from "../assets/videos/wallpy.mp4";
import decorus from "../assets/videos/decorus.mp4";
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
      description:
        "Introducing SocialPubli: a dynamic solution for enhancing your brand's online presence. With innovative social media marketing strategies tailored to your needs.",
    },
    {
      id: 1,
      name: "Wallpy",
      media: SelfStudy,
      description:
        "Wallpy: Experience stunning wallpapers like never before with this innovative PWA-powered application, offering a seamless blend of performance and accessibility for your digital wallpaper needs.",
    },
    {
      id: 2,
      name: "Decorus",
      media: decorus,
      description:
        "Elevate event management with Decorus, the Android application crafted exclusively for event management companies. Seamlessly plan, organize, and execute events with precision and style. ",
    },
    {
      id: 3,
      name: "Explore All Projects",
      media: All,
      description:
        "Explore My Spectrum of Creations, Developed with love and experince.",
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
