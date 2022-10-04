import React, { Component } from "react";
import "./App.css";
import { Calendar } from "./Calendar";
import { Pradarshana } from "./pradarshana";
import { ServonkSettings } from "./servonkProject";
import { TippaniProject } from "./tippaniProject";

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

          <Calendar />
          <Pradarshana />
          <ServonkSettings />
          <TippaniProject />
        </div>
      </div>
    );
  }
}

export default App;
