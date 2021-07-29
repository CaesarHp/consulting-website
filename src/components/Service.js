import classes from "./Service.module.scss";

const Service = function () {
  return (
    <div className={classes["service-container"]} id="service">
      <div className={classes["service-title-container"]}>
        <span className={classes["service-subtitle"]}>
          - Consulting Agency with Perfect Experience -
        </span>
        <span className={classes["service-title"]}>
          Our Professional Services
        </span>
        <p className={classes["service-description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
          lorem sed risus ultricies.
        </p>
      </div>

      <div className={classes["service-details-container"]}>
        <div className={classes["service-detail"]}>
          <span className={classes["service-detail-number"]}>01</span>
          <span className={classes["service-detail-title"]}>
            Professional Consulting
          </span>
          <p className={classes["service-detail-info"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum lorem sed risus ultricies.
          </p>
        </div>
        <div className={classes["service-detail"]}>
          <span className={classes["service-detail-number"]}>02</span>
          <span className={classes["service-detail-title"]}>
            Online Requtation
          </span>
          <p className={classes["service-detail-info"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum lorem sed risus ultricies.
          </p>
        </div>
        <div className={classes["service-detail"]}>
          <span className={classes["service-detail-number"]}>03</span>
          <span className={classes["service-detail-title"]}>
            Market Research
          </span>
          <p className={classes["service-detail-info"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum lorem sed risus ultricies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
