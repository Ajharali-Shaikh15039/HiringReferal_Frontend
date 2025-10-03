import React from "react";
import "./Components.css";
import nextArrow from '../images/logos/a.png';
import mySvga from '../images/icon/1.svg';
import mySvgb from '../images/icon/2.svg';
import mySvgc from '../images/icon/3.svg';
import mySvgd from '../images/icon/4.svg';
import mySvge from '../images/icon/5.svg';
import mySvgf from '../images/icon/6.svg';
import mySvgg from '../images/icon/7.svg';
import mySvgh from '../images/icon/8.svg';
import mySvgi from '../images/icon/9.svg';
import mySvgj from '../images/icon/10.svg';

const CATEGORIES = [
  { id: "01", title: "Account & Finance", jobs: 44, icon: mySvga },
  { id: "02", title: "Technology", jobs: 44, icon: mySvgb },
  { id: "03", title: "Medical & Nurse", jobs: 44, icon: mySvgc },
  { id: "04", title: "Marketing & Sales", jobs: 44, icon: mySvgd },
  { id: "05", title: "Design Jobs", jobs: 44, icon: mySvge },
  { id: "06", title: "Transportation", jobs: 44, icon: mySvgf },
  { id: "07", title: "Development", jobs: 44, icon: mySvgg },
  { id: "08", title: "Receptionist Job", jobs: 44, icon: mySvgh },
  { id: "09", title: "Non-Profit Orag.", jobs: 44, icon: mySvgi },
  { id: "10", title: "Architect Jobs", jobs: 44, icon: mySvgj },
];

export default function TrendingJobs() {
  return (
    <section className="tj-wrap">
     <div className="container">
<div className="row">
  <div className="col-12">
      {/* ===== Background Decorations (pure CSS) ===== */}
      <div className="tj-decor">
        <div className="tj-left">
          <span className="tj-strip tj-left-teal" />
          <span className="tj-strip tj-left-purple" />
        </div>
        <div className="tj-right">
          <span className="tj-strip tj-right-teal" />
          <span className="tj-strip tj-right-purple" />
        </div>
      </div>

      {/* ===== Content ===== */}
      <div className="tj-inner">
       
     <header className="tj-head">
          <div>
            <h2 className="tj-title">
              Trending Jobs <span className="tj-accent">Category</span>
            </h2>
            <p className="tj-sub">
              To choose your trending job dream &amp; to make future bright.
            </p>
          </div>

          <a href="#explore" className="tj-explore">
            <span>Explore More</span>
            <img
              src={nextArrow}
              alt="Example"
              style={{ width: '39px', height: '26px', borderRadius: '10px' }}
            />
          </a>
        </header>

        <div className="tj-grid">
          {CATEGORIES.map((c) => (
            <div className="tj-card" key={c.id}>
              <div className="tj-card-top">
                {/* Render the corresponding SVG icon */}
                <div className="tj-icon">
                  <img src={c.icon} alt={`${c.title} icon`} width="50" height="50" />
                </div>
                <div className="tj-num">
                  <i aria-hidden />
                  <span>{c.id}</span>
                </div>
              </div>
              <h3 className="tj-card-title">{c.title}</h3>
              <p className="tj-jobs">
                Job Available: <strong>{c.jobs}</strong>
              </p>
            </div>
          ))}
        </div>


        </div>
       
      </div>
    </div>
</div>


    </section>
  );
}
