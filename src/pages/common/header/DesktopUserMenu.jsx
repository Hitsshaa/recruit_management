import React from "react";

function DesktopUserMenu({ display }) {
  return (
    <li
      className="nav-item dropdown has-arrow main-drop"
      style={{ display: display === true ? "" : "none" }}
    >
      <a className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
        <span className="user-img">
          <img src="assets/img/profiles/avatar-21.jpg" alt="" />
          <span className="status online"></span>
        </span>
        <span>Admin</span>
      </a>
      <div className="dropdown-menu">
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
    </li>
  );
}

export default DesktopUserMenu;
