import React from "react";
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
} from "reactstrap";
import { iconIds, spaces } from "./../../../utility/constants";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/imgs/logo.png";
import avatar from "../../../assets/imgs/avatar.png";
import { truncate } from "../../../utility/commonFunctions";

/**
 *
 * NavBar Component
 */
const NavBar = ({ iconType, toggleSideMenu }) => {
  const { loaders } = useSelector((state) => state);

  const style = {
    height: spaces.navBarHeight,
  };

  return (
    <React.Fragment>
      {/* navbar height space gap */}
      <div style={style}></div>

      {/* NavBar */}
      <Navbar style={style} color="primary" expand="md" className="fixed-top">
        <div className="container">
          {/* Toggle Icon and Brand */}
          <div>
            {/* Toggle Icon */}
            {iconType === iconIds.burger && (
              <Icon.AlignLeft
                className="text-white mr-3 pointer"
                size={38}
                onClick={() => {
                  toggleSideMenu();
                }}
              />
            )}
            {iconType === iconIds.close && (
              <Icon.X
                className="text-white mr-3 pointer"
                size={38}
                onClick={() => {
                  toggleSideMenu();
                }}
              />
            )}
            {/* Logo */}
            <NavLink to="/" className="pointer">
              <img src={logo} alt="Logo" width="60vw" />
            </NavLink>
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
              <UncontrolledDropdown>
                <DropdownToggle tag="a" className="pointer">
                  <div
                    className="icon-container p-2 badge mx-lg-2"
                    id="notifications">
                    <Icon.Bell className="text-white" size={25} />
                    <Badge
                      color="success"
                      pill
                      className="badge-up notification-badge">
                      <span> </span>
                    </Badge>
                    <UncontrolledTooltip
                      target="notifications"
                      placement="bottom">
                      Notifications
                    </UncontrolledTooltip>
                  </div>
                </DropdownToggle>
                <DropdownMenu style={{ minWidth: 200 }}>
                  <DropdownItem header>Resent Notifications</DropdownItem>
                  <DropdownItem tag="span">
                    {truncate(
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit Quas, laboriosam",
                      30
                    )}
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag="span">
                    {truncate("Lorem ipsum dolor sit", 30)}
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag="span">
                    <span className="text-success">
                      All Notifications <Icon.ArrowRight />
                    </span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
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
                  <DropdownItem header>Language</DropdownItem>
                  <DropdownItem>English</DropdownItem>
                  <DropdownItem>العربية</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem header>Font Size</DropdownItem>
                  <DropdownItem tag="span">
                    <div className="d-flex align-items-center pointer">
                      <h2 className="mr-3 pointer">A</h2>
                      <h4 className="text-success mr-3 pointer">A</h4>
                      <h5>A</h5>
                    </div>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem header>Account</DropdownItem>
                  <DropdownItem>
                    <h5>Logout</h5>
                  </DropdownItem>
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
