import React from "react";

export const OurWork = () => {
  return (
    <section>
      <div className="section-header">
        <h2>Our work</h2>
        <p>
          Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
          nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="four col-md-3">
            <div className="counter-box ">
              <i className="fa fa-thumbs-o-up" />
              <span className="counter">2147</span>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className="four col-md-3">
            <div className="counter-box">
              <i className="fa fa-group" />
              <span className="counter">3275</span>
              <p>Registered Members</p>
            </div>
          </div>
          <div className="four col-md-3">
            <div className="counter-box">
              <i className="fa fa-shopping-cart" />
              <span className="counter">289</span>
              <p>Available Products</p>
            </div>
          </div>
          <div className="four col-md-3">
            <div className="counter-box">
              <i className="fa  fa-user" />
              <span className="counter">1563</span>
              <p>Saved Trees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
