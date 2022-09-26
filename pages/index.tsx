import type { NextPage } from "next";
import Careers from "../components/Careers";
import Contacts from "../components/Contacts";

const Home: NextPage = () => {
  return (
    <>
      <div className="container mx-auto px-6 lg:px-8">
        <Careers />
      </div>
      <Contacts />
    </>
  );
};

export default Home;
