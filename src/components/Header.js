import classes from "./Header.module.scss";
import logo from "../local-img/logo.png";

const Header = function () {
  return (
    <div className={classes["header-container"]}>
      <img src={logo} alt="logo" className={classes["header-logo"]} />
      <ul className={classes["header-list"]}>
        <li>
          <a href="#" className={classes["header-list-link"]}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={classes["header-list-link"]}>
            Service
          </a>
        </li>
        <li>
          <a href="#" className={classes["header-list-link"]}>
            About
          </a>
        </li>
        <li>
          <a href="#" className={classes["header-list-link"]}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
