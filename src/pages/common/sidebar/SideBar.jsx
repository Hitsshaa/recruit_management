import React from "react";
import { Link, Navigate } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <nav className="greedys sidebar-horizantal">
            <ul lass="list-inline-item list-unstyled links">
              <li className="menu-title">
                <span>Corporate Portal</span>
              </li>
              <li className="submenu">
                <a>
                  <i className="la la-briefcase"></i> <span> Recruit </span>
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link to={"dashhboard"}> Dasboard </Link>
                  </li>
                  <li>
                    <Link to={"jobs"}> Jobs </Link>
                  </li>
                  <li>
                    <Link to={"candidates"}> Candidates</Link>
                  </li>

                  <li className="submenu">
                    <a>
                      <span> Manage Lookup </span>{" "}
                      <span className="menu-arrow"></span>
                    </a>
                    <ul style={{ display: "none" }}>
                      <li>
                        <Link to={"jobTypes"}>Job Types</Link>
                      </li>
                      <li>
                        <Link to={"candidateSkill"}>Candidate Skills</Link>
                      </li>
                      <li>
                        <Link to={"assessmentStages"}>Assessment Stages</Link>
                      </li>
                      <li>
                        <Link to={"experienceLevels"}>Experience Levels</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul lass="list-inline-item list-unstyled links">
              <li className="submenu">
                <a href="#">
                  <i className="la la-cog"></i> <span> Administration </span>
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link to={"general"}>General</Link>
                  </li>
                  <li>
                    <Link to={"users"}>Users</Link>
                  </li>
                  <li>
                    <Link to={"roles"}>Roles</Link>
                  </li>
                  <li>
                    <Link to={"departments"}>Departments</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <ul className="sidebar-vertical">
            <li className="menu-title">
              <span>Corporate Portal</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-briefcase"></i> <span> Recruit </span>
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <Link to={"dashboard"}> Dasboard </Link>
                </li>
                <li>
                  <Link to={"jobs"}> Jobs </Link>
                </li>
                <li>
                  <Link to={"candidates"}> Candidates</Link>
                </li>

                <li className="submenu">
                  <a>
                    <span> Manage Lookup </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <Link to={"jobTypes"}>Job Types</Link>
                    </li>
                    <li>
                      <Link to={"candidateSkills"}>Candidate Skills</Link>
                    </li>
                    <li>
                      <Link to={"assessmentStages"}>Assessment Stages</Link>
                    </li>
                    <li>
                      <Link to={"experienceLevel"}>Experience Levels</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <ul lass="list-inline-item list-unstyled links">
            <li className="submenu">
              <a>
                <i className="la la-cog"></i> <span> Administration </span>
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <Link to={"general"}>General</Link>
                </li>
                <li>
                  <Link to={"users"}>Users</Link>
                </li>
                <li>
                  <Link to={"roles"}>Roles</Link>
                </li>
                <li>
                  <Link to={"departments"}>Departments</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
