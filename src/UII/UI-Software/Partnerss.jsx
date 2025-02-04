import SimpleSlider from "../../components/Software-components/Sliderr";

export default function Partners() {
  return (
    <div className="lg:flex lg:flex-row  mt-10 lg:mb-[100px] lg:border-t lg:border-b justify-center items-center lg:border-[#E0E0E0] flex-col
      lg:h-[215px] lg:ms-12 lg:me-12">
      <div className="lg:w-[50%] flex lg:justify-start  tracking-wide  w-full  ">
        <p className="text-primary text-[20px] lg:text-4xl text-center lg:text-start  w-full font-bold font-mons  lg:tracking-widest lg:me-5 ">
        Our Leading Brands Partnerships        </p>
      </div>

      <div className="lg:w-[50%] w-[full] lg:mt-0 mt-6">
        <SimpleSlider />
      </div>
    </div>
  );
}
