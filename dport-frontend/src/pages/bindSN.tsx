import type { NextPage } from "next";
import Head from "next/head";
import AddBatteryAndVehicle from "views/AddBattery";

const BindSN: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>DPORT</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <AddBatteryAndVehicle />
    </div>
  );
};

export default BindSN;
