import React, { useState, useEffect } from "react";
import "./Main.css";
import { TypeAnimation } from "react-type-animation";

const greet = [
  {
    id: 1,
    country: "india",
    greet: "नमस्ते",
  },
  {
    id: 2,
    country: "usa",
    greet: "Hello",
  },
  {
    id: 3,
    country: "france",
    greet: "Bonjour",
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

    window.addEventListener("scroll", changeNavColor);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", changeNavColor);
    };
  }, []);

  return (
    <div className={colorChange ? "main colorchange" : "main"}>
      <h1>You landed at right place.</h1>
    </div>
  );
};

export default Main;
