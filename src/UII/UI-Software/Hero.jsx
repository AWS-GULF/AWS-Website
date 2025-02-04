import Button from "../../components/Software-components/Button";
import heroImg from "../../../public/assets/images/34beae32-da62-437d-9af6-1c67cc073acd.png";
import x from "../../../public/assets/icons/x.svg";
import faceBook from "../../../public/assets/icons/facebook.svg";
import youtube from "../../../public/assets/icons/youtube.svg";
import insta from "../../../public/assets/icons/insta.svg";
import behance from "../../../public/assets/icons/behance.svg";
import snap from "../../../public/assets/icons/snap.svg";
import linked from "../../../public/assets/icons/linked.svg";
import { ModalXl } from "../../components/Software-components/Modal";

export default function Hero() {
  return (
    <div className=" sm:my-12 sm:mx-12 flex-col sm:flex-row sm:flex sm:justify-between  sm:items-center  ">
      <div className="sm:w-[45%]  ">
        <div className="title & desc  text-center sm:text-start mb-4 sm:mb-16 ">
          {" "}
          <h1 className="text-primary font-bold sm:text-5xl hidden sm:block tracking-widest font-mons mb-6">
            Your Lighthouse <br /> To Future
          </h1>
          <h1 className="text-primary font-bold sm:text-5xl text-2xl mt-6 sm:hidden tracking-widest font-mons mb-6">   Your Lighthouse  To Future</h1>
          <p className="text-[#333] lg:mt-8  mt-4 text-[14px] lg:text-[16] font-mons leading-[20px] lg:leading-8 lg:tracking-wide font-light ">
            Marketing consultancy, UX UI web design, <br /> mobile apps &
            software coding, sponsored ads, <br /> content creation, graphic
            design, AI & video <br /> production.
          </p>
        </div>

<div className="buttonsAndIcons">
<div className="flex sm:gap-[30px] justify-center sm:justify-start items-center  ">
<p className=""><ModalXl/></p>
<p className="ms-4"><Button type="primaryXlLight">Marketing Services</Button></p>

</div>

   <ul className="mt-[30px] flex justify-center sm:items-center sm:gap-7  gap-2 ">
    <li><img src={behance} alt="behance"  className="w-[20px] h-[15px]"/></li>
    <li><img src={insta} alt="instagram" className="w-[20px] h-[15px]"/></li>
    <li><img src={linked} alt="linked in" className="w-[20px] h-[15px]"/></li>
    <li><img src={youtube} alt="youtube" className="w-[20px] h-[15px]"/></li>
    <li><img src={faceBook} alt="facebook" className="w-[20px] h-[15px]"/></li>
    <li><img src={snap} alt="snap chat" className="w-[20px] h-[15px]"/></li>
    <li><img src={x} alt="x" className="w-[20px] h-[15px]"/></li>


 </ul>

</div>
 
      </div>


      <div className="sm:w-[45%] ">


        <div className=" justify-center hidden sm:flex items-center sm:my-0 mt-5">
        {/* <p className="me-6 font-mons text-sm flex-nowrap text-primary font-bold ">Hadware & IT Services</p> */}
          <img src={heroImg} className="w-[160px] h-[160px]" alt="logo" />
        {/* <p className="ms-6 font-mons text-sm flex-nowrap text-primary font-bold">Marketing Solutions</p> */}
        </div>





      </div>
    </div>
  );
}
