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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import avatar from "../assets/imgs/avatar.png";
import { spaces } from "./../utility/constants";
import * as Icon from "react-feather";
import SideMenu from "./sideMenu";
import { useSelector } from "react-redux";

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
    top: "0",
    left: "25px",
  };

  return (
    <React.Fragment>
      {/* Side Menu Component */}
      <SideMenu toggle={toggleSideMenu} />

      {/* navbar height space gap */}
      <div style={style}></div>

      {/* NavBar */}
      <Navbar style={style} color="primary" expand="md" className="fixed-top">
        <div className="container">
          {/* Toggle Icon and Brand */}
          <div>
            {/* Toggle Icon */}
            <Icon.AlignLeft
              className="text-white mr-3 pointer"
              size={38}
              onClick={() => {
                toggleSideMenu();
              }}
            />
            {/* Logo */}
            <NavbarBrand className="pointer">
              <NavLink to="/">
                <img src={logo} alt="Logo" width="60vw" />
              </NavLink>
            </NavbarBrand>
          </div>

          {/* UL */}
          <Nav className="ml-auto align-items-center" navbar>
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
                style={badgeStyle}>
                <span> </span>
              </Badge>
              <UncontrolledTooltip target="notifications" placement="bottom">
                Notifications
              </UncontrolledTooltip>
            </NavItem>

            {/* Avatar */}
            <NavItem className="mr-4 d-none d-sm-flex align-items-center pointer">
              <figure className="m-0">
                <img src={avatar} alt="User" width="40vw" />
              </figure>
              <p className="my-0 ml-2 text-white">User Name</p>
            </NavItem>

            {/* Settings */}
            <NavItem>
              <UncontrolledDropdown>
                <DropdownToggle tag="a" className="pointer">
                  <div className="icon-container p-2 badge" id="settings">
                    <Icon.Settings className="text-white" size={30} />
                  </div>
                  <UncontrolledTooltip target="settings" placement="bottom">
                    Settings
                  </UncontrolledTooltip>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
          </Nav>
        </div>

        {/* Loader */}
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
