import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div>
      <h1 className="header">About Me</h1>
      <p className="text">
        I am a frontend developer, looking to help those who are interested in
        learning the fundamentals for basic web development, frontend design,
        and a little backend development.{" "}
      </p>
      <p className="text">
        I will take you on a post-by-post journey from how to google properly,
        to the languages which will help you strengthen your skills and become a
        skilled developer.
      </p>
      <br />
      <h3 className="header center">Why this blog?</h3>
      <p className="text">
        My aim is to help you become the you, that aspire to be in five years
        from where you are at this moment
      </p>
      <p className="text">
        <i>
          I started coding since Febraury 2020, learning the basics and moving
          onto harder concepts faster. I took note of all the problems and
          difficult topics which I made into cheetsheets for you. For any
          problem, you may encounter on a particular project, feel free to
          contact me <Link to="/contact">here</Link>.
        </i>
      </p>
      <div className="center">
        <a
          className="social"
          target="blank"
          href="https://github.com/JoshuaDavids"
        >
          Github
        </a>
        <a
          className="social"
          target="blank"
          href="https://joshuadavids.netlify.app/"
        >
          Portfolio
        </a>
        <a
          className="social"
          target="blank"
          href="https://codepen.io/JoshuaDavids"
        >
          Codepen
        </a>
      </div>
    </div>
  );
};

export default About;
