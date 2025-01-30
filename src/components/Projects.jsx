import React, { useEffect } from "react";
import "../styles/projects.css";
import proj1 from "../assets/dmenu.jpg";
import proj2 from "../assets/pr1.jpg";
import proj3 from "../assets/budjet.jpg";
import proj4 from "../assets/bidding.jpg";
import AOS from "aos";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const projects = [
    {
      title: "smart-grinding-service-system",
      description:
        "a system which designed to modernize the wefcho bet (grinding)system in Ethiopia created with html,css,phP,and mysql",
      image: proj2,
      link: "https://github.com/yabgii/smart-grinding-service-system",
    },
    {
      title: "Digital menu",
      description:
        "a full stack real world implemented dynamic digital menu system with both client and admin side with react and node",
      image: proj1,
      link: "https://github.com/yabgii/digital-menu",
    },
    {
      title: "Personal Budjet tracker",
      description:
        "A fully dynamic Java application designed to track personal income and expenses.",
      image: proj3,
      link: "https://github.com/yabgii/personal-budget-tracker-",
    },
    {
      title: "A biding App",
      description:
        "A feature-rich bidding app UI built using React Native, designed for seamless user interaction, real-time updates, and a smooth bidding experience. ",
      image: proj4,
      link: "https://github.com/yabgii/NFT--bidngapp",
    },
  ];

  return (
    <div className="proj-container" data-aos="zoom-in">
      <h1>Projects</h1>
      <div className="proj-grid">
        {projects.map((project, index) => (
          <div className="proj-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="proj-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
