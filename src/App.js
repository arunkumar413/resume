import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="name">Arun Kumar Kadari</h1>

        <p className="job-title head-item">Fullstack Developer</p>
        <p className="head-item">9966288507</p>
        <p className="head-item">arunkumar413@gmail.com</p>
        <h2 className="project-heading">Projects</h2>

        <div className="project-block">
          <h4 className="project-name"> Calender</h4>
          <p className="details">
            A simple calendar application based on react with great visual
            asthetics
          </p>
          <div className="tags">
            <span className="tag">Nodejs</span>
            <span className="tag">Expressjs</span>
            <span className="tag">React</span>
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
          </div>
          <p className="project-link">
            https://github.com/arunkumar413/Calendar{" "}
          </p>
        </div>
        <div className="project-block">
          <h4 className="project-name"> Pradarshana</h4>
          <p className="details">
            A web based presentation tool with extensible features. Uses react
          </p>
          <div className="tags">
            <span className="tag">Nodejs</span>
            <span className="tag">Expressjs</span>
            <span className="tag">React</span>
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">Material UI</span>
          </div>
          <p className="project-link">
            https://github.com/arunkumar413/pradarshana
          </p>
        </div>
      </div>
    );
  }
}

export default App;
