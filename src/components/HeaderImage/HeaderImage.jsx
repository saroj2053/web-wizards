import React from "react";
import landingImage from "../../assets/landingImage.jpg";
import imageStyles from "./HeaderImage.module.css";

const HeaderImage = () => {
  return (
    <div className={imageStyles.headerImage} name="home">
      <img
        className={imageStyles.header__image}
        src={landingImage}
        alt="picture of it professions working on a common desk"
      />
      <div className={imageStyles.motto__container}>
        <p className={imageStyles.motto}>
          Masters of the Web, Architects of Code
        </p>
      </div>
    </div>
  );
};

export default HeaderImage;
