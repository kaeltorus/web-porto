import "./ExpCardStyles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ExpCard from "./ExpCard";
import ExpCardData from "./ExpCardData";

import React from "react";

const Exp = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="experience-container">
      <h1 className="exp-heading">Experience</h1>
      <div className="exp-container">
        <Carousel responsive={responsive}>
          {ExpCardData.map((val, ind) => {
            return (
              <ExpCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Exp;
