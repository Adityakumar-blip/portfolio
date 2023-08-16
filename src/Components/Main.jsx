import React, { useState, useEffect } from 'react';
import './Main.css';

const greet = [
  {
    id: 1,
    country: 'india',
    greet: 'नमस्ते',
  },
  {
    id: 2,
    country: 'usa',
    greet: 'Hello',
  },
  {
    id: 3,
    country: 'france',
    greet: 'Bonjour',
  },
  // Add more greetings in different languages if needed
];

const Main = () => {
  const [colorChange, setColorChange] = useState(false);
  const [currentGreetIndex, setCurrentGreetIndex] = useState(0);

  const changeNavColor = () => {
    if (window.scrollY >= 15) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetIndex((prevIndex) => (prevIndex + 1) % greet.length);
    }, 1000);

    window.addEventListener('scroll', changeNavColor);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', changeNavColor);
    };
  }, []);

  return (
    <div className={colorChange ? 'main colorchange' : 'main'}>
      <h2>
        <span className="hello">{greet[currentGreetIndex].greet}</span>
        <span className="dot">.</span>
      </h2>
      <h3 className='main-para'>
      Aditya Kumar here – a Software Developer from India. I orchestrate with 'Design, Development, and Dignity' to tackle both coding challenges and real-life complexities. Embarking on a journey where every pixel and line of code weaves a tale of innovation and creativity.
      </h3>
      {/* <div className="buttons">
        <button className='about'>About Me</button>
        <button className='contact'>Contact Me</button>
      </div> */}
    </div>
  );
};

export default Main;
