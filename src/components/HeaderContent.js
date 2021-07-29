import classes from "./HeaderContent.module.scss";

const HeaderContent = function () {
  return (
    <div className={classes["header-content-container"]}>
      <div className={classes["header-content-info-container"]}>
        <span className={classes["header-content-title"]}>
          <span className={classes["header-content-title-red"]}>Creative</span>{" "}
          Consulting Agency For{" "}
          <span className={classes["header-content-title-red"]}>Smart</span>{" "}
          Solutions
        </span>
        <p className={classes["header-content-paragraph"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className={classes["header-content-button"]}>Contact Us</button>
      </div>
    </div>
  );
};

export default HeaderContent;
