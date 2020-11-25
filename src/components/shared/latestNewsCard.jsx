import React from "react";
import * as Icon from "react-feather";
import { truncate } from "../../utility/commonFunctions";

const LatestNewsCard = ({ img, subTitle, title, btnLabel, rest }) => {
  return (
    <div
      {...rest}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "350px",
        position: "relative",
        padding: "30px",
        borderRadius: ".3rem",
      }}>
      <div
        style={{
          position: "absolute",
          height: "200px",
          padding: "20px",
          bottom: "10px",
          left: "10px",
          right: "10px",
          borderRadius: ".3rem",
          backgroundColor: `rgba(255,255,255,.8)`,
        }}>
        <p>{subTitle}</p>
        <h5 className="font-weight-bold">{truncate(title, 50)}</h5>
        <p className="text-success pointer d-inline-block mt-3">
          {btnLabel} <Icon.ArrowRight />
        </p>
      </div>
    </div>
  );
};

export default LatestNewsCard;
