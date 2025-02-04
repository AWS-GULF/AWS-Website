import React, { useEffect } from "react";
import sr from "/assets/icons/sr.svg";
import accurate from "/assets/images/accurate.png";
import qc from "/assets/images/qc.jpeg";
import hwlk from "/assets/images/hwlk.svg";
import nfaa from "/assets/images/nfaa.svg";
import security from "/assets/images/security.svg";
import tsw from "/assets/images/tsw.png";
import Button from "../components/Software-components/Button";
import kotlin from "/assets/images/kotlin.svg";
import node from "/assets/images/node.svg";
import oracle from "/assets/images/oracle.svg";
import radius from "/assets/images/radius.svg";
import tail from "/assets/images/tail.svg";
import python from "/assets/images/python.png";

export default function WebDevelopment() {
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
          Innovative web development solutions to empower your business, enhance
          your online presence, and drive success.{" "}
        </h2>
      </div>

      <div className="flex justify-center items-start  ps-[121px] pe-[121px] mb-[100px]">
        <div className="flex ">
          <img src={tail} className="pe-[80px] pt-5" alt="tailwind" />
          <img src={oracle} className="pe-[87px]" alt="oracle" />
          <img src={python} className="pe-[87px]" alt="python" />
          <img src={radius} className="pe-[87px]" alt="radius" />
          <img src={node} className="pe-[87px]" alt="node" />
        </div>
      </div>

      <div className="px-[121px] flex-col justify-center items-center">
        <h1 className="text-center  mb-[20px] text-primary font-mons text-[32px] tracking-[3.2px] font-[500]">
          Web Development{" "}
        </h1>
        <p className="text-aboutCont text-center font-mons font-normal leading-[30px] tracking-[1.6px] mb-[60px] ">
          We specialize in developing custom web applications tailored to your
          unique needs, focusing on delivering exceptional UI/UX experiences.
          Leave concerns like performance optimization, accessibility,
          functionality, usability, and security to us, so you can focus on
          streamlining and enhancing your workflow
        </p>
      </div>

      <div className="flex  justify-center items-center px-[121px] mb-16 gap-16 ">
        <div className="w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px] ">
          <h4 className="font-mons text-[20px] font-[600] tracking-[2px] mb-4  ">
            1- Consultation and Discovery Phase:{" "}
          </h4>
          <p className="font-mons text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] ">
            Transforming your idea or product into reality can be challenging.
            We simplify this process by leveraging industry standards for web
            architecture and development. Our expert team will guide you in
            identifying the most effective strategies to achieve your goals
            seamlessly.
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
            Brand Identity & Custom Branding{" "}
          </h4>
          <p className="font-mons text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] ">
            Design a fully customized, multi-functional dashboard that reflects
            your brand identity. Our solutions are crafted to enhance user
            engagement and ensure effortless navigation for your organization’s
            leaders and administrators.
          </p>
        </div>
      </div>

      <div className="flex  justify-center items-center px-[121px] mb-16 gap-16 ">
        <div className="w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px] ">
          <h4 className="font-mons text-[20px] font-[600] tracking-[2px] mb-4  ">
            Identity Management and SSO{" "}
          </h4>
          <p className="font-mons text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] ">
            Empower your users with secure and intuitive access to your
            platform. Whether you provide full control over their interactions
            or enable self-service dashboards, features like social logins and
            single sign-on (SSO) can enhance their experience and simplify
            onboarding.
          </p>
        </div>

        <div className=" w-1/4">
          <img src={security} className="w-full" alt="" />
        </div>
      </div>
      <div className="flex  justify-center items-center px-[121px] mb-16 gap-16 ">
        <div className=" w-1/4">
          <img src={qc} className="w-full" alt="" />
        </div>
        <div className="w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px] ">
          <h4 className="font-mons text-[20px] font-[600] tracking-[2px] mb-4  ">
            Search Engine Optimization (SEO){" "}
          </h4>
          <p className="font-mons text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] ">
            Ensure your platform is built with optimization best practices to
            drive organic growth and expand your audience reach exponentially.
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
