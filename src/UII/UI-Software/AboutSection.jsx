import Button from "../../components/Software-components/Button";
import WordAnimation from "../../components/Software-components/WordAnimation";

export default function AboutSection() {
  return (
    <div className="lg:flex lg:flex-row w-full lg:mt-[100px] flex-col  ">
      <div className="lg:w-[45%]  justify-center tracking-wide  ps-36 hidden lg:flex">
        <div className="w-[438px] h-[620px] font-mons bg-card flex justify-center items-center rounded-[10px]  mt-16">
          <WordAnimation />
        </div>
      </div>

      <div className="lg:w-[50%] w-full lg:mt-0 mt-10 md:ps-6 lg:ps-[120px] self-start ">
        <h2 className="lg:text-2xl text-[20px] font-mons text-primary font-bold tracking-[.34px]  lg:tracking-wide  ">
          About AWS GULF{" "}
        </h2>
        <p className="text-[#333] lg:mt-8 hidden lg:block mt-4 text-[14px] lg:text-[16] font-mons leading-[20px] lg:leading-8 lg:tracking-wide font-light">
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

        <p className="text-[#333] lg:mt-8  mt-4 text-[14px] lg:text-[16] font-mons leading-[20px] lg:leading-8 lg:tracking-wide font-light lg:hidden">
          AWS is a forward-thinking IT system integrator and services provider,established in 2024 with a focus on delivering cutting-edge IT
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

        <div className="flex font-cairo  sm:justify-start sm:items-start  mt-4 lg:mt-8">
          <div className="flex-col lg:justify-start items-start">
            <Button type="primaryXlMoreW">Creativity</Button>
            <ul className="text-secondary text-[14px] mt-4">
              <li> Trendsetting Designs</li>
              <li>Creative Content Creation</li>
              <li>Interactive User Experience</li>
              <li>Strategic Branding & Graphics </li>
              <li className="mb-[30px]">AI-Driven Solutions</li>
              <div className="lg:mb-36 mb-8">
                <Button type="linkBtn">More About Us</Button>
              </div>
            </ul>
          </div>
          <div className="ms-8  ">
            <Button type="primaryXlMoreW">Technology</Button>
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
