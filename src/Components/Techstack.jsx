import React from 'react'
import './TechStack.css'

const Techstack = () => {
  return (
    <div className="techstack">
        <h4>TechStack .</h4>
        <div className="tech-logo">
            <div className="row">
                <div className="col-sm-2 logo-container">
                    <img src='https://img.icons8.com/color/344/html-5--v1.png' alt='html' />
                </div>
                <div className="col-sm-2 logo-container">
                    <img src='https://img.icons8.com/color/344/css3.png' alt='css' />
                </div>
                <div className="col-sm-2 logo-container">
                    <img src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' alt='javascript' />
                </div>
                <div className="col-sm-2 logo-container">
                    <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' alt='react' />
                </div>
                <div className="col-sm-2 logo-container">
                    <img src='https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-256.png' alt='node' />
                </div>
                <div className="col-sm-2 logo-container">
                    <img src='https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png' alt='flutter' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Techstack