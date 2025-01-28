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

export default function ITandHardware() {
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

      <div className="flex-col justify-center items-center ">
        <h2 className="text-4xl font-mons font-bold mb-[80px] text-center  tracking-[4.8px] leading-[75px] ">
          Innovative IT and software solutions to bring your ideas to life and
          drive success
        </h2>
        <p className="mt-5 text-center pb-[70px] font-normal px-5 font-mons text-[20px] tracking-[2px] leading-[35px] text-secondary">
          <span className="text-primary font-[500] pe-1">
            Sindion Technology
          </span>
          is a professional IT solutions and services provider.We will help you
          to achieve your IT strategy by providing you system integration,
          testing, application development and management services and
          solutions.
        </p>
      </div>

      <h2 className="text-center font-mons text-[32px] font-bold tracking-[3.2px] pb-8">
        Services
      </h2>

      <div className="flex  justify-center items-center pb-16 ">
        <ul className="flex  justify-center items-center ">
          <li className="pe-6 font-mons text-[16px] text-primary font-bold p-4 hover:bg-hover hover:rounded-[10px] hover:transition-all hover:duration-200">
            IT Hardware & Software Solutions
          </li>
          <li className="pe-6 font-mons text-[16px] text-primary font-bold p-4 hover:bg-hover hover:rounded-[10px] hover:transition-all hover:duration-200">
            Data Center Development
          </li>
          <li className="pe-6 font-mons text-[16px] text-primary font-bold p-4 hover:bg-hover hover:rounded-[10px] hover:transition-all hover:duration-200">
            Network Services
          </li>
          <li className="pe-6 font-mons text-[16px] text-primary font-bold p-4 hover:bg-hover hover:rounded-[10px] hover:transition-all hover:duration-200">
            IT Professional Services
          </li>
        </ul>
      </div>

      <div className="flex-col justify-start items-start px-12">
        <h2 className="font-mons text-[32px]  tracking-[3.2px] font-[500] text-primary pb-5">
          IT Professional Services
        </h2>
        <p className="text-aboutCont font-mons text-[20px] tracking-[2px] leading-[30px] ps-1 ">
          Sindion Technology offers a comprehensive range of hardware solutions
          to meet diverse business needs, including:
        </p>
      </div>

      <div className="flex justify-start items-start px-12 pt-8 ">
        <div className="flex-col justify-start items-start  w-3/4">
          <h4 className="font-mons text-[#000] pb-4 text-[20px] tracking-[2px] font-[600]">
            1- IT Hardware Products:
          </h4>
          <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal">
            Providing high-quality IT hardware products to ensure optimal
            performance and reliability for your infrastructure.
          </p>
          <h4 className="font-mons text-[#000] pb-4 pt-6 text-[20px] tracking-[2px] font-[600]">
            2- IT Hardware Architecture Designing Consultation Services:
          </h4>
          <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal">
            Providing high-quality IT hardware products to ensure optimal
            performance and reliability for your infrastructure.
          </p>
          <h4 className="font-mons text-[#000] pb-4 pt-6 text-[20px] tracking-[2px] font-[600]">
            4- Surveillance Equipment:{" "}
          </h4>
          <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal">
            Providing high-quality IT hardware products to ensure optimal
            performance and reliability for your infrastructure.
          </p>
        </div>
        <div className="w-1/4 ps-4 flex items-center">
          <img src={accurate} className="" alt="" />
        </div>
      </div>
    </div>
  );
}
