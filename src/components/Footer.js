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
                  95 Mural Street, Richmond Hill, L4B 3G2
                </span>
              </div>
            </div>

            <div className={classes["footer-info-detail-container"]}>
              <FaEnvelope />
              <div className={classes["footer-info-detail-inner-container"]}>
                <span className={classes["footer-info-detail-title"]}>
                  Email Us
                </span>
                <a
                  href="mailto:info@jobstay.co"
                  className={classes["footer-info-detail-subtitle"]}
                >
                  info@jobstay.co
                </a>
              </div>
            </div>

            <div className={classes["footer-info-detail-container"]}>
              <FaPhoneAlt />
              <div className={classes["footer-info-detail-inner-container"]}>
                <span className={classes["footer-info-detail-title"]}>
                  Call Us
                </span>
                <a
                  href="tel:905-462-6688"
                  className={classes["footer-info-detail-subtitle"]}
                >
                  905-462-6688
                </a>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>

      <div className={classes["footer-about-container"]}>
        <span className={classes["footer-about-title"]}>About Jobstay</span>
        <p className={classes["footer-about-paragraph"]}>
          The most customer oriented grand service group. Your life begins with
          a Jobstay!
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
          © 2021 Jobstay. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
