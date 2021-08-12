import classes from "./HeaderContent.module.scss";

const HeaderContent = function () {
  return (
    <div className={classes["header-content-container"]}>
      <div className={classes["header-content-info-container"]}>
        <h1 className={classes["header-content-title"]}>
          Your New Life Begins With a{" "}
          <span className={classes["header-content-title-red"]}>Jobstay</span>
        </h1>
        <p className={classes["header-content-paragraph"]}>
          Are you in one of the service providers in the following industries:
        </p>
        <ul className={classes["header-content-list"]}>
          <li>Immigration</li>
          <li>Finance</li>
          <li>Study Abroad</li>
          <li>Real Estate</li>
          <li>Employment</li>
        </ul>

        <p className={classes["header-content-paragraph"]}>
          Are you a stand to assist all the newcomers to get the life of their
          dreams?
        </p>
        <p className={classes["header-content-paragraph"]}>
          Jobstay may be the best option for you.
        </p>
        <p className={classes["header-content-paragraph"]}>
          Please contact us and let us explore a realm of possibilities
          together.
        </p>
        <a
          href="mailto:info@jobstay.co"
          className={classes["header-content-button"]}
        >
          Join Us
        </a>
      </div>
    </div>
  );
};

export default HeaderContent;
