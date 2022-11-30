import React from "react";

function Jumbotron(props) {
  return (
    <>
      <div
        className=" text-center bg-light position-relative shadow"
        style={{
          marginTop: "58px",
          height: "450px",
          backgroundImage:
            'url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cardboard-boxes-and-cleaning-things-for-moving-into-a-new-home-1573953252.jpg?crop=1.00xw:0.758xh;0,0.173xh&resize=1200:*")',
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.482)",
          }}
        >
          <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="my-5 text-light">{props.title}</h1>
            <h4 className="mb-3 text-light">{props.subTitle}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
