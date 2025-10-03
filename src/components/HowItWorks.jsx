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
    { title: "Post Your Job",       text: "Employers create job listings with AI assistance to craft the perfect job description.", icon: iconPost },
    { title: "AI Distribution",     text: "Jobs are shared with specialized freelance recruiters based on industry match.", icon: iconDistribution },
    { title: "Candidate Referrals", text: "Pre-screened candidates are referred and ranked by our AI matching system.", icon: iconReferrals },
    { title: "Interview & Select",  text: "Review top candidates and make your selection with our streamlined process..", icon: iconInterview },
    { title: "Verify & Onboard",    text: "Complete background verification through our Rectifyers platform for trust and compliance.", icon: iconVerify },
  ];

  return (
    <section className="hiwc">
      <div className="container">
        <div className="row">
          <div className="col-12">
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
        {/* <div className="hiwc__grid"> */}
        <div className="">
          
          {STEPS.map((s, i) => (
            <Step key={i} title={s.title} text={s.text} icon={s.icon} />
          ))}
        </div>
      </div>
      </div>
        </div>
    </section>
  );
}

function Step({ title, text, icon }) {
  return (
    <article className="hiwcstep">
      <div className="hiwc">
        <h4><span  aria-hidden><img src={icon} alt="" loading="lazy" /></span> {title}</h4>
        <p>{text}</p>
      </div>




  {/* <ul>
  <li>
    <div className="hiwc">
      <h4> <span> <img src={icon} alt="" width={18} height={18} loading="lazy" /></span> {title}</h4>
      <p>{text}</p>
    </div>
  </li>
</ul> */}


    </article>


  );
}
