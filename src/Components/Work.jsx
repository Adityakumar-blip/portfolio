import React,{useState} from "react";
import "./Work.css";

const Work = () => {
    const [colorChange, setColorChange] = useState(false);
  const changeNavColor = () => {
    if(window.scrollY >= 10){
      setColorChange(true)
    }
    else {
      setColorChange(false)
    }
  };
  window.addEventListener('scroll',changeNavColor);
  return (
    <div className="work" id="work" >
      <h4>Work .</h4>
      <div className="work-card">
      <div class="row">
        <div class="col-sm-4">
          <div class="card card-cont">
            <div class="card-body card-decor">
              <h5 class="card-title">Infiwall</h5>
              <p class="card-text">
                Infiwall is a webAPP based on Unsplash Api to generate Infinite No.s of random images.
              </p>
              <a href="https://infiwall.netlify.app/" target='_blank' class="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card card-cont">
            <div class="card-body card-decor">
              <h5 class="card-title">Socialpubli</h5>
              <p class="card-text">
                Socialpubli is influencer marketing website developed for a influencer marketing startup.
              </p>
              <a href="https://socialpubli.netlify.app/" target='_blank' class="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card card-cont">
            <div class="card-body card-decor">
              <h5 class="card-title">Kooky</h5>
              <p class="card-text">
                Kooky is a waterless shampoo brand which makes your hair smooth & shiny.
              </p>
              <a href="https://kooky101.netlify.app/" target="_blank" class="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card card-cont">
            <div class="card-body card-decor">
              <h5 class="card-title">PaisaGroww</h5>
              <p class="card-text">
                Paisagroww is a mutual fund advisory website on which you can invest into mutual funds with the help of expert.
              </p>
              <a href="https://paisagroww.in/" target="_blank" class="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Work;
