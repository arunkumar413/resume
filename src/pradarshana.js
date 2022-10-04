import React, { Component } from "react";

export function Pradarshana() {
  return (
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

      <div className="preview-link">
        <a href="https://arunkumar413.github.io/pradarshana/" target="_blank">
          Preview app
        </a>
      </div>
    </div>
  );
}
