import  { useEffect } from "react";
import sr from "../../public/assets/icons/sr.svg";
import accurate from "../../public/assets/images/accurate.png";
import qc from "../../public/assets/images/qc.jpeg";
import hwlk from "../../public/assets/images/hwlk.svg";
import nfaa from "../../public/assets/images/nfaa.svg";
// import security from "../../public/assets/images/security.svg";
import tsw from "../../public/assets/images/tsw.png";
import Button from "../components/Button";
// import kotlin from "../../public/assets/images/kotlin.svg";
import node from "../../public/assets/images/node.svg";
import oracle from "../../public/assets/images/oracle.svg";
import radius from "../../public/assets/images/radius.svg";
import tail from "../../public/assets/images/tail.svg";
import python from "../../public/assets/images/python.png";

export default function UiUx() {

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
          Crafting seamless experiences that drive user satisfaction and
          business growth.
        </h2>
      </div>

      <div className="flex justify-center items-start  ps-[121px] pe-[121px] mb-[100px] ">
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
          UI/UX Design
        </h1>
        <p className="text-aboutCont text-center font-mons font-normal leading-[30px] tracking-[1.6px] mb-[60px] ">
          Every interaction within our products is a result of meticulous
          planning and design. From the coding of elements and functions to the
          visual aesthetics, we excel at delivering captivating user
          experiences. Whether for mobile or web, your end users will find the
          experience both seamless and engaging.
        </p>
      </div>

      <div className="flex  justify-center items-center px-[121px] mb-16 gap-16 ">
        <div className="w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px] ">
          <h4 className="font-mons text-[20px] font-[600] tracking-[2px] mb-4  ">
            Market Research
          </h4>
          <p className="font-mons text-[16px] font-normal text-[400]  tracking-[1.6px] leading-[30px] ">
            With the expertise of our seasoned development team, we conduct
            comprehensive market research to analyze current trends, conditions,
            and user preferences. This ensures the creation of a digital product
            that not only meets market demands but also retains users and
            remains relevant for years to come
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
            Brand Identity & Custom Branding
          </h4>
          <p className="font-mons text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] ">
            Establish a unique visual identity by customizing every aspect of
            your product to reflect your brand. Gain full control over elements
            such as color palettes, shapes, fonts, styles, buttons, and overall
            design direction. Think of your digital product as a bespoke
            masterpiece—crafted to your exact specifications, with limitless
            possibilities to showcase your brands essence.
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
