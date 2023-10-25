import React from "react";
import aboutStyles from "./About.module.css";
import aboutImage from "../../assets/aboutImage.jpg";

const About = () => {
  return (
    <div className={aboutStyles.about}>
      <div className="container">
        <h2 className={aboutStyles.about__heading}>About Us</h2>
        <div className={aboutStyles.about__contents}>
          <div className={aboutStyles.about__right}>
            <p>
              Located in the heart of Chemnitz, Web Wizards is a
              technology-driven company dedicated to providing cutting-edge
              solutions for our valued customers. With a commitment to
              excellence, we promise to harness the power of the latest tech
              tools to solve your most pressing problems. Our experienced team's
              passion for innovation, customer-centric approach, and unwavering
              reliability makes us your trusted partner in navigating the
              ever-evolving technological landscape. Join us in our mission to
              empower you with the best technology, tailored to your needs, and
              embark on a journey of progress and success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
