import React from "react";
import logo from "../../public/assets/icons/logo.svg";
import x from "../../public/assets/icons/x.svg";
import faceBook from "../../public/assets/icons/facebook.svg";
import youtube from "../../public/assets/icons/youtube.svg";
import insta from "../../public/assets/icons/insta.svg";
import behance from "../../public/assets/icons/behance.svg";
import snap from "../../public/assets/icons/snap.svg";
import linked from "../../public/assets/icons/linked.svg";

export default function Footer() {
  return (
    <>
      <div className=" flex-col sm:flex sm:flex-row justify-between  mb-12 mt-[100%]">
        <div className="  flex-col justify-center items-center text-center   ">
          <img src={logo} className="m-auto" alt="GULF" />
          <span className="text-xl xl:px-[7px] text-secondary  ">GULF</span>
          <h2 className="text-primary text-xl sm:text-3xl ">
            Your Lighthouse To <br />
            The Future
          </h2>
        </div>

        <div className="flex-col justify-center items-center text-center">
          <h4 className="text-primary text-xl font-bold mb-3  my-4 sm:my-0">
            Services
          </h4>
          <ul>
            <li className="font-mons text-sm text-secondary font-normal mt-2">
              Mobile Development
            </li>
            <li className="font-mons text-sm text-secondary font-normal mt-2">
              Web Development
            </li>
            <li className="font-mons text-sm text-secondary font-normal mt-2">
              User-Centric Design
            </li>
            <li className="font-mons text-sm text-secondary font-normal mt-2">
              Data and Analytics
            </li>
            <li className="font-mons text-sm text-secondary font-normal mt-2">
              IT Services and IT Consultant
            </li>
            <li className="font-mons text-sm text-secondary font-normal mt-2">
              Software Consulting
            </li>
          </ul>
        </div>
        <div className="flex-col justify-center items-center text-center  my-4 sm:my-0">
          <h4 className="text-primary text-xl font-bold mb-3  ">Contact Us</h4>
          <ul>
            <li className="font-mons text-sm text-secondary font-normal mt-2">
              Seville District 6326, Riyadh, Saudi Arabia
            </li>
            <li className="font-mons text-sm text-secondary font-normal mt-2">
              +966 569851545
            </li>
            <li className="font-mons text-sm text-secondary font-normal mt-2">
              wessam@awsgulf.com
            </li>
            <li className="font-mons text-sm text-secondary font-normal mt-2">
              www.awasgulft.com
            </li>
            <ul className="flex justify-center items-center mt-5">
              <img src={x} alt="x-platform" className="w-[25px] h-[16px]  " />
              <img
                src={snap}
                alt="snap-platform"
                className="w-[25px] h-[16px] "
              />
              <img
                src={faceBook}
                alt="faceBook-platform"
                className="w-[25px] h-[16px] "
              />
              <img
                src={youtube}
                alt="youtube-platform"
                className="w-[25px] h-[16px] "
              />
              <img
                src={linked}
                alt="linked-platform"
                className="w-[25px] h-[16px] "
              />
              <img
                src={insta}
                alt="insta-platform"
                className="w-[25px] h-[16px] "
              />
              <img
                src={behance}
                alt="behance-platform"
                className="w-[25px] h-[16px] "
              />
            </ul>
          </ul>
        </div>
      </div>
      <p className="text-center text-secondary text-[16px] pb-2">
        2024 ScaleUp Media. All rights reserved.
      </p>
    </>
  );
}
