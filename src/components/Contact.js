import React from "react";
import "../assets/css/Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="container__outer">
      <div className="contact container__inner">
        <h3>Contact Me</h3>
        <form
          action="mailto:&#106;&#111;&#115;&#104;&#104;&#117;&#100;&#115;&#111;&#110;&#100;&#101;&#118;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
          method="post"
          encType="text/plain"
        >
          <input
            type="text"
            name="Your Name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="Your Email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="Your Message"
            placeholder="Your Message"
            required
          ></textarea>
          <a type="submit" className="btn">
            Submit
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
