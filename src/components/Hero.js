import React from "react";
import "../assets/css/Hero.scss";
import ProfileIcon from "./ProfileIcon";

const Hero = () => {
  return (
    <section id="home" className="container__outer">
      <div className="hero-container container__inner">
        <div className="hero-inner">
          <div className="hero__image">
            {/* <ProfileIcon /> */}
            <img src="./images/joshyhud-headshot.png" alt="Josh Hudson" />
          </div>
          <div className="hero__text">
            <h1>
              Hi, I'm Josh a web developer creating custom websites with
              WordPress, Shopify, and modern web technologies{" "}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
