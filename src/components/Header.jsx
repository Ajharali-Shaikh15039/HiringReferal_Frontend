import React, { useEffect, useRef, useState } from "react";
import "./Components.css";
import mainLogo from "../images/main-logo.png";

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
      <div className="hr-hero__frame">
        {/* NAVBAR */}
        <header className="hr-nav">
          <div className="hr-brand">
            <div className="hr-logo-mark">
              <img src={mainLogo} alt="HiringReferrals" />
            </div>
          </div>

          <nav className="hr-links" aria-label="Primary">
            <a href="#">Browse Jobs</a>
            <a href="#">Employers</a>
            <a href="#">Candidates</a>
            <a href="#">Career Advice</a>
            <a href="#">Services</a>
          </nav>

          <div className="hr-actions">
            <a className="hr-btn hr-btn--ghost" href="#">
              Login / Register
            </a>
            <a className="hr-btn hr-btn--light" href="#">
              Job Post
            </a>
          </div>
        </header>

        {/* SLIDER CONTENT */}
        <div
          className="hr-hero__content"
          ref={swipeRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <h1 key={`t-${idx}`} className="hr-title hr-anim">
            {slide.title}
          </h1>
          <p key={`s-${idx}`} className="hr-sub hr-anim">
            {slide.sub}
          </p>

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
