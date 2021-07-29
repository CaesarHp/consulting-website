import { useState } from "react";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";

import classes from "./Header.module.scss";
import logo from "../local-img/logo.png";

const Header = function () {
  const [showNavbar, setShowNavbar] = useState(false);

  const backToTopHandler = () => {
    animateScroll.scrollToTop();
    setShowNavbar(false);
  };

  const changeBtnHandler = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNavbarHandler = () => {
    setShowNavbar(false);
  };

  return (
    <IconContext.Provider value={{ className: classes["header-icon"] }}>
      <div className={classes["header-container"]}>
        <img
          src={logo}
          alt="logo"
          className={classes["header-logo"]}
          onClick={backToTopHandler}
        />
        <ul
          className={
            showNavbar ? classes["header-list"] : classes["header-list-close"]
          }
        >
          <li>
            <span
              className={classes["header-list-home-btn"]}
              onClick={backToTopHandler}
            >
              Home
            </span>
          </li>
          <li>
            <Link
              to="service"
              smooth={true}
              duration={1000}
              onClick={closeNavbarHandler}
              className={classes["header-list-link"]}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              onClick={closeNavbarHandler}
              className={classes["header-list-link"]}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              onClick={closeNavbarHandler}
              className={classes["header-list-link"]}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div
          onClick={changeBtnHandler}
          className={classes["header-icon-container"]}
        >
          {showNavbar ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Header;
