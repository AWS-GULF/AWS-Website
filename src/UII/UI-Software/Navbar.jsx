import logo from "/assets/icons/logo.svg";
import global from "/assets/icons/Globe.svg";
import list from "/assets/icons/List.svg";

import Button from "../../components/Software-components/Button";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { ModalXl, MyModal } from "../../components/Software-components/Modal";

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
      {/* sticky top-0 */}
      <div className="navbar   ">
        <div className="navbar-start  flex w-full justify-between items-center md:justify-start sm:justify-start sm:items-start sm:flex-row">
          <div className="flex-col text-center justify-center items-center ps-10 w-20">
            <Link to={"/"}>
              <img src={logo} className="w-full   " />
              <p className="text-[10px] font-Arial text-primary font-semibold">
                Gulf
              </p>
            </Link>
          </div>
          <div className="dropdown md:ms-48 lg:ms-0 lg:m-0 md:mt-auto ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden flex justify-start items-start"
            >
              <img src={list} alt="" />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[250px] p-2 shadow flex-col right-0 sm:left-0  "
            >
              <li className="!bg-transparent !rounded-none text-[16x] font-mons font-[700] hover:border-b-[5px] hover:bg-transparent  text-secondary relative">
                <li
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className=" !bg-transparent !rounded-none text-[16x] ps-0 font-mons font-[700] hover:border-b-[5px] hover:bg-transparent  text-secondary relative bg-red-400">
                    <NavLink className="flex justify-end items-center ">
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
                      <ul className=" dropdown-content menu p-2 shadow bg-gray-300 rounded-box w-64 absolute top-full right-0 z-10">
                        <li className="!bg-transparent !rounded-none text-[16x] font-mons font-[700] hover:border-b-[5px] hover:bg-transparent  text-secondary  relative">
                          <NavLink to={"/webdevelopment"}>
                            Web Development
                          </NavLink>
                        </li>
                        <li className="!bg-transparent !rounded-none text-[16x] font-mons font-[700] hover:border-b-[5px] hover:bg-transparent  text-secondary  relative">
                          <NavLink to={"/mobiledevelopment"}>
                            Mobile Development
                          </NavLink>
                        </li>
                        <li className="!bg-transparent !rounded-none text-[16x] font-mons font-[700] hover:border-b-[5px] hover:bg-transparent  text-secondary  relative">
                          <NavLink to={"/qualityassurance"}>
                            Quality Assurance
                          </NavLink>
                        </li>
                        <li className="!bg-transparent !rounded-none text-[16x] font-mons font-[700] hover:border-b-[5px] hover:bg-transparent  text-secondary  relative">
                          <NavLink to={"/uiuxdesign"}>UI & UX</NavLink>
                        </li>
                        <li className="!bg-transparent !rounded-none text-[16x] font-mons font-[700] hover:border-b-[5px] hover:bg-transparent  text-secondary  relative">
                          <NavLink to={"/itandhardware"}>IT & Hardware</NavLink>
                        </li>
                      </ul>
                    )}
                  </div>
                </li>
              </li>
              <li className="!bg-transparent !rounded-none text-[16x] font-mons font-[700] hover:border-b-[5px] hover:bg-transparent  text-secondary relative">
                <Link to="/work">Work</Link>
              </li>
              <li className="!bg-transparent !rounded-none text-[16x] font-mons font-[700] hover:border-b-[5px] hover:bg-transparent  text-secondary relative">
                <Link to="/about">About</Link>
              </li>
              <li className="!bg-transparent !rounded-none text-[16x] font-mons font-[700] hover:border-b-[5px] hover:bg-transparent  text-secondary relative">
                <Link to="/careers">Careers</Link>
              </li>
              <li className="!bg-transparent !rounded-none text-[16x] font-mons font-[700] hover:border-b-[5px] hover:bg-transparent  text-secondary relative">
                <Link>Blog</Link>
              </li>
              <li className="=flex font-mons font-[700]  text-secondary">
                <div className="flex justify-center items-center ">
                  {" "}
                  <img src={global} alt="Earth-image" />
                  <span className=" font-cairo font-[700] text-secondary">
                    العربية
                  </span>
                </div>
              </li>
              <li className="flex justify-center items-center ">
                <input
                  type="checkbox"
                  className="toggle mt-3 bg-white toggle-[#3183FF] [--tglbg:#3183FF] border-[#92B0FF]"
                  defaultChecked
                  value={theme}
                  onClick={handleToogle}
                />
              </li>

              <li className="mt-4">
                <MyModal />
              </li>
            </ul>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

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
              <Link className="hover:bg-transparent" to={"/work"}>
                Work
              </Link>
            </li>
            <li className="!bg-transparent !rounded-none text-[16x] font-mons font-[500] hover:border-b-[5px] hover:bg-transparent hover:border-primary hover:pb-3 text-secondary me-[45px]">
              <Link className="hover:bg-transparent" to={"/about"}>
                About
              </Link>
            </li>
            <li className="!bg-transparent !rounded-none text-[16x] font-mons font-[500] hover:border-b-[5px] hover:bg-transparent hover:border-primary hover:pb-3 text-secondary me-[45px]">
              <Link className="hover:bg-transparent" to={"/careers"}>
                Careers
              </Link>
            </li>
            <li className="text-[16x] font-mons font-[500] text-secondary me-[125px] hover:border-b-[5px] hover:border-primary hover:pb-3">
              <Link className="hover:bg-transparent">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end sm:pe-12 flex-col  sm:flex-row hidden sm:flex   ">
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
