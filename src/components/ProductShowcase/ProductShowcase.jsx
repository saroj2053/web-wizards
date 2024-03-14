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
    window.open(
      "http://frontend-across.s3-website.eu-north-1.amazonaws.com/",
      "_blank"
    );
  };

  return (
    <div className={styles.productShowcase} name="product">
      <div className="container">
        <h1 className={styles.productShowcase__heading}>Our Products</h1>
        <div className={styles.productCard__wrapper}>
          <Carousel autoPlay>
            <div>
              <img className="carousel__img" src={productLaunchImg} alt="" />
              <h2
                className="legend"
                style={{ fontSize: "18px", fontWeight: "400" }}
              >
                Our Product is Live now, you can take an experience by visiting
                Go Live link below
              </h2>
            </div>
          </Carousel>
        </div>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={styles.btn_ctalink}
            onClick={openLink}
          >
            Go Live
          </button>
        </div>
      </div>
      <Milestone />
      <div className={styles.carousel}>
        <ProjectCarousel />
      </div>
    </div>
  );
};

export default ProductShowcase;
