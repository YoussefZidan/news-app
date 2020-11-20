import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  UncontrolledTooltip,
} from "reactstrap";

const ThemeCard = ({
  cardImg = null,
  cardTitle = null,
  cardSubTitle = null,
  cardText = null,
  cardBtn = null,
}) => {
  const cardStyle = { minHeight: "350px" };
  const cardImgStyle = {
    height: "150px",
    backgroundImage: `url(${cardImg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <Card style={cardStyle}>
      {cardImg && <div style={cardImgStyle}></div>}
      <CardBody>
        {cardTitle && <CardTitle tag="h5">{cardTitle}</CardTitle>}
        {cardSubTitle && (
          <CardSubtitle tag="h4" className="text-dark mb-2">
            {cardSubTitle}
          </CardSubtitle>
        )}
        <CardText className="text-muted">
          {cardText || "No Description"}
        </CardText>
        {cardBtn && <Button onClick={cardBtn.onClick}>{cardBtn.label}</Button>}
      </CardBody>
    </Card>
  );
};

export default ThemeCard;
