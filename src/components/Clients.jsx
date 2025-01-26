import React from "react";
import quote from "../../public/assets/icons/gridicons_quote.svg";
import ClientsSlider from "./ClientsSlider";

export default function Clients() {
  return (
    <div className="flex ms-12 me-12 py-[87px] px-[24px] bg-card rounded-[10px] ">
      <div className="w-1/2">
        <h2 className="font-mons font-[600] text-5xl  text-aboutCont tracking-[4.8px] leading-[60px]">
          Clients Across The Globe
        </h2>
        <div className="flex items-start  mt-16 me-8">
          <img src={quote} alt="quote-icon" className="me-2" />
          <p className="text-[#333] text-[16px] font-normal tracking-[1.6px] font-mons ">
            AWS is a forward-thinking IT system integrator and services
            provider, established in 2024 with a focus on delivering
            cutting-edge IT hardware solutions. Recognizing the ever-evolving
            technological landscape and rapidly changing market needs, the
            <h4 className="mt-6">Hossam Nasser</h4>
            <p className="mt-2">CEO at HWLK</p>
          </p>
     
        </div>
      </div>

      <div className="w-1/2  flex justify-center items-start">
      
      
      <ClientsSlider />
      </div>
    </div>
  );
}
