import React from "react";
import "../assets/css/Skills.scss";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h3>My Skills</h3>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill">
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
