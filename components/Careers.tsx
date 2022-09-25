/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, MapPinIcon, UsersIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import CareersH from "./CareersHeader";
import { createClient } from "next-sanity";
import { Job } from "../types";

const positions = [
  {
    id: 1,
    title: "Back End Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 2,
    title: "Front End Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 3,
    title: "User Interface Designer",
    type: "Full-time",
    location: "Remote",
    department: "Design",
    closeDate: "2020-01-14",
    closeDateFull: "January 14, 2020",
  },
  {
    id: 4,
    title: "User Interface Designer",
    type: "Full-time",
    location: "Remote",
    department: "Design",
    closeDate: "2020-01-14",
    closeDateFull: "January 14, 2020",
  },
];

export default function Careers() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const client = createClient({
    projectId: "vcq7xnt0",
    dataset: "production",
    apiVersion: "2022-09-25",
    useCdn: false,
  });
  const getJobs = async () => {
    const jobs = await client.fetch(`*[_type == "job"]`).then((res) => {
      setJobs((jobs) => res);
    });
  };
  useEffect(() => {
    getJobs();
  }, []);
  return (
    <div className="columns-2 ">
      <div>
        <img
          className="h-full w-full object-cover"
          src="./images/jobs (1).jpg"
          alt=""
        />
      </div>
      <div className="bg-white shadow sm:rounded-md my-5">
        <CareersH />
        <ul
          role="list"
          className="overflow-scroll overflow-x-hidden h-80 divide-y divide-gray-200"
        >
          {jobs.map((job) => (
            <li key={job._id}>
              <a href="#" className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-sm font-medium text-[#005377]">
                      {job.title}
                    </p>
                    <div className="ml-2 flex flex-shrink-0">
                      <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        {job.type}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <UsersIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-[#EC4E20]"
                          aria-hidden="true"
                        />
                        {job.department}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <MapPinIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-[#EC4E20]"
                          aria-hidden="true"
                        />
                        {job.location}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <CalendarIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-[#EC4E20]
                      text-[#EC4E20]"
                        aria-hidden="true"
                      />
                      <p>
                        Closing on{" "}
                        <time dateTime={job.closeDate}>{job.closeDate}</time>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
