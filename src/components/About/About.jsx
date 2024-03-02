import React from "react";
import aboutStyles from "./About.module.css";

import { Element } from "react-scroll";

const About = () => {
  return (
    <Element className={aboutStyles.about} name="about">
      <div className="container">
        <h2 className={aboutStyles.about__heading}>About Us</h2>

        <p className={aboutStyles.padding_mobile}>
          Web Wizards in Chemnitz offers cutting-edge tech solutions, driven by
          our passionate team's commitment to excellence. We're your reliable
          partner in navigating evolving tech landscapes, tailoring solutions to
          empower your progress and success. Join us in our mission to empower
          you with the best technology, tailored to your needs, and embark on a
          journey of progress and success.
        </p>
      </div>
    </Element>
  );
};

export default About;
