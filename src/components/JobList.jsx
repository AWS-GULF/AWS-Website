import { Link } from "react-router";
import Button from "./Button";
import { p } from "framer-motion/client";
import { Description } from "@headlessui/react";

const jobs = [
  {
    id: 1,
    title: "Multimedia Marketing Project Manager",
    department: "Department: Digital Marketing",
    creation: "Creation date: 2024-11-14",
    Description: ""
  },
  {
    id: 2,
    title: "Multimedia Marketing Project Manager",
    department: "Department: Digital Marketing",
    creation: "Creation date: 2024-11-14",
  },
  {
    id: 3,
    title: "Multimedia Marketing Project Manager",
    department: "Department: Digital Marketing",
    creation: "Creation date: 2024-11-14",
  },


];

function JobList() {
  return (
    <div className=" text-[#000] font-mons font-normal leading-[35px] tracking-[1.4px] mb-[100px] flex-col justify-center m-auto items-center">
      <h2 className="text-[28px] font-mons text-center font-bold tracking-[.64px] pb-8 text-primary">
        Current Openings
      </h2>

      {jobs.length === 0 && <p className="text-[#000] sm:p-6 p-0 bg-[#EAF5F6] rounded-[10px]  font-mons font-semibold leading-[35px] tracking-[1.4px]">- Sorry, There are no open vacancies currently.</p>}

      <ul className="flex-col justify-center items-center sm:justify-start w-full   space-y-6  text-center sm:text-start ">
        {jobs.map((job) => (
          <li key={job.id} className="sm:p-6 p-0   sm:w-full  bg-[#EAF5F6] rounded-[10px]">
            <Button type="linkBtn" to={`/careers/${job.id}`}>
              {job.title}
            </Button>

            <div className="text-[#000] font-mons font-normal sm:leading-[35px] sm:tracking-[1.4px]">
              {" "}
              <p>{job.department}</p>
              <p>{job.creation}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
