import Button from "../components/Button";
import heroImg from "../../public/assets/images/34beae32-da62-437d-9af6-1c67cc073acd.png";
import x from "../../public/assets/icons/x.svg";
import faceBook from "../../public/assets/icons/facebook.svg";
import youtube from "../../public/assets/icons/youtube.svg";
import insta from "../../public/assets/icons/insta.svg";
import behance from "../../public/assets/icons/behance.svg";
import snap from "../../public/assets/icons/snap.svg";
import linked from "../../public/assets/icons/linked.svg";

export default function Hero() {
  return (
    <div className="flex-col mt-14 text-primary m-0 xl:flex xl:flex-row  ">
      <div className="xl:w-50 m-auto w-full flex-col justify-center items-center ">
        <h1 className="mb-6 font-mons text-[36px] font-bold " >
          Your Lighthouse <br /> To Future
        </h1>
        <p className="text-secondary mb-14 font-mons leading-8 font-light    self-stretch ">
          {" "}
          Marketing consultancy, UX UI web design, <br />mobile apps & software
          coding, sponsored ads,<br />
           content creation, graphic design, AI & video <br />
          production.
        </p>
        <Button type="primary">Contact Us Now</Button>






        <div className="flex  mx-0  mt-9  sm:space-x-2  space-x-2">
          <img
            src={x}
            alt="x-platform"
            className="sm:w-[25px] sm:h-[25px]   "
          />
          <img src={snap} alt="snap-platform" className="sm:w-[25px] sm:h-[25px]] " />
          <img
            src={faceBook}
            alt="faceBook-platform"
            className="sm:w-[25px] sm:h-[25px]"
          />
          <img src={youtube} alt="youtube-platform" className="sm:w-[25px] sm:h-[25px] " />
          <img src={linked} alt="linked-platform" className="sm:w-[25px] sm:h-[25px] " />
          <img src={insta} alt="insta-platform" className="sm:w-[25px] sm:h-[25px] " />
          <img src={behance} alt="behance-platform" className="sm:w-[25px] sm:h-[25px] " />
        </div>
      </div>




      {/* ////////////////////////////////////////////////////////// */}

      <div className="w-full  flex-col ms-5 items-center justify-center">
        <div className="flex justify-between items-end  ">
          <p> Software Solutions</p>
        <img src={heroImg} className=" w-32 h-32" alt="Logo" />
          <p>Marketing Solutions</p>
        </div>
      </div>
    </div>
  );
}
