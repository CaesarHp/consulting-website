import classes from "./About.module.scss";
import aboutImg from "../local-img/about.jpg";

const About = function () {
  return (
    <div className={classes["about-container"]} id="about">
      <img src={aboutImg} alt="about" className={classes["about-img"]} />
      <div className={classes["about-info-container"]}>
        <span className={classes["about-info-title"]}>About Us</span>
        <p className={classes["about-info-paragraph"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum.
        </p>
        <div className={classes["about-info-details"]}>
          <span className={classes["about-info-detail"]}>
            - Lorem ipsum dolor sit amet
          </span>
          <span className={classes["about-info-detail"]}>
            - Quis nostrud exercitation ullamco laboris
          </span>
          <span className={classes["about-info-detail"]}>
            - Excepteur sint occaecat cupidatat
          </span>
        </div>

        <button className={classes["about-button"]}>Contact Us</button>
      </div>
    </div>
  );
};

export default About;
