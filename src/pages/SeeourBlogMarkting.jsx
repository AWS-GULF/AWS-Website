import React from "react";
import frame7 from "/assets/images/imagess/frame7.svg";
import frame8 from "/assets/images/imagess/Frame8.svg";

export default function SeeourBlogMarkting() {
  return (
    <>
      <section className="my-24 relative">
        <h1 className="bg-color text-center text-5xl sm:text-3xl xs:text-2xl font-bold p-[40px] sm:p-[30px] xs:p-[20px] dark:text-white">
          See our Blog
        </h1>
        <div className="lg:flex lg:space-x-4 justify-between items-center">
          <div className="lg:w-1/2 md:w-6/12 w-full mb-4 lg:mb-0">
            <img src={frame7} alt="" className="mt-4 w-full" />
            <div className="mt-2 ml-6 sm:ml-4 xs:ml-2">
              <p className="bg-color-p dark:text-white text-sm sm:text-xs xs:text-[10px]">7 Oct 2023</p>
              <h2 className="font-montserrat text-2xl sm:text-xl xs:text-lg font-semibold bg-colorr my-1 dark:text-white">
                Do More
              </h2>
              <p className="bg-color-p font-montserrat text-sm sm:text-xs xs:text-[10px] font-medium dark:text-white">
                "Do More" is about pushing boundaries, embracing challenges, and
                striving for growth. It’s the mindset that drives success by
                going beyond expectations and making a meaningful impact.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-6/12 w-full">
            <img src={frame8} alt="frame8" className="w-full mt-4" />
            <div className="mt-2 ml-6 sm:ml-4 xs:ml-2">
              <p className="bg-color-p my-1 dark:text-white text-sm sm:text-xs xs:text-[10px]">7 Oct 2023</p>
              <h2 className="font-montserrat text-2xl sm:text-xl xs:text-lg font-semibold bg-colorr dark:text-white">
                The Power of AI
              </h2>
              <p className="bg-color-p font-montserrat text-sm sm:text-xs xs:text-[10px] font-medium dark:text-white">
                Artificial Intelligence is revolutionizing industries by
                automating tasks, enhancing decision-making, and driving
                innovation. Its potential to transform everything from
                healthcare to business is limitless, shaping a smarter future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
