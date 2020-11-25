import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const ThemeBreadCrumbs = ({ items }) => {
  return (
    <Breadcrumb>
      {items.map((ele) => (
        <BreadcrumbItem key={ele.label}>
          <NavLink to={ele.to}>
            <span className={ele.active ? "text-white badge badge-primary p-2" : "text-muted"}>
              {ele.label}
            </span>
          </NavLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default ThemeBreadCrumbs;
