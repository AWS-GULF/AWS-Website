import { useEffect, useState } from "react";
import sr from "../../public/assets/icons/sr.svg";
import srl from "../../public/assets/images/sr-gray.svg";
import team from "../../public/assets/images/about-team-img.png";
import pers1 from "../../public/assets/images/pers1.png";
import pers2 from "../../public/assets/images/pers2.png";
import pers3 from "../../public/assets/images/pers3.png";
import { ModalXl } from "../components/Modal";
import hwlk from "../../public/assets/images/hwlk.svg";
import nfaa from "../../public/assets/images/nfaa.svg";
import opm from "../../public/assets/images/opm.png";
import roag from "../../public/assets/images/roag.png";
import thmeen from "../../public/assets/images/thmeen.png";
import value from "../../public/assets/images/value.png";
import akark from "../../public/assets/images/akark.svg";
// import nata from "../../public/assets/images/nata.png";
import orera from "../../public/assets/images/orera.jpeg";
import axis from "../../public/assets/images/axis.jpeg";
import century from "../../public/assets/images/century.png";









export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const listItems = [
    "Software Consultant",
    "UI/ UX development",
    "E-commerce Develpment",
    "Mobile Application Development",
    "Real-State Smart Solution",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="  sm:ms-12 sm:me-12">
      <div className=" mt-16 mb-14 flex justify-center items-center">
        <img src={sr} alt="" />
        <p className="ps-2 font-mons text-hover  font-bold text-[16px] tracking-[1.6px]">
          About US
        </p>
      </div>

      <div className="flex justify-center items-center text-center ">
        <h2 className="text-5xl font-mons font-bold mb-[80px] px-[150px] text-center  tracking-[4.8px] leading-[75px]  text-primary">
          AMS GULF Illuminating Your Path to the Future{" "}
        </h2>
      </div>

      <div className="mb-12">
        <h2 className="text-primary font-mons text-[28px] font-bold tracking-[.64px] pb-8">
          WHO WE ARE?
        </h2>
        <p className="text-aboutCont font-mons text-[16px] tracking-[1.4px] font-normal leading-[35px]">
          At AMS GULF, we are more than just a marketing and software agency –
          we are your trusted lighthouse guiding your business toward a
          brighter, more innovative future. Established to bridge the gap
          between cutting-edge technology and impactful marketing strategies, we
          specialize in delivering tailored solutions that empower businesses to
          thrive in today’s fast-paced digital landscape.
        </p>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="  flex gap-4 mb-[100px]">
        <div className="flex-col ps-5 justify-center items-center w-1/3">
          <span className=" px-[80px] py-6  bg-primary rounded-[10px] text-[#fff] font-mons text-[20px] font-[500] ">
            OUR VISION
          </span>
          <p className="text-start mt-[30px] text-aboutCont font-mons text-[14px] tracking-[1.12px] font-normal leading-[35px]">
            We work closely with our clients from marketing consultancy and
            strategy development to design, video production, and technology
            implementation. Whether creating digital projects, social media
            content, or custom websites and apps, our goal is to exceed
            expectations. Our integrated approach aligns each project with
            client objectives, leveraging our expertise in SEO, UX/UI, and
            innovative technologies, ensuring our team addresses specific needs
            for successful outcomes.
          </p>
        </div>
        <div className="flex-col ps-5 justify-center items-center w-1/3">
          <span className=" px-[80px] py-6  bg-primary rounded-[10px] text-[#fff] font-mons text-[20px] font-[500] ">
            OUR MESSAGE
          </span>
          <p className="text-start mt-[30px] text-aboutCont font-mons text-[14px] tracking-[1.12px] font-normal leading-[35px]">
            We provide tailored solutions that align perfectly with your
            business needs. We are dedicated to sharing our expertise with our
            clients, and we take pride in collaborating across various
            industries to develop strategies that deliver impactful results. Our
            focus is on equipping our clients with the right resources to
            complement their technology, ensuring their success and growth.
          </p>
        </div>
        <div className="flex-col ps-5 justify-center items-center w-1/3">
          <span className=" px-[80px] py-6  bg-primary rounded-[10px] text-[#fff] font-mons text-[20px] font-[500] ">
            OUR MISSION
          </span>
          <p className="text-start mt-[30px] text-aboutCont font-mons text-[14px] tracking-[1.12px] font-normal leading-[35px]">
            With a strong foundation in understanding how businesses grow online
            through various platforms such as websites, social media, mobile
            applications, and more, we offer a marketing methodology that brings
            an interactive communication experience across different channels.
            By staying at the forefront of technological advancements,
            especially in AI, we ensure a cutting-edge approach that maximizes
            return on investment for our business clients.
          </p>
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="flex mb-[100px] ">
        <div className="w-[80%] flex-col justify-start items-start   pe-4">
          <p className="text-aboutCont font-mons text-[32px] tracking-[6.4px] font-bold leading-[60px] pb-[30px]">
            A suite of services designed to help businesses thrive in the
            digital future with AMS GULF.
          </p>
          <ModalXl />
        </div>

        <div className="w-1/2  text-start items-start ">
          <ul className="flex-col items-start justify-start space-y-4">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-start"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={hoveredIndex === index ? sr : srl} alt="sr Logo" />
                <p
                  className={`font-bold text-[20px] font-mons ps-4 ${
                    hoveredIndex === index ? "text-primary" : "text-secondary"
                  }`}
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="flex  gap-4  mb-[60px] ">
        <div className="w-1/2">
          <p className="text-aboutCont font-mons text-[18px] tracking-[1.4px] leading-[35px] ">
            {" "}
            <span className="text-primary font-bold font-mons text-[24px] tracking-[1.68px] leading-[35px]">
              Our team
            </span>{" "}
            of passionate experts combines creativity, technical expertise, and
            a deep understanding of market dynamics to craft experiences that
            resonate with your audience and drive measurable results. Whether
            it’s developing bespoke software, designing user-centric interfaces,
            or executing data-driven marketing campaigns, we are dedicated to
            turning your vision into reality. With AMS GULF, you don’t just stay
            ahead of the curve – you set the pace for the future.
          </p>
        </div>
        <div className="w-1/2 ">
          <img src={team} alt="team-image" className="w-full h-full" />
        </div>
      </div>
      <p className=" font-mons text-[28px] font-bold tracking-[.64px]  mb-8  ">
        Meet the Visionaries Behind AMS GULF
      </p>

      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


<div className="flex mb-[100px] gap-4">

<div className="card bg-base-100 w-96 p-4 h-[500px] border border-[##E0E0E0">
  <figure className="rounded-[10px]">
    <img
      src={pers1}
      alt="person"
      className="rounded-[10px] w-[405px] h-[407px] mb-4 " />
  </figure>
  <div className=" items-center text-center">
    <h2 className="text-center text-primary font-mons font-[600] tracking-[1.6]">Mostafa Karam</h2>
    <p>CMO</p>
  
  </div>
</div>

<div className="card bg-base-100 w-96 p-4 h-[500px] border border-[##E0E0E0">
  <figure className="rounded-[10px]">
    <img
      src={pers2}
      alt="person"
      className="rounded-[10px] w-[405px] h-[407px] mb-4 " />
  </figure>
  <div className=" items-center text-center">
    <h2 className="text-center text-primary font-mons font-[600] tracking-[1.6]">Mahmoud Mohamed</h2>
    <p>CTO</p>
  
  </div>
</div>

<div className="card bg-base-100 w-96 p-4 h-[500px] border border-[##E0E0E0">
  <figure className="rounded-[10px]">
    <img
      src={pers3}
      alt="person"
      className="rounded-[10px] w-[405px] h-[407px] mb-4 " />
  </figure>
  <div className=" items-center text-center">
    <h2 className="text-center text-primary font-mons font-[600] tracking-[1.6]">Ahmed Mohamed</h2>
    <p>CEO</p>
  
  </div>
</div>

</div>


  {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}



  <div className="flex justify-center items-center ">
    <h3 className="font-mons text-[32px] font-bold tracking-[5.12px]">
    Our Leading Brands Partnerships
    </h3>

  


  </div>


  <div className="flex-col mt-[60px]">

<div className="flex  justify-between items-center">
            <img src={nfaa} className="h-[70px] w-[190px]" alt="" />
            <img src={nfaa} alt=""  className="h-[70px] w-[190px]" />
            <img src={hwlk} alt=""  className="h-[70px] w-[190px]" />
            <img src={axis} alt=""  className="h-[70px] w-[190px]" />
            <img src={thmeen} alt=""  className="h-[70px] w-[190px]" />


</div>
<div className="flex  justify-between items-center mt-[80px] mb-[100px]">
            <img src={value} className="h-[70px] w-[190px]" alt="" />
            <img src={opm} alt=""  className="h-[70px] w-[190px]" />
            <img src={akark} alt=""  className="h-[70px] w-[190px]" />
            <img src={roag} alt=""  className="h-[70px] w-[190px]" />
            <img src={century} alt=""  className="h-[70px] w-[190px]" />


</div>



    </div>






    </div>
  );
}
