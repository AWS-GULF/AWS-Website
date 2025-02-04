import React from "react";
import { useNavigate } from "react-router";

export default function MainMarkting() {
  const navigate = useNavigate();
  return (
    <>
      <section className="lg:my-8 md:mt-8 relative">
        <h2 className="bg-color text-center text-5xl font-bold p-[60px] dark:text-white">
          OUR WORK
        </h2>

        <div className="lg:flex lg:space-x-4 justify-between items-center">
          <div className="lg:w-1/2 md:w-6/12 w-full mb-4 lg:mb-0">
            <img
              src="/assets/images/imagess/Out Work2.svg"
              alt=""
              className="mt-4 w-full"
              onClick={() => navigate("/MaspertsProjectMarking")}
            />
            <div className="mt-2 ml-6">
              <h2 className="font-montserrat text-2xl font-semibold dark:text-white">
                Masperts
              </h2>
              <p className="bg-color-p font-montserrat text-sm font-medium dark:text-white">
                #Marketing
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-6/12 w-full">
            <img
              src="/assets/images/imagess/Out Work1.svg"
              alt="frame8"
              className="w-full mt-4"
            />
            <div className="mt-2 ml-6">
              <h2 className="font-montserrat text-2xl font-semibold dark:text-white">
                Uber For Business
              </h2>
              <p className="bg-color-p font-montserrat text-sm font-medium dark:text-white">
                #Marketing
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:space-x-4 justify-between items-center">
          <div className="lg:w-1/2 md:w-6/12 w-full mb-4 lg:mb-0">
            <img
              src="/assets/images/imagess/Out Work3.svg"
              alt="frame7"
              className="mt-16 w-full"
            />
            <div className="mt-2 ml-6">
              <h2 className="font-montserrat text-2xl font-semibold dark:text-white">
                Nike Campaign
              </h2>
              <p className="bg-color-p font-montserrat text-sm font-medium dark:text-white">
                #Marketing
              </p>
            </div>
            <a href=" " className="bg-text-button mt-[32px]">
              Explore More of Our Work
              <i className="bg-text-button fa-solid fa-arrow-right mx-2"></i>
            </a>
          </div>

          <div className="lg:w-1/2 md:w-6/12 w-full">
            <img
              src="/assets/images/imagess/Out Work1.svg"
              alt="frame8"
              className="w-full mt-16"
            />
            <div className="mt-2 ml-6">
              <h2 className="font-montserrat text-2xl font-semibold dark:text-white">
                Uber For Business
              </h2>
              <p className="bg-color-p font-montserrat text-sm font-medium dark:text-white">
                #Marketing
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
