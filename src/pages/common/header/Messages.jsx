import React from "react";

function Messages({ display }) {
  return (
    <li
      className="nav-item dropdown"
      style={{ display: display === true ? "" : "none" }}
    >
      <a className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
        <i className="fa fa-comment-o"></i>
        <span className="badge rounded-pill">8</span>
      </a>
      <div className="dropdown-menu notifications">
        <div className="topnav-dropdown-header">
          <span className="notification-title">Messages</span>
          <a className="clear-noti">Clear All</a>
        </div>
        <div className="noti-content">
          <ul className="notification-list">
            <li className="notification-message">
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">
                      <img alt="" src="assets/img/profiles/avatar-09.jpg" />
                    </span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Richard Miles </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix"></div>
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li className="notification-message">
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">
                      <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                    </span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">John Doe</span>
                    <span className="message-time">6 Mar</span>
                    <div className="clearfix"></div>
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li className="notification-message">
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">
                      <img alt="" src="assets/img/profiles/avatar-03.jpg" />
                    </span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Tarah Shropshire</span>
                    <span className="message-time">5 Mar</span>
                    <div className="clearfix"></div>
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li className="notification-message">
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">
                      <img alt="" src="assets/img/profiles/avatar-05.jpg" />
                    </span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Mike Litorus</span>
                    <span className="message-time">3 Mar</span>
                    <div className="clearfix"></div>
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li className="notification-message">
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">
                      <img alt="" src="assets/img/profiles/avatar-08.jpg" />
                    </span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Catherine Manseau</span>
                    <span className="message-time">27 Feb</span>
                    <div className="clearfix"></div>
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="topnav-dropdown-footer">
          <a href="chat.html">View all Messages</a>
        </div>
      </div>
    </li>
  );
}

export default Messages;
