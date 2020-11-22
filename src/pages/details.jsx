import React from "react";
import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap";
import { NavLink } from "react-router-dom";

const Details = () => {
  return (
    <Container>
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <NavLink to="/" className="text-muted">Home</NavLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <NavLink to="/" className="text-muted">News</NavLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <NavLink to="/" className="text-primary">
              News Details
            </NavLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </Container>
  );
};

export default Details;
