// src/components/InnerHeader.jsx
import React from "react";
import stickyLogo from "../images/main-dark-logo.png";


export default function InnerHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-lg is-sticky">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={stickyLogo} alt="Logo" className="hr-logo" />
          </a>

             <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupported"
            aria-controls="navbarSupported"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupported">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 hr-links">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Browse Jobs
                </a>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Employers</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Candidates</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Career Advice</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
            </ul>
            <form className="d-flex" role="search">
              <ul>
                <li className="hr-btn hr-btn--ghost">
                  <a href="/login">Login</a> / <a href="#">Register</a>
                </li>
                <li>
                  <a className="hr-btn hr-btn--light" href="#">
                    Job Post
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>

      {/* spacer: sticky height */}
      <div style={{ height: 85 }} />
    </>
  );
}
