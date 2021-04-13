import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css";

const Navbar = () => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink className="navbar-brand" to="/">DATUM CLUB</NavLink>
              <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                <ul className="ml-auto navbar-nav" >
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/events">Events</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/team">Team</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                  </li>
                  <form className="form-inline my-2 my-lg-0">
                    <a href="https://forms.gle/S7eKzDiNgbRLtTgg6" className="btn btn-dark" role="button">Join Us</a>
                  </form>
                </ul>
              </div>
            </nav>

          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;