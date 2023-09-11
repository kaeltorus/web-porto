import "./HobbyCardStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const HobbyCard = () => {
  return (
    <div className="hobbies">
      <h1 className="exp-heading">Project</h1>
      <div className="card-container">
        <div className="card">
          <h3>-basic-</h3>
          <span className="bar"></span>
          <p className="btc">XOXO</p>
          <p>- 1 -</p>
          <p>- 1 -</p>
          <p>- 1 -</p>
          <p>- 1 -</p>
          <Link to="/contact" className="btn">
            GO NOW
          </Link>
        </div>
        <div className="card">
          <h3>-basic-</h3>
          <span className="bar"></span>
          <p className="btc">XOXO</p>
          <p>- 2 -</p>
          <p>- 2 -</p>
          <p>- 2 -</p>
          <p>- 2 -</p>
          <Link to="/contact" className="btn">
            GO NOW
          </Link>
        </div>
        <div className="card">
          <h3>-basic-</h3>
          <span className="bar"></span>
          <p className="btc">XOXO</p>
          <p>- 3 -</p>
          <p>- 3 -</p>
          <p>- 3 -</p>
          <p>- 3 -</p>
          <Link to="/contact" className="btn">
            GO NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HobbyCard;
