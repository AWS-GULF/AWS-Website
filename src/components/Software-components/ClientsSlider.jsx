import century from "/assets/images/century.png";
import hwlk from "/assets/images/hwlk.svg";
import nfaa from "/assets/images/nfaa.svg";
import opm from "/assets/images/opm.png";
import roag from "/assets/images/roag.png";
import thmeen from "/assets/images/thmeen.png";
import value from "/assets/images/value.png";
import watnia from "/assets/images/watnia.jpeg";
import ministry from "/assets/images/ministry.jpeg";
import akark from "/assets/images/akark.svg";
// import nat from "/assets/images/nata.png";
import orera from "/assets/images/orera.jpeg";
import axis from "/assets/images/axis.jpeg";
import ts from "/assets/images/ts.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";

const ClientsSlider = () => {
  const logos = [
    { src: nfaa, alt: "nfaa" },
    { src: akark, alt: "akark" },
    { src: hwlk, alt: "hwlk" },
    { src: century, alt: "century" },
    // { src: nat, alt: "nat" },
    { src: opm, alt: "opm" },
    { src: roag, alt: "opm" },
    { src: value, alt: "value" },
    { src: thmeen, alt: "thmeen" },
    { src: ministry, alt: "ministry" },
    { src: orera, alt: "orera" },
    { src: ts, alt: "ts" },
    { src: axis, alt: "axis" },
    { src: century, alt: "century" },
    { src: century, alt: "century" },
  ];

  return (
    <div className="  w-full flex p-4    ">
      <Swiper
        modules={[Grid, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        grid={{
          rows: 2,
          fill: "row",
          rowGap: 20,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerGroup={3}
        loop={false}
        className="w-full"
      >
        {logos.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center ps-5"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-40 h-24 mb-10 m-auto pb-10 "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientsSlider;
