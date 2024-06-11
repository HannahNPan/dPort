import type { NextPage } from "next";
import Head from "next/head";
import Leaderboard from "views/Leaderboard";

const LeaderboardPage: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>DPORT</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <Leaderboard />
    </div>
  );
};

export default LeaderboardPage;
