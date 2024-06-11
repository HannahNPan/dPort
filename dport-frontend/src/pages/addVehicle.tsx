import type { NextPage } from "next";
import Head from "next/head";
import AddVehicle from "views/AddVehicle";

const AddVehiclePage: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>DPORT</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <AddVehicle />
    </div>
  );
};

export default AddVehiclePage;
