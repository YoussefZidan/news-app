import React from "react";
import * as Icon from "react-feather";

const LatestNewsCard = ({ img, subTitle, title, btnLabel }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        height: "350px",
        position: "relative",
        padding: "30px",
        borderRadius: ".3rem",
      }}>
      <div
        style={{
          position: "absolute",
          maxHeight: "150px",
          padding: "20px",
          bottom: "10px",
          left: "10px",
          right: "10px",
          borderRadius: ".3rem",
          backgroundColor: `rgba(255,255,255,.8)`,
        }}>
        <p>{subTitle}</p>
        <h2 className="display-6 font-weight-bold">{title}</h2>
        <p className="text-success pointer d-inline-block">
          {btnLabel} <Icon.ArrowRight />
        </p>
      </div>
    </div>
  );
};

export default LatestNewsCard;
