import React from "react";
import { isMobile } from "../../../utility/commonFunctions";
import ListItemComponent from "./listItem";
import { isTablet } from "../../../utility/commonFunctions";

const navItems = [
  {
    label: "Home",
    to: "/home",
  },
  {
    label: "News",
    to: "/news",
  },
];

/**
 *
 * SideMenu Component
 */
const SideMenu = ({ toggle }) => {
  const sideMenuContainerStyles = {
    display: "none",
    background: "rgba(0,0,0,0.3)",
    height: "100vh",
    position: "fixed",
    top: "80px",
    zIndex: "200",
    width: "100vw",
  };
  const sideMenuStyles = {
    background: "white",
    height: "100vh",
    position: "fixed",
    top: "80px",
    zIndex: "1000",
    transition: "ease",
    transitionDuration: ".5s",
    left: "-100vw",
    padding: "25px",
    width: isMobile() ? "70vw" : isTablet() ? "50vw" : "25vw",
  };

  const renderListItems = () => {
    return navItems.map((navItem) => (
      <ListItemComponent
        navItem={navItem}
        key={navItem.label}
        toggle={toggle}
      />
    ));
  };

  return (
    <React.Fragment>
      <div
        style={sideMenuContainerStyles}
        className="sideMenuContainer"
        id="sideMenuContainer"
        onClick={toggle}></div>
      <div style={sideMenuStyles} id="sideMenuContent">
        <ul className="p-0">{renderListItems()}</ul>
      </div>
    </React.Fragment>
  );
};

export default SideMenu;
