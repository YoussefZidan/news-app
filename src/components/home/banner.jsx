import React from "react";
import Polygon from "../shared/polygon";

const Banner = () => {
  const headerStyle = {
    fontSize: "5vw",
    paddingTop: "2vh",
  };

  return (
    <div
      style={{ height: "100vh", backgroundColor: "gray" }}
      className="banner text-white text-center mx-auto">
      <div className="mb-5">
        <h2 className="font-weight-bold mb-4" style={headerStyle}>
          We Have Helped
        </h2>
        <p className="w-75 m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et
          ut rerum, nulla, dolorem quaerat id ipsum, eius natus cum quo. Nisi
          animi illum consectetur.
        </p>
      </div>
      <div
        className="m-auto p-5 d-none d-lg-block mt-5"
        style={{ width: "80%" }}>
        <div className="d-flex">
          <Polygon />
          <Polygon />
          <Polygon />
          <Polygon />
        </div>
        <div className="d-flex w-75 m-auto">
          <Polygon />
          <Polygon />
          <Polygon />
        </div>
      </div>
    </div>
  );
};

export default Banner;
