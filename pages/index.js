import Head from "next/head";
import Main from "../src/components/Main";
import Sidebar from "../src/components/Sidebar";

const user = {
  profile: "/images/user.png",
  name: "Farhan Augustiansyah",
  position: "IOS Developer",
};

export default function Home() {
  return (
    <div clasName="">
      <Head>
        <title>Course Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="w-full m-0 p-0 box-border flex font-poppins">
        <Sidebar user={user} />
        <Main />
      </main>
    </div>
  );
}
