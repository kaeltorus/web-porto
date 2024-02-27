import "./FooterStyles.css";

import React from "react";
import {
  FaHome,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="kiri">
          <a href="https://goo.gl/maps/WdiLAvNp6twUoT6t6">
            <div className="lokasi">
              <FaHome
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              <div>
                <p>Samosir Regency, North Sumatera</p>
                <p>Indonesia.</p>
              </div>
            </div>
          </a>
          <div className="phone">
            <a href="https://wa.me/6282160175986">
              <h4>
                <FaWhatsapp
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                0821-6017-5986
              </h4>
            </a>
          </div>
          <div className="mail">
            <a href="mailto:mikhaeltorus@gmail.com">
              <h4>
                <GiMailbox
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                mikhaeltorus@gmail.com
              </h4>
            </a>
          </div>
        </div>
        <div className="kanan">
          <h4>About me.</h4>
          <p>
            During my studies i did analysis based on data and some experience
            programming languages. Currently focusing on React.js and basic CSS.
            As a quick learner with high curiousity i like to learn something to
            improve my skills.😁
          </p>
          <div className="socialmedia">
            <a href="https://www.instagram.com/mikhaelsitorus/">
              <FaInstagram
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
            {/* <a href="https://twitter.com/mkhlstrs">
              <FaTwitter
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a> */}
            <a href="https://www.linkedin.com/in/mikhael-sitorus/">
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
            {/* <a href="https://github.com/kaeltorus">
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
