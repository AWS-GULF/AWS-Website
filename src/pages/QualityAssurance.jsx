import React, { useEffect } from "react";
import sr from "../../public/assets/icons/sr.svg";
import accurate from "../../public/assets/images/accurate.png";
import qc from "../../public/assets/images/qc.jpeg";
import hwlk from "../../public/assets/images/hwlk.svg";
import nfaa from "../../public/assets/images/nfaa.svg";
import tsw from "../../public/assets/images/tsw.png";
import Button from "../components/Software-components/Button";
export default function QualityAssurance() {
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
        <h2 className="text-5xl font-mons font-bold mb-[80px] text-center  tracking-[4.8px] leading-[75px] ">
          We ensure flawless performance and reliability for your software
        </h2>
      </div>

      <div className="px-[121px] flex-col justify-center items-center">
        <h1 className="text-center  mb-[20px] text-primary font-mons text-[32px] tracking-[3.2px] font-[500]">
          Quality Assurance
        </h1>
        <p className="text-aboutCont text-center font-mons font-normal leading-[30px] tracking-[1.6px] mb-[60px] ">
          We believe in fostering a strong, collaborative partnership with our
          clients. Ensuring the quality, functionality, and reliability of the
          products we deliver is a responsibility we take seriously. Beyond
          meeting expectations, we proactively identify and resolve potential
          risks and challenges, striving to exceed contractual commitments with
          excellence.
        </p>
      </div>

      <div className="flex  justify-center items-center px-[121px] mb-16 gap-16 ">
        <div className="w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px] ">
          <h4 className="font-mons text-[20px] font-[600] tracking-[2px] mb-4  ">
            Accurate Deliveries
          </h4>
          <p className="font-mons text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] ">
            Our development team is committed to providing realistic and precise
            timelines for project milestones. This approach ensures timely
            delivery without ever compromising the quality of the final product.
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
            Quality Control
          </h4>
          <p className="font-mons text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] ">
            While a completely bug-free environment is unattainable, we have
            developed highly effective testing and diagnostic strategies. These
            cover both functional and non-functional aspects of your product,
            ensuring a smooth development process and minimizing friction for
            end users.
          </p>
        </div>
      </div>

      <div className="flex  justify-center items-center px-[121px] mb-16 gap-16 ">
        <div className="w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px] ">
          <h4 className="font-mons text-[20px] font-[600] tracking-[2px] mb-4  ">
            Account Management
          </h4>
          <p className="font-mons text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] ">
            For enterprise clients, we assign a dedicated professional from our
            pro-services team to manage your account exclusively throughout the
            entire development and delivery process. This ensures personalized
            support and seamless communication at every stage.
          </p>
        </div>

        <div className=" w-1/4">
          <img src={accurate} className="w-full" alt="" />
        </div>
      </div>

      <div className="px-[121px] flex-col justify-center items-center mb-10">
        <h1 className="text-center  mb-[20px] text-primary font-mons text-[32px] tracking-[3.2px] font-[500]">
          Case Studies
        </h1>
        <p className="text-aboutCont text-center font-mons font-normal leading-[30px] tracking-[1.6px] mb-[60px] ">
          We believe in fostering a strong, collaborative partnership with our
          clients. Ensuring the quality, functionality, and reliability of the
          products we deliver is a responsibility we take seriously. Beyond
          meeting expectations, we proactively identify and resolve potential
          risks and challenges, striving to exceed contractual commitments with
          excellence.
        </p>
      </div>

      <div className="cards mb-[100px] flex  gap-4">
        <div className="card bg-base-100 w-96 border-1 border border-stroke p-4">
          <figure>
            <img className="w-[405px] h-[382px] " src={hwlk} alt="hwlk" />
          </figure>
          <div className="">
            <h2 className="text-[14px] text-primary font-mons font-[600] tracking-[1.6px] mb-2">
              Clients
            </h2>
            <div className="flex justify-center items-center ">
              <p className="font-mons text-[12px] font-[500]">
                Nafaa is the first complete and integrated system of
                expropriation in the Arabian Gulf region.
              </p>
              <div className=" flex justify-end items-end mt-10 ps-6">
                <Button type="linkBtnSm">See More</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 border-1 border border-stroke p-4">
          <figure>
            <img className="w-[405px] h-[382px] " src={nfaa} alt="nfaa" />
          </figure>
          <div className="">
            <h2 className="text-[14px] text-primary font-mons font-[600] tracking-[1.6px] mb-2">
              Clients
            </h2>
            <div className="flex justify-center items-center ">
              <p className="font-mons text-[12px] font-[500]">
                Nafaa is the first complete and integrated system of
                expropriation in the Arabian Gulf region.
              </p>
              <div className=" flex justify-end items-end mt-10 ps-6">
                <Button type="linkBtnSm">See More</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 border-1 border border-stroke p-4">
          <figure>
            <img className="w-[405px] h-[382px] " src={tsw} alt="tsw" />
          </figure>
          <div className="">
            <h2 className="text-[14px] text-primary font-mons font-[600] tracking-[1.6px] mb-2">
              Clients
            </h2>
            <div className="flex justify-center items-center ">
              <p className="font-mons text-[12px] font-[500]">
                Nafaa is the first complete and integrated system of
                expropriation in the Arabian Gulf region.
              </p>
              <div className=" flex justify-end items-end mt-10 ps-6">
                <Button type="linkBtnSm">See More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
