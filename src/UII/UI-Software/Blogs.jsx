import React from "react";
import social from "../../../public/assets/images/social.png";
import cameras from "../../../public/assets/images/cameras.png";
import lights from "../../../public/assets/images/lights.png";
import Button from "../../components/Software-components/Button";
import { ModalXl } from "../../components/Software-components/Modal";

export default function Blogs() {
  return (
    <>
      <div className="lg:flex lg:flex-row flex-col lg:px-[161px] lg:py-[100px]  ">
     <div className="flex-col lg:w-1/2 w-full  justify-start items-start  lg:hidden  mt-12">
          <div className="my-16">
            <p className="text-aboutCont text-center  font-[600] text-[20px] lg:text-[40px] font-mons tracking-[4px] lg:pb-7   mt-6 lg:ps-[73px]">
              BLOG, UPDATES AND NEWS
            </p>

            {/* <p className="lg:ps-[73px] ps-2 lg:pb-[124px]">
              {" "}
              <Button type="linkBtn">Read More</Button>
            </p> */}
          </div>

          <div className="flex-col lg:w-1/2   w-full justify-center items-center ">
            <img src={lights} className="    w-full " alt="lightsImage" />

            <p className=" pt-4 pb-2 text-sm font-mons text-secondary tracking-[1.4px] ">
              22 August 2023{" "}
            </p>

            <p className="  pb-[30px] font-aboutCont opacity-75 text-[18px] font-[500]  leading-[30px] tracking-wide">
              Lights, Camera, Action: Choosing Between Video Production and
              Marketing to Elevate Your Brand
            </p>
            <div className=" pb-10">
              <Button type="linkBtn">Read Article</Button>
            </div>
          </div>
        </div>

        <div className="flex-col lg:w-1/2 w-full justify-center items-center ">
          <div className=" ">
            <img
              src={social}
              className="   w-full"
              alt="socialImage"
            />

            <p className=" pt-4 pb-2 text-sm font-mons text-secondary tracking-[1.4px] ">
              23 July 2024
            </p>

            <p className=" pb-[30px]  font-aboutCont opacity-75   text-[18px] font-[500] leading-[30px] tracking-wide">
              Discover how AI is revolutionizing social media marketing. This
              blog explores the benefits of AI-powered tools, from enhanced
              audience targeting and personalized user experiences to predictive
              analytics and automation. Learn how businesses are leveraging AI
              to optimize their social media strategies.
            </p>
            <div className="">
              <Button type="linkBtn">Read Article</Button>
            </div>
          </div>
          <div className=" pt-10">
            <img
              src={lights}
              className="   w-full "
              alt="lightsImage"
            />

            <p className=" pt-4 pb-2 text-sm font-mons text-secondary tracking-[1.4px] ">
              22 August 2023{" "}
            </p>

            <p className=" opacity-75 pb-[30px] font-aboutCont text-[18px]  font-[500] leading-[30px] tracking-wide">
              Lights, Camera, Action: Choosing Between Video Production and
              Marketing to Elevate Your Brand
            </p>
            <div className="">
              <Button type="linkBtn">Read Article</Button>
            </div>
          </div>
        </div>

        <div className="flex-col lg:w-1/2 w-full  justify-start items-start hidden lg:flex ">
          <div>
            <p className="text-aboutCont font-[600] text-[40px] font-mons tracking-[4px] pb-7  ps-[73px]">
              BLOG, UPDATES AND NEWS
            </p>

            <p className="lg:ps-[73px] lg:pb-[124px]">
              {" "}
              <Button type="linkBtn">Read More</Button>
            </p>
          </div>

          <div className=" ms-2 ">
            <img src={lights} className="  w-full " alt="lightsImage" />

            <p className="pt-4 pb-2 text-sm font-mons text-secondary tracking-[1.4px] ">
              22 August 2023{" "}
            </p>

            <p className=" pb-[30px]   font-aboutCont text-[16px] font-[500] leading-[30px] opacity-75  tracking-wide">
              Lights, Camera, Action: Choosing Between Video Production and
              Marketing to Elevate Your Brand
            </p>
            <div className="">
              <Button type="linkBtn">Read Article</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:px-[161px] pt-[50px] pb-12 lg:pb-[100px] justify-start  items-center  ">
        <p className="font-mons text-[20px] lg:text-[28px] font-bold lg:leading-[60px] lg:tracking-[3.2px] ">
          Ready to take your business to the next level? Let’s create something
          extraordinary together!
        </p>

        <p className="lg:ps-[100px] ">
          <ModalXl />
        </p>
      </div>
    </>
  );
}
