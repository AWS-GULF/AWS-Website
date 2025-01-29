import testImg from "../../public/assets/images/cardTestImg.png";
import Button from "../components/Button";
export default function OurServices() {
  return (
    <div className="sm:ms-12 sm:me-12">
      <div>
        <h2 className="text-primary text-[36px] font-mons font-bold mb-4 text-mons ">
          Our Services
        </h2>
        <p className="text-secondary text-[20px] mb-8 tracking-[2px]">
          We Have the Pleasure of Introducing Ourselves as an Independent
          Solutions Provider of the World's Leading Brands Related to The IT
          Industry and Software Development.
        </p>
      </div>

      {/* card component  */}

      <div className="flex gap-[32px]">
        <div className=" card border border-[ #E0E0E0]  w-96   h-[500px] rounded-xl  border-1 border-secondary ">
          <figure>
            <img src={testImg} alt="our services" className="m-auto" />
          </figure>
          <div className="card-body">
            <h2 className="text-[16px] text-primary font-[600] tracking-[1.6px] font-mons ">
              Quality Assurance
            </h2>
            <p className="font-mons text-[12px] font-[500] text-secondary mt-2 leading-6">
              We believe in fostering a strong, collaborative partnership with
              our clients. Ensuring the quality, functionality, and reliability
              of the products we deliver is a responsibility we take seriously.
              Beyond meeting expectations, we proactively identify and resolve
              potential risks and challenges, striving to exceed contractual
              commitments with excellence.
            </p>
            <div className="card-actions justify-start mt-3 ">
              <Button type="linkBtn" to={"/qualityassurance"}>See More</Button>
            </div>
          </div>
        </div>

        <div className=" card border border-[ #E0E0E0]  w-96   h-[500px] rounded-xl  border-1 border-secondary ">
          <figure>
            <img src={testImg} alt="our services" className="m-auto" />
          </figure>
          <div className="card-body">
            <h2 className="text-[16px] text-primary font-[600] tracking-[1.6px] font-mons ">
              Mobile Development
            </h2>
            <p className="font-mons text-[12px] font-[500] text-secondary mt-2 leading-6">
              We create innovative, one-of-a-kind iOS and Android applications
              with exceptional designs and seamless user experiences. Our mobile
              solutions are designed to elevate your business, showcase your
              offerings, and captivate your audience, ensuring lasting
              engagement and satisfaction.
            </p>
            <div className="card-actions justify-start mt-3 ">
              <Button type="linkBtn" to={"/mobiledevelopment"}>See More</Button>
            </div>
          </div>
        </div>

        <div className=" card border border-[ #E0E0E0] w-96   h-[500px] rounded-xl  border-1 border-secondary ">
          <figure>
            <img src={testImg} alt="our services" className="m-auto" />
          </figure>
          <div className="card-body">
            <h2 className="text-[16px] text-primary font-[600] tracking-[1.6px] font-mons ">
              Web Development
            </h2>
            <p className="font-mons text-[12px] font-[500] text-secondary mt-2 leading-6">
              We specialize in developing custom web applications tailored to
              your unique needs, focusing on delivering exceptional UI/UX
              experiences. Leave concerns like performance optimization,
              accessibility, functionality, usability, and security to us, so
              you can focus on streamlining and enhancing your workflow
            </p>
            <div className="card-actions justify-start mt-3 ">
              <Button type="linkBtn" to={"/webdevelopment"}>See More</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[32px] mt-8">
        <div className=" card border border-[ #E0E0E0]  w-96   h-[500px] rounded-xl  border-1 border-secondary ">
          <figure>
            <img src={testImg} alt="our services" className="m-auto" />
          </figure>
          <div className="card-body">
            <h2 className="text-[16px] text-primary font-[600] tracking-[1.6px] font-mons ">
              IT & Hardware
            </h2>
            <p className="font-mons text-[12px] font-[500] text-secondary mt-2 leading-6">
              Sindion Technology is a professional IT solutions and services
              provider. <br /> We will help you to achieve your IT strategy by
              providing you system integration, testing, application development
              and management services and solutions.
            </p>
            <div className="card-actions justify-start mt-3 ">
              <Button type="linkBtn" to={"/itandhardware"} >See More</Button>
            </div>
          </div>
        </div>

        <div className=" card border border-[ #E0E0E0]  w-96   h-[500px] rounded-xl  border-1 border-secondary ">
          <figure>
            <img src={testImg} alt="our services" className="m-auto" />
          </figure>
          <div className="card-body">
            <h2 className="text-[16px] text-primary font-[600] tracking-[1.6px] font-mons ">
              Staff Augmentation
            </h2>
            <p className="font-mons text-[12px] font-[500] text-secondary mt-2 leading-6">
              Staff augmentation is a versatile solution that enables
              organizations to boost agility and quickly adapt to evolving
              business demands. This approach is widely utilized across
              industries to fulfill critical roles in Engineering, Product
              Development, and Operations.
            </p>
            <div className="card-actions justify-start mt-3 ">
              <Button type="linkBtn" to={"/staff"}>See More</Button>
            </div>
          </div>
        </div>

        <div className=" card border border-[ #E0E0E0]  w-96   h-[500px] rounded-xl  border-1 border-secondary ">
          <figure>
            <img src={testImg} alt="our services" className="m-auto" />
          </figure>
          <div className="card-body">
            <h2 className="text-[16px] text-primary font-[600] tracking-[1.6px] font-mons ">
              UI/UX Design
            </h2>
            <p className="font-mons text-[12px] font-[500] text-secondary mt-2 leading-6">
              Every interaction within our products is a result of meticulous
              planning and design. From the coding of elements and functions to
              the visual aesthetics, we excel at delivering captivating user
              experiences. Whether for mobile or web, your end users will find
              the experience both seamless and engaging.
            </p>
            <div className="card-actions justify-start mt-3 ">
              <Button type="linkBtn" to={"/uiuxdesign"}>See More</Button>
            </div>
          </div>
        </div>
      </div>

     <p className="mt-8 mb-[67px]">
     <Button type="linkBtn">Explore Our Services</Button>
     </p>
    </div>
  );
}
