import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import HobbyCard from "../components/HobbyCard";

const Experience = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="PROJECT."
        text="Some of the code that have brought me here."
      />
      <HobbyCard />
      <Footer />
    </div>
  );
};

export default Experience;
