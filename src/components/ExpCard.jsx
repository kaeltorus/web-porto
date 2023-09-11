import "./ExpCardStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

const ExpCard = (props) => {
  return (
    <div className="exp-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="exp-title">
        {props.title.length > 24
          ? `${props.title.substring(0, 23)}...`
          : props.title}
      </h2>
      <div className="exp-details">
        <p>{props.text}</p>
        <div className="exp-btns">
          <NavLink to={props.view} className="btn">
            Maps
          </NavLink>
          <NavLink to={props.source} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
