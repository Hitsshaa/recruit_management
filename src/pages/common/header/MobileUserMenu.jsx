import React from "react";

function MobileUserMenu({ display }) {
  return (
    <div
      className="dropdown mobile-user-menu"
      style={{ display: display === true ? "" : "none" }}
    >
      <a
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fa fa-ellipsis-v"></i>
      </a>
      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item" href="profile.html">
          My Profile
        </a>
        <a className="dropdown-item" href="settings.html">
          Settings
        </a>
        <a className="dropdown-item" href="index.html">
          Logout
        </a>
      </div>
    </div>
  );
}

export default MobileUserMenu;
