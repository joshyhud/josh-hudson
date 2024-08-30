import React from "react";
import "../assets/css/Hero.scss";

const Hero = () => {
  return (
    <section id="home" className="container__outer">
      <div className="hero container__inner">
        <div className="hero__text">
          <h2>Hi, I’m Josh Hudson</h2>
          <p>
            A Web Developer from Sunny Worthing. An avid learner, css animations
            lover, dedicated coffee drinker & Fullstack morning person.
          </p>
        </div>
        <div className="hero__image">
          <img src="../assets/images/joshyhud-headshot.png" alt="Josh Hudson" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
