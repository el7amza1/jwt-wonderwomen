/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, MapPinIcon, UsersIcon } from "@heroicons/react/20/solid";
import CareersH from "./CareersHeader";
import { Job } from "../types";

export default function Careers({ jobs }: { jobs: Job[] }) {
  // const [jobs, setJobs] = useState<Job[]>([]);
  return (
    <div className="lg:flex justify-around items-center">
      <div className="hidden lg:block lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="./images/jobs (1).jpg"
          alt=""
        />
      </div>
      <div className="bg-white shadow sm:rounded-md h-full lg:w-1/2">
        <CareersH />
        <ul
          role="list"
          className="overflow-scroll overflow-x-hidden divide-y divide-gray-200"
        >
          {jobs.map((job: any) => (
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
