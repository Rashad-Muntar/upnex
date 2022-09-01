import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../src/Components/Layout/navbar";
import { Box } from "@chakra-ui/react";
import SharedHead from "../src/header";
import WorkWithUs from "../src/Components/presntational/Homepage/workWithUs";
import HeroAndNavigation from "../src/Components/presntational/Homepage/heroAndNavigation";
import Grow from "../src/Components/presntational/Homepage/grow";
import Services from "../src/Components/presntational/Homepage/services";
import KnowUs from "../src/Components/presntational/Homepage/knowUs";
import Footer from "../src/Components/Layout/footer";

const Home: NextPage = () => {
  return (
    <Box>
      <SharedHead title="Home page" />
      <HeroAndNavigation />
      <WorkWithUs />
      <Grow />
      <Services />
      <KnowUs />
      <Footer />
    </Box>
  );
};

export default Home;
