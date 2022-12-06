import React from "react";

export const Testimonials = () => {
  return (
    <section data-aos="zoom-in">
      <div className="testimonials  section-bg">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="section-header pt-5">
            <h2>Testimonials</h2>
            <p>
              Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
              nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
            </p>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item  active">
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item my-5">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                    </div>
                    <p className="text-dark">
                      <i className="fa fa-quote-left quote-icon" />
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i className="fa fa-quote-right quote-icon" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item my-5">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <p className="text-dark">
                      <i className="fa fa-quote-left quote-icon" />
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i className="fa fa-quote-right quote-icon" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item m-5">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                    </div>
                    <p className="text-dark">
                      <i className="fa fa-quote-left quote-icon" />
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i className="fa fa-quote-right quote-icon" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev "
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <ion-icon name="chevron-back-outline" />
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <ion-icon name="chevron-forward-outline" />
          </a>
        </div>
      </div>
    </section>
  );
};
