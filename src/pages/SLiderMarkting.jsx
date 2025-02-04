import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Slider1 from "/assets/images/imagess/Slider1.svg";
import Slider2 from "/assets/images/imagess/Slider2.svg";
import Slider3 from "/assets/images/imagess/Slider3.svg";
import Slider4 from "/assets/images/imagess/Slider5.svg";
import Slider5 from "/assets/images/imagess/Slider7.svg";

export default function SliderMarkting() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // إذا كانت الشاشة أصغر أو تساوي 768px اعتبرها موبايل
    };

    handleResize(); // تشغيل الفنكشن عند أول تحميل للصفحة
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [Slider1, Slider2, Slider3, Slider4, Slider5];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isMobile ? 1 : 3, // في الشاشات الصغيرة نعرض صورة واحدة فقط
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // للشاشات من 1024 بيكسل أو أقل
        settings: {
          slidesToShow: 2, // عرض 2 slides على الشاشات المتوسطة
        },
      },
      {
        breakpoint: 600, // للشاشات من 600 بيكسل أو أقل
        settings: {
          slidesToShow: 1, // عرض 1 slide على الشاشات الصغيرة
          centerMode: false, // تعطيل center mode على الشاشات الصغيرة
        },
      },
    ],
  };

  return (
    <div>
      <div className="mb-[60px]">
        <h2 className="text-5xl text-center bg-color font-bold mt-[100px] dark:text-white">
          What Our Client Say
        </h2>
      </div>
      <div className="mt-14">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Slider ${index + 1}`} className="w-full" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
