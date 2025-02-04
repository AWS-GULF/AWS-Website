import testImg from "../../../public/assets/images/cardTestImg.png";
import Button from "../../components/Software-components/Button";

export default function OurServices() {
  return (
    <div className="lg:ms-12 lg:me-12 md:ms-4">
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

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[32px] lg:mb-6">
        {[{
          title: "Quality Assurance",
          description: "We believe in fostering a strong, collaborative partnership with our clients. Ensuring the quality, functionality, and reliability of the products we deliver is a responsibility we take seriously. Beyond meeting expectations, we proactively identify and resolve potential risks and challenges, striving to exceed contractual commitments with excellence.",
          link: "/qualityassurance"
        }, {
          title: "Mobile Development",
          description: "We create innovative, one-of-a-kind iOS and Android applications with exceptional designs and seamless user experiences. Our mobile solutions are designed to elevate your business, showcase your offerings, and captivate your audience, ensuring lasting engagement and satisfaction.",
          link: "/mobiledevelopment"
        }, {
          title: "Web Development",
          description: "We specialize in developing custom web applications tailored to your unique needs, focusing on delivering exceptional UI/UX experiences. Leave concerns like performance optimization, accessibility, functionality, usability, and security to us, so you can focus on streamlining and enhancing your workflow.",
          link: "/webdevelopment"
        }, {
          title: "IT & Hardware",
          description: "Sindion Technology is a professional IT solutions and services provider. We will help you to achieve your IT strategy by providing you system integration, testing, application development, and management services and solutions.",
          link: "/itandhardware"
        }, {
          title: "Staff Augmentation",
          description: "Staff augmentation is a versatile solution that enables organizations to boost agility and quickly adapt to evolving business demands. This approach is widely utilized across industries to fulfill critical roles in Engineering, Product Development, and Operations.",
          link: "/staff"
        }, {
          title: "UI/UX Design",
          description: "Every interaction within our products is a result of meticulous planning and design. From the coding of elements and functions to the visual aesthetics, we excel at delivering captivating user experiences. Whether for mobile or web, your end users will find the experience both seamless and engaging.",
          link: "/uiuxdesign"
        }].map((service, index) => (
          <div key={index} className="card border  w-full  rounded-xl border-1 border-secondary">
            <figure>
              <img src={testImg} alt="our services" className="m-auto w-full" />
            </figure>
            <div className="card-body flex-col ">
              <h2 className="text-[16px] text-primary font-[600] tracking-[1.6px] font-mons ">{service.title}</h2>
              <p className="font-mons text-[12px] font-[500] text-secondary mt-2 leading-6">
                {service.description}
              </p>
              <div className="card-actions justify-start mt-3">
                <Button type="linkBtn" to={service.link}>See More</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 mb-[67px]">
        <Button type="linkBtn">Explore Our Services</Button>
      </p>
    </div>
  );
}
