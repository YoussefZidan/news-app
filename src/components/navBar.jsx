import React, { useState } from "react";
import { Navbar, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import avatar from "../assets/imgs/avatar.png";
import { spaces } from "./../utility/constants";

/**
 * NavBar Component
 */
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const style = {
    height: spaces.navBarHeight,
  };
  return (
    <React.Fragment>
      {/* navbar height space gap */}
      <div style={style}></div>
      <Navbar style={style} color="primary" expand="md" className="fixed-top">
        <div className="container">
          <NavLink to="/">
            <img src={logo} alt="Logo" width="60vw" />
          </NavLink>
          <Nav className="ml-auto" navbar>
            <NavLink to="/">
              <img src={avatar} alt="User" width="40vw" />
            </NavLink>
          </Nav>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
