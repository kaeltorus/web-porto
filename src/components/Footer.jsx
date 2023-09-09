import "./FooterStyles.css";

import React from "react";
import {
  FaHome,
  FaPhone,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="kiri">
          <div className="lokasi">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Samosir Regency, North Sumatera</p>
              <p>Indonesia.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              0821-6017-5986
            </h4>
          </div>
          <div className="mail">
            <h4>
              <GiMailbox
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              mikhaeltorus@gmail.com
            </h4>
          </div>
        </div>
        <div className="kanan">
          <h4>About me.</h4>
          <p>
            I am the guy who is going to make the entire world turn its head
            towards me and congratulations, you are the first set. 😁
          </p>
          <div className="socialmedia">
            <FaInstagram
              size={30}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
