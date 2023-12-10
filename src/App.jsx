import { useEffect, useState } from "react";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Work from "./Components/Work";
import Techstack from "./Components/Techstack";
import Footer from "./Components/Footer";
import { Player } from "@lottiefiles/react-lottie-player";
import plane from "./assets/Animation - 1702118797836.json";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading ? (
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Player
            src={plane}
            className="player"
            autoplay
            loop
            style={{
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Main />
          <About />
          <Work />
          <Techstack />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
