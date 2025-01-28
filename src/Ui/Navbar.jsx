import logo from "../../public/assets/icons/logo.svg";
import global from "../../public/assets/icons/Globe.svg";

import Button from "../components/Button";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import {ModalXl, MyModal} from "../components/Modal";

export default function NavBar() {
  const [theme, setTheme] = useState("light");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function handleToogle() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  function handleModal() {
    return;
    <MyModal />;
  }

  return (
    <>
      <div className="navbar bg-base-100 drop-shadow-md">
        <div className="navbar-start flex justify-start items-start sm:justify-start sm:items-start sm:flex-row">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden flex justify-start items-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 bg-red-500"
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
                <NavLink>Services</NavLink>
                <ul className="p-2">
                  <li className="text-[16x] font-mons font-[500] text-secondary">
                    <NavLink to={"/webdevelopment"}>Web Development</NavLink>
                  </li>
                  <li className="text-[16x] font-mons font-[500] text-secondary">
                    <NavLink></NavLink>
                  </li>
                </ul>
              </li>
              <li className="text-[16x] font-mons font-[500] text-secondary">
                <Link>Work</Link>
              </li>
              <li className="text-[16x] font-mons font-[500] text-secondary">
                <Link>About</Link>
              </li>
              <li className="text-[16x] font-mons font-[500] text-secondary">
                <Link>Careers</Link>
              </li>
              <li className="text-[16x] font-mons font-[500] text-secondary">
                <Link>Blog</Link>
              </li>
            </ul>
          </div>

          <div className="flex-col text-center justify-center items-center ps-10 w-20">
            <Link to={"/"}>
              <img src={logo} className="w-full" />
              <p className="text-[10px] font-Arial text-primary font-semibold">
                Gulf
              </p>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="!bg-transparent !rounded-none text-[16x] font-mons font-[500] hover:border-b-[5px] hover:bg-transparent hover:border-primary hover:pb-3 text-secondary ms-10 me-[45px] relative">
                <NavLink className="flex items-center">
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </NavLink>
                {isDropdownOpen && (
                  <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 absolute top-full left-0">
                    <li>
                      <NavLink to={"/webdevelopment"}>Web Development</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/mobiledevelopment"}>
                        Mobile Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/qualityassurance"}>
                        Quality Assurance
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/uiuxdesign"}>UI & UX</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/itandhardware"}>IT & Hardware</NavLink>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="!bg-transparent !rounded-none text-[16x] font-mons font-[500] hover:border-b-[5px] hover:bg-transparent hover:border-primary hover:pb-3 text-secondary me-[45px]">
              <Link className="hover:bg-transparent">Work</Link>
            </li>
            <li className="!bg-transparent !rounded-none text-[16x] font-mons font-[500] hover:border-b-[5px] hover:bg-transparent hover:border-primary hover:pb-3 text-secondary me-[45px]">
              <Link className="hover:bg-transparent">About</Link>
            </li>
            <li className="!bg-transparent !rounded-none text-[16x] font-mons font-[500] hover:border-b-[5px] hover:bg-transparent hover:border-primary hover:pb-3 text-secondary me-[45px]">
              <Link className="hover:bg-transparent">Careers</Link>
            </li>
            <li className="text-[16x] font-mons font-[500] text-secondary me-[125px] hover:border-b-[5px] hover:border-primary hover:pb-3">
              <Link className="hover:bg-transparent">Blog</Link>
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
            className="toggle me-5 bg-white toggle-[#3183FF] [--tglbg:#3183FF] border-[#92B0FF]"
            defaultChecked
            value={theme}
            onClick={handleToogle}
          />

          <MyModal />
        </div>
      </div>
    </>
  );
}
