import React,{useState} from 'react'
import './Main.css'

const Main = () => {
  const [colorChange, setColorChange] = useState(false);
  const changeNavColor = () => {
    if(window.scrollY >= 15){
      setColorChange(true)
    }
    else {
      setColorChange(false)
    }
  };
  window.addEventListener('scroll',changeNavColor);
  return (
    <div className={colorChange ? 'main colorchange' : 'main'}>
        <h2><spna className='hello'>hello</spna><span className='dot'>.</span></h2>
        <h3>I'm Aditya Kumar and I'm a Web Developer Based In India. I follow the values "Design . Developement . Dignity" to solve the problems in development as well as in real life.</h3>
        {/* <div className="buttons">
          <button className='about'>About Me</button>
          <button className='contact'>Contact Me</button>
        </div> */}
    </div>
  )
}

export default Main