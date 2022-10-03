import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="name">Arun Kumar Kadari</h1>
          <p className="job-title head-item">Fullstack Developer</p>
          <p className="head-item">9966288507</p>
          <p className="head-item">arunkumar413@gmail.com</p>
        </div>

        <div className="projects-container">
          <h2 className="project-heading">Projects</h2>

          <div className="project-block">
            <h4 className="project-name"> Calender</h4>
            <p className="details">
              A simple calendar application based on react with great visual
              asthetics
            </p>

            <p className="project-link">
              <a
                className="link"
                href="https://github.com/arunkumar413/Calendar"
                target="_blank"
              >
                https://github.com/arunkumar413/Calendar{" "}
              </a>
            </p>
            <div className="tags">
              <span className="tag highlight">Skills:</span>
              <span className="tag">Nodejs</span>
              <span className="tag">Expressjs</span>
              <span className="tag">React</span>
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
            </div>
          </div>
          <div className="project-block">
            <h4 className="project-name"> Pradarshana</h4>
            <p className="details">
              A web based presentation tool with extensible features. Uses react
            </p>

            <p className="project-link">
              <a
                target="_blank"
                className="link"
                href="https://github.com/arunkumar413/pradarshana"
              >
                https://github.com/arunkumar413/pradarshana
              </a>
            </p>
            <div className="tags">
              <span className="tag">Nodejs</span>
              <span className="tag">Expressjs</span>
              <span className="tag">React</span>
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">Material UI</span>
            </div>
          </div>
          <div className="project-block">
            <h4 className="project-name"> Servonk Settings</h4>
            <p className="details">
              A beautiful web based page to manage the settings of servo based
              web browser. Plan to adapt to new browsers and Linux based
              distributions. This could eventually become part of larger UI
              adaptations to linux distributions.
            </p>

            <p className="project-link">
              <a
                target="_blank"
                className="link"
                href="https://github.com/arunkumar413/servonk_settings_page"
              >
                https://github.com/arunkumar413/servonk_settings_page
              </a>
            </p>

            <div className="tags">
              <span className="tag">VanilaJs</span>
              <span className="tag">HTML</span>
              <span className="tag">JavaScript</span>
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">Fontawesome Icons</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
