import React from "react";
import Language from "./Language.jsx";
import Search from "./Search";
import Messages from "./Messages.jsx";
import Notification from "./Notification.jsx";
import DesktopUserMenu from "./DesktopUserMenu.jsx";
import MobileUserMenu from "./MobileUserMenu.jsx";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <a className="logo">
          <img src="assets/img/logo.png" width="40" height="40" alt="" />
        </a>
        <a className="logo2">
          <img src="assets/img/logo2.png" width="40" height="40" alt="" />
        </a>
      </div>

      <a id="toggle_btn">
        <span className="bar-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>

      <div className="page-title-box">
        <h3>Think Core Technologies</h3>
      </div>

      <a id="mobile_btn" className="mobile_btn" href="#sidebar">
        <i className="fa fa-bars"></i>
      </a>

      <ul className="nav user-menu">
        <Search display={false} />

        <Language display={false} />

        <Notification display={false} />

        <Messages display={false} />

        <DesktopUserMenu display={true} />
      </ul>
      <MobileUserMenu display={true} />
    </div>
  );
}

export default Header;
