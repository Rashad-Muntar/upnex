import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../src/Components/Layout/navbar";
import SharedHead from "../src/header";
import WorkWithUs from "../src/Components/presntational/Homepage/workWithUs";
import HeroAndNavigation from "../src/Components/presntational/Homepage/heroAndNavigation";
import Grow from "../src/Components/presntational/Homepage/grow";
const Home: NextPage = () => {
  return (
    <main className="main">
      <SharedHead title="Home page" />
      <HeroAndNavigation />
      <WorkWithUs />
      <Grow />
    </main>
  );
};

export default Home;
