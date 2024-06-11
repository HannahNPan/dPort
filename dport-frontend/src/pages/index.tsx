import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";
import Leaderboard from "views/Leaderboard";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>DPORT</title>
        <meta
          name="description"
          content="DPORT"
        />
      </Head>
      <Leaderboard />
    </div>
  );
};

export default Home;
