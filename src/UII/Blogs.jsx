import React from "react";
import social from "../../public/assets/images/social.png";
import cameras from "../../public/assets/images/cameras.png";
import lights from "../../public/assets/images/lights.png";
import Button from "../components/Button";
import { ModalXl } from "../components/Modal";

export default function Blogs() {
  return (
    <>
      <div className="flex px-[161px] py-[100px]">
        <div className="flex-col w-1/2 justify-center items-center ">
          <div className=" ">
            <img
              src={social}
              className=" ps-10 pe-5  w-full"
              alt="socialImage"
            />

            <p className="px-10 pt-4 pb-2 text-sm font-mons text-secondary tracking-[1.4px] ">
              23 July 2024
            </p>

            <p className="px-10 pb-[30px] font-aboutCont opacity-75 text-[16px] font-[500] leading-[30px] tracking-wide">
              Discover how AI is revolutionizing social media marketing. This
              blog explores the benefits of AI-powered tools, from enhanced
              audience targeting and personalized user experiences to predictive
              analytics and automation. Learn how businesses are leveraging AI
              to optimize their social media strategies.
            </p>
            <div className="px-10">
              <Button type="linkBtn">Read Article</Button>
            </div>
          </div>
          <div className=" pt-10">
            <img
              src={lights}
              className=" ps-10 pe-5  w-full "
              alt="lightsImage"
            />

            <p className="px-10 pt-4 pb-2 text-sm font-mons text-secondary tracking-[1.4px] ">
              22 August 2023{" "}
            </p>

            <p className="px-10 opacity-75  pb-[30px] font-aboutCont text-[16px] font-[500] leading-[30px] tracking-wide">
              Lights, Camera, Action: Choosing Between Video Production and
              Marketing to Elevate Your Brand
            </p>
            <div className="px-10">
              <Button type="linkBtn">Read Article</Button>
            </div>
          </div>
        </div>

        <div className="flex-col w-1/2 justify-start items-start ">
          <div>
            <p className="text-aboutCont font-[600] text-[40px] font-mons tracking-[4px] pb-7  ps-[73px]">
              BLOG, UPDATES AND NEWS
            </p>

            <p className="ps-[73px] pb-[124px]">
              {" "}
              <Button type="linkBtn">Read More</Button>
            </p>
          </div>

          <div className=" ">
            <img src={lights} className="  w-full " alt="lightsImage" />

            <p className="pt-4 pb-2 text-sm font-mons text-secondary tracking-[1.4px] ">
              22 August 2023{" "}
            </p>

            <p className=" pb-[30px] font-aboutCont text-[16px] font-[500] leading-[30px] opacity-75  tracking-wide">
              Lights, Camera, Action: Choosing Between Video Production and
              Marketing to Elevate Your Brand
            </p>
            <div className="">
              <Button type="linkBtn">Read Article</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-[161px] pt0-[50px] pb-[100px] items-center  ">
        <p className="font-mons text-[28px] font-bold leading-[60px] tracking-[3.2px] ">
          Ready to take your business to the next level? Let’s create something
          extraordinary together!
        </p>

        <p className="ps-[100px] ">
          <ModalXl />
        </p>
      </div>
    </>
  );
}
