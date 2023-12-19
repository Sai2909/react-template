import React from "react";
import { Outlet } from "react-router-dom";
import "../../common/Styles/CustomStyles";
import { TopNavbar } from "./navBar/TopNavBar";
import AsideNavbar from "./navBar/AsideNavbar";

const DashboardLayout = () => {
  return (
    <div className="obs_create">
      <TopNavbar />
      <div className="obs_create_wrapper d-flex flex-column">
        <AsideNavbar />
        <div className="obs_create_wrapper_content">
          <Outlet />
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default DashboardLayout;
