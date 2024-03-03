import React from "react";
import styles from "./ProductShowcase.module.css";
import productThumbnail from "../../assets/landingPageBannerImage.png";
import aboutStyles from "../About/About.module.css";
import Milestone from "../Milestone/Milestone";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";
import { Carousel } from "react-responsive-carousel";
import productLaunchImg from "../../assets/campusflow-launch.png";

const ProductShowcase = () => {
  const openLink = () => {
    window.open('http://campus-flow.college', '_blank');
  };
  return (
    <div className={styles.productShowcase} name="product">
      <div className="container">
        <h1 className={styles.productShowcase__heading}>Our Products</h1>
        <div className={styles.productCard__wrapper}>
          {/* <div className={styles.productCard}>
            <figure className={styles.productImage}>
              <img
                src={productThumbnail}
                alt="Across platform, under development"
              />

              <figcaption>
                <main>
                  <p className={styles.small}>Under Development...</p>
                  <h3>
                    Campus Flow, <em>An across Web Application</em>
                  </h3>
                  <p>
                    The CampusFlow by Web Wızards provides a variety of
                    functions for students to organise and administer their
                    across courses.
                  </p>
                </main>
              </figcaption>
            </figure>
          </div>

          <p className={aboutStyles.padding_mobile}>
            Welcome to CampusFlow, where we redefine your university experience
            with a unified system that puts all the essential tools at your
            fingertips. Navigate the vast landscape of university modules
            effortlessly, explore seamless credit transfer options, and make
            informed decisions through our intuitive module comparison feature.
            CampusFlow is more than a product – it's your passport to a
            smoother, more informed academic journey. Join us and unlock the
            potential of streamlined university living today!
          </p> */}

          <Carousel autoPlay>
            <div>
              <img className="carousel__img" src={productLaunchImg} alt="" />
              <h2 className="legend" style={{ fontSize: "18px" }}>
                Stay Tuned for our revolutionary Product which is launching on 5th
                March, 12PM
              </h2>
            </div>
          </Carousel>
        </div>
        {/* <button class="btn btn-submit" onClick={openLink}>
          Go Live
        </button> */}
      </div>
      <Milestone />
      <div className={styles.carousel}>
        <ProjectCarousel />
      </div>
    </div>
  );
};

export default ProductShowcase;
