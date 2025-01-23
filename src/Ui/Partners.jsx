import SimpleSlider from "../components/Sliderr";

export default function Partners() {
  return (
    <div className="sm:flex sm:flex-row w-full mt-10 sm:mb-[100px] border-t border-b  border-[#E0E0E0] py-14 flex-col ">
      <div className="sm:w-[40%] flex justify-start tracking-wide  w-full	 ">
        <p className="text-primary text-4xl  w-full font-bold  font-mons   ">
          Our Leading Brands Partnerships{" "}
        </p>
      </div>

      <div className="sm:w-[60%] w-full sm:mt-0 mt-10">
        <SimpleSlider />
      </div>
    </div>
  );
}
