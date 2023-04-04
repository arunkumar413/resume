import React, { Component } from "react";
import "./App.css";
import { Calendar } from "./Calendar";
import { Links } from "./Links";
import { Pradarshana } from "./pradarshana";
import { ServonkSettings } from "./servonkProject";
import { Skills } from "./skills";
import { TippaniProject } from "./tippaniProject";
import profilePic from "./profile_image.jpeg";

class App extends Component {
  render() {
    return (
      <div>
        <div className="profile-container">
          <div className="header">
            <h1 className="name">Hi! I'm Arun Kumar Kadari</h1>
            <p className="job-title head-item">
              Working as a web developer since 8 years. I have sound knowledge
              and deep experience in web technologies.
            </p>
          </div>

          <div>
            <img src={profilePic} width={"60%"} />
          </div>
        </div>

        <div className="projects-container">
          <h2 className="project-heading">Projects</h2>

          <Calendar />
          <Pradarshana />
          <ServonkSettings />
          <TippaniProject />
        </div>
        <Skills />
        <Links />
      </div>
    );
  }
}

export default App;
