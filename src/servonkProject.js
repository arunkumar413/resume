import React, { Component } from "react";

export function ServonkSettings() {
  return (
    <div className="project-block">
      <h4 className="project-name"> Servonk Settings</h4>
      <p className="details">
        A beautiful web based page to manage the settings of servo based web
        browser. Plan to adapt to new browsers and Linux based distributions.
        This could eventually become part of larger UI adaptations to linux
        distributions.
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
        <span className="tag">CSS</span>
        <span className="tag">Fontawesome Icons</span>
      </div>

      <div className="preview-link">
        <a
          href="https://arunkumar413.github.io/servonk_settings_page/"
          target="_blank"
        >
          Preview app
        </a>
      </div>
    </div>
  );
}
