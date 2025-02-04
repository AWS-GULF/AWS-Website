import { useState } from "react";
import logo from "/assets/icons/logo.svg";
import { Link, useParams } from "react-router";
import Application from "../components/Software-components/Apllication";

const jobDescriptions = {
  1: `We are looking for a Multimedia Marketing Project Manager who will manage client relationships while executing the content service. This role requires a strong marketing and sales operations mindset, project management skills, and proficiency in using AI, video editing, and SEO tools like SEMrush and Google Analytics. Additionally, the candidate must have expertise in creating logical HubSpot workflows and funnels to drive marketing and sales alignment.

Key Responsibilities:

Client Relationship Management: Build and maintain long-term client relationships, acting as the primary point of contact and delivering exceptional support.
Project Management: Lead and manage the delivery of our product, coordinating across teams and ensuring project timelines and deliverables are met.
AI-Powered Content Creation: Utilize AI tools (e.g., ChatGPT, Canva) to automate and streamline the content creation process for blogs, social media posts, and email campaigns.
Video Editing: Create high-quality content using video editing tools like Descript and Riverside.fm from client meetings, interviews, and webinars.
Sales and Marketing Operations: Implement and manage HubSpot workflows and funnels to align marketing and sales operations, ensuring a cohesive and productive strategy for clients.
SEO Optimization: Use tools like SEMrush and Google Analytics to monitor, optimize, and report on SEO performance, ensuring clients' digital strategies are data-driven and result-oriented.
Campaign Optimization: Analyze performance data from marketing campaigns and sales activities, providing actionable insights to improve client outcomes.
Client Training & Support: Provide ongoing support and training for clients on AI, SEO tools, and HubSpot features, ensuring they maximize their marketing and sales efforts.`,

  2: `Build and maintain server-side applications and databases We are looking for a Multimedia Marketing Project Manager who will manage client relationships while executing the content service. This role requires a strong marketing and sales operations mindset, project management skills, and proficiency in using AI, video editing, and SEO tools like SEMrush and Google Analytics. Additionally, the candidate must have expertise in creating logical HubSpot workflows and funnels to drive marketing and sales alignment.

Key Responsibilities:

Client Relationship Management: Build and maintain long-term client relationships, acting as the primary point of contact and delivering exceptional support.
Project Management: Lead and manage the delivery of our product, coordinating across teams and ensuring project timelines and deliverables are met.
AI-Powered Content Creation: Utilize AI tools (e.g., ChatGPT, Canva) to automate and streamline the content creation process for blogs, social media posts, and email campaigns.
Video Editing: Create high-quality content using video editing tools like Descript and Riverside.fm from client meetings, interviews, and webinars.
Sales and Marketing Operations: Implement and manage HubSpot workflows and funnels to align marketing and sales operations, ensuring a cohesive and productive strategy for clients.
SEO Optimization: Use tools like SEMrush and Google Analytics to monitor, optimize, and report on SEO performance, ensuring clients' digital strategies are data-driven and result-oriented.
Campaign Optimization: Analyze performance data from marketing campaigns and sales activities, providing actionable insights to improve client outcomes.
Client Training & Support: Provide ongoing support and training for clients on AI, SEO tools, and HubSpot features, ensuring they maximize their marketing and sales efforts..`,

  3: `Work on both frontend and backend development We are looking for a Multimedia Marketing Project Manager who will manage client relationships while executing the content service. This role requires a strong marketing and sales operations mindset, project management skills, and proficiency in using AI, video editing, and SEO tools like SEMrush and Google Analytics. Additionally, the candidate must have expertise in creating logical HubSpot workflows and funnels to drive marketing and sales alignment.

Key Responsibilities:

Client Relationship Management: Build and maintain long-term client relationships, acting as the primary point of contact and delivering exceptional support.
Project Management: Lead and manage the delivery of our product, coordinating across teams and ensuring project timelines and deliverables are met.
AI-Powered Content Creation: Utilize AI tools (e.g., ChatGPT, Canva) to automate and streamline the content creation process for blogs, social media posts, and email campaigns.
Video Editing: Create high-quality content using video editing tools like Descript and Riverside.fm from client meetings, interviews, and webinars.
Sales and Marketing Operations: Implement and manage HubSpot workflows and funnels to align marketing and sales operations, ensuring a cohesive and productive strategy for clients.
SEO Optimization: Use tools like SEMrush and Google Analytics to monitor, optimize, and report on SEO performance, ensuring clients' digital strategies are data-driven and result-oriented.
Campaign Optimization: Analyze performance data from marketing campaigns and sales activities, providing actionable insights to improve client outcomes.
Client Training & Support: Provide ongoing support and training for clients on AI, SEO tools, and HubSpot features, ensuring they maximize their marketing and sales efforts..`,
};

