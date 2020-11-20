import React from "react";
import LatestNews from "../components/home/latestNews";
import Carosel from "./../components/home/carosel";

const Home = () => {
  return (
    <React.Fragment>
      <Carosel />
      <LatestNews />
    </React.Fragment>
  );
};

export default Home;
