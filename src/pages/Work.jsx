import sr from "/assets/icons/sr.svg";
import ClientsSlider from "../components/Software-components/ClientsSlider";

import CardFilter from "../components/Software-components/CardFilter";

export default function Work() {
  return (
    <div className="sm:ms-12 sm:me-12">
      <div className=" mt-16 mb-14 flex justify-center items-center">
        <img src={sr} alt="" />
        <p className="ps-2 font-mons text-hover  font-bold text-[16px] tracking-[1.6px]">
          Our Clients
        </p>
      </div>

      <div className="flex justify-center items-center text-center ">
        <h2 className="text-5xl font-mons font-bold mb-[20px] px-[150px] text-center  tracking-[4.8px] leading-[75px]  text-primary">
          BUILDING SUCCESS TOGETHER
        </h2>
      </div>

      <div className="flex justify-center items-center text-center px-[60px] pb-[70px] ">
        <p className="text-secondary font-mons text-[20px] font-[400] leading-[30px] tracking-[0.4px]">
          Since 2016, we have had the privilege of collaborating with over 600
          clients across diverse industries. Here, we showcase a selection of
          our esteemed partners who have trusted us to deliver innovative and
          impactful solutions.
        </p>
      </div>

      <div className="">
        <ClientsSlider />
      </div>

      <div className=" mt-[100px] mb-14 flex justify-center items-center">
        <img src={sr} alt="" />
        <p className="ps-2 font-mons text-hover  font-bold text-[16px] tracking-[1.6px]">
          What We Did
        </p>
      </div>

      <div className="flex justify-center items-center text-center ">
        <h2 className="text-5xl font-mons font-bold mb-[20px] px-[300px] text-center  tracking-[4.8px] leading-[75px]  text-primary">
          OUR PORTFOLIO OUR VISION{" "}
        </h2>
      </div>

      <div className="flex justify-center items-center text-center px-[60px] pb-[42px] ">
        <p className="text-secondary font-mons text-[20px] font-[400] leading-[30px] tracking-[0.4px]">
          Since 2016, we have had the privilege of collaborating with over 600
          clients across diverse industries. Here, we showcase a selection of
          our esteemed partners who have trusted us to deliver innovative and
          impactful solutions.
        </p>
      </div>

      <CardFilter />
    </div>
  );
}
