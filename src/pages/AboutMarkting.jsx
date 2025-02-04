import React, { useState } from "react";
import Slider from "react-slick";
import Frame1 from "/assets/images/imagess/Frame1.svg";
import Frame2 from "/assets/images/imagess/Frame 2.svg";
import Frame3 from "/assets/images/imagess/Frame 3.svg";
import Frame4 from "/assets/images/imagess/Frame 4.svg";
import Frame5 from "/assets/images/imagess/Frame 5.svg";
import Frame6 from "/assets/images/imagess/Frame 6.svg";

export default function About() {
  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    centerPadding: "0",
  };

  return (
      <div>
      <section className="lg:mt-[100px] md:mt-6  relative w-[60%">
        {/* العنوان */}
        <h2 className="font-montserrat font-bold text-[48px] leading-[75px] text-center bg-color dark:text-white">
          Expressive and enduring digital experiences.
        </h2>
        {/* الوصف */}
        <p className="font-normal text-center text-xl leading-[30px] bg-colorr py-10 bg-color-p dark:text-white">
          We help our clients accelerate progress, shape outcomes, and envision
          the future. Through collaboration with companies across <br /> <span className=" ml-3"> industries, we
        build scalable brand systems and products that leverage emerging</span>
          behaviors and technologies, and ultimately <br />
          <span className="text-center">
            unlock potential. Learn more about what we can do for you.
          </span>
        </p>

        
        <div className="lg:flex lg:justify-between lg:left-16 m-auto flex-col lg:flex-row gap-10 lg:gap-0">
          
        <div className="lg:w-3/5 px-6 lg:text-left lg:ml-32">
  <h2 className="font-montserrat font-semibold bg-colorr text-[32px] leading-[30px] dark:text-white">
    Branding & Design
  </h2>
  <p className="font-montserrat font-normal bg-color text-base py-10 bg-colorr dark:text-white">
    We help our clients accelerate progress, shape  <br /> outcomes, and envision the future. 
    Through <br /> collaboration with companies across industries, we <br /> build scalable brand 
    systems and products that <br /> leverage emerging behaviors and technologies, and <br />
    ultimately unlock potential. Learn more about what <br />we can do for you.
  </p>

  <button className="bg-button rounded-3xl md:m-auto mx-16  py-6 px-8  font-bold  text-amber-50 dark:bg-white dark:text-teal-600">
    Contact Us Now
  </button>
</div>


          {/* السلايدر */}
          <div className="w-full lg:w-1/2 lg:mr-36 px-6">
            <Slider {...settings}>
              <img src={Frame1} alt="Frame1" className="w-full h-[400px]" />
              <img src={Frame2} alt="Frame2" className="w-full h-[400px]" />
              <img src={Frame3} alt="Frame3" className="w-full h-[400px]" />
              <img src={Frame4} alt="Frame4" className="w-full h-[400px]" />
              <img src={Frame5} alt="Frame5" className="w-full h-[400px]" />
              <img src={Frame6} alt="Frame6" className="w-full h-[400px]" />
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}