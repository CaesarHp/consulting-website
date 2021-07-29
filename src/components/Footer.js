import { IconContext } from "react-icons";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import classes from "./Footer.module.scss";

const Footer = function () {
  return (
    <div className={classes["footer-container"]} id="contact">
      <div className={classes["footer-info-container"]}>
        <span className={classes["footer-info-title"]}>Contact Us</span>
        <IconContext.Provider
          value={{ className: classes["footer-icon-info"] }}
        >
          <div className={classes["footer-info-details"]}>
            <div className={classes["footer-info-detail-container"]}>
              <FaMapMarkerAlt />
              <div className={classes["footer-info-detail-inner-container"]}>
                <span className={classes["footer-info-detail-title"]}>
                  Official Address
                </span>
                <span className={classes["footer-info-detail-subtitle"]}>
                  3456 Yonge St. Toronto ON <br /> M1A 2B3
                </span>
              </div>
            </div>

            <div className={classes["footer-info-detail-container"]}>
              <FaEnvelope />
              <div className={classes["footer-info-detail-inner-container"]}>
                <span className={classes["footer-info-detail-title"]}>
                  Email Us
                </span>
                <span className={classes["footer-info-detail-subtitle"]}>
                  suppor@jobsity.com
                </span>
              </div>
            </div>

            <div className={classes["footer-info-detail-container"]}>
              <FaPhoneAlt />
              <div className={classes["footer-info-detail-inner-container"]}>
                <span className={classes["footer-info-detail-title"]}>
                  Call Us
                </span>
                <span className={classes["footer-info-detail-subtitle"]}>
                  +1 647 123 1234
                </span>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>

      <div className={classes["footer-about-container"]}>
        <span className={classes["footer-about-title"]}>About Jobsity</span>
        <p className={classes["footer-about-paragraph"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>

        <IconContext.Provider
          value={{ className: classes["footer-icon-social"] }}
        >
          <div className={classes["footer-social-container"]}>
            <div className={classes["footer-social-bg"]}>
              <FaFacebook />
            </div>
            <div className={classes["footer-social-bg"]}>
              <FaInstagram />
            </div>
            <div className={classes["footer-social-bg"]}>
              <FaTwitter />
            </div>
            <div className={classes["footer-social-bg"]}>
              <FaYoutube />
            </div>
          </div>
        </IconContext.Provider>

        <span className={classes["footer-about-copyright"]}>
          © 2010-2021 Jobstiy Consulting Group. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
