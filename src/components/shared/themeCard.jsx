import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
} from "reactstrap";
import * as Icon from "react-feather";
import { truncate } from "../../utility/commonFunctions";
import moment from "moment";

const ThemeCard = ({
  cardImg = null,
  cardTitle = null,
  cardSubTitle = null,
  cardText = null,
  cardBtn = null,
  publishedAt = null,
}) => {
  const cardStyle = { minHeight: "450px" };
  const cardImgStyle = {
    height: "150px",
    backgroundImage: `url(${cardImg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
  };
  const cardTextStyle = {
    minHeight: "100px",
  };
  return (
    <Card style={cardStyle}>
      {cardImg && <div style={cardImgStyle}></div>}
      <CardBody>
        <div>
          {/* Icons */}
          <small className="d-block text-right mb-2">
            <Icon.Heart className="pointer text-success mr-2" />
            <Icon.Share2 className="pointer text-success" />
          </small>
          {cardTitle && <CardTitle tag="h5">{cardTitle}</CardTitle>}
          {/* Tags */}
          <h5 className="mb-3">
            <Badge className="bg-light-gray">News</Badge>
          </h5>
        </div>
        <div className="d-flex flex-column justify-content-around h-100">
          {/* Title */}
          {cardSubTitle && (
            <CardSubtitle tag="h4" className="text-dark mb-2">
              {cardSubTitle}
            </CardSubtitle>
          )}
          {/* Description */}
          <CardText style={cardTextStyle} className="text-muted">
            {truncate(cardText, 150) || "No Description"}
          </CardText>
          {cardBtn && (
            <Button onClick={cardBtn.onClick}>{cardBtn.label}</Button>
          )}
          {publishedAt && (
            <span className="text-muted">
              <Icon.Calendar className="text-success mr-3" size={20} />
              {moment(publishedAt).format("ddd, LL")}
            </span>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ThemeCard;
