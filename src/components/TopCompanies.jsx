import React from "react";
import Slider from "react-slick";
import "./Components.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevArrow from '../images/logos/a.png';
import nextArrow from '../images/logos/b.png';
import NewaLogo from '../images/logos/1.png';
import NewbLogo from '../images/logos/2.png';
import NewcLogo from '../images/logos/3.png';
import NewdLogo from '../images/logos/4.png';
import NeweLogo from '../images/logos/5.png';
import NewfLogo from '../images/logos/6.png';
import NewgLogo from '../images/logos/7.png';
import NewhLogo from '../images/logos/8.png';


// Custom Left Arrow
const  NextArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <img
      src={nextArrow}
      alt="Example"
      style={{ width: '39px', height:'26px', borderRadius: '10px' }}
    />
  </div>
);

// Custom Right Arrow
const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <img
      src={prevArrow}
      alt="Example"
      style={{ width: '39px', height:'26px', borderRadius: '10px' }}
    />
  </div>
);

const TopCompanies = () => {
  const logos = [
    { name: "NewaLogo", src: NewaLogo }, //<-- Imported image
    { name: "NewbLogo", src: NewbLogo }, //<-- Imported image
    { name: "NewcLogo", src: NewcLogo }, //<-- Imported image
    { name: "NewdLogo", src: NewdLogo }, //<-- Imported image
    { name: "NeweLogo", src: NeweLogo }, //<-- Imported image
    { name: "NewfLogo", src: NewfLogo }, //<-- Imported image
    { name: "NewgLogo", src: NewgLogo }, //<-- Imported image
    { name: "NewhLogo", src: NewhLogo }, //<-- Imported image

  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container">
<div className="row">
  <div className="col-12">
 <div className="top-companies-carousel">
      <div className="text-section">
        <h2 className="jost">
          Top Company <span className="highlight">Registered</span>
        </h2>
        <p>Some of the companies we have helped recruit excellent applicants over the years.</p>
      </div>

      <Slider {...settings} className="carousel">
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <img src={logo.src} alt={logo.name} className="carousel-logo" />
          </div>
        ))}
      </Slider>
    </div>
  </div>
</div>

   
    </div>
  );
};

export default TopCompanies;
