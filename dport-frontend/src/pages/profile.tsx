import type { NextPage } from "next";
import Head from "next/head";
import Profile from "views/Profile";

const ProfilePage: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>DPORT</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <Profile />
    </div>
  );
};

export default ProfilePage;
