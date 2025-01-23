import Button from "../components/Button";
import WordAnimation from "../components/WordAnimation";

export default function About() {
  return (
    <div className="sm:flex sm:flex-row w-full   py-16 flex-col ">
      <div className="sm:w-[40%] flex justify-center tracking-wide  w-full	 ">
        <div className="w-[438px]  font-mons bg-card flex justify-center items-center rounded-[10px] ">
          <WordAnimation />
        </div>
      </div>

      <div className="sm:w-[60%] w-full sm:mt-0 mt-10 xl:ms-[119px] ">
        <h2 className="text-3xl  text-primary font-bold  font-mons pb-7 ">
          About AWS GULF{" "}
        </h2>
        <p className="text-aboutCont font-normal text-sm leading-[187%]  tracking-[1.6] mt-8">
          AWS is a forward-thinking IT system integrator and services provider,
          established in 2024 with a focus on delivering cutting-edge IT
          hardware solutions. Recognizing the ever-evolving technological
          landscape and rapidly changing market needs, the company quickly
          expanded its portfolio to include software services. This strategic
          addition was not merely an enhancement but a necessity to address the
          dynamic requirements of modern businesses. By integrating software
          services, AWS GULF aims to provide comprehensive solutions that
          empower its clients to stay ahead in a competitive market. With a
          commitment to innovation and excellence, AWS GULF is dedicated to
          making a significant impact by meeting and exceeding customer
          expectations.
        </p>

        <div className="flex text-stroke font-mons justify-start items-start xl:gap- mt-8">
          <div className="flex-col justify-start items-start">
            <Button type="primaryXlMoreW">Creativity</Button>
            <ul className="text-[14px] mt-4">
              <li className="text-sm mb-2">Trendsetting Designs</li>
              <li className="text-sm mb-2">Creative Content Creation</li>
              <li className="text-sm mb-2">Interactive User Experience</li>
              <li className="text-sm mb-2">Strategic Branding & Graphics</li>
              <li className="mb-[30px]">AI-Driven Solutions</li>
              <Button type="linkBtn">More About us</Button>
            </ul>
          </div>
          <div className="ms-8 ">
            <Button type="primaryXlMoreW">Technology</Button>
            <ul className="text-[14px] mt-4">
              <li className="text-sm mb-2">UX UI Design</li>
              <li className="text-sm mb-2">
                {" "}
                Native & Flutter Mobile Apps Coding <br />
              </li>
              <li className="text-sm mb-2">E-commerce Solutions </li>
              <li className="text-sm mb-2">Bespoke Software Development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
