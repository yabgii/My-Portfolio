import React from "react";
import "./../styles/home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: ["Yeabesira", "UI/UX Designer", "Fullstack Developer"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 70,
    delaySpeed: 1000,
  });

  return (
    <div className="heroContainer" id="home">
      <div className="heroText">
        <h1>
          Hello, I'm <span>{text}</span> <Cursor />
        </h1>
        <p className="heroSubtext">
          Bringing ideas to life through design, creativity, and technology, one
          project at a time.
        </p>
      </div>
      <div className="cta-btns">
        <a href="#cont">
          <button className="contact-me">Contact Me</button>
        </a>
        <a href="/cv.pdf" download="Yeabesira_Resume.pdf">
          <button className="resume-btn">Download Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
