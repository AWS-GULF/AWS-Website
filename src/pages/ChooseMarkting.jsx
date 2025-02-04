import React from "react";

export default function ChooseMarkting() {
  return (
    <div>
      <section className="my-28 relative">
        <h1 className="font-montserrat font-semibold text-5xl  bg-color text-center py-16 dark:text-white">
          Why Choose Us
        </h1>

        <div className="lg:flex justify-between bg-colorr px-4 sm:px-8">
        <div className="lg:w-3/5 lg:ml-64 mb-7 text-left sm:text-left sm:text-sm">
  <h2 className="font-montserrat font-semibold lg:text-3xl text-3xl leading-[50px] dark:text-white sm:text-base sm:leading-[25px]">
    Our values are part of
  </h2>
  <h2 className="font-montserrat font-semibold lg:text-3xl text-3xl leading-[50px] dark:text-white sm:text-base sm:leading-[25px]">
    everything we create at
  </h2>
  <span className="font-montserrat font-semibold lg:text-3xl text-3xl leading-[50px] dark:text-white sm:text-base sm:leading-[25px]">
    Instrument.
  </span>
</div>


          <div className="md:w-8/12 lg:w-2/3 space-y-4 bg-colorr">
            <h2 className="font-montserrat font-medium text-[24px]   leading-[29.26px] dark:text-white">
              People First
            </h2>
            <p className="lg:w-[664px] md:w-[12px] h-auto left4 bg-color-p dark:text-white">
              We are committed to creating a workplace that reflects the
              communities we serve. We cultivate an environment of belonging,
              where differences are not only respected, but valued.
            </p>

            <h2 className="font-montserrat font-medium text-[24px] leading-[29.26px] dark:text-white">
              Pursuit of Excellence
            </h2>
            <p className="lg:w-[664px] md:w-[12px] h-auto left5 bg-color-p dark:text-white">
              We’re not here to make work that’s just average. We partner with
              incredible clients who allow us to do our best work, and they
              expect nothing less.
            </p>
            <h2 className="font-montserrat font-medium text-[24px] leading-[29.26px] dark:text-white">
              Growth Mindset
            </h2>
            <p className="lg:w-[664px] md:w-[12px] h-auto left4 bg-color-p dark:text-white">
              Each year, we grow in size, in capabilities, and in cultural
              intelligence. This growth fuels the impact we can make for
              employees, our community, and clients.
            </p>
            <h2 className="font-montserrat font-medium text-[24px] leading-[29.26px] dark:text-white">
              Truth in Action
            </h2>
            <p className="lg:w-[664px] md:w-[12px] h-auto left5 bg-color-p dark:text-white">
              We apply our capabilities and resources towards a shared purpose
              of shaping a better future.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-[90%] md:w-[80%] m-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8">
          <div className="md:w-6/12 lg:w-1/2 bg-colorr font-montserrat text-[32px] font-bold leading-[50px] text-center lg:text-left dark:text-white">
            Ready to elevate your brand?
            <br />
            Let’s build something amazing <br />
            together!
          </div>
          <button className="bg-button rounded-3xl py-6 px-8 mt-4 lg:mt-0 mx-auto font-bold text-amber-50 dark:bg-white dark:text-teal-600">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
}
