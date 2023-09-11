import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Exp from "../components/Exp";
import HobbyCard from "../components/HobbyCard";

const Experience = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="EXPERIENCE."
        text="Some of the things that have brought me here."
      />
      <Exp />
      <HobbyCard />
      <Footer />
    </div>
  );
};

export default Experience;
