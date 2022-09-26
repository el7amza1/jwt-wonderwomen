import Careers from "../components/Careers";
import Contacts from "../components/Contacts";
import { getClient } from "../lib/sanity";

import { groq } from "next-sanity";
import { Job } from "../types";

const Home = ({ jobs }: { jobs: Job[] }) => {
  return (
    <>
      <div className="container mx-auto px-6 lg:px-8">
        <Careers jobs={jobs} />
      </div>
      <Contacts />
    </>
  );
};

const query = "*[_type == 'job'] | order(_createdAt asc)";

export async function getServerSideProps() {
  const jobs = await getClient().fetch(query);
  return {
    props: { jobs },
  };
}

export default Home;
