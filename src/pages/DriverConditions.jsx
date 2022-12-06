import React from "react";
import Jumbotron from "../components/Jumbotron";

export const DriverConditions = () => {
  console.log("cond");
  return (
    <div>
      <Jumbotron
        title="Drive with Mover and be a Captain"
        subTitle="driver conditions"
        height="300px"
      />

      <section>
        <div className="section-header">
          <h2>Why become a captain?</h2>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col col-lg-4 col-md-7 col-sm-12  ">
              <div className="card shadow h-100 border-0 mx-2 p-2 justify-content-center align-items-center">
                <i
                  className="fas fa-duotone fa-business-time m-2"
                  style={{ fontSize: "40px" }}
                />
                <div className="card-title text-center p-3">
                  Full time? Part time? With Mover you work on your own time.
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-7 col-sm-12 ">
              <div className="card shadow h-100 border-0 mx-2 p-2 justify-content-center align-items-center">
                <i
                  className="fas fa-duotone fa-sack-dollar m-2"
                  style={{ fontSize: "40px" }}
                />
                <div className="card-title text-center p-3">
                  Make your own money
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-7 col-sm-12 ">
              <div className="card shadow h-100 border-0 mx-2 p-2 justify-content-center align-items-center">
                <i
                  className="fas fa-duotone fa-face-smile m-2"
                  style={{ fontSize: "40px" }}
                />
                <div className="card-title text-center p-3">
                  Control your own life
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-header">
          <h2>Requirements</h2>
        </div>
        <div className="container d-flex justify-content-center ">
          <div className="row w-75 ">
            <div className="d-flex align-items-center justify-content-center my-3">
              <ion-icon
                name="calendar-outline"
                className="mx-4 w-25"
                style={{ fontSize: "45px", color: "#feb900" }}
              ></ion-icon>
              <div>
                <h3>AGE</h3>
                <p>
                  You have to be over 18 years of age with a valid driver’s
                  license to drive with Mover.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center my-3">
              <ion-icon
                name="shield-checkmark-outline"
                className="mx-4 w-25"
                style={{ fontSize: "45px", color: "#feb900" }}
              ></ion-icon>
              <div>
                <h3>Screening</h3>
                <p>
                  The screening process may include drug tests, police reports,
                  credit checks etc.
                </p>
              </div>
            </div>

            {/* <div className="d-flex align-items-center ">
              <ion-icon
                name="credit-card-outline"
                className="mx-4 w-25"
                style={{ fontSize: "45px", color: "#feb900" }}
              ></ion-icon>
              <div>
                <h3 />
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section style={{ position: "relative" }}>
        <img
          src="{{ asset('images/driver.jpg') }}"
          style={{ filter: "brightness(40%)", height: "500px" }}
          width="100%"
          height="100%"
          alt=""
        />
        <div
          className=" h-100 d-flex flex-column justify-content-center align-items-center"
          style={{ position: "absolute", top: "1%", left: "30%" }}
        >
          <h3 className="text-white my-5">
            Have you got what it takes to be a Mover Captain?
          </h3>
          <a href="/driver_register" className="btn bg-color p-2 mr-2">
            Signup now
          </a>
        </div>
      </section>
      <section>
        <div className=" bg-light h-100">
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="col-lg-4 col-md-7 col-sm-12 my-5">
              <h2>How to start ?</h2>
              <div className="d-flex align-items-center justify-content-center my-4">
                <i
                  className="fa-solid fa-1 m-4 bg-color p-3"
                  style={{ fontSize: "40px" }}
                />
                <div>
                  <h4>Register</h4>
                  <p>
                    Complete
                    <a
                      href="/driver_register"
                      style={{ color: "#feb900", textDecoration: "underline" }}
                    >
                      register form
                    </a>
                    apply to become a Mover Captain.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center my-4">
                <i
                  className="fa-solid fa-2 m-4 bg-color p-3"
                  style={{ fontSize: "40px" }}
                />
                <div>
                  <h4>Train</h4>
                  <p>
                    After reviewing your application we’ll invite you for a
                    training session.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center my-4">
                <i
                  className="fa-solid fa-3 m-4 bg-color p-3"
                  style={{ fontSize: "40px" }}
                />
                <div>
                  <h4>Ride</h4>
                  <p>When training is complete, you can start to earn money!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12 m-5 h-100">
              <img
                src="https://blog.ptvgroup.com/wp-content/uploads/2022/02/Truckdriver.jpg"
                height="100%"
                width="100%"
                alt=""
                style={{ borderRadius: "20px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
