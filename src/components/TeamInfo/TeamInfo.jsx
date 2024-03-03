import React from "react";
import styles from "./TeamInfo.module.css";
import profileImageOne from "../../assets/dooa.png";
import profileImageTwo from "../../assets/ruya.png";
import profileImageThree from "../../assets/akshay.png";
import profileImageFour from "../../assets/saroj.png";
import profileImageFive from "../../assets/sajani.png";
import teamPhoto from "../../assets/team_photo.jpg";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

const TeamInfo = () => {
  return (
    <div className={styles.teamInfo} name="team">
      <div className="container">
        <h2 className={styles.teamInfo__heading}>Our Team</h2>
        <div className={styles.teamInfo__pitchContents}>
          <div className={styles.teamInfo__image}>
            <img src={teamPhoto} alt="Team Image" />
          </div>
          <div className={styles.pitchIllustrations}>
            <div className={styles.illustration1}>
              <h4>Transfer Credits</h4>
              <p>
                Automated grade conversion for a seamless academic experience
                {/* Automated transcript verification, timely reminders, and grade conversion for a seamless academic experience. */}
              </p>
            </div>
            <div className={styles.illustration2}>
              <h4>Compare Modules</h4>
              <p>
                Compare courses and modules easily for better academic decisions.
                {/* Effortless comparison of courses and modules based on program type, language, department, content, workload, and credit points for informed academic decisions. */}
              </p>
            </div>
            <div className={styles.illustration3}>
              <h4>Achievement -- Pitch 3</h4>
              <p>
                Web Wizards: Winning hearts with innovation – crowned favorites on Pitch 3rd!
              </p>
            </div>
          </div>
        </div>

        <div className={styles.profileCards}>
          <div className={`${styles.profileCard} ${styles.overlay__container}`}>
            <div className={styles.profileImage}>
              <img src={profileImageFive} alt="" />
            </div>
            <h2 className={styles.profileName}>Sajani Joshi</h2>
            <h4 className={styles.profileDesignation}>Backend Developer</h4>
            <div className={styles.overlay__containerContents}>
              <div className={styles.aboutProfile}>
                <p>
                  I am Sajani Joshi. I am currently pursuing Master's in Web
                  Engineering at the Technical University of Chemnitz.
                </p>
              </div>
              <div className={styles.ntw__links}>
                <a
                  className={`${styles.icon} ${styles.githubIcon}`}
                  href="https://github.com/SajaniJoshi"
                  target="_blank"
                >
                  <BiLogoGithub />
                </a>

                <a
                  className={`${styles.icon} ${styles.linkedinIcon}`}
                  href="https://www.linkedin.com/in/sajani-joshi-891a3644/"
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
            <h4 className={styles.profileDesignation}>Head of Marketing</h4>

            <div className={styles.overlay__containerContents}>
              <div className={styles.aboutProfile}>
                <p>
                  I am Rüya Yardimci. I am currently pursuing Master's in Web
                  Engineering at the Technical University of Chemnitz.
                </p>
              </div>
              <div className={styles.ntw__links}>
                <a
                  className={`${styles.icon} ${styles.githubIcon}`}
                  href="https://github.com/ruyardimci"
                  target="_blank"
                >
                  <BiLogoGithub />
                </a>

                <a
                  className={`${styles.icon} ${styles.linkedinIcon}`}
                  href="https://www.linkedin.com/in/ruyardimci/"
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
            <h4 className={styles.profileDesignation}>Full-Stack Developer</h4>
            <div className={styles.overlay__containerContents}>
              <div className={styles.aboutProfile}>
                <p>
                  I am Akshay Ghavale. I am currently pursuing Master's in Web
                  Engineering at the Technical University of Chemnitz.
                </p>
              </div>
              <div className={styles.ntw__links}>
                <a
                  className={`${styles.icon} ${styles.githubIcon}`}
                  href="https://github.com/akg1998"
                  target="_blank"
                >
                  <BiLogoGithub />
                </a>

                <a
                  className={`${styles.icon} ${styles.linkedinIcon}`}
                  href="https://www.linkedin.com/in/akshay-ghavale/"
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
            <h4 className={styles.profileDesignation}>Front-end Developer</h4>
            <div className={styles.overlay__containerContents}>
              <div className={styles.aboutProfile}>
                <p>
                  I am Saroj Sah. I am currently pursuing Master's in Web
                  Engineering at the Technical University of Chemnitz.
                </p>
              </div>
              <div className={styles.ntw__links}>
                <a
                  className={`${styles.icon} ${styles.githubIcon}`}
                  href="https://github.com/saroj2053"
                  target="_blank"
                >
                  <BiLogoGithub />
                </a>

                <a
                  className={`${styles.icon} ${styles.linkedinIcon}`}
                  href="https://www.linkedin.com/in/saroj-sah-139922124/"
                  target="_blank"
                >
                  <BiLogoLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.profileCard} ${styles.overlay__container}`}>
            <div className={styles.profileImage}>
              <img src={profileImageOne} alt="" />
            </div>
            <h2 className={styles.profileName}>Dooa Ansari</h2>
            <h4 className={styles.profileDesignation}>Full-Stack Developer</h4>

            <div className={styles.overlay__containerContents}>
              <div className={styles.aboutProfile}>
                <p>
                  I am Dooa Ansari. I am currently pursuing Master's in Web
                  Engineering at the Technical University of Chemnitz.
                </p>
              </div>
              <div className={styles.ntw__links}>
                <a
                  className={`${styles.icon} ${styles.githubIcon}`}
                  href="http://github.com/dooa-ansari"
                  target="_blank"
                >
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
