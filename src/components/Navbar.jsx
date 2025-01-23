import logo from "../../public/assets/icons/logo.svg";
import global from "../../public/assets/icons/Globe.svg";
import Toggle from "../components/Toggle";
import Button from "../../src/components/Button";
export default function NavBar() {
  return (
    <>
      <div className=" mt-0  border-b border-stroke w-full m-auto  flex flex-col justify-center xl:w-75 items-center xl:flex xl:flex-row xl:justify-center xl:items-center  font-cairo text-primary">
        <div className=" flex-col justify-center items-center text-center xl:m-auto xl:me-5   ">
          <img src={logo} className="mb-[-7px]" alt="GULF" />
          <span className="text-[10px] xl:px-[10px] font-arial me-2  text-[#58595B]  text-center">
            GULF
          </span>
        </div>
        <ul className=" w-full flex-col justify-center items-center xl:flex xl:flex-row xl:justify-center sm:space-x-10">
          <li className=" text-center my-2 sm:my-0 sm:ms-16">services</li>
          {/* <li className=" text-center my-2 sm:my-0 me-9 whitespace-nowrap ">
            تكنولوجيا المعلومات والأجهزة
          </li> */}
          <li className=" text-center my-2 sm:my-0 sm:me-16 ">Work</li>
          <li className=" text-center my-2 sm:my-0 sm:me-16 ">About</li>
          <li className=" text-center my-2 sm:my-0 sm:me-16 "> Careers</li>
          <li className=" text-center my-2 sm:my-0 sm:me-16 ">Blog</li>
        </ul>
        <div className="flex justify-center items-center xl:flex xl:flex-row xl:justify-center xl:items-center ">
          <Toggle />
          <span className="flex justify-center items-center w-6 h-6 xl:flex xl:flex-row xl:justify-center xl:items-center me-[50px]">
            <span className=" xl:me-1 text-center  me-10 ms-5 sm:ms-[-120px]">
              English
            </span>
            <img
              src={global}
              className="w-24 h-24 ms-10 sm:ms-0 me-24"
              alt="globalworld"
            />
          </span>

          <Button type="primary">
            <p>Contact Us</p>
          </Button>
        </div>
      </div>
    </>
  );
}
