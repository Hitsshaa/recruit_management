import React from "react";

function Language({ display }) {
  return (
    <li
      className="nav-item dropdown has-arrow flag-nav"
      style={{ display: display === true ? "" : "none" }}
    >
      <a
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        role="button"
      >
        <img src="assets/img/flags/us.png" alt="" height="20" />{" "}
        <span>English</span>
      </a>
      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item">
          <img src="assets/img/flags/us.png" alt="" height="16" /> English
        </a>
        <a className="dropdown-item">
          <img src="assets/img/flags/fr.png" alt="" height="16" /> French
        </a>
        <a className="dropdown-item">
          <img src="assets/img/flags/es.png" alt="" height="16" /> Spanish
        </a>
        <a className="dropdown-item">
          <img src="assets/img/flags/de.png" alt="" height="16" /> German
        </a>
      </div>
    </li>
  );
}

export default Language;
