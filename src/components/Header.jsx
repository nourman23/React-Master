import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useSignOut } from "react-auth-kit";
function Header() {
  const signOut = useSignOut();

  const logout = () => {
    console.log("loggedOut");
    console.log(signOut());
  };
  const navigate = useNavigate();
  return (
    <>
      <header>
        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white  ">
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

            <div className="collapse navbar-collapse justify-content-start p-2">
              <a href="/">
                <img src="" alt="logo" />
              </a>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end mx-4"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  navbar-expand-lg mx-5">
                <li className="nav-item  p-2 px-5 ">
                  <NavLink to="/" className="nav-link " aria-current="page">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item p-2 px-5">
                  <NavLink
                    to="/services"
                    className="nav-link"
                    aria-current="page"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item p-2 px-5">
                  <NavLink
                    to="/contact"
                    className="nav-link"
                    aria-current="page"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item p-2 px-5">
                  <NavLink to="/about" className="nav-link" aria-current="page">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* <div>
              <a className="btn bg-color mr-5" href="login">
                <i className="fa fa-light fa-right-to-bracket pr-2"></i>Login
              </a>
              <a className="btn bg-color mr-5" href="/driver_register">
                <i className="fa fa-light fa-right-to-bracket pr-2"></i>
                DriverRegister
              </a>
              <button onClick={logout}>Sign Out</button>
            </div> */}
            {/* <div>
            <a className="btn bg-color mr-4" href="login"><i className="fa fa-light fa-user"></i></a>
            <a className="btn bg-color mr-4" href="login"><i className="fa fa-solid fa-user-vneck-hair-long"></i></a>
        </div>  */}
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
