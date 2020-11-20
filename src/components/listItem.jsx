import React from "react";
import { NavLink } from "react-router-dom";

const ListItemComponent = ({ navItem, clicked }) => {
  return (
    <li onClick={clicked}>
      <NavLink to={navItem.to} activeClassName="nav-active">
        {/* Text */}
        <div className="navItem text-dark p-2 mb-2">
          <div className="label pr-3 inactive">
            <span>{navItem.label}</span>
          </div>
        </div>
      </NavLink>
    </li>
  );
};

export default ListItemComponent;
