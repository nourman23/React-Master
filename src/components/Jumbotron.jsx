import { TheCarousel } from "./Carousel";
import React from "react";

function Jumbotron(props) {
  // console.log(props);
  // let homeStyle;
  // if (props.title == "Home") {
  //   console.log("true");
  //   homeStyle = {

  //   };
  // } else {
  //   console.log("false");
  //   homeStyle = {
  //     background: "black",
  //   };
  // }

  return (
    <>
      <div
        className=" text-center bg-light position-relative  jumborton"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: props.image,
          height: props.height,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.31)",
          }}
        >
          <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            {props.title != "Home" ? (
              <>
                <h1 className="my-5 text-light">{props.title}</h1>
                {props.subTitle == "driver conditions" ? (
                  <div className="d-flex align-items-center p-2">
                    <a
                      href="/driver_register"
                      className="btn bg-color p-2 mr-2"
                    >
                      <div className="d-flex align-items-center">
                        <ion-icon
                          name="speedometer-outline"
                          className="mr-2"
                          style={{ fontSize: "20px" }}
                        />
                        Signup now
                      </div>
                    </a>
                    <a
                      href="#"
                      className="text-white "
                      style={{ textDecoration: "underline" }}
                    >
                      already have an account ? login
                    </a>
                  </div>
                ) : (
                  <p className="text-light"> {props.subTitle}</p>
                )}
              </>
            ) : (
              <TheCarousel title={props.title} subTitle={props.subTitle} />
            )}
          </div>
        </div>
      </div>
      {/* <Svg /> */}
    </>
  );
}

export default Jumbotron;
