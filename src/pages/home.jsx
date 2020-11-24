import React, { useEffect } from "react";
import LatestNews from "../components/home/latestNews";
import Carosel from "./../components/home/carosel";
import Banner from "./../components/home/banner";
import { toTop } from "../utility/commonFunctions";

const Home = () => {
  useEffect(() => {
    toTop();
  }, []);
  return (
    <React.Fragment>
      <Carosel />
      <LatestNews />
      <Banner />
    </React.Fragment>
  );
};

export default Home;
