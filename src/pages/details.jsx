import React, { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import LatestNewsCard from "./../components/shared/latestNewsCard";
import { randomNumber } from "./../utility/commonFunctions";
import { useSelector } from "react-redux";

const Details = () => {
  const { news } = useSelector((state) => state);
  const cardImgStyle = {
    height: "400px",
    backgroundImage: `url(${news.singleNews.urlToImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const relatedTopics = [
    {
      id: randomNumber(),
      title: "First Topic",
      btnLabel: "View Details",
      img: "https://picsum.photos/600/600",
    },
    {
      id: randomNumber(),
      title: "Second Topic",
      btnLabel: "View Details",
      img: "https://picsum.photos/600/600",
    },
    {
      id: randomNumber(),
      title: "Third Topic",
      btnLabel: "View Details",
      img: "https://picsum.photos/600/600",
    },
  ];

  return (
    <Container className="pb-5">
      {/* Bread Crumbs */}
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <NavLink to="/" className="text-muted">
              Home
            </NavLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <NavLink to="/" className="text-muted">
              News
            </NavLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <NavLink to="/" className="text-primary">
              News Details
            </NavLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      {/* News Details */}
      <h2 className="display-4 font-weight-bold mb-4">News Details</h2>
      <Card>
        {/* Card Img */}
        <div style={cardImgStyle}></div>
        <CardBody>
          <CardSubtitle tag="h6" className="mt-2 mb-2 text-muted">
            Category Name
          </CardSubtitle>
          <CardTitle tag="h2" className="font-weight-bold">
            {news.singleNews.title}
          </CardTitle>
          <p className="text-muted mb-3">{news.singleNews.content}</p>
        </CardBody>
      </Card>

      {/* Related Topics */}
      <h2 className="display-4 font-weight-bold mb-4 mt-5">Related Topics</h2>
      <Row>
        {relatedTopics.map((ele) => (
          <Col lg={4}>
            <LatestNewsCard
              subTitle={ele.subTitle}
              title={ele.title}
              btnLabel={ele.btnLabel}
              img={ele.img}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Details;
