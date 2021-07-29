import classes from "./Clients.module.scss";
import amazon from "../local-img/amazon.png";
import microsoft from "../local-img/microsoft.png";
import google from "../local-img/google.png";
import netflix from "../local-img/netflix.png";
import spotify from "../local-img/spotify.png";
import yahoo from "../local-img/yahoo.png";

const Clients = function () {
  return (
    <div className={classes["clients-container"]}>
      <div className={classes["clients-img-container"]}>
        <img src={google} alt="logo" className={classes["clients-img"]} />
      </div>
      <div className={classes["clients-img-container"]}>
        <img src={amazon} alt="logo" className={classes["clients-img"]} />
      </div>
      <div className={classes["clients-img-container"]}>
        <img src={microsoft} alt="logo" className={classes["clients-img"]} />
      </div>
      <div className={classes["clients-img-container"]}>
        <img src={netflix} alt="logo" className={classes["clients-img"]} />
      </div>
      <div className={classes["clients-img-container"]}>
        <img src={spotify} alt="logo" className={classes["clients-img"]} />
      </div>
      <div className={classes["clients-img-container"]}>
        <img src={yahoo} alt="logo" className={classes["clients-img"]} />
      </div>
    </div>
  );
};

export default Clients;
