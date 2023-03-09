import React from "react";

function Notification({ display }) {
  return (
    <li
      className="nav-item dropdown"
      style={{ display: display === true ? "" : "none" }}
    >
      <a className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
        <i className="fa fa-bell-o"></i>
        <span className="badge rounded-pill">3</span>
      </a>
      <div className="dropdown-menu notifications">
        <div className="topnav-dropdown-header">
          <span className="notification-title">Notifications</span>
          <a className="clear-noti">Clear All</a>
        </div>
        <div className="noti-content">
          <ul className="notification-list">
            <li className="notification-message">
              <a href="activities.html">
                <div className="media d-flex">
                  <span className="avatar flex-shrink-0">
                    <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                  </span>
                  <div className="media-body flex-grow-1">
                    <p className="noti-details">
                      <span className="noti-title">John Doe</span> added new
                      task
                      <span className="noti-title">
                        Patient appointment booking
                      </span>
                    </p>
                    <p className="noti-time">
                      <span className="notification-time">4 mins ago</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li className="notification-message">
              <a href="activities.html">
                <div className="media d-flex">
                  <span className="avatar flex-shrink-0">
                    <img alt="" src="assets/img/profiles/avatar-03.jpg" />
                  </span>
                  <div className="media-body flex-grow-1">
                    <p className="noti-details">
                      <span className="noti-title">Tarah Shropshire</span>
                      changed the task name
                      <span className="noti-title">
                        Appointment booking with payment gateway
                      </span>
                    </p>
                    <p className="noti-time">
                      <span className="notification-time">6 mins ago</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li className="notification-message">
              <a href="activities.html">
                <div className="media d-flex">
                  <span className="avatar flex-shrink-0">
                    <img alt="" src="assets/img/profiles/avatar-06.jpg" />
                  </span>
                  <div className="media-body flex-grow-1">
                    <p className="noti-details">
                      <span className="noti-title">Misty Tison</span> added
                      <span className="noti-title">Domenic Houston</span>
                      and <span className="noti-title">Claire Mapes</span>
                      to project
                      <span className="noti-title">
                        Doctor available module
                      </span>
                    </p>
                    <p className="noti-time">
                      <span className="notification-time">8 mins ago</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li className="notification-message">
              <a href="activities.html">
                <div className="media d-flex">
                  <span className="avatar flex-shrink-0">
                    <img alt="" src="assets/img/profiles/avatar-17.jpg" />
                  </span>
                  <div className="media-body flex-grow-1">
                    <p className="noti-details">
                      <span className="noti-title">Rolland Webber</span>
                      completed task
                      <span className="noti-title">
                        Patient and Doctor video conferencing
                      </span>
                    </p>
                    <p className="noti-time">
                      <span className="notification-time">12 mins ago</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li className="notification-message">
              <a href="activities.html">
                <div className="media d-flex">
                  <span className="avatar flex-shrink-0">
                    <img alt="" src="assets/img/profiles/avatar-13.jpg" />
                  </span>
                  <div className="media-body flex-grow-1">
                    <p className="noti-details">
                      <span className="noti-title">Bernardo Galaviz</span>
                      added new task
                      <span className="noti-title">Private chat module</span>
                    </p>
                    <p className="noti-time">
                      <span className="notification-time">2 days ago</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="topnav-dropdown-footer">
          <a href="activities.html">View all Notifications</a>
        </div>
      </div>
    </li>
  );
}

export default Notification;
