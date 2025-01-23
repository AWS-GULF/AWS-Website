import React from "react";
import OurServicesCards from "../components/OurServicesCards";

export default function OurServices() {
  return (
    <div className="mt-[205px]">
      <div>
        <h2 className="text-primary text-[36px] font-mons font-bold mb-4 text-mons ">
          Our Services
        </h2>
        <p className="text-secondary text-[20px] mb-24">
          {" "}
          We Have the Pleasure of Introducing Ourselves as an Independent
          Solutions Provider of the World's Leading Brands Related to The IT
          Industry and Software Development.{" "}
        </p>
      </div>

      <OurServicesCards />
    </div>
  );
}
