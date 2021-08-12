import classes from "./Service.module.scss";

const Service = function () {
  return (
    <div className={classes["service-container"]} id="service">
      <div className={classes["service-title-container"]}>
        <span className={classes["service-subtitle"]}>
          A Grand Service Group That Satisfies All Your Settlement Needs
        </span>
        <h1 className={classes["service-title"]}>Our Professional Services</h1>
        <p className={classes["service-description"]}>
          Our up-to-date, fast, and reliable customer service solution system
          will streamline your settlement process.
        </p>
      </div>

      <div className={classes["service-details-container"]}>
        <div className={classes["service-detail"]}>
          <span className={classes["service-detail-number"]}>01</span>
          <span className={classes["service-detail-title"]}>
            Professional Services
          </span>
          <p className={classes["service-detail-info"]}>
            Receive the best settlement services from our reputable providers
          </p>
        </div>
        <div className={classes["service-detail"]}>
          <span className={classes["service-detail-number"]}>02</span>
          <span className={classes["service-detail-title"]}>
            Customer Services
          </span>
          <p className={classes["service-detail-info"]}>
            Our customer service team is ready to assist you 24/7
          </p>
        </div>
        <div className={classes["service-detail"]}>
          <span className={classes["service-detail-number"]}>03</span>
          <span className={classes["service-detail-title"]}>
            Newest Technology
          </span>
          <p className={classes["service-detail-info"]}>
            We maintain our service standard with the most up-to-date technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
