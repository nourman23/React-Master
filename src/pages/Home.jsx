import React from "react";
import Jumbotron from "../components/Jumbotron";
import { TopAbout } from "../components/TopAbout";
import { TopServices } from "../components/TopServices";
import { BotServices } from "../components/BotServices";
import { Testimonials } from "../components/Testimonials";

function Home() {
  return (
    <>
      <Jumbotron title="Home" subTitle="subHeading" />
      <TopServices />

      <TopAbout />

      <BotServices />
      <Testimonials />
    </>
  );
}
export default Home;
