import React from "react";
import LatestNews from "../components/home/latestNews";
import Carosel from "./../components/home/carosel";
import Banner from "./../components/home/banner";

const Home = () => {
  return (
    <React.Fragment>
      <Carosel />
      <LatestNews />
      <Banner />
    </React.Fragment>
  );
};

export default Home;