const jobs = [
  {
    id: 1,
    title: "Multimedia Marketing Project Manager",
  },
  {
    id: 2,
    title: "javascript developer",
  },
  {
    id: 3,
    title: "python developer",
  },
];
const jobResponsibilities = {
  1: [
    `Client Relationship Management: Build and maintain long-term client relationships, acting as the primary point of contact and delivering exceptional support.`,
    "Experience with state management libraries like Redux.",
    `Project Management: Lead and manage the delivery of our product, coordinating across teams and ensuring project timelines and deliverables are met.`,
    `AI-Powered Content Creation: Utilize AI tools (e.g., ChatGPT, Canva) to automate and streamline the content creation process for blogs, social media posts, and email campaigns.`,
    `Video Editing: Create high-quality content using video editing tools like Descript and Riverside.fm from client meetings, interviews, and webinars.`,
    `Sales and Marketing Operations: Implement and manage HubSpot workflows and funnels to align marketing and sales operations, ensuring a cohesive and productive strategy for clients.`,
    `SEO Optimization: Use tools like SEMrush and Google Analytics to monitor, optimize, and report on SEO performance, ensuring clients' digital strategies are data-driven and result-oriented.`,
    `Campaign Optimization: Analyze performance data from marketing campaigns and sales activities, providing actionable insights to improve client outcomes.`,
    `Client Training & Support: Provide ongoing support and training for clients on AI, SEO tools, and HubSpot features, ensuring they maximize their marketing and sales efforts.`,
  ],
  2: [
    `Client Relationship Management: Build and maintain long-term client relationships, acting as the primary point of contact and delivering exceptional support.`,
    "Experience with state management libraries like Redux.",
    `Project Management: Lead and manage the delivery of our product, coordinating across teams and ensuring project timelines and deliverables are met.`,
    `AI-Powered Content Creation: Utilize AI tools (e.g., ChatGPT, Canva) to automate and streamline the content creation process for blogs, social media posts, and email campaigns.`,
    `Video Editing: Create high-quality content using video editing tools like Descript and Riverside.fm from client meetings, interviews, and webinars.`,
    `Sales and Marketing Operations: Implement and manage HubSpot workflows and funnels to align marketing and sales operations, ensuring a cohesive and productive strategy for clients.`,
    `SEO Optimization: Use tools like SEMrush and Google Analytics to monitor, optimize, and report on SEO performance, ensuring clients' digital strategies are data-driven and result-oriented.`,
    `Campaign Optimization: Analyze performance data from marketing campaigns and sales activities, providing actionable insights to improve client outcomes.`,
    `Client Training & Support: Provide ongoing support and training for clients on AI, SEO tools, and HubSpot features, ensuring they maximize their marketing and sales efforts.`,
  ],
  3: [
    `Client Relationship Management: Build and maintain long-term client relationships, acting as the primary point of contact and delivering exceptional support.`,
    "Experience with state management libraries like Redux.",
    `Project Management: Lead and manage the delivery of our product, coordinating across teams and ensuring project timelines and deliverables are met.`,
    `AI-Powered Content Creation: Utilize AI tools (e.g., ChatGPT, Canva) to automate and streamline the content creation process for blogs, social media posts, and email campaigns.`,
    `Video Editing: Create high-quality content using video editing tools like Descript and Riverside.fm from client meetings, interviews, and webinars.`,
    `Sales and Marketing Operations: Implement and manage HubSpot workflows and funnels to align marketing and sales operations, ensuring a cohesive and productive strategy for clients.`,
    `SEO Optimization: Use tools like SEMrush and Google Analytics to monitor, optimize, and report on SEO performance, ensuring clients' digital strategies are data-driven and result-oriented.`,
    `Campaign Optimization: Analyze performance data from marketing campaigns and sales activities, providing actionable insights to improve client outcomes.`,
    `Client Training & Support: Provide ongoing support and training for clients on AI, SEO tools, and HubSpot features, ensuring they maximize their marketing and sales efforts.`,
  ],
};

