import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MTA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/movies/top_rated"
                >
                  Top Rated
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies/popular">
                  Popular Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies/upcoming">
                  Upcomings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="tv/">
                  Top TV Shows
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
