import React, { useState } from "react";
import styles from "./Header.module.css";
import brandLogo from "../../assets/brandLogo.png";
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__contents}>
          <div className={styles.header__left}>
            <img className={styles.header__brandImage} src={brandLogo} alt="" />
          </div>
          <div className={styles.header__right}>
            <ul
              className={`${styles.nav__links} ${isNavOpen ? styles.open : ""}`}
            >
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
            <li
              className={`${styles.menuIcon} ${styles.nav__link}`}
              onClick={toggleNav}
            >
              {!isNavOpen ? <TiThMenu /> : <MdClose />}
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
