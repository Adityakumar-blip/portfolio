import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-cont ">
      <div className="footer-class">
        <div className="col-sm-6 footer">
          <h4>Say hello.</h4>
          <h6>
            Let me amplify your website <br />
            for modern world
          </h6>
          <button>Get in touch</button>
        </div>
        <div className="col-sm-6 social">
          <a href="https://github.com/Adityakumar-blip">
            <p>Github</p>
          </a>
          <a href="https://www.linkedin.com/in/aditya-kumar-b985901b0/">
            <p>LinkedIn</p>
          </a>
          <a href="https://unsplash.com/@photodrugist">
            <p>Instagram</p>
          </a>
          <a href="https://unsplash.com/@photodrugist">
            <p>Unsplash</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
