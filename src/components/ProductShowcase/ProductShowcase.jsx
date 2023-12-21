import React from "react";
import styles from "./ProductShowcase.module.css";
import productThumbnail from "../../assets/campusflow-thumbnail.png";

const ProductShowcase = () => {
  return (
    <div className={styles.productShowcase} name="product">
      <div className="container">
        <h1 className={styles.productShowcase__heading}>Our Products</h1>
        <div className={styles.productCard__wrapper}>
          <div className={styles.productCard}>
            <figure className={styles.productImage}>
              <img
                src={productThumbnail}
                alt="Across platform, under development"
              />

              <figcaption>
                <main>
                  <p className={styles.small}>Under Development</p>
                  <h3>
                    Campus Flow, <em>An across Web Application</em>
                  </h3>
                  <p>
                    The CampusFlow by Web Wızards provides a variety of
                    functions for students to organise and administer their
                    across courses.
                  </p>
                </main>
                <footer>
                  <a
                    href="https://planspiel-across.vercel.app/"
                    target="_blank"
                    className={styles.golive__button}
                  >
                    Go Live
                  </a>
                </footer>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
