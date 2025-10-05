import React from "react";
import "./Footer.css";
import mainLogo from "../images/main-logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer className="ft ft--v1">
      <div className="ft__bg">
        {/* ===== Newsletter ===== */}
        <section className="ft__newsletter">
          <h2 className="ft__title">Subscribe Our Newsletter</h2>
          <p className="ft__sub">We don’t send spam so don’t worry.</p>

          <form className="ft__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="ft__input"
              placeholder="Your e-mail"
              required
            />
            <button className="ft__cta" type="submit">Subscribe</button>
            <span className="ft__ring" aria-hidden />
          </form>
        </section>

        {/* ===== Columns (like the first screenshot) ===== */}
        <section className="ft__cols">
          {/* About / brand */}
          <div className="ft__about">
            <div className="ft__logo">
              <img src={mainLogo} alt="HiringReferrals" />
            </div>
            <p className="ft__aboutText">
              “Liguam quis risus viverra, ornare ipsum vitae, congue tellus.
              Vestibulum nunc lorem, scelerisque a tristique non, accumsan
              ornare eros.”
            </p>
          </div>

          {/* Support */}
          <nav className="ft__col">
            <h3 className="ft__h">Support</h3>
            <ul className="ft__list">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Impact</a></li>
              <li><a href="#">Our Values</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Videos</a></li>
            </ul>
          </nav>

          {/* Information */}
          <nav className="ft__col">
            <h3 className="ft__h">Information</h3>
            <ul className="ft__list">
              <li><a href="#">Press Releases</a></li>
              <li><a href="#">Mission &amp; Vision</a></li>
              <li><a href="#">HR Policies</a></li>
              <li><a href="#">Employee Portal</a></li>
              <li><a href="#">Health &amp; Safety</a></li>
              <li><a href="#">Employee Benefits</a></li>
            </ul>
          </nav>

          {/* Recruitment */}
          <nav className="ft__col">
            <h3 className="ft__h">Recruitment</h3>
            <ul className="ft__list">
              <li><a href="#">Help Desk</a></li>
              <li><a href="#">IT Support</a></li>
              <li><a href="#">Campus Recruitment</a></li>
              <li><a href="#">Job Openings</a></li>
              <li><a href="#">Application Process</a></li>
              <li><a href="#">Internship Programs</a></li>
            </ul>
          </nav>

          {/* Get in touch */}
          <div className="ft__touch">
            <h3 className="ft__h">GET IN TOUCH WITH US</h3>
            <ul className="ft__contactlist">
              <li>
                <span className="ft__bullet"><i className="bi bi-geo-alt"></i></span>
                No.58 East Madison Road, USA 5004
              </li>
              <li>
                <span className="ft__bullet"><i className="bi bi-telephone"></i></span>
                +00 123 456 789
              </li>
              <li>
                <span className="ft__bullet"><i className="bi bi-envelope"></i></span>
                support@example.com
              </li>
            </ul>
          </div>
        </section>

        {/* ===== Bottom bar ===== */}
        <div className="ft__bar">
          <div className="ft__copy">© 2025 HiringReferrals. All Right Reserved.</div>
          <div className="ft__social">
            <a href="#" aria-label="Facebook" className="ft__soc">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram" className="ft__soc">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="ft__soc">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" aria-label="Twitter" className="ft__soc">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
