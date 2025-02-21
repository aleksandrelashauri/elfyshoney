import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import BackgroundImg from "../../header/components/BcgImg";

const useStyles = makeStyles((theme) => ({
  dflex1: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  BcgImg2: {
    display: "flex",
    backgroundImage: `url("https://cdn.shopify.com/s/files/1/0433/6474/5383/files/Insta-1.jpg?v=1598433227")`,
    backgroundSize: "cover",
    height: "400px",
    // minWidth: "400px",
  },
  BcgImg3: {
    display: "flex",
    backgroundImage: `url("https://cdn.shopify.com/s/files/1/0433/6474/5383/files/Insta-2.jpg?v=1598433238")`,
    backgroundSize: "cover",
    height: "400px",
    // minWidth: "400px",
  },
  BcgImg4: {
    display: "flex",
    backgroundImage: `url("https://cdn.shopify.com/s/files/1/0433/6474/5383/files/Insta-3.jpg?v=1598433247")`,
    backgroundSize: "cover",
    height: "400px",
    // minWidth: "400px",
  },
  BcgImg5: {
    display: "flex",
    backgroundImage: `url("https://cdn.shopify.com/s/files/1/0433/6474/5383/files/Insta-4.jpg?v=1598433256")`,
    backgroundSize: "cover",
    height: "400px",
    // minWidth: "400px",
  },
}));

export default function BackgroundImg1() {
  const classes = useStyles();
  return (
    <div className={classes.dflex1}>
      {/* <BackgroundImg/> */}
      <div className={classes.BcgImg2}></div>
      <div className={classes.BcgImg3}></div>
      <div className={classes.BcgImg4}></div>
      <div className={classes.BcgImg5}></div>
    </div>
  );
}
