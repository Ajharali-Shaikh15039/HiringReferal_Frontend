import React from "react";
import "./Components.css";
import circles from "../images/circles.png"; // your circle image

export default function Download({ phoneSrc }) {
  return (
    <section className="lotus">
      <div className=" ds container">
      <div className="ds__grid">
        {/* Left: background circles + phone */}
        <div className="ds__phone">
          <img className="ds__circles" src={circles} alt="" aria-hidden="true" />
          <div className="ds__mock">
            {phoneSrc ? (
              <img className="ds__phoneimg" src={phoneSrc} alt="App preview on phone" />
            ) : (
              <PhoneMock />
            )}
          </div>
        </div>

        {/* Right: copy */}
        <div className="ds__copy">
          <h2 className="ds__title">Download</h2>
          <p className="ds__headline">Job Portal App Now!</p>
          <p className="ds__note">
            All it takes is 30 seconds to Download. Your Mobile App for Job
            <br />
            Fast, Simple &amp; Delightful.
          </p>

          <div className="ds__badges">
            <a className="ds__badge" href="#" aria-label="App Store">
              <span className="dot dot--yellow" />
              <span>App Store</span>
            </a>
            <a className="ds__badge" href="#" aria-label="Play Store">
              <span className="dot dot--pink" />
              <span>Play Store</span>
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMock() {
  return (
    <div className="mockphone" role="img" aria-label="Phone mock">
      <div className="notch" />
      <div className="screen">
        <div className="r" />
        <div className="r" />
        <div className="r wide" />
        <div className="cta" />
      </div>
      <div className="homebar" />
    </div>
  );
}
