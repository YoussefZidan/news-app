import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Details = () => {
  const { news } = useState((state) => state);

  const cardImgStyle = {
    height: "400px",
    backgroundImage: `url(https://dummyimage.com/600x400/000/fff)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <Container className="pb-5">
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
      <h2 className="display-4 font-weight-bold mb-4">News Details</h2>
      <Card>
        {/* Card Img */}
        <div style={cardImgStyle}></div>
        <CardBody>
          <CardSubtitle tag="h6" className="mt-2 mb-2 text-muted">
            Category Name
          </CardSubtitle>
          <CardTitle tag="h2" className="font-weight-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </CardTitle>
          <p className="text-muted mb-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            optio molestiae aliquam nihil sunt corporis, quam ipsam neque
            corrupti officiis aut quod expedita quia vitae voluptate sapiente
            itaque suscipit dignissimos culpa assumenda repellat adipisci?
            Tempora debitis exercitationem eligendi dolor blanditiis sequi, esse
            libero adipisci iusto officia nisi ratione magnam sapiente!
          </p>
        </CardBody>
      </Card>

      {/* Related Topics */}
      <h2 className="display-4 font-weight-bold mb-4 mt-5">Related Topics</h2>
    </Container>
  );
};

export default Details;
