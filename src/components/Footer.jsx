import React from 'react';
import './Components.css';
import logos from '../assets/footer-logo.png'; // adjust path as needed
import mainLogo from "../images/main-logo.png";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="ft">
      {/* Big rounded top and blue gradient */}
      <div className="ft__bg">
        {/* Newsletter */}
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

        {/* Columns */}
        <section className="ft__grid">
          {/* Brand & contact */}
          <div className="ft__brand">
            <div className="ft__logo">
              {/* Simple HR logo wordmark */}
              <img src={mainLogo} alt="HiringReferrals" />
            </div>

            <div className="ft__contact">
              <div className="ft__label">Call us</div>
              <a href="tel:1234567890" className="ft__val">123 456 7890</a>

              <address className="ft__addr">
                No.58 East Madison Road, USA, 5004
              </address>
              <a className="ft__mail" href="mailto:support@example.com">support@example.com</a>
            </div>
          </div>

          {/* For Candidates */}
          <nav className="ft__col">
            <h3 className="ft__h">For Candidates</h3>
            <ul className="ft__list">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Impact</a></li>
              <li><a href="#">Our Values</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Videos</a></li>
            </ul>
          </nav>

          {/* For Employers */}
          <nav className="ft__col">
            <h3 className="ft__h">For Employers</h3>
            <ul className="ft__list">
              <li><a href="#">Press Releases</a></li>
              <li><a href="#">Mission &amp; Vision</a></li>
              <li><a href="#">HR Policies</a></li>
              <li><a href="#">Employee Portal</a></li>
              <li><a href="#">Health &amp; Safety</a></li>
              <li><a href="#">Employee Benefits</a></li>
            </ul>
          </nav>

          {/* About Us */}
          <nav className="ft__col">
            <h3 className="ft__h">About Us</h3>
            <ul className="ft__list">
              <li><a href="#">Help Desk</a></li>
              <li><a href="#">IT Support</a></li>
              <li><a href="#">Campus Recruitment</a></li>
              <li><a href="#">Job Openings</a></li>
              <li><a href="#">Application Process</a></li>
              <li><a href="#">Internship Programs</a></li>
            </ul>
          </nav>

          {/* Mobile Apps */}
          <div className="ft__apps">
            <h3 className="ft__h">Mobile Apps</h3>
            <p className="ft__muted">Click and Get started in seconds</p>

            <a className="storebtn" href="#">
              {/* Apple icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden>
                <path d="M16.365 1.43c0 1.14-.46 2.26-1.2 3.09-.76.87-2.02 1.54-3.17 1.45-.12-1.11.5-2.31 1.22-3.08.78-.85 2.12-1.47 3.15-1.46zM20.7 17.24c-.66 1.53-.98 2.21-1.84 3.56-1.2 1.84-2.9 4.14-4.98 4.17-1.16.02-1.94-.36-3.02-.36-1.09 0-1.9.35-3.04.38-2.05.06-3.61-1.99-4.83-3.82C1.03 18.19.1 15.24.03 12.43c-.05-1.7.31-3.36 1.2-4.77 1.07-1.67 2.77-2.75 4.7-2.78 1.17-.02 2.28.41 3.02.41.73 0 2.07-.5 3.48-.43 1.19.05 2.29.49 3.17 1.24-1.29.77-2.15 2.1-2.03 3.67.13 1.94 1.74 3.44 3.68 3.5.79.02 1.54-.21 2.19-.55-.26.75-.58 1.48-.94 2.12z"/>
              </svg>
              <span>
                <small>Download on the</small>
                Apple Store
              </span>
            </a>

            <a className="storebtn" href="#">
              {/* Google Play icon */}
              <svg width="22" height="22" viewBox="0 0 512 512" fill="#fff" aria-hidden>
                <path d="M325.3 234.3 94.5 3.6C86.3-4.6 73.4-1.4 69 9.2 66.9 14.4 66 20.3 66 26.3v459.4c0 16.3 19.5 24.5 31 13l228.3-228.3c9.4-9.4 9.4-24.6 0-34z"/>
                <path d="m347.8 256 82-81.9c13.5-13.5 4.1-36.6-15.2-36.6-5.8 0-11.4 1.9-16 5.4L325.3 216.2c-9.4 7.5-9.4 22.1 0 29.6l73.3 73.3c4.6 3.5 10.2 5.4 16 5.4 19.3 0 28.7-23.1 15.2-36.6z"/>
              </svg>
              <span>
                <small>Get it on</small>
                Google Play
              </span>
            </a>
          </div>
        </section>

        {/* Bottom bar */}
        <div className="ft__bar">
          <div className="ft__copy">© 2025 HiringReferrals. All Right Reserved.</div>
          <div className="ft__social">
            <a href="#" aria-label="Facebook" className="ft__soc">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" aria-hidden>
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.96 0 1.96.17 1.96.17v2.1h-1.1c-1.1 0-1.5.69-1.5 1.4V12h2.56l-.41 2.9h-2.15v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="ft__soc">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" aria-hidden>
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2zm5.6-.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="ft__soc">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 3.9 0 4.6 2.6 4.6 6V24h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V24h-4z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="ft__soc">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" aria-hidden>
                <path d="M23 4.8a9 9 0 0 1-2.6.7 4.5 4.5 0 0 0 2-2.5 9 9 0 0 1-2.9 1.1 4.5 4.5 0 0 0-7.8 4.1A12.8 12.8 0 0 1 1.5 3.4a4.5 4.5 0 0 0 1.4 6 4.5 4.5 0 0 1-2-.6v.1a4.5 4.5 0 0 0 3.6 4.4c-.5.1-1 .2-1.6.1a4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 0 19.6a12.7 12.7 0 0 0 6.9 2c8.3 0 12.9-6.9 12.9-12.9v-.6A9.2 9.2 0 0 0 23 4.8z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
