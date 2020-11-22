import React from "react";
import banner from "../../assets/imgs/banner.jpg";
import recs from "../../assets/imgs/recs.png";
import { isHD, isLabTop, isMobile } from "../../utility/commonFunctions";
import { isLabTopLarge, isTablet } from "./../../utility/commonFunctions";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: ` url(${recs}), url(${banner})`,
    height: isMobile()
      ? "60vh"
      : isTablet()
      ? "80vh"
      : isLabTop()
      ? "100vh"
      : isLabTopLarge()
      ? "100vh"
      : isHD()
      ? "100vh"
      : "100vh",
    backgroundSize: `${
      isMobile()
        ? "100%"
        : isTablet()
        ? "100%"
        : isLabTop()
        ? "90% "
        : isLabTopLarge()
        ? "65%"
        : isHD()
        ? "55%"
        : "50%"
    },
    cover`,
    backgroundPosition: "center bottom, center center",
    backgroundRepeat: "no-repeat",
  };

  const headerStyle = {
    fontSize: "8vw",
    paddingTop: "5vh",
  };

  return (
    <div style={bannerStyle} className="banner text-white text-center">
      <h2 className="font-weight-bold mb-4" style={headerStyle}>
        We Have Helped
      </h2>
      <p className="w-75 m-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et ut
        rerum, nulla, dolorem quaerat id ipsum, eius natus cum quo. Nisi animi
        illum consectetur.
      </p>
    </div>
  );
};

export default Banner;
