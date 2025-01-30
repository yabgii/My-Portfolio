import React, { useEffect } from "react";
import AOS from "aos";
import "./../styles/about.css";
import Myimg from "../assets/photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faBootstrap,
  faGitAlt,
  faGithub,
  faPhp,
  faFigma,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faTerminal,
  faServer,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="aboutContainer" id="ab">
      <div className="aboutContent" data-aos="fade-up">
        <div className="aboutText">
          <h1>About Me</h1>
          <p>
            Hello! I'm Yeabesira, a passionate full-stack developer specializing
            in React and Node.js. I love building dynamic, responsive, and
            user-friendly web applications that bring ideas to life. My journey
            into development started with a deep curiosity for how the web
            works, and it has grown into an exciting career of problem-solving
            and innovation. When I'm not coding, I'm exploring new technologies,
            refining my skills, and collaborating on creative projects. I
            believe in continuous learning and always stay updated with the
            latest trends in web development.
          </p>
        </div>
        <div className="about-image">
          <img src={Myimg} alt="About Me" />
        </div>
      </div>
      <section className="skills">
        <div className="skills-content" data-aos="fade-down-right">
          <h1>Skills</h1>
          <div className="skills-card-container">
            <div className="skill-card">
              <h3>Frontend</h3>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faHtml5} className="skill-icon" /> HTML
                </li>
                <li>
                  <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />{" "}
                  CSS
                </li>
                <li>
                  <FontAwesomeIcon icon={faJs} className="skill-icon" />
                  JavaScript
                </li>
                <li>
                  <FontAwesomeIcon icon={faReact} className="skill-icon" />
                  React
                </li>
                <li>
                  <FontAwesomeIcon icon={faBootstrap} className="skill-icon" />
                  Bootstrap
                </li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Backend</h3>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
                  Node.js
                </li>
                <li>
                  <FontAwesomeIcon icon={faServer} className="skill-icon" />
                  Express
                </li>
                <li>
                  <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                  MySQL
                </li>
                <li>
                  <FontAwesomeIcon icon={faCode} className="skill-icon" />
                  RESTful APIs
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhp} className="skill-icon" />
                  PHP
                </li>
                <li>
                  <FontAwesomeIcon icon={faJava} className="skill-icon" />
                  Java
                </li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Tools</h3>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faGitAlt} className="skill-icon" /> Git
                </li>
                <li>
                  <FontAwesomeIcon icon={faGithub} className="skill-icon" />
                  GitHub
                </li>
                <li>
                  <FontAwesomeIcon icon={faCode} className="skill-icon" /> VS
                  Code
                </li>
                <li>
                  <FontAwesomeIcon icon={faTerminal} className="skill-icon" />
                  Postman
                </li>
                <li>
                  <FontAwesomeIcon icon={faFigma} className="skill-icon" />
                  Figma
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
