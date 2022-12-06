import React from "react";
import Jumbotron from "../components/Jumbotron";
import { TopServices } from "../components/TopServices";
import { BotServices } from "../components/BotServices";
function Services() {
  return (
    <>
      <Jumbotron title="Our Services" subTitle="subHeading" height="300px" />
      <TopServices />
      <BotServices />
    </>
  );
}
export default Services;
