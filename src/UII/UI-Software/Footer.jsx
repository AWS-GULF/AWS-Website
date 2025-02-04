import logo from "/assets/icons/logo.svg";
import x from "/assets/icons/x.svg";
import faceBook from "/assets/icons/facebook.svg";
import youtube from "/assets/icons/youtube.svg";
import insta from "/assets/icons/insta.svg";
import behance from "/assets/icons/behance.svg";
import snap from "/assets/icons/snap.svg";
import linked from "/assets/icons/linked.svg";
export default function Footer() {
  return (
    <>
      <div className="lg:flex lg:justify-evenly lg:items-start lg:pt-16 w-full Footer border-t ">
        <footer className="footer flex-col justify-center items-center flex text-base-content  lg:flex-row lg:justify-between lg:items-start  lg:ps-12 lg:pe-12  ">
          <div className="w-full lg:w-[40%] ">
            <aside className="w-full flex lg:flex-col  justify-center items-center">
              <div className=" flex-col text-center items-center lg:justify-start  lg:items-start  w-[50%]   lg:w-36 mt-[-5px]  lg:m-auto ">
                <img src={logo} className="mx-auto w-[50%]  lg:w-full  " />
                <p className="lg:text-6 mx-auto  text-lg font-Arial text-primary font-semibold w-[50%]  lg:w-full  ">
                  {" "}
                  Gulf
                </p>
              </div>

              <p className=" text-primary font-bold lg:text-2xl md:3xl lg:ms-[-30px] md:ms-[-40px] lg:tracking-widest text-center lg:ps-12  font-mons lg:mt-4 hidden lg:block">
                Your Lighthouse To <br /> The Future
              </p>
            </aside>
          </div>
          <div className="w-[90%] lg:w-[60%] lg:flex justify-evenly flex items-start ms-10 lg:items-start ">
            <nav className=" lg:pe-0">
              <h6 className=" font-mons text-[16px] lg:text-[24px] font-[500] text-primary mb-2 ">
                Services
              </h6>
              <ul className="text-[8px] lg:text-[16px] ">
                <li className="lg:mb-2">Mobile Development</li>
                <li className="lg:mb-2">Mobile Development</li>
                <li className="lg:mb-2">User-Centric Design</li>
                <li className="lg:mb-2">Data and Analytics</li>
                <li className="lg:mb-2">IT Services and IT Consultant</li>
                <li className="lg:mb-2">Software Consulting</li>
              </ul>
            </nav>
            <nav className="  flex-col justify-start items-start ps-5  lg:ps-16 ">
              <h6 className="font-mons text-[16px] lg:text-[24px] font-[500] text-primary mb-2">
                Contact Us
              </h6>
              <ul className="text-[8px] lg:text-[16px]">
                <li className="mb-4">
                  {" "}
                  Seville District 6346, Riyadh, Saudi Arabia
                </li>
                <li className="lg:mb-4 mb-2 ">+966 569851545</li>
                <li className="lg:mb-4 mb-2">wessam@awsgulf.com</li>
                <li className="lg:mb-4 mb-2">www.awasgulft.com</li>
                <ul className="mt-3   items-center hidden lg:flex ">
                  <li>
                    <img src={behance} className="w-6 h-4" alt="behance" />
                  </li>
                  <li>
                    <img src={insta} className="w-6 h-4" alt="instagram" />
                  </li>
                  <li>
                    <img src={linked} className="w-6 h-4" alt="linked in" />
                  </li>
                  <li>
                    <img src={youtube} className="w-6 h-4" alt="youtube" />
                  </li>
                  <li>
                    <img src={faceBook} className="w-6 h-4" alt="facebook" />
                  </li>
                  <li>
                    <img src={snap} className="w-6 h-4" alt="snap chat" />
                  </li>
                  <li>
                    <img src={x} className="w-6 h-4" alt="x" />
                  </li>
                </ul>
              </ul>
            </nav>
          </div>
        </footer>
      </div>

      <p className="ms-[96px] me-[96px] text-center mt-10 mb-3 text-[10px]">
        {" "}
        &copy; 2024 AWS Gulf . All rights reserved.
      </p>
    </>
  );
}
