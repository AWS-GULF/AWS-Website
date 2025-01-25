import logo from "../../public/assets/icons/logo.svg";
import x from "../../public/assets/icons/x.svg";
import faceBook from "../../public/assets/icons/facebook.svg";
import youtube from "../../public/assets/icons/youtube.svg";
import insta from "../../public/assets/icons/insta.svg";
import behance from "../../public/assets/icons/behance.svg";
import snap from "../../public/assets/icons/snap.svg";
import linked from "../../public/assets/icons/linked.svg";
export default function Footer() {
  return (
    <>
      <div className="sm:flex sm:justify-evenly sm:items-start sm:pt-16 w-full Footer ">
        <footer className="footer  text-base-content  sm:flex sm:justify-between sm:items-start  sm:ps-12 sm:pe-12 shadow-sm ">
          <div className="w-[40%]">
            <aside>
              <div className=" flex-col text-center justify-center  items-center w-36 mt-[-5px]  m-auto ">
                <img src={logo} className="  w-full  " />
                <p className="text-6 font-Arial text-primary font-semibold">
                  {" "}
                  Gulf
                </p>
              </div>

              <p className=" text-primary font-bold sm:text-3xl sm:tracking-widest text-center sm:ps-12  font-mons sm:mt-4">
                Your Lighthouse To <br /> The Future
              </p>
            </aside>
          </div>
          <div className="w-[60%] sm:flex sm:justify-evenly  sm:items-start ">
            <nav className="">
              <h6 className=" font-mons text-[24px] font-[500] text-primary mb-2 ">
                Services
              </h6>
              <ul className="">
                <li className="mb-2">Mobile Development</li>
                <li className="mb-2">Mobile Development</li>
                <li className="mb-2">User-Centric Design</li>
                <li className="mb-2">Data and Analytics</li>
                <li className="mb-2">IT Services and IT Consultant</li>
                <li className="mb-2">Software Consulting</li>
              </ul>
            </nav>
            <nav className="  flex-col justify-start items-start ps-16">
              <h6 className="font-mons text-[24px] font-[500] text-primary mb-2">
                Contact Us
              </h6>
              <ul>
                <li className="mb-4">
                  {" "}
                  Seville District 6346, Riyadh, Saudi Arabia
                </li>
                <li className="mb-4">+966 569851545</li>
                <li className="mb-4">wessam@awsgulf.com</li>
                <li className="mb-4">www.awasgulft.com</li>
                <ul className="mt-3 flex  items-center ">
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

      <p className="ms-[96px] me-[96px] text-center mt-10">
        {" "}
        &copy; 2024 ScaleUp Media. All rights reserved.
      </p>
    </>
  );
}
