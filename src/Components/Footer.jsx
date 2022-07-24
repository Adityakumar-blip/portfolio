import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-cont ">
      <div className="row">
        <div className="col-sm-6 footer">
          <h4>Say hello .</h4>
          <h6>Let me amplify your website <br/>for modern world</h6>
          <button>Get in touch</button>
        </div>
        <div className="col-sm-6 social">
            <p>Github</p>
            <p>Linkedin</p>
            <p>Instagram</p>
            <p>Unsplash</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
