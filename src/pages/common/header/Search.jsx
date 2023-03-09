import React from "react";

function Search({ display }) {
  return (
    <li
      className="nav-item"
      style={{ display: display === true ? "" : "none" }}
    >
      <div className="top-nav-search">
        <a className="responsive-search">
          <i className="fa fa-search"></i>
        </a>
        <form action="search.html">
          <input
            className="form-control"
            type="text"
            placeholder="Search here"
          />
          <button className="btn" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </li>
  );
}

export default Search;
