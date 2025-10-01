// src/components/PopularEverywhere.jsx
import React from "react";
import "./Components.css";

// 🔽 SVGs ko files se import (paths apne project ke hisaab se adjust kar lo)
import iconEmployer from "../images/icon/ccc.svg";
import iconCandidate from "../images/icon/ccc.svg";

export default function PopularEverywhere() {
  // list via map
  const CHOICES = [
    {
      title: "I'm An Employer",
      body: "Signed in companies are able to post new job offers, searching for candidates...",
      cta: "Register As Company",
      icon: iconEmployer,
    },
    {
      title: "I'm An Candidate",
      body: "Signed in companies are able to post new job offers, searching for candidates...",
      cta: "Register As Candidate",
      icon: iconCandidate,
    },
  ];

  return (
    <section className="pe">
      <div className="container">
      <div className="hiwc__decors " aria-hidden></div>

      {/* ✅ RIGHT diagonal strips */}
      <div className="tj-right">
        <span className="tj-strip tj-right-teal" />
        <span className="tj-strip tj-right-purple" />
      </div>

      {/* Heading */}
      <header className="pe__header">
        <h2 className="pe__title">
          We are Popular <span className="pe__title--accent">Everywhere</span>
        </h2>
        <p className="pe__subtitle">
          Your next level Product development company assets
        </p>
      </header>

      {/* Split Card */}
      <div className="pe__card">
        <div className="pe__divider" aria-hidden />
        <div className="pe__or" aria-hidden>
          <span>OR</span>
        </div>

        <div className="pe__grid">
          {CHOICES.map((c, i) => (
            <Choice
              key={i}
              title={c.title}
              body={c.body}
              cta={c.cta}
              icon={c.icon}
            />
          ))}
        </div>
      </div>

</div> 
    </section>
  );
}

function Choice({ title, body, cta, icon }) {
  return (
    <article className="choice">
      <div className="choice__icon" aria-hidden>
        {/* sirf icon change kiya: file se aaya hua SVG */}
        <img src={icon} alt="" width={20} height={20} loading="lazy" />
      </div>

      <h3 className="choice__title">{title}</h3>
      <p className="choice__text">{body}</p>

      <a href="#" className="choice__btn">
        {cta}
      </a>
    </article>
  );
}
