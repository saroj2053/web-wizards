import React from "react";
import styles from "./Header.module.css";
import brandLogo from "../../assets/brandLogo.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__contents}>
          <div className={styles.header__left}>
            <img className={styles.header__brandImage} src={brandLogo} alt="" />
            {/* <h1 className={styles.header__brand}>
              <span className={styles.only__w}>W</span>eb{" "}
              <span className={styles.only__w}>W</span>izards
            </h1> */}
          </div>
          <div className={styles.header__right}>
            <ul className={styles.nav__links}>
              <li className={styles.nav__link}>
                <a href="/">Home</a>
              </li>
              <li className={styles.nav__link}>
                <a href="#about">About</a>
              </li>
              <li className={styles.nav__link}>
                <a href="#team">Team</a>
              </li>
              <li className={styles.nav__link}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
