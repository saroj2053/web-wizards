import React from "react";
import styles from "./TeamInfo.module.css";
import profileImageOne from "../../assets/dooa.png";
import profileImageTwo from "../../assets/ruya.png";
import profileImageThree from "../../assets/akshay.png";
import profileImageFour from "../../assets/saroj.png";
import profileImageFive from "../../assets/sajani.png";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

const TeamInfo = () => {
  return (
    <div className={styles.teamInfo} id="team">
      <div className="container">
        <h2 className={styles.teamInfo__heading}>Our Team</h2>
        <div className={styles.profileCards}>
          <div className={`${styles.profileCard} ${styles.overlay__container}`}>
            <div className={styles.profileImage}>
              <img src={profileImageOne} alt="" />
            </div>
            <h2 className={styles.profileName}>Dooa Ansari</h2>
            <h4 className={styles.profileDesignation}>Frontend Developer</h4>
            <div className={styles.overlay__containerContents}>
              <div className={styles.aboutProfile}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Expedita quo id labore. Tenetur voluptas quisquam dolore
                  exercitationem, quam molestiae.
                </p>
              </div>
              <div className={styles.ntw__links}>
                <a className={`${styles.icon} ${styles.githubIcon}`} href="">
                  <BiLogoGithub />
                </a>

                <a
                  className={`${styles.icon} ${styles.linkedinIcon}`}
                  href="https://www.linkedin.com/in/dooa-ansari-5a881a70/"
                  target="_blank"
                >
                  <BiLogoLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.profileCard} ${styles.overlay__container}`}>
            <div className={styles.profileImage}>
              <img src={profileImageTwo} alt="" />
            </div>
            <h2 className={styles.profileName}>Rüya Yardimci</h2>
            <h4 className={styles.profileDesignation}>
              Quality Assurance Engineer
            </h4>
            <div className={styles.overlay__containerContents}>
              <div className={styles.aboutProfile}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Expedita quo id labore. Tenetur voluptas quisquam dolore
                  exercitationem, quam molestiae.
                </p>
              </div>
              <div className={styles.ntw__links}>
                <a className={`${styles.icon} ${styles.githubIcon}`} href="">
                  <BiLogoGithub />
                </a>

                <a
                  className={`${styles.icon} ${styles.linkedinIcon}`}
                  href="https://www.linkedin.com/in/dooa-ansari-5a881a70/"
                  target="_blank"
                >
                  <BiLogoLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.profileCard} ${styles.overlay__container}`}>
            <div className={styles.profileImage}>
              <img src={profileImageThree} alt="" />
            </div>
            <h2 className={styles.profileName}>Akshay Ghavale</h2>
            <h4 className={styles.profileDesignation}>Backend Developer</h4>
            <div className={styles.overlay__containerContents}>
              <div className={styles.aboutProfile}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Expedita quo id labore. Tenetur voluptas quisquam dolore
                  exercitationem, quam molestiae.
                </p>
              </div>
              <div className={styles.ntw__links}>
                <a className={`${styles.icon} ${styles.githubIcon}`} href="">
                  <BiLogoGithub />
                </a>

                <a
                  className={`${styles.icon} ${styles.linkedinIcon}`}
                  href="https://www.linkedin.com/in/dooa-ansari-5a881a70/"
                  target="_blank"
                >
                  <BiLogoLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.profileCard} ${styles.overlay__container}`}>
            <div className={styles.profileImage}>
              <img src={profileImageFour} alt="" />
            </div>
            <h2 className={styles.profileName}>Saroj Sah</h2>
            <h4 className={styles.profileDesignation}>Full Stack Developer</h4>
            <div className={styles.overlay__containerContents}>
              <div className={styles.aboutProfile}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Expedita quo id labore. Tenetur voluptas quisquam dolore
                  exercitationem, quam molestiae. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Ab facilis quae aspernatur iure
                  quidem non nulla temporibus unde laboriosam blanditiis.
                </p>
              </div>
              <div className={styles.ntw__links}>
                <a className={`${styles.icon} ${styles.githubIcon}`} href="">
                  <BiLogoGithub />
                </a>

                <a
                  className={`${styles.icon} ${styles.linkedinIcon}`}
                  href="https://www.linkedin.com/in/dooa-ansari-5a881a70/"
                  target="_blank"
                >
                  <BiLogoLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.profileCard} ${styles.overlay__container}`}>
            <div className={styles.profileImage}>
              <img src={profileImageFive} alt="" />
            </div>
            <h2 className={styles.profileName}>Sajani Joshi</h2>
            <h4 className={styles.profileDesignation}>Backend Developer</h4>
            <div className={styles.overlay__containerContents}>
              <div className={styles.aboutProfile}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Expedita quo id labore. Tenetur voluptas quisquam dolore
                  exercitationem, quam molestiae.
                </p>
              </div>
              <div className={styles.ntw__links}>
                <a className={`${styles.icon} ${styles.githubIcon}`} href="">
                  <BiLogoGithub />
                </a>

                <a
                  className={`${styles.icon} ${styles.linkedinIcon}`}
                  href="https://www.linkedin.com/in/dooa-ansari-5a881a70/"
                  target="_blank"
                >
                  <BiLogoLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
