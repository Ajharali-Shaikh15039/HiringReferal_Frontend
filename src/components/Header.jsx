import React, { useEffect, useRef, useState } from "react";
import "./Components.css";
import mainLogo from "../images/main-logo.png";
import stickyLogo from "../images/main-dark-logo.png"; // NEW: sticky state logo
import "bootstrap-icons/font/bootstrap-icons.css";

const SLIDES = [
  {
    title: "Find Your Dream Job With Your Interest And Skills",
    sub: `11111Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s,
When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.`,
    cta: "Get Started For Free",
  },
  {
    title: "Discover Roles That Fit Your Experience & Goals",
    sub: `2222Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s,
When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.`,
    cta: "Browse Jobs",
  },
  {
    title: "Level Up Faster With Expert Career Advice",
    sub: `3333Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s,
When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.`,
    cta: "Read Guides",
  },
];

export default function Header() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  // === Sticky after scroll ===
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // measure nav height for spacer (prevents jump when fixed)
  const navRef = useRef(null);
  const [navH, setNavH] = useState(0);
  useEffect(() => {
    const update = () => setNavH(navRef.current ? navRef.current.offsetHeight : 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Auto-advance every 5s (pause on hover)
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIdx((p) => (p + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, idx]);

  // Swipe / drag
  const swipeRef = useRef(null);
  useEffect(() => {
    const el = swipeRef.current;
    if (!el) return;

    let startX = 0;
    let down = false;

    const onDown = (e) => {
      down = true;
      startX = e.touches ? e.touches[0].clientX : e.clientX;
    };
    const onUp = (e) => {
      if (!down) return;
      down = false;
      const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
      const dx = endX - startX;
      if (dx > 70) setIdx((p) => (p - 1 + SLIDES.length) % SLIDES.length);
      if (dx < -70) setIdx((p) => (p + 1) % SLIDES.length);
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mouseleave", onUp);
    el.addEventListener("touchstart", onDown, { passive: true });
    el.addEventListener("touchend", onUp);

    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mouseleave", onUp);
      el.removeEventListener("touchstart", onDown);
      el.removeEventListener("touchend", onUp);
    };
  }, []);

  const slide = SLIDES[idx];

  return (
    <section className="hr-hero">
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className={`navbar navbar-expand-lg ${stuck ? "is-sticky" : ""}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* Sticky par dark logo, otherwise main (light) logo */}
            <img
              src={stuck ? stickyLogo : mainLogo}
              alt="HiringReferrals"
              className="hr-logo"
            />
          </a>
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
      {/* Spacer to prevent jump when nav becomes fixed */}
      {stuck ? <div style={{ height: navH }} /> : null}
      {/* NAVBAR END */}

      <div className="hr-hero__frame">
        {/* SLIDER CONTENT */}
        <div
          className="hr-hero__content"
          ref={swipeRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <h1 key={`t-${idx}`} className="hr-title hr-anim">{slide.title}</h1>
          <p key={`s-${idx}`} className="hr-sub hr-anim">{slide.sub}</p>

          <button
            key={`c-${idx}`}
            className="hr-cta hr-anim"
            onClick={() => alert(SLIDES[idx].cta)}
          >
            {slide.cta}
          </button>

          {/* DOTS */}
          <div className="hr-dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                className={`hr-dot ${i === idx ? "is-active" : ""}`}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
