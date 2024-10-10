import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FullBlock from "./components/FullWidthBlock";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <FullBlock backgroundColor="var(--gradient-1)">
        <h2>About Developement</h2>
        <p>I have written some text that you can read</p>
        <a class="btn" href="/about">
          Read more
        </a>
      </FullBlock>
      <FullBlock backgroundColor="var(--accent-color-2)">
        This is content
      </FullBlock>
      <FullBlock backgroundColor="var(--accent-color-3)">
        This is content
      </FullBlock>
      <FullBlock backgroundColor="var(--accent-color-4)">
        This is content
      </FullBlock>
      <FullBlock backgroundColor="var(--accent-color-5)">
        This is content
      </FullBlock>
      <FullBlock backgroundColor="var(--accent-color-6)">
        This is content
      </FullBlock>
      <FullBlock backgroundColor="var(--accent-color-7)">
        This is content
      </FullBlock>
      <FullBlock backgroundColor="var(--accent-color-8)">
        This is content
      </FullBlock>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
