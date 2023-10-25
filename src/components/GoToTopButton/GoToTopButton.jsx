import React, { useState, useEffect } from "react";
import styles from "./GoToTopButton.module.css";

const GoToTopButton = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  function scrollFunction() {
    if (window.scrollY > 30) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <button
        className={`${styles.gototop} ${isButtonVisible ? styles.visible : ""}`}
        onClick={scrollToTop}
      ></button>
    </div>
  );
};

export default GoToTopButton;
