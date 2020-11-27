import React, { useState } from "react";
import Navbar from "./navBar";
import { iconIds } from "../../../utility/constants";
import SideMenu from "./sideMenu";

/**
 * NavBar Component
 */
const Header = () => {
  const [iconType, setIconType] = useState(iconIds.burger);
  const toggleSideMenu = () => {
    let sideMenuContainer = document.getElementById("sideMenuContainer");
    let sideMenuContent = document.getElementById("sideMenuContent");

    if (sideMenuContainer.style.display === "block") {
      sideMenuContainer.style.display = "none";
      sideMenuContent.style.left = "-100vw";
      setIconType(iconIds.burger);
    } else {
      sideMenuContainer.style.display = "block";
      sideMenuContent.style.left = "0";
      setIconType(iconIds.close);
    }
  };

  return (
    <React.Fragment>
      {/* Side Menu Component */}
      <SideMenu toggle={toggleSideMenu} />

      {/* NavBar Component*/}
      <Navbar iconType={iconType} toggleSideMenu={toggleSideMenu} />
    </React.Fragment>
  );
};

export default Header;
