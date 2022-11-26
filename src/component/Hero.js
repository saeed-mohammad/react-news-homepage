import React from "react";
import webHero from "../assets/images/image-web-3-desktop.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={webHero} alt="" className="img" />
      <h2>The Bright Future of Web 3.0?</h2>
      <div className="info">
        <p>
          We dive onto the next evolution of the wev that claims to put the power of the
          platforms back into the gands of the people. But is it really fulfilling its
          promise?
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
};

export default Hero;
