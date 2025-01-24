import logo from "../../public/assets/icons/logo.svg";
import global from "../../public/assets/icons/Globe.svg";

import Button from "../components/Button";
import { useEffect, useState } from "react";

// import Toggle from "../components/Toggle";
// import Button from "../components/Button";

export default function NavBar() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);


  function handleToogle() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  return (
    <>
      {/* <div className="w-full m-auto  flex flex-col justify-center xl:w-75 items-center xl:flex xl:flex-row xl:justify-center xl:items-center xl:mt-[38px] font-cairo text-primary">
        <div className="flex-col justify-center items-center text-center xl:m-auto xl:me-5  me-9  ">
          <img src={logo} className="xl:ms-[5px]" alt="GULF" />
          <span className="text-xl xl:px-[7px]  ">GULF</span>
        </div>
        <ul className=" w-full flex-col justify-center items-center xl:flex xl:flex-row xl:justify-center space-x-10">
          <li className=" text-center my-3 me-9">خدماتنا</li>
          <li className=" text-center my-3 whitespace-nowrap ">
            تكنولوجيا المعلومات والأجهزة
          </li>
          <li className=" text-center my-3">أعمالنا</li>
          <li className=" text-center my-3">من نحن</li>
          <li className=" text-center my-3">الوظائف</li>
          <li className=" text-center my-3">مقالاتنا</li>
        </ul>
        <div className="flex justify-center items-center xl:flex xl:flex-row xl:justify-center xl:items-center ">
          <Toggle />
          <span className="flex justify-center items-center w-6 h-6 xl:flex xl:flex-row xl:justify-center xl:items-center me-[50px]">
            <span className=" xl:me-1 text-center">English</span>
            <img src={global} className="w-24 h-24" alt="globalworld" />
          </span>

          <Button type="primary">
            <p>اتصل بنا</p>
          </Button>
        </div>
      </div> */}

      <div className="navbar bg-base-100 drop-shadow-md 	">
        <div className="navbar-start flex justify-start items-start sm:justify-start sm:items-start sm:flex-row">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden flex justify-start items-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 bg-red-500 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="text-[16x] font-mons font-[500] text-secondary">
                <a>Services</a>
                <ul className="p-2">
                  <li className="text-[16x] font-mons font-[500] text-secondary">
                    <a>1</a>
                  </li>
                  <li className="text-[16x] font-mons font-[500] text-secondary">
                    <a>2</a>
                  </li>
                </ul>
              </li>
              <li className="text-[16x] font-mons font-[500] text-secondary">
                <a>Work</a>
              </li>
              <li className="text-[16x] font-mons font-[500] text-secondary">
                <a>About</a>
              </li>
              <li className="text-[16x] font-mons font-[500] text-secondary">
                <a>Careers</a>
              </li>
              <li className="text-[16x] font-mons font-[500] text-secondary">
                <a>Blog</a>
              </li>
            </ul>
          </div>

          <div className=" flex-col text-center justify-center  items-center  ps-10 w-20  ">
            <img src={logo} className=" w-full" />
            <p className="text-[10px] font-Arial text-primary font-semibold">
              {" "}
              Gulf
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="text-[16x] font-mons font-[500] text-secondary ms-10 me-[45px] ">
                  Services
                </summary>
                <ul className="p-2">
                  <li>
                    <a>1</a>
                  </li>
                  <li>
                    <a>2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="text-[16x] font-mons font-[500] text-secondary me-[45px]">
              <a>Work</a>
            </li>
            <li className="text-[16x] font-mons font-[500] text-secondary me-[45px]">
              <a>About</a>
            </li>
            <li className="text-[16x] font-mons font-[500] text-secondary me-[45px]">
              <a>Careers</a>
            </li>
            <li className="text-[16x] font-mons font-[500] text-secondary me-[125px]">
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end pe-12 flex-col sm:flex-row">
          <img src={global} alt="Earth-image" />
          <span className="me-5 ms-1 font-cairo font-[500] text-secondary">
            العربية
          </span>
          <input
            type="checkbox"
            className="toggle  me-5 bg-white toggle-[#3183FF] [--tglbg:#3183FF]  border-[#92B0FF] "
            defaultChecked
            value={theme}
            onClick={handleToogle}
          />

          <Button type="primary">Contact Us </Button>
        </div>
      </div>
    </>
  );
}


