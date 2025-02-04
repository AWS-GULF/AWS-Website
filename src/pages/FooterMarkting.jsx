import React from "react";
import footer from "/assets/images/imagess/Footer.svg";

export default function FooterMarkting() {
  return (
    <div >
      <div className="shadow-inner">
        <div className="w-full flex-col lg:grid bg-purple-600  lg:grid-cols-3 md:grid-cols-1 lg:gap-48 justify-between items-center mt-[100px] text-xs md:text-sm lg:text-base">
          {/* الصورة في div لوحدها */}
          <div className="flex justify-center md:justify-start pt-16 bg-emerald-800 py-6">
            <img src={footer} alt="footer" className="w-16 md:w-20 m-auto lg:w-80" />
          </div>

          <div className="flex justify-center m-auto gap-10 lg:grid-cols-3  bg-red-600 ">
            <div className="flex flex-col text-center md:text-left  bg-yellow-500 lg:text-start mt-4 md:mt-0">
              <h4 className="bg-color md:text-2xl text-2xl dark:text-white">Services</h4>
              <a href=""><span className="bg-color-p dark:text-white">Branding & Design</span></a>
              <a href=""><span className="bg-color-p dark:text-white">Website Solutions</span></a>
              <a href=""><span className="bg-color-p dark:text-white">eCommerce Solutions</span></a>
              <a href=""><span className="bg-color-p dark:text-white">SEO</span></a>
              <a href=""><span className="bg-color-p dark:text-white">Digital Advertising</span></a>
              <a href=""><span className="bg-color-p dark:text-white">Social Media Marketing</span></a>
            </div>
            <div className="flex flex-col text-center md:text-left mt-4 md:mt-0 bg-emerald-500">
              <h4 className="bg-color text-2xl md:text-2xl dark:text-white">Contact Us</h4>
              <a href=""><span className="bg-color-p dark:text-white">Seville District 6326, Riyadh Saudi Arabia</span></a>
              <a href=""><span className="bg-color-p dark:text-white">+966 569851545</span></a>
              <a href=""><span className="bg-color-p dark:text-white">wessam@awsgulf.com</span></a>
              <a href=""><span className="bg-color-p dark:text-white">www.awasgulft.com</span></a>
              <ul className="flex gap-2 mt-3 md:gap-6">
                <i className="fa-brands fa-square-behance md:text-base bg-text-button dark:text-white"></i>
                <i className="fa-brands fa-instagram md:text-base bg-text-button dark:text-white"></i>
                <i className="fa-brands fa-linkedin md:text-base bg-text-button dark:text-white"></i>
                <i className="fa-brands fa-youtube md:text-base bg-text-button dark:text-white"></i>
                <i className="fa-brands fa-facebook md:text-base bg-text-button dark:text-white"></i>
                <i className="fa-brands fa-snapchat md:text-base bg-text-button dark:text-white"></i>
                <i className="fa-brands fa-x-twitter md:text-base bg-text-button dark:text-white"></i>
              </ul>
            </div>
          </div>
          
        </div>
        <div className="mt-[30px] bg-color-p text-xs md:text-sm py-1">
            <h3 className="text-center dark:text-white">
              @ 2024 AWS Gulf Media. All rights reserved
            </h3>
          </div>
      </div>
    </div>
  );
}




