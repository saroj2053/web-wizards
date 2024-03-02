import React, { useState } from "react";
import styles from "./Header.module.css";
import brandLogo from "../../assets/brandLogo.png";
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

const duration = 500;

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
            <a href="/">
              <img
                className={styles.header__brandImage}
                src={brandLogo}
                alt=""
              />
            </a>
          </div>
          <div className={styles.header__right}>
            <ul
              className={`${styles.nav__links} ${isNavOpen ? styles.open : ""}`}
            >
              <li className={styles.nav__link}>
                <Link
                  activeClass={styles.active}
                  to="home"
                  spy
                  smooth
                  duration={duration}
                >
                  Home
                </Link>
              </li>

              <li className={styles.nav__link}>
                <Link
                  activeClass={styles.active}
                  to="about"
                  spy
                  smooth
                  duration={duration}
                >
                  About
                </Link>
              </li>
              <li className={styles.nav__link}>
                <Link
                  activeClass={styles.active}
                  to="product"
                  spy
                  smooth
                  duration={duration}
                >
                  Product
                </Link>
              </li>
              <li className={styles.nav__link}>
                <Link
                  activeClass={styles.active}
                  to="team"
                  spy
                  smooth
                  duration={duration}
                >
                  Team
                </Link>
              </li>
              <li className={styles.nav__link}>
                <Link
                  activeClass={styles.active}
                  to="contact"
                  spy
                  smooth
                  duration={duration}
                >
                  Contact
                </Link>
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
