// import React from "react";

import About from "../About/About";
import Achievements from "../Achievements/Achievements";
import Hero from "../Hero/Hero";
import ProblemSolving from "../ProblemSolving/ProblemSolving";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <ProblemSolving></ProblemSolving>
      <Achievements></Achievements>
    </div>
  );
};

export default Home;
