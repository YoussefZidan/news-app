import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Badge,
  Progress,
  UncontrolledTooltip,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import avatar from "../assets/imgs/avatar.png";
import { spaces } from "./../utility/constants";
import * as Icon from "react-feather";
import SideMenu from "./sideMenu";
import { useSelector } from "react-redux";
import { isMobile } from "./../utility/commonFunctions";

/**
 * NavBar Component
 */
const NavBar = () => {
  const { loaders } = useSelector((state) => state);
  const toggleSideMenu = () => {
    let sideMenuContainer = document.getElementById("sideMenuContainer");
    let sideMenuContent = document.getElementById("sideMenuContent");

    if (sideMenuContainer.style.display === "block") {
      sideMenuContainer.style.display = "none";
      sideMenuContent.style.left = "-100vw";
    } else {
      sideMenuContainer.style.display = "block";
      sideMenuContent.style.left = "0";
    }
  };

  const style = {
    height: spaces.navBarHeight,
  };
  const badgeStyle = {
    height: "15px",
    width: "5px",
    position: "absolute",
    top: "-5px",
    left: "15px",
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
          <Nav className="ml-auto align-items-center" navbar>
            <div className="mr-4 d-flex align-items-center">
              {/* Search */}
              <NavItem>
                <InputGroup>
                  <Input className=" search-input bg-transparent-gray border-0 text-white" />
                  <InputGroupAddon addonType="append" className="m-0">
                    <InputGroupText className="pointer bg-transparent-gray border-0 m-0">
                      <Icon.Search className="text-white" size={20} />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </NavItem>

              {/* Notification */}
              <NavItem className="position-relative pointer d-none d-md-block">
                <div
                  className="icon-container p-2 badge mx-lg-2"
                  id="notifications">
                  <Icon.Bell className="text-white" size={25} />
                </div>
                <Badge
                  color="success"
                  pill
                  className="badge-up"
                  style={badgeStyle}></Badge>
              </NavItem>
              <UncontrolledTooltip target="notifications" placement="bottom">
                Notifications
              </UncontrolledTooltip>
            </div>
            {/* Avatar */}
            <div className="d-none d-sm-block">
              <NavItem className="mr-4 d-flex align-items-center pointer">
                <img src={avatar} alt="User" width="40vw" />
                <p className="my-0 ml-2 text-white ">User Name</p>
              </NavItem>
            </div>

            {/* Settings */}
            <NavItem className="d-none d-sm-block pointer">
              <div className="icon-container p-2 badge" id="settings">
                <Icon.Settings className="text-white" size={30} />
              </div>
            </NavItem>
            <UncontrolledTooltip target="settings" placement="bottom">
              Settings
            </UncontrolledTooltip>
          </Nav>
        </div>

        {Boolean(loaders.totalRequestsArr.length) && (
          <Progress
            animated
            color="success"
            max={loaders.totalRequests}
            value={loaders.loading}
          />
        )}
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
