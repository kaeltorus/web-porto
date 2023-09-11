import "./ExpCardStyles.css";
import ExpCard from "./ExpCard";
import ExpCardData from "./ExpCardData";

import React from "react";

const Exp = () => {
  return (
    <div className="experience-container">
      <h1 className="exp-heading">Experience</h1>
      <div className="exp-container">
        {ExpCardData.map((val, ind) => {
          return (
            <ExpCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Exp;
