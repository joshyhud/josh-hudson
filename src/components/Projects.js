import React from "react";
import "../assets/css/Projects.scss";

const projects = [
  {
    title: "Project 1",
    description: "A cool project using React.",
    image: "project1.jpg",
    link: "#",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h3>My Projects</h3>
      <div className="project-cards">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <img src={project.image} alt={project.title} />
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href={project.link} className="btn">
              View More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