const jobRequirements = {
  1: [
    `Client Relationship Management: Build and maintain long-term client relationships, acting as the primary point of contact and delivering exceptional support.`,
    "Experience with state management libraries like Redux.",
    `Project Management: Lead and manage the delivery of our product, coordinating across teams and ensuring project timelines and deliverables are met.`,
    `AI-Powered Content Creation: Utilize AI tools (e.g., ChatGPT, Canva) to automate and streamline the content creation process for blogs, social media posts, and email campaigns.`,
    `Video Editing: Create high-quality content using video editing tools like Descript and Riverside.fm from client meetings, interviews, and webinars.`,
    `Sales and Marketing Operations: Implement and manage HubSpot workflows and funnels to align marketing and sales operations, ensuring a cohesive and productive strategy for clients.`,
    `SEO Optimization: Use tools like SEMrush and Google Analytics to monitor, optimize, and report on SEO performance, ensuring clients' digital strategies are data-driven and result-oriented.`,
    `Campaign Optimization: Analyze performance data from marketing campaigns and sales activities, providing actionable insights to improve client outcomes.`,
    `Client Training & Support: Provide ongoing support and training for clients on AI, SEO tools, and HubSpot features, ensuring they maximize their marketing and sales efforts.`,
  ],
  2: [
    `Client Relationship Management: Build and maintain long-term client relationships, acting as the primary point of contact and delivering exceptional support.`,
    "Experience with state management libraries like Redux.",
    `Project Management: Lead and manage the delivery of our product, coordinating across teams and ensuring project timelines and deliverables are met.`,
    `AI-Powered Content Creation: Utilize AI tools (e.g., ChatGPT, Canva) to automate and streamline the content creation process for blogs, social media posts, and email campaigns.`,
    `Video Editing: Create high-quality content using video editing tools like Descript and Riverside.fm from client meetings, interviews, and webinars.`,
    `Sales and Marketing Operations: Implement and manage HubSpot workflows and funnels to align marketing and sales operations, ensuring a cohesive and productive strategy for clients.`,
    `SEO Optimization: Use tools like SEMrush and Google Analytics to monitor, optimize, and report on SEO performance, ensuring clients' digital strategies are data-driven and result-oriented.`,
    `Campaign Optimization: Analyze performance data from marketing campaigns and sales activities, providing actionable insights to improve client outcomes.`,
    `Client Training & Support: Provide ongoing support and training for clients on AI, SEO tools, and HubSpot features, ensuring they maximize their marketing and sales efforts.`,
  ],
  3: [
    `Client Relationship Management: Build and maintain long-term client relationships, acting as the primary point of contact and delivering exceptional support.`,
    "Experience with state management libraries like Redux.",
    `Project Management: Lead and manage the delivery of our product, coordinating across teams and ensuring project timelines and deliverables are met.`,
    `AI-Powered Content Creation: Utilize AI tools (e.g., ChatGPT, Canva) to automate and streamline the content creation process for blogs, social media posts, and email campaigns.`,
    `Video Editing: Create high-quality content using video editing tools like Descript and Riverside.fm from client meetings, interviews, and webinars.`,
    `Sales and Marketing Operations: Implement and manage HubSpot workflows and funnels to align marketing and sales operations, ensuring a cohesive and productive strategy for clients.`,
    `SEO Optimization: Use tools like SEMrush and Google Analytics to monitor, optimize, and report on SEO performance, ensuring clients' digital strategies are data-driven and result-oriented.`,
    `Campaign Optimization: Analyze performance data from marketing campaigns and sales activities, providing actionable insights to improve client outcomes.`,
    `Client Training & Support: Provide ongoing support and training for clients on AI, SEO tools, and HubSpot features, ensuring they maximize their marketing and sales efforts.`,
  ],
};
const jobBenefits = {
  1: [
    `OneIMS is a global inbound digital marketing agency with offices in sunny Southwest Florida and regional offices throughout the world. Our team is dedicated to helping our clients achieve their sales and marketing goals using the most up-to-date and innovative strategies and technologies available. We believe we are one of the best in the industry and are looking for candidates who are just as passionate about marketing as we are.At OneIMS you will enjoy a great working environment, plenty of perks, nurturing leadership team, and caring co-workers. Come work with us if you believe you can make our team even better!`,

    `Competitive hourly wage`,
    `Training and certification program reimbursements`,
    `100% remote`,
    `Paid Time Off`,
  ],
  2: [
    `OneIMS is a global inbound digital marketing agency with offices in sunny Southwest Florida and regional offices throughout the world. Our team is dedicated to helping our clients achieve their sales and marketing goals using the most up-to-date and innovative strategies and technologies available. We believe we are one of the best in the industry and are looking for candidates who are just as passionate about marketing as we are.At OneIMS you will enjoy a great working environment, plenty of perks, nurturing leadership team, and caring co-workers. Come work with us if you believe you can make our team even better!`,

    `Competitive hourly wage`,
    `Training and certification program reimbursements`,
    `100% remote`,
    `Paid Time Off`,
  ],
  3: [
    `OneIMS is a global inbound digital marketing agency with offices in sunny Southwest Florida and regional offices throughout the world. Our team is dedicated to helping our clients achieve their sales and marketing goals using the most up-to-date and innovative strategies and technologies available. We believe we are one of the best in the industry and are looking for candidates who are just as passionate about marketing as we are.At OneIMS you will enjoy a great working environment, plenty of perks, nurturing leadership team, and caring co-workers. Come work with us if you believe you can make our team even better!`,

    `Competitive hourly wage`,
    `Training and certification program reimbursements`,
    `100% remote`,
    `Paid Time Off`,
  ],
};

