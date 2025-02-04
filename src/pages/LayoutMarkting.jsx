import React from "react";
import NavbarMarkting from "./NavbarMarkting";
import FooterMarkting from "./FooterMarkting";
import { Outlet } from "react-router-dom";


function LayoutMarkting() {
  return (
    <div>
      <NavbarMarkting />
      <div className="container">
        <Outlet />
      </div>
      <FooterMarkting />
    </div>
  );
}

export default LayoutMarkting;
