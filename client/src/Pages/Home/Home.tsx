import React from "react";
import Banner from "../../Components/Banner/Banner";
import CoinsTable from "../../Components/CoinsTable/CoinsTable";

interface IProps {}

const Home: React.FC<IProps> = () => {
  return (
    <div>
      <Banner />
      <CoinsTable />
    </div>
  );
};
export default Home;
