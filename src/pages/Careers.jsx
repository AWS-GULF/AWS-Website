import React from "react";
import sr from "/assets/icons/sr.svg";
import team from "/assets/images/about-team-img.png";
import JobList from "../components/Software-components/JobList";
import comp from "/assets/icons/comp.svg";
import culture from "/assets/icons/culture.svg";
import diverse from "/assets/icons/diverse.svg";
import gain from "/assets/icons/gain.svg";
import growth from "/assets/icons/growth.svg";
import learn from "/assets/icons/learn.svg";

export default function Careers() {
  return (
    <div className="  sm:ms-12 sm:me-12">
      <div className=" mt-16 mb-14 flex justify-center items-center">
        <img src={sr} alt="" />
        <p className="ps-2 font-mons text-hover  font-bold text-[16px] tracking-[1.6px]">
          Join US
        </p>
      </div>

      <div className="flex justify-center items-center text-center ">
        <h2 className="text-5xl font-mons font-bold mb-[30px] sm:px-[100px] text-center  tracking-[4.8px] leading-[75px]  text-primary">
          Join the team where innovation meets excellence.
        </h2>
      </div>

      <div className="mb-[42px]">
        <p className="text-aboutCont font-mons text-[16px] text-center tracking-[1.4px] font-normal leading-[35px]">
          Our teams consist of exceptional product managers, designers, web and
          mobile developers, and quality engineers, dedicated to delivering
          projects on time while upholding the highest development standards.
        </p>
      </div>

      <div className="w-full mb-[100px] ">
        <img src={team} alt="team image " className=" w-full sm:h-[500px] " />
      </div>

      <div className="jobs">
        <JobList />
      </div>

      <div className="what-makes">
        <h2 className="text-[28px] font-mons text-center font-bold tracking-[.64px] pb-8 text-primary">
          What makes AWS GULF a great place to work
        </h2>
      </div>

      <div className="what-makes-icons mb-[140px]">
        <ul className="flex flex-wrap sm:gap-4 justify-center gap-3 ">
          <li className="w-[40%] sm:w-[30%] flex-col ">
            <img src={growth} className="w-8 h-8 mb-6" alt="" />
            <h5 className="text-aboutCont font-mons text-lg sm:text-2xl font-bold tracking-[.48px]">
              Growth and Career <br /> Path
            </h5>
            <p className="text-secondary font-normal text-[16px] tracking-[.32px]">
              AWS carefully selects the Top 2% of tech talents and offers them
              whatever is needed for them to grow.
            </p>
          </li>
          <li className="w-[40%] sm:w-[30%] flex-col ">
            <img src={comp} className="w-8 h-8 mb-6" alt="" />
            <h5 className="text-aboutCont font-mons text-lg sm:text-2xl font-bold tracking-[.48px]">
              Compensation
            </h5>
            <p className="text-secondary font-normal text-[16px] tracking-[.32px]">
              AWS carefully selects the Top 2% of tech talents and offers them
              whatever is needed for them to grow.
            </p>
          </li>
          <li className="w-[40%] sm:w-[30%] flex-col ">
            <img src={gain} className="w-8 h-8 mb-6" alt="" />
            <h5 className="text-aboutCont font-mons text-lg sm:text-2xl font-bold tracking-[.48px]">
              Gaining experience
            </h5>
            <p className="text-secondary font-normal text-[16px] tracking-[.32px]">
              Dealing with teammates of different expertise will help you gain
              more experience. Also you will be learning and introduced to the
              latest technologies.
            </p>
          </li>
          <li className="w-[40%] sm:w-[30%] flex-col ">
            <img src={culture} className="w-8 h-8 mb-6" alt="" />
            <h5 className="text-aboutCont font-mons text-lg sm:text-2xl font-bold tracking-[.48px]">
              Culture and Work <br /> Environment
            </h5>
            <p className="text-secondary font-normal text-[16px] tracking-[.32px]">
              Looking for positive workplace culture? That’s AMS team where you
              can find all the support. We do go through hard times and
              workloads, but when we decide to take a break and have fun Nothing
              Can Stop Us!
            </p>
          </li>
          <li className="w-[40%] sm:w-[30%] flex-col ">
            <img src={learn} className="w-8 h-8 mb-6" alt="" />
            <h5 className="text-aboutCont font-mons text-lg sm:text-2xl font-bold tracking-[.48px]">
              Learning budget
            </h5>
            <p className="text-secondary font-normal text-[16px] tracking-[.32px]">
              AMS invests a lot in its team’s training and continuous learning
              process, so each and everyone in the team gets well prepared to
              any challenges they face in any project.
            </p>
          </li>
          <li className="w-[40%] sm:w-[30%] flex-col ">
            <img src={diverse} className="w-8 h-8 mb-6" alt="" />
            <h5 className="text-aboutCont font-mons text-lg sm:text-2xl font-bold tracking-[.48px]">
              Diverse projects
            </h5>
            <p className="text-secondary font-normal text-[16px] tracking-[.32px]">
              At AMS, you will gain a lot of experience thanks to the variety of
              projects in different fields and sectors you will be working on.
            </p>
          </li>
        </ul>

      </div>
    </div>
  );
}
