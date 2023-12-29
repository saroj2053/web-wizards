import React from "react";
import footerStyles from "./Footer.module.css";
import companyLogo from "../../assets/brandLogo.png";
import { FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className={footerStyles.footer}>
        <div className="container">
          <div className={footerStyles.footer__contents}>
            <div className={footerStyles.footer__left}>
              <img
                className={footerStyles.footer__image}
                src={companyLogo}
                alt=""
              />
            </div>
            <h2></h2>
            <div className={footerStyles.footer__right}>
              <h2 className="m-1">Team Web Wizards</h2>
              <div className={footerStyles.companyLocation}>
                <h2>
                  <FaLocationArrow />
                </h2>
                <a href="https://maps.app.goo.gl/h1KBMhEUvMA7QR6j6" target="_blank">
                  Vettersstraße 54 Chemnitz, Saxony, Germany
                </a>
              </div>
              <div className={footerStyles.companyEmail}>
                <h2>
                  <MdEmail />
                </h2>
                <a
                  href="mailto:webwizardsservices@gmail.com?subject=Mail from your Site"
                  className="m-1"
                >
                  webwizardsservices@gmail.com
                </a>
              </div>
              <div className={footerStyles.companyPhone}>
                <h2>
                  <BsFillTelephoneFill />
                </h2>
                <a href="tel:+4915752491735" className="m-1">
                  +4915752491735/+4915734790855
                </a>
              </div>
              <div className={footerStyles.companySiteListings}>
                <h2>
                  <a href="https://www.facebook.com/profile.php?id=61552264606950"
                    target="_blank">
                    <AiFillFacebook className={footerStyles.fb} />
                  </a>
                </h2>
                <h2>
                  <a
                    href="https://www.linkedin.com/in/web-wizards-team/"
                    target="_blank"
                  >
                    <AiFillLinkedin className={footerStyles.linkedin} />
                  </a>
                </h2>
                <h2>
                  <a href="https://twitter.com/WWizards42028" target="_blank">
                    <RiTwitterXFill className={footerStyles.x} />
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className={footerStyles.copyright__text}>
          <small>
            Copyright &copy; <span id="copyright"> {year}</span> Web Wizards.
            All rights reserved
          </small>
        </div>
      </div>
      <div className={footerStyles.disclaimer__text}>
        <small>
          Disclaimer: This website is not associated with an actual company but is a part of
          a web engineering project called Planspiel at the Technical University of Chemnitz.
        </small>
      </div>
    </>
  );
};

export default Footer;
