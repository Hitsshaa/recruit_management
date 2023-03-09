import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SettingIcon } from "./SettingIcon";

function Layout() {
  const loggedIn = useSelector((state) => state.login.isLoggedIn);

  return loggedIn ? (
    <>
    <div>
      <div className="main-wrapper">
        <Header />
        <SideBar />
        <div className="page-wrapper">
          <Outlet />
        </div>
      </div>
<SettingIcon/>

      </div>
    </>
  ) : (
    <Navigate to="/register" />
  );
}

export default Layout;
