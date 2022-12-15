import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import logo from "../images/logo.png";
export const Nav = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg  w-100 "
        style={{ backgroundColor: "#3b3b3b6b", zIndex: 9999 }}
        // style={{ zIndex: 9999 }}
      >
        <div className="container-fluid">
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

          <div className="collapse navbar-collapse justify-content-start">
            <a href="/">
              <img src={logo} alt="logo" width="40%" />
            </a>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end mx-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  navbar-expand-lg mx-5 ">
              <li className="nav-item px-3">
                <NavLink
                  to="/"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink
                  to="/services"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item px-3 ">
                <NavLink
                  to="/contact"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink
                  to="/about"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          {isAuthenticated() ? (
            <>
              <Link className="btn bg-color" to="/profile">
                <i class="fa fa-light fa-user"></i>
              </Link>
            </>
          ) : (
            <a className="btn bg-color" href="login">
              <i className="fa fa-light fa-right-to-bracket pr-1"></i>Login
            </a>
          )}

          {/* <div>
    <a className="btn bg-color mr-4" href="login"><i className="fa fa-light fa-user"></i></a>
    <a className="btn bg-color mr-4" href="login"><i className="fa fa-solid fa-user-vneck-hair-long"></i></a>
</div>  */}
        </div>
      </nav>
    </>
  );
};
