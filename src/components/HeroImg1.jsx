import "./HeroImg1Styles.css";

import React from "react";

import Beranda from "../assets/beranda.jpg";
import { Link } from "react-router-dom";

const HeroImg1 = () => {
  return (
    <div className="beranda">
      <div className="mask">
        <img className="berandaImg" src={Beranda} alt="Beranda" />
      </div>
      <div className="content">
        <p>Hey, my name's Mikhael Sitorus 🙋🏻‍♂️</p>
        <p>yeah you know, like the famous boxer.</p>
        <br />
        <p>Im' a Web Developer</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/experience" className="btn">
            Experience
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg1;
