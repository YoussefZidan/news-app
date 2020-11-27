import React from "react";
import { NavLink } from "react-router-dom";

const ListItemComponent = ({ navItem, toggle }) => {
  return (
    <li onClick={toggle}>
      <NavLink to={navItem.to} activeClassName="nav-active">
        {/* Text */}
        <div className="navItem text-dark p-2 mb-2">
          <div className="label pr-3 inactive-link">
            <span>{navItem.label}</span>
          </div>
        </div>
      </NavLink>
    </li>
  );
};

export default ListItemComponent;
