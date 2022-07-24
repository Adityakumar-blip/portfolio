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
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card card-cont">
            <div class="card-body card-decor">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card card-cont">
            <div class="card-body card-decor">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card card-cont">
            <div class="card-body card-decor">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card card-cont">
            <div class="card-body card-decor">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card card-cont">
            <div class="card-body card-decor">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
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
