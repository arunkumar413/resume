import React from "react";

export function TippaniProject() {
  return (
    <div className="project-block">
      <h4 className="project-name"> Tippani</h4>
      <p className="details">
        Tippani is a simple and minimal plain text based notes app. The notes is
        stored in browser's local storage. This tool can be used for organizing
        to-dos,ideas, convert formattted text to plain text etc,.
      </p>

      <p className="project-link">
        <a
          target="_blank"
          className="link"
          href="https://github.com/arunkumar413/tippani"
        >
          https://github.com/arunkumar413/tippani
        </a>
      </p>

      <div className="tags">
        <span className="tag">VanilaJs</span>
        <span className="tag">HTML</span>
        <span className="tag">JavaScript</span>
        <span className="tag">CSS</span>
      </div>
      <div className="preview-link">
        <a href="https://arunkumar413.github.io/tippani/" target="_blank">
          Preview app
        </a>
      </div>
    </div>
  );
}
