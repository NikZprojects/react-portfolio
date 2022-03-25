import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Project = ({ name, description, imgsrc, github, link }) => (
  <div className="split">
    <div className="half">
      <a href={link}>
        <img src={process.env.PUBLIC_URL + imgsrc} alt={name} />
      </a>
    </div>
    <div className="half">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="split">
        {github ? (
          <a href={github} className="button" target="_blank" rel="noreferrer">
            Github
          </a>
        ) : null}
        <a href={link} className="button">
          Link
        </a>
      </div>
    </div>
  </div>
);

export default Project;
