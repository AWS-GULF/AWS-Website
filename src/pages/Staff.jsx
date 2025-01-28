import React, { useEffect } from "react";
import sr from "../../public/assets/icons/sr.svg";
import accurate from "../../public/assets/images/accurate.png";
import qc from "../../public/assets/images/qc.jpeg";
import hwlk from "../../public/assets/images/hwlk.svg";
import nfaa from "../../public/assets/images/nfaa.svg";
import security from "../../public/assets/images/security.svg";
import tsw from "../../public/assets/images/tsw.png";
import Button from "../components/Button";
import kotlin from "../../public/assets/images/kotlin.svg";
import node from "../../public/assets/images/node.svg";
import oracle from "../../public/assets/images/oracle.svg";
import radius from "../../public/assets/images/radius.svg";
import tail from "../../public/assets/images/tail.svg";
import python from "../../public/assets/images/python.png";

export default function staff() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="  sm:ms-12 sm:me-12">
      <div className=" mt-16 mb-14 flex justify-center items-center">
        <img src={sr} alt="" />
        <p className="ps-2 font-mons text-hover  font-bold text-[16px] tracking-[1.6px]">
          Services
        </p>
      </div>

      <div className="flex justify-center items-center ">
        <h2 className="text-4xl font-mons font-bold mb-[80px] text-center  tracking-[4.8px] leading-[75px] ">
          Scale your team with top-tier talent, tailored to your project needs.
        </h2>
      </div>

      {/* <div className="flex justify-center items-start  ps-[121px] pe-[121px] mb-[100px] ">
            <div className="flex ">
            <img src={tail} className="pe-[80px] pt-5" alt="tailwind" />
            <img src={oracle} className="pe-[87px]" alt="oracle" />
            <img src={python} className="pe-[87px]" alt="python" />
            <img src={radius} className="pe-[87px]" alt="radius" />
            <img src={node} className="pe-[87px]" alt="node" />
            </div>
        </div> */}

      <div className="px-[121px] flex-col justify-center items-center">
        <h1 className="text-center  mb-[20px] text-primary font-mons text-[32px] tracking-[3.2px] font-[500]">
          Staff Augmentation
        </h1>
        <p className="text-aboutCont text-center font-mons font-normal leading-[30px] tracking-[1.6px] mb-[60px] ">
          Staff augmentation is a versatile solution that enables organizations
          to boost agility and quickly adapt to evolving business demands. This
          approach is widely utilized across industries to fulfill critical
          roles in Engineering, Product Development, and Operations.
        </p>
      </div>

      <div className="flex  justify-center items-center px-[121px] mb-16 gap-16 ">
        <div className="w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px] ">
          <h4 className="font-mons text-[20px] font-[600] tracking-[2px] mb-4  ">
            Identify: Specialized Skills
          </h4>
          <p className="font-mons text-[16px] font-normal text-[400]  tracking-[1.6px] leading-[30px] ">
            Share the Job description for the open roles, hire one employee or
            100 for a month or a lifetime
          </p>
        </div>

        <div className=" w-1/4">
          <img src={accurate} className="w-full" alt="" />
        </div>
      </div>

      <div className="flex  justify-center items-center px-[121px] mb-16 gap-16 ">
        <div className=" w-1/4">
          <img src={qc} className="w-full" alt="" />
        </div>
        <div className="w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px] ">
          <h4 className="font-mons text-[20px] font-[600] tracking-[2px] mb-4  ">
            Access to larger talent pool
          </h4>
          <p className="font-mons text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] ">
            Provide shortlisted candidates from its talents pool with 10,000+
            candidates
          </p>
        </div>
      </div>

      <div className="flex  justify-center items-center px-[121px] mb-16 gap-16 ">
        <div className="w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px] ">
          <h4 className="font-mons text-[20px] font-[600] tracking-[2px] mb-4  ">
            Interview
          </h4>
          <p className="font-mons text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] ">
            Run your own interview if needed for the shortlisted candidates
            (optional step){" "}
          </p>
        </div>
        <div className=" w-1/4">
          <img src={qc} className="w-full" alt="" />
        </div>
      </div>

      <div className="flex  justify-center items-center px-[121px] mb-16 gap-16 ">
        <div className=" w-1/4">
          <img src={qc} className="w-full" alt="" />
        </div>
        <div className="w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px] ">
          <h4 className="font-mons text-[20px] font-[600] tracking-[2px] mb-4  ">
            Hire
          </h4>
          <p className="font-mons text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] ">
            Sign statement of work (SOW) and start working, flexible rerms that
            match your business, and suitable for your use case
          </p>
        </div>
      </div>
      <div className="flex  justify-center items-center px-[121px] mb-16 gap-16  ">
        <div className="w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px] ">
          <h4 className="font-mons text-[20px] font-[600] tracking-[2px] mb-4  ">
            Onboard
          </h4>
          <p className="font-mons text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] ">
            Our seamless onboard process ensures your employees join your team
            and get uo to speed quickly employers and employees enjoy fully
            self-serve onboarding and management tools
          </p>
        </div>
        <div className=" w-1/4">
          <img src={qc} className="w-full" alt="" />
        </div>
      </div>

      <div className="flex  justify-center items-center px-[121px] mb-16 gap-16 ">
        <div className=" w-1/4">
          <img src={qc} className="w-full" alt="" />
        </div>
        <div className="w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px] ">
          <h4 className="font-mons text-[20px] font-[600] tracking-[2px] mb-4  ">
            Invoice & pay
          </h4>
          <p className="font-mons text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] ">
            handle payroll, tax, benefits, and compliance for your globally
            distributed team here, with no hidden fees
          </p>
        </div>
      </div>

      <div className=" px-[121px] flex-col justify-center items-center mb-10">
        <h1 className="text-center  mb-[20px] text-primary font-mons text-[32px] tracking-[3.2px] font-[500]">
          Case Studies
        </h1>
        <p className="text-aboutCont text-center font-mons font-normal leading-[30px] tracking-[1.6px] mb-[60px] ">
          We stick to tried and true digital marketing strategies that we know
          will have the highest impact on your bottom line. Forget the fluff and
          empty promises of other companies, we offer services that are more
          likely to be profitable and sustainable. Check out our suite of
          digital marketing services designed to help accelerate your funnel.
        </p>
      </div>
    </div>
  );
}
