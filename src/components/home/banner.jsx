import React from "react";
import Polygon from "../shared/polygon";

const Banner = () => {
  return (
    <div className="banner text-white text-center mx-auto">
      <div className="mb-5 text">
        <h2 className="text-header font-weight-bold mb-4">We Have Helped</h2>
        <p className="w-75 m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et
          ut rerum, nulla, dolorem quaerat id ipsum, eius natus cum quo. Nisi
          animi illum consectetur.
        </p>
      </div>
      <div className="polygons m-auto p-5 mt-5" style={{ width: "80%" }}>
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
