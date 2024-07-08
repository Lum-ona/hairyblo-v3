import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link
          to="/"
          className="logo d-flex align-items-center me-auto me-lg-0"
        ></Link>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => scrollToElement("hero")}
                className="active scrollto"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => scrollToElement("about")}
                className="scrollto"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => scrollToElement("what-we-do")}
                className="scrollto"
              >
                WHAT WE DO
              </Link>
            </li>
            <li className="dropdown">
              <Link
                to="/"
                onClick={() => scrollToElement("destinations")}
                className="dropbtn"
              >
                Destinations
              </Link>
              <div className="dropdown-content">
                <Link to="/destinations/culture-and-heritage" state={{ id: 0 }}>
                  Culture and Heritage
                </Link>
                <Link to="/destinations/nature-and-adventure" state={{ id: 1 }}>
                  Nature and Adventure
                </Link>
                <Link to="/destinations/urban-exploration" state={{ id: 2 }}>
                  Urban Exploration
                </Link>
                <Link
                  to="/destinations/relaxation-and-wellness"
                  state={{ id: 3 }}
                >
                  Relaxation and Wellness
                </Link>
              </div>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => scrollToElement("stats")}
                className="scrollto"
              >
                STATS
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => scrollToElement("contact")}
                className="scrollto"
              >
                GET IN TOUCH
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-social-links"></div>
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>
    </header>
  );
}
