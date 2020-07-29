import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./About.css";

const Home = () => {
  return (
    <div>
      <h1 className="header">Welcome</h1>
      <p className="text">
        Hello, my name is Joshua Davids. I am a Frontend developer, from Cape
        Town, South Africa. On this blog I will be writing about basic
        fundamentals of web development to frontend development including basic
        backend development.
      </p>
      <p className="text">
        Posts will be aimed at beginners, junior frontend developers and junior
        web developers. If you would like posts relating to a particular topic,
        feel free to send me an email <Link to="/contact">here</Link>. For more
        information, please subscribe to my monthly newsletter, which will
        contain cheetsheats and resources to help YOU be better.
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
      {/* <div className="users">
        <div className="image">
          <img
            className="profile"
            src="https://i.postimg.cc/59ZBrVMS/joshuadavids.png"
            alt="profile"
          />
        </div>
        <div className="sub">
          <p>newsletter</p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