function JobDetails() {
  const { id } = useParams();
  const description = jobDescriptions[id] || "Job not found.";
  const responsibilities = jobResponsibilities[id] || [];
  const requirements = jobRequirements[id] || [];
  const Benefits = jobBenefits[id] || [];

  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className=" flex-col justify-center items-center ">
      <div className="bg-card pt-6">
        <div className="flex-col text-center justify-center items-center ps-10 w-20 m-auto">
          <Link to={"/"}>
            <img src={logo} className="w-full" alt="Logo" />
            <p className="text-[10px] font-Arial text-primary font-semibold">
              Gulf
            </p>
          </Link>
        </div>
        <div className="text-center py-4">
          <p className="font-mons text-primary font-bold tracking-[1.7px] text-[24px]">
            Multimedia Marketing Project Manager
          </p>
          <p className="gobLocation text-secondary font-mons text-[16px] tracking-[.5px] font-[500] ">
            <span className="text-aboutCont font-bold">Remote</span> - Digital
            Marketing - Full time
          </p>
        </div>

        <div className="flex justify-center space-x-4 my-4 bg-white w-fit m-auto">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 ${
              activeTab === "overview"
                ? " bg-white border-custom text-primary"
                : "bg-white text-aboutCont"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("application")}
            className={`px-4 py-2 ${
              activeTab === "application"
                ? " bg-white border-custom text-primary"
                : "bg-white text-aboutCont"
            }`}
          >
            Application
          </button>
        </div>
      </div>

      <div className="p-4  flex justify-center items-center">
        {activeTab === "overview" && (
          <div className="flex-col sm:justify-center sm:items-center sm:w-3/4 w-full  ">
            <h3 className="text-lg font-bold tracking-[1.2px] pb-6 ">
              {" "}
              Description
            </h3>
            <p className="sm:text-lg font-[500] sm:tracking-[2px] sm:leading-9 text-aboutCont  font-mons">
              {description}
            </p>

            <h3 className="text-2xl font-[600] leading-9 tracking-[2px]  py-6">
              Key Responsibilities
            </h3>
            <ul className="list-disc pl-5">
              {responsibilities.map((responsibility, index) => (
                <li
                  className="font-mons text-[#333] text-[20px] "
                  key={index}
                >
                  {responsibility}
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold mt-4 pb-6">Requirements</h3>
            <ul className="list-disc pl-5">
              {requirements.map((requirement, index) => (
                <li className="py-2 text-[#333]" key={index}>{requirement}</li>
              ))}

              {/* //////////////////////////////// */}
            </ul>
            <h3 className="text-lg font-bold mt-4 pb-6">Benefits</h3>
            <ul className="list-disc pl-5">
              {Benefits.map((benefit, index) => (
                <li className="py-3 text-[#333]" key={index}>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "application" && <Application />}
      </div>
    </div>
  );
}

export default JobDetails;
