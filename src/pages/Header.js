import React from "react";
import { useState, useEffect } from "react";
import phoneIcon from "./images/phone-icon.png";
import mailIcon from "./images/mail-icon.png";
import headerLogo from "./images/header-logo.png";
import { NavLink } from "react-router-dom";
// import { useRef } from "react";

import "./style.css";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 56) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  function toggleNav() {
    setNavOpen((state) => !state);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <header>
      <div className="topbar">
        <div className="container">
          <ul>
            <li>
              <a href="tel:1800-120-9040">
                <img src={phoneIcon} />
                <span>1800-120-9040</span>
              </a>
            </li>
            <li>
              <a href="mailto:connect@svcl.in">
                <img src={mailIcon} />
                <span>connect@svcl.in</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={fix ? "navbar-wrapper fixed" : "navbar-wrapper"}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <NavLink
              className="navbar-brand"
              to="/"
              onClick={() => {
                setNavOpen(false);
                toggleNav();
              }}
            >
              <img src={headerLogo} alt="" />
            </NavLink>
            <button
              onClick={toggleNav}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={
                navOpen
                  ? "collapse navbar-collapse show"
                  : "collapse navbar-collapse"
              }
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/home"
                    onClick={toggleNav}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/presence"
                    onClick={toggleNav}
                  >
                    Presence
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/products"
                    onClick={toggleNav}
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/technology"
                    onClick={toggleNav}
                  >
                    Technology
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/partners"
                    onClick={toggleNav}
                  >
                    Partners
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/team"
                    onClick={toggleNav}
                  >
                    Team
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Governance
                  </a>
                  <ul className="dropdown-menu">
                    {/* <li>
                      <NavLink
                        className="dropdown-item"
                        style={{ background: "none" }}
                        to="/policies"
                        onClick={toggleNav}
                      >
                        Policies
                      </NavLink>
                    </li> */}
                    <li>
                      {/* <a className="dropdown-item" href="#">Board</a> */}
                      <NavLink
                        className="dropdown-item"
                        style={{ background: "none" }}
                        to="/board"
                        onClick={toggleNav}
                      >
                        Board
                      </NavLink>
                    </li>
                    {/* <li>
                      <NavLink
                        className="dropdown-item"
                        style={{ background: "none" }}
                        to="/fair-practices"
                        onClick={toggleNav}
                      >
                        Fair Practices
                      </NavLink>
                    </li> */}
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/careers"
                    onClick={toggleNav}
                  >
                    Careers
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Reach us
                  </a>
                  <ul className="dropdown-menu header-last-dropdown">
                    <li>
                      {/* <a className="dropdown-item" href="#">Home</a> */}
                      <NavLink
                        className="dropdown-item"
                        style={{ background: "none" }}
                        to="/contact"
                        onClick={toggleNav}
                      >
                        Contact us
                      </NavLink>
                    </li>
                    <li>
                      {/* <a className="dropdown-item" href="#">About</a> */}
                      <NavLink
                        className="dropdown-item"
                        style={{ background: "none" }}
                        to="/grievance"
                        onClick={toggleNav}
                      >
                        Customer grievance
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
