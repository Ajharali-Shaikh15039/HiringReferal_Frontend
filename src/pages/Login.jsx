// src/pages/Login.jsx
import React from "react";
import "../components/Components.css";
import InnerHeader from "../components/InnerHeader";

import hero from "../images/hero-illustration.png";   // image 27.png
import circuit from "../images/circuit-bg.png";       // bg_footer_2.jpg 1.png

const Login = () => {
  return (
    <div className="login-page">
      {/* Optional: header agar dikhana ho */}
      {/* <InnerHeader /> */}

      {/* Left artwork */}
      <div className="login-page__left">
        <img src={circuit} alt="" aria-hidden className="login-page__circuit" />
        <img src={hero} alt="Profile UI illustration" className="login-page__hero" />
      </div>

      {/* Right card */}
      <div className="login-page__right">
        <div className="login-page__card">
          <h1 className="login-page__title">Sign In</h1>
          <p className="login-page__sub">to your account</p>

          <div className="login-page__segmented">
            <label className="login-page__segmented-item">
              <input type="radio" name="role" defaultChecked />
              <span>Candidates</span>
            </label>
            <label className="login-page__segmented-item">
              <input type="radio" name="role" />
              <span>Freelancer</span>
            </label>
          </div>

          <label className="login-page__field">
            <span className="login-page__field-label">Email address or user name</span>
            <input className="login-page__input login-page__input--pill" type="email" />
          </label>

          <label className="login-page__field">
            <span className="login-page__field-label">Password</span>
            <div className="login-page__input login-page__input--pill login-page__input--with-icon">
              <input type="password" />
              <button type="button" className="login-page__icon-btn" aria-label="Hide">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10.58 10.58A3 3 0 0012 15a3 3 0 002.42-4.42M12 5C7 5 3.5 8.5 2 12c.6 1.52 1.57 2.87 2.78 3.95M22 12c-.6-1.52-1.57-2.87-2.78-3.95M7.11 16.89C8.8 18 10.68 18.5 12 18.5c5 0 8.5-3.5 10-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="login-page__icon-text">Hide</span>
              </button>
            </div>
          </label>

          <div className="login-page__row">
            <label className="login-page__check">
              <input type="checkbox" defaultChecked />
              <span>Remember me</span>
            </label>
          </div>

          <p className="login-page__legal">
            By continuing, you agree to the <a href="#">Terms of use</a> and{" "}
            <a href="#">Privacy Policy.</a>
          </p>

          <button className="login-page__btn-primary">Log in</button>

          <button className="login-page__link">Forget your password</button>

          <p className="login-page__signup">
            Don’t have an account? <a href="#">Sign up</a>
          </p>

          <div className="login-page__divider"><span>Or continue with</span></div>

          <div className="login-page__socials">
            <button className="login-page__social"><span>G</span></button>
            <button className="login-page__social"><span></span></button>
            <button className="login-page__social"><span>in</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
