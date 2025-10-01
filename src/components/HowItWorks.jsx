import React from "react";
import "./Components.css";

// 👇 tumhare example jaisa direct SVG imports (path apne project ke hisaab se adjust kar lena)
import iconPost        from "../images/icon/1a.svg";
import iconDistribution from "../images/icon/2b.svg";
import iconReferrals    from "../images/icon/3c.svg";
import iconInterview    from "../images/icon/4d.svg";
import iconVerify       from "../images/icon/5e.svg";

export default function HowItWorks() {
  const STEPS = [
    { title: "Post Your Job",       text: "To create your account be confident & safely.", icon: iconPost },
    { title: "AI Distribution",     text: "To create your account be confident & safely.", icon: iconDistribution },
    { title: "Candidate Referrals", text: "To create your account be confident & safely.", icon: iconReferrals },
    { title: "Interview & Select",  text: "To create your account be confident & safely.", icon: iconInterview },
    { title: "Verify & Onboard",    text: "To create your account be confident & safely.", icon: iconVerify },
  ];

  return (
    <section className="hiwc">
      <div className="container">
        {/* background decorations (animated) */}
        <div className="hiwc__decor" aria-hidden>
          <span className="hiwc__circle c1" />
          <span className="hiwc__circle c2" />
          <span className="hiwc__circle c3" />
        </div>

        {/* heading */}
        <header className="hiwc__head">
          <h2 className="hiwc__title">
            How It <span className="hiwc__accent">Works</span>
          </h2>
          <p className="hiwc__subtitle">Job for anyone, anywhere</p>
        </header>

        {/* steps via map */}
        <div className="hiwc__grid">
          {STEPS.map((s, i) => (
            <Step key={i} title={s.title} text={s.text} icon={s.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({ title, text, icon }) {
  return (
    <article className="hiwc__step">
      <span className="hiwc__icon" aria-hidden>
        {/* hiwc__icon already centers content; width/height set to 18 to match earlier SVG size */}
        <img src={icon} alt="" width={18} height={18} loading="lazy" />
      </span>
      <div>
        <h3 className="hiwc__stepTitle">{title}</h3>
        <p className="hiwc__stepText">{text}</p>
      </div>
    </article>
  );
}
