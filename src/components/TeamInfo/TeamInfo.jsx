import React from "react";
import styles from "./TeamInfo.module.css";
import profileImageOne from "../../assets/dooa.png";
import profileImageTwo from "../../assets/ruya.png";
import profileImageThree from "../../assets/akshay.png";
import profileImageFour from "../../assets/saroj.png";
import profileImageFive from "../../assets/sajani.png";

const TeamInfo = () => {
  return (
    <div className={styles.teamInfo}>
      <div className="container">
        <h2 className={styles.teamInfo__heading}>Our Team</h2>
        <div className={styles.profileCards}>
          <div className={styles.profileCard}>
            <div className={styles.profileImage}>
              <img src={profileImageOne} alt="" />
            </div>
            <h2 className={styles.profileName}>Dooa Ansari</h2>
            <h4 className={styles.profileDesignation}>Frontend Developer</h4>
            <div className={styles.ntw__links}>
              <a class="githubIcon" href="">
                <i class="fa-brands fa-square-github"></i>
              </a>

              <a
                class="linkedinIcon"
                href="https://www.linkedin.com/in/dooa-ansari-5a881a70/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className={styles.profileCard}>
            <div className={styles.profileImage}>
              <img src={profileImageTwo} alt="" />
            </div>
            <h2 className={styles.profileName}>Rüya Yardimci</h2>
            <h4 className={styles.profileDesignation}>
              Quality Assurance Engineer
            </h4>
            <div className={styles.ntw__links}>
              <a class="githubIcon" href="">
                <i class="fa-brands fa-square-github"></i>
              </a>

              <a
                class="linkedinIcon"
                href="https://www.linkedin.com/in/dooa-ansari-5a881a70/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className={styles.profileCard}>
            <div className={styles.profileImage}>
              <img src={profileImageThree} alt="" />
            </div>
            <h2 className={styles.profileName}>Akshay Ghavale</h2>
            <h4 className={styles.profileDesignation}>Backend Developer</h4>
            <div className={styles.ntw__links}>
              <a class="githubIcon" href="">
                <i class="fa-brands fa-square-github"></i>
              </a>

              <a
                class="linkedinIcon"
                href="https://www.linkedin.com/in/dooa-ansari-5a881a70/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className={styles.profileCard}>
            <div className={styles.profileImage}>
              <img src={profileImageFour} alt="" />
            </div>
            <h2 className={styles.profileName}>Saroj Sah</h2>
            <h4 className={styles.profileDesignation}>Full Stack Developer</h4>
            <div className={styles.ntw__links}>
              <a class="githubIcon" href="">
                <i class="fa-brands fa-square-github"></i>
              </a>

              <a
                class="linkedinIcon"
                href="https://www.linkedin.com/in/dooa-ansari-5a881a70/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className={styles.profileCard}>
            <div className={styles.profileImage}>
              <img src={profileImageFive} alt="" />
            </div>
            <h2 className={styles.profileName}>Sajani Joshi</h2>
            <h4 className={styles.profileDesignation}>Backend Engineer</h4>
            <div className={styles.ntw__links}>
              <a class="githubIcon" href="">
                <i class="fa-brands fa-square-github"></i>
              </a>

              <a
                class="linkedinIcon"
                href="https://www.linkedin.com/in/dooa-ansari-5a881a70/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
