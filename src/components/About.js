import React from "react";
import "../assets/css/About.scss";

const About = () => {
  return (
    <section id="about" className="container__outer">
      <div className="about container__inner">
        <div className="about-text">
          <h3>About Me</h3>
          <p>
            I am a Web Developer on the south coast working in Brightons vibrant
            tech industry. I work with multiple coding languages like HTML, CSS,
            PHP, MySQL, JavaScript/JQuery, Liquid. I Build custom sites in
            WordPress and Shopify and have some knowledge of Laravel. I also
            dabble with React/NextJs and Sanity CMS and currently learning some
            3D with ThreeJS. I love to tinker with CSS animations making some
            abstract pieces and also really enjoy making generative art pieces
            which could be through JS and CSS or even using ChatGPT. Server
            management and dev ops skills with setting up and securing server
            environments for web and domain management. I started my development
            journey back in 2017 with night classes and joined up with
            codebar.io Brighton to expand and learn new skills. I then landed my
            first development job in 2018 and have been coding and learning ever
            since. The Brighton dev community is amazing, supporting and
            vibrant. I have spoken about my journey on podcasts and web
            interviews and happy to blog when i can about what I find
            interesting. If you would like to get in touch please reach out to
            me on the contact form.
          </p>
          <a href="#work" className="btn">
            View my Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
