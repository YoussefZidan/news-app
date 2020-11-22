import React from "react";
import LatestNews from "../components/home/latestNews";
import Carosel from "./../components/home/carosel";
import Banner from "./../components/home/banner";
import Footer from "./../components/footer";

const Home = () => {
  return (
    <React.Fragment>
      <Carosel />
      <LatestNews />
      <Banner />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
