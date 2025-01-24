import SimpleSlider from "../components/Sliderr";

export default function Partners() {
  return (
    <div className="sm:flex sm:flex-row  mt-10 sm:mb-[100px] border-t border-b justify-center items-center border-[#E0E0E0] flex-col
      h-[215px] sm:ms-12 sm:me-12">
      <div className="sm:w-[50%] flex justify-start tracking-wide  w-full  ">
        <p className="text-primary text-4xl  w-full font-bold font-mons  tracking-widest   smme-5 ">
        Our Leading Brands Partnerships        </p>
      </div>

      <div className="sm:w-[50%] w-full sm:mt-0 mt-10">
        <SimpleSlider />
      </div>
    </div>
  );
}
