import React, { useState, useEffect } from "react";
import logo from "/assets/images/imagess/Logo.svg";
import icon from "/assets/images/imagess/icon.svg";
export default function NavbarMarkting() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode === "true") {
          setDarkMode(true);
          document.documentElement.classList.add("dark");
          document.body.style.backgroundColor = "#242424"; 
      }
  }, []);

  const toggleDarkMode = () => {
      setDarkMode((prevMode) => {
          const newMode = !prevMode;
          // حفظ التفضيل في localStorage
          localStorage.setItem("darkMode", newMode.toString());

          if (newMode) {
              document.documentElement.classList.add("dark"); 
              document.body.style.backgroundColor = "#242424"; 
          } else {
              document.documentElement.classList.remove("dark"); 
              document.body.style.backgroundColor = "";
          }

          return newMode;
      });
  };

    return (
      <>
        <nav className="bg-white dark:bg-[#242424] border-gray-200 shadow-sm m-0 p-0">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <img src={logo} className="w-full sm:w-1/2 md:w-11/12 lg:w-full" alt="" />
  </a>
  
            <div className="flex iconsize items-center md:order-2 gap-3 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <i className="fa-solid fa-globe bg-color-p "> العربية</i> 
  <i
    onClick={toggleDarkMode}
    className={`fa-solid fa-toggle-on   text-4xl  text-[#5BA89C] lg:pr-[30px] md:pr-[1px] cursor-pointer ${darkMode ? 'text-white' : 'text-gray-800'}`}
  />
  
  <button className="bg-button rounded-3xl py-2  px-4 mt-1 lg:mt-0 mx-auto text-amber-50 sm:py-2 sm:px-4 md:py-3 md:px-5 lg:py-4 lg:px-6">
    Contact Us
  </button>
  
              <button
                data-collapse-toggle="mega-menu-icons"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100  gap-x-4 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mega-menu-icons"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <div id="mega-menu-icons" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
              <ul className="flex flex-col mt-4 left-0 font-medium md:flex-row md:mt-0 md:space-x-6 rtl:space-x-reverse">
                {/* Services Dropdown */}
                <li className="relative group flex justify-between">
                <a href="#" className="block py-2 px-3 text-[#666] dark:text-[#666]">Services</a>
                <div className="absolute opacity-0 group-hover:opacity-100  left-0 transition-opacity duration-500 ease-in-out group-hover:block bg-white border border-gray-100 z-10 rounded-lg shadow-md mt-24 group-hover:bg-button">
    <div className="flex "> 
      
      
     
       <ul className="p-10">
         <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Brand & Design</a></li>
       <div className=" bg-[#5BA89C] my-4 w-56 h-1"></div>
       
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Website Solutions</a></li>
      <div className="bg-[#5BA89C] w-56 my-4 h-1"></div>
       
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Digital Marketing</a></li>
       <div className="bg-[#5BA89C] w-56 my-4 h-1"></div>
       
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Marketing Consultation</a></li>
          <div className="bg-[#5BA89C] w-56 my-4 h-1"></div>
          </ul>
    
  
      {/* القسم اليميني يحتوي على 3 عناصر بشكل عمودي */}
      <div className="flex flex-row gap-36 w-4/12 p-5 px-8 "> 
        <div className="flex items-center flex-col  ">
          <ul className="flex items-center gap-4 ">
            <img src={icon} alt="iconNav" className="w-6 h-6 " />
            <li>Branding</li>
          </ul>
          <p className="py-3 break-words text-left   bg-red-500  block ">Give your business a unique look to stand out from the crowd.</p>
        </div>
  
        <div className="flex flex-col items-start">
          <ul className="flex items-center gap-3">
            <img src={icon} alt="iconNav" className="w-6 h-6" />
            <li>Corporate Identity</li>
          </ul>
          <p className="py-3 break-words text-left   bg-red-500  block ">Create a visual language that represents your brand.</p>
        </div>
  
        <div className="flex flex-col items-start">
          <ul className="flex items-center gap-3">
            <img src={icon} alt="iconNav" className="w-6 h-6" />
            <li>Graphic Design</li>
          </ul>
          <p className="py-3 break-words text-left   bg-red-500  block ">Grow your business with our Eye-Catching and Professional Graphic Design Services.</p>
        </div>
      </div>
  
    </div>
  </div>
  
  
  
    <i className="fa-solid fa-chevron-down absolute hidden  md:block left-[85px] top-1/2 transform -translate-y-1/2 transition-transform group-hover:rotate-180 text-[#666]"></i>
  </li>
  
  
           
                <li className="relative group flex ">
    <a href="#" className="block py-2 px-3  text-[#666] dark:text-[#666]">Industries</a>
    <div className="absolute opacity-0 group-hover:opacity-100 w-[50vw]  left-0 transition-opacity duration-500 ease-in-out group-hover:block bg-white border border-gray-100 z-10 rounded-lg shadow-md mt-24 group-hover:bg-button">
      <ul className="flex flex-wrap gap-6 p-3">
        {/* صف 1 */}
        <div className="flex justify-start gap-3 w-1/3">
          <img src={icon} alt="iconNav" className="w-6 h-6" />
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Health Care</a></li>
        </div>
        <div className="flex justify-start gap-3 w-1/3">
          <img src={icon} alt="iconNav" className="w-6 h-6" />
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Education</a></li>
        </div>
        <div className="flex justify-start gap-3 w-1/3">
          <img src={icon} alt="iconNav" className="w-6 h-6" />
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Manufacturers</a></li>
        </div>
  
        {/* صف 2 */}
        <div className="flex justify-start gap-3 w-1/3">
          <img src={icon} alt="iconNav" className="w-6 h-6" />
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Law Firms</a></li>
        </div>
        <div className="flex justify-start gap-3 w-1/3">
          <img src={icon} alt="iconNav" className="w-6 h-6" />
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Financial</a></li>
        </div>
        <div className="flex justify-start gap-3 w-1/3">
          <img src={icon} alt="iconNav" className="w-6 h-6" />
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Business Services</a></li>
        </div>
  
        {/* صف 3 */}
        <div className="flex justify-start gap-3 w-1/3">
          <img src={icon} alt="iconNav" className="w-6 h-6" />
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Shopify Store</a></li>
        </div>
        <div className="flex justify-start gap-3 w-1/3">
          <img src={icon} alt="iconNav" className="w-6 h-6" />
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Energy</a></li>
        </div>
        <div className="flex justify-start gap-3 w-1/3">
          <img src={icon} alt="iconNav" className="w-6 h-6" />
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Real Estate</a></li>
        </div>
  
        {/* صف 4 */}
        <div className="flex justify-start gap-3 w-1/3">
          <img src={icon} alt="iconNav" className="w-6 h-6" />
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Restaurants</a></li>
        </div>
        <div className="flex justify-start gap-3 w-1/3">
          <img src={icon} alt="iconNav" className="w-6 h-6" />
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Retail industry</a></li>
        </div>
        <div className="flex justify-start gap-3 w-1/3">
          <img src={icon} alt="iconNav" className="w-6 h-6" />
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">E-Residency Companies</a></li>
        </div>
  
      
        <div className="flex justify-start gap-3 w-1/3">
          <img src={icon} alt="iconNav" className="w-6 h-6" />
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Consulting Firms</a></li>
        </div>
        <div className="flex justify-start gap-3 w-1/3">
          <img src={icon} alt="iconNav" className="w-6 h-6" />
          <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block">Technology</a></li>
        </div>
        <div className="flex justify-start gap-3 w-1/3">
          <img src={icon} alt="iconNav" className="w-6 h-6" />
          <li><a href="#" className="text-[#666] dark:text-[#666]  hover:text-[#5BA89C]  inline-block">Logistics</a></li>
        </div>
      </ul>
    </div>
    <i className="fa-solid fa-chevron-down absolute hidden md:block left-[97px] top-1/2 transform -translate-y-1/2 transition-transform group-hover:rotate-180 text-[#666]"></i>
  </li>
  
  
  
  
                {/* Portfolio Dropdown */}
                <li className="relative group">
                  <a href="#" className="block py-2 px-3 text-[#666] dark:text-[#666]">Portfolio</a>
                  <div className="absolute left-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out group-hover:block bg-white border border-gray-100 z-10 rounded-lg shadow-md mt-14 group-hover:bg-button">
  
  <ul className="space-y-4  pr-28 pl-3  ">
  
  <li className="flex ">
  <img src={icon} alt="iconNav" className="pe-3"/>
    <a href="#" className="text-[#666] dark:text-[#666]  hover:text-[#5BA89C] inline-block">Websites</a>
    
    
    </li>
  <li className="flex ">
  <img src={icon} alt="iconNav" className=""/>
    <a href="#" className="text-[#666] dark:text-[#666]  hover:text-[#5BA89C] inline-block">Logos</a>
    
    
    </li>
  <li className="flex flex-nowrap w-full ">
  <img src={icon} alt="iconNav" className="pe-3"/>
    <a href="#" className="text-[#666] dark:text-[#666]  hover:text-[#5BA89C] ">Brand Identity</a>
    
    
    </li>
  <li className="flex ">
  <img src={icon} alt="iconNav" className="pe-3"/>
    <a href="#" className="text-[#666] dark:text-[#666]  hover:text-[#5BA89C] inline-block">Social Media</a>
    
    
    </li>
  <li className="flex ">
  <img src={icon} alt="iconNav" className=""/>
    <a href="#" className="text-[#666] dark:text-[#666]  hover:text-[#5BA89C] inline-block">Graphic</a>
    
    
    </li>
  <li className="flex ">
  <img src={icon} alt="iconNav" className=""/>
    <a href="#" className="text-[#666] dark:text-[#666]  hover:text-[#5BA89C] inline-block">Ads</a>
    
    
    </li>
  
  
  
  
  
  
  </ul>
  
  </div>
  
                
                  <i className="fa-solid fa-chevron-down absolute hidden md:block left-[85px] top-1/2 transform -translate-y-1/2 transition-transform group-hover:rotate-180 text-[#666]"></i>
                </li>
  
                {/* Resources Dropdown */}
                <li className="relative group">
                  <a href="#" className="block py-2 px-3 text-[#666] dark:text-[#666]">Resources</a>
                  <div className="absolute left-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out group-hover:block bg-white border border-gray-100 z-10 rounded-lg shadow-md mt-14 group-hover:bg-button">
  
                  <ul className="space-y-4  pr-28 pl-3 ">
        <div className=" flex justify-start gap-3">
          <img src={icon} alt="iconNav" />
          <li><a href="#" className="text-[#666] dark:text-[#666]  hover:text-[#5BA89C]  inline-block">Blog</a></li>
        </div>
        <div className="flex justify-start gap-3">
        <img src={icon} alt="iconNav" />
        <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C]  inline-block">Case Studies </a></li>
  
        </div>
        <div className="flex justify-start gap-3">
        <img src={icon} alt="iconNav" />
        <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C]  inline-block">FAQs</a></li>
  
        </div>
        <div className="flex justify-start gap-3">
        <img src={icon} alt="iconNav" />
        <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C]  inline-block">Website Grader</a></li>
  
        </div>
      
        <div className="flex justify-start gap-3">
        <img src={icon} alt="iconNav" />
        <li><a href="#" className="text-[#666] dark:text-[#666] hover:text-[#5BA89C]  inline-block">SEO Audit</a></li>
  
        </div>
      </ul>
  
                  </div>
                  <i className="fa-solid fa-chevron-down absolute hidden md:block left-[100px] top-1/2 transform -translate-y-1/2 transition-transform group-hover:rotate-180 text-[#666]"></i>
                </li>
  
                {/* About Dropdown */}
                <li className="relative group">
                  <a href="#" className="block py-2 px-3 text-[#666] dark:text-[#666]">About</a>
                  <div className="relative group">
                 
    <div className="absolute left-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out group-hover:block bg-white border border-gray-100 z-10 rounded-lg shadow-md mt-14 group-hover:bg-button">
      <ul className="space-y-4  pr-28 pl-3 ">
        <div className=" flex justify-start gap-3">
          <img src={icon} alt="iconNav" />
          <li><a href="#" className="text-[#666]  hover:text-[#5BA89C]  dark:text-[#666] ">About AWS </a></li>
        </div>
        <div className="flex justify-start gap-3">
        <img src={icon} alt="iconNav" />
        <li><a href="#" className="text-[#666] hover:text-[#5BA89C]  dark:text-[#666] inline-block">OUT Clients</a></li>
  
        </div>
        <div className="flex justify-start gap-3">
        <img src={icon} alt="iconNav" />
        <li><a href="#" className="text-[#666] hover:text-[#5BA89C]  dark:text-[#666] inline-block">Associations and Awards</a></li>
  
        </div>
        <div className="flex justify-start gap-3">
        <img src={icon} alt="iconNav" />
        <li><a href="#" className="text-[#666] hover:text-[#5BA89C]  dark:text-[#666] inline-block">Customer Reviews</a></li>
  
        </div>
      
        <div className="flex justify-start gap-3">
        <img src={icon} alt="iconNav" />
        <li><a href="#" className="text-[#666] hover:text-[#5BA89C] dark:text-[#666] inline-block">Join Our Team</a></li>
  
        </div>
      </ul>
    </div>
  </div>
  
                  <i className="fa-solid fa-chevron-down  hidden md:block absolute left-[70px] top-1/2 transform -translate-y-1/2 transition-transform group-hover:rotate-180 text-[#666]"></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
  