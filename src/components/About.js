import classes from "./About.module.scss";
import aboutImg from "../local-img/about.jpg";

const About = function () {
  return (
    <div className={classes["about-container"]} id="about">
      <img src={aboutImg} alt="about" className={classes["about-img"]} />
      <div className={classes["about-info-container"]}>
        <span className={classes["about-info-title"]}>About Us</span>
        <p className={classes["about-info-paragraph"]}>
          The immigration-business industry is very saturated with many options,
          but how do we know which ones we can trust? In the past, the market
          was flooded with consultants and lawyers that didn’t always have the
          best interests in mind for their clients
        </p>
        <p className={classes["about-info-paragraph"]}>
          We now present you with the solution. A platform of a grand service
          group that will revolutionize the industry: putting quality
          consultants and lawyers in the group with a system that will
          streamline the process of connecting one-on-one with someone you can
          trust
        </p>
        <p className={classes["about-info-paragraph"]}>
          This online platform will critically analyze how each firm may
          specialize in different services and play to their strengths. Once you
          click on a provide, it will then show ratings and testimonials from
          customers overall and then assign a star next to the best services
          offered by the company.
        </p>
        <p className={classes["about-info-paragraph"]}>
          With one click of a button, you are able to instantly connect with
          someone who specializes in your exact expertise that you can trust. It
          is your future that we care about.
        </p>
        <p className={classes["about-info-paragraph"]}>
          Remember, your new life begins with a Jobystay!
        </p>

        <a href="mailto:info@jobstay.co" className={classes["about-button"]}>
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
