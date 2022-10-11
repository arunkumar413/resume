import React from "react";

export function Calendar() {
  return (
    <div className="project-block">
      <h4 className="project-name"> Calender</h4>
      <p className="details">
        A simple calendar application based on react with great visual asthetics
      </p>
      <div className="l">i
        {" "}
        <p className="project-link">
          <a
            className="link"
            href="https://github.com/arunkumar413/Calendar"
            target="_blank"
          >
            https://github.com/arunkumar413/Calendar{" "}
          </a>
        </p>
        <div className="preview-link">
          <a href="https://arunkumar413.github.io/Calendar/" target="_blank">
            Preview app
          </a>
        </div>
      </div>
      <div className="tags">
        {/* <span className="tag highlight">Skills:</span> */}
        <span className="tag">Nodejs</span>
        <span className="tag">Expressjs</span>
        <span className="tag">React</span>
        <span className="tag">HTML</span>
        <span className="tag">CSS</span>
      </div>
    </div>
  );
}
