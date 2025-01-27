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
    <div className=" sm:my-12 sm:mx-12 flex-col sm:flex-row sm:flex sm:justify-between  sm:items-center  ">
      <div className="sm:w-[45%] ">
        <div className="title & desc mb-16">
          {" "}
          <h1 className="text-primary font-bold sm:text-5xl tracking-widest font-mons mb-6">
            Your Lighthouse <br /> To Future
          </h1>
          <p className="sm:tracking-wider font-mons text-[20px] text-secondary font-light ">
            Marketing consultancy, UX UI web design, <br /> mobile apps &
            software coding, sponsored ads, <br /> content creation, graphic
            design, AI & video <br /> production.
          </p>
        </div>

<div className="buttonsAndIcons">
<div className="flex gap-[30px] justify-start items-center  ">
<p className=""><Button type="primaryXl">Contact Us Now</Button></p>
<p><Button type="primaryXlLight">Marketing Services</Button></p>

</div>

   <ul className="mt-[30px] flex  items-center sm:gap-7  gap-2 ">
    <li><img src={behance} alt="behance" /></li>
    <li><img src={insta} alt="instagram" /></li>
    <li><img src={linked} alt="linked in" /></li>
    <li><img src={youtube} alt="youtube" /></li>
    <li><img src={faceBook} alt="facebook" /></li>
    <li><img src={snap} alt="snap chat" /></li>
    <li><img src={x} alt="x" /></li>


 </ul>

</div>
 
      </div>


      <div className="sm:w-[45%] ">


        <div className="flex justify-center  items-center sm:my-0 mt-5">
        {/* <p className="me-6 font-mons text-sm flex-nowrap text-primary font-bold ">Hadware & IT Services</p> */}
          <img src={heroImg} className="w-[160px] h-[160px]" alt="logo" />
        {/* <p className="ms-6 font-mons text-sm flex-nowrap text-primary font-bold">Marketing Solutions</p> */}
        </div>





      </div>
    </div>
  );
}
