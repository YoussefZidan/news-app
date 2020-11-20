import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
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
      <Navbar color="primary" expand="md" className="py-3 fixed-top">
        <div className="container">
          <NavbarBrand to="/">
            <NavLink to="/">
              <img src={logo} alt="Logo" width="60vw" />
            </NavLink>
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <img src={avatar} alt="User" width="40vw" />
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
