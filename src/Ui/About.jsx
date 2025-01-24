import Button from "../components/Button";
import WordAnimation from "../components/WordAnimation";

export default function About() {
  return (
    <div className="sm:flex sm:flex-row w-full   py-16 flex-col ">
      <div className="sm:w-[40%] flex justify-center tracking-wide 	 ">
        <div className="w-[438px]  font-mons bg-card flex justify-center items-center rounded-[10px] ">
          <WordAnimation />
        </div>
      </div>

      <div className="sm:w-[50%] w-full sm:mt-0 mt-10 xl:ms-[119px] ">
        <h2 className="text-2xl font-mons text-primary font-bold tracking-wide  ">
          About AWS GULF{" "}
        </h2>
        <p className="text-[#333] mt-8 text-sm font-cairo leading-8 tracking-wide font-light">
          AWS is a forward-thinking IT system integrator and services provider,{" "}
          <br />
          established in 2024 with a focus on delivering cutting-edge IT <br />
          hardware solutions. Recognizing the ever-evolving technological <br />
          landscape and rapidly changing market needs, the company quickly
          <br />
          expanded its portfolio to include software services. This strategic
          <br />
          addition was not merely an enhancement but a necessity to address the
          <br />
          dynamic requirements of modern businesses. By integrating software
          <br />
          services, AWS GULF aims to provide comprehensive solutions that
          <br />
          empower its clients to stay ahead in a competitive market. With a
          <br />
          commitment to innovation and excellence, AWS GULF is dedicated to
          <br />
          making a significant impact by meeting and exceeding customer
          <br />
          expectations.
        </p>

        <div className="flex font-cairo justify-start items-start xl:gap-12 mt-8">
          <div className="flex-col justify-start items-start">
            <Button type="primaryXlMoreW">Creativity</Button>
            <ul className="text-secondary text-[14px] mt-4">
              <li> Trendsetting Designs</li>
              <li>Creative Content Creation</li>
              <li>Interactive User Experience</li>
              <li>Strategic Branding & Graphics </li>
              <li className="mb-[30px]">AI-Driven Solutions</li>
              <Button type="linkBtn">More About Us</Button>
            </ul>
          </div>
          <div className="ms-8 ">
            <Button type="primaryXl">Technology</Button>
            <ul className="text-[14px] mt-4 text-secondary">
              <li>UX UI Design</li>
              <li>Native & Flutter Mobile Apps Coding</li>
              <li>Ecommerce Solutions </li>
              <li>Bespoke Software Development </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
