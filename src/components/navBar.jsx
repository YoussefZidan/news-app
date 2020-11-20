import React, { useState } from "react";
import { Navbar, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import avatar from "../assets/imgs/avatar.png";
import { spaces } from "./../utility/constants";
import * as Icon from "react-feather";
import SideMenu from "./sideMenu";

/**
 * NavBar Component
 */
const NavBar = () => {
  const toggleSideMenu = () => {
    let sideMenuContainer = document.getElementById("sideMenuContainer");
    let sideMenuContent = document.getElementById("sideMenuContent");

    if (sideMenuContainer.style.display === "block") {
      sideMenuContainer.style.display = "none";
      sideMenuContent.style.left = "-1000px";
    } else {
      sideMenuContainer.style.display = "block";
      sideMenuContent.style.left = "0";
    }
  };

  const style = {
    height: spaces.navBarHeight,
  };
  return (
    <React.Fragment>
      {/* Side Menu */}
      <SideMenu toggle={toggleSideMenu} />
      {/* navbar height space gap */}
      <div style={style}></div>
      <Navbar style={style} color="primary" expand="md" className="fixed-top">
        <div className="container">
          <Icon.AlignLeft
            className="text-white mr-3 pointer"
            size={38}
            onClick={() => {
              toggleSideMenu();
            }}
          />
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
