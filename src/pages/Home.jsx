import React, { useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { TopAbout } from "../components/TopAbout";
import { TopServices } from "../components/TopServices";
import { BotServices } from "../components/BotServices";
import { Testimonials } from "../components/Testimonials";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../stors/Reducers/UserReducer";

function Home() {
  const Users = useSelector((state) => state);
  // const dispatch = useDispatch();
  console.log(Users);
  // useEffect(() => {
  //   dispatch(getUsers());
  // }, []);
  return (
    <>
      <Jumbotron
        title="Home"
        subTitle="subHeading"
        height="600px"
        image='url("http://images.huffingtonpost.com/2016-09-13-1473769006-9036433-Moving.jpg")'
      />
      <TopServices />

      <TopAbout />

      <BotServices />
      <Testimonials />
    </>
  );
}
export default Home;
