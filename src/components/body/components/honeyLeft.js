import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import MediaCard from "./card";
import ComplexGrid from "./grid";

const useStyles = makeStyles((theme) => ({
  dflex: {
    display: "flex",
    flexDirection: "row",
  },
  dflex1: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px",
  },
  BcgImg: {
    display: "flex",
    backgroundImage: `url("https://cdn.shopify.com/s/files/1/0436/2203/9703/products/p15.jpg?v=1599645173")`,
    backgroundSize: "cover",

    alignItems: "center",
    fontFamily: "bold",
    fontSize: "40px",
    color: "#FFDE59",
    height: "1000px",
    minWidth: "100%",
  },
  BcgImg1: {
    display: "flex",
    backgroundImage: `url("https://cdn.shopify.com/s/files/1/0436/2203/9703/products/p6.jpg?v=1597404089")`,
    backgroundSize: "cover",

    alignItems: "center",
    fontFamily: "bold",
    fontSize: "40px",
    color: "#FFDE59",
    height: "1000px",
    minWidth: "100%",
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

export default function BackgroundImg() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.dflex}>
        <div className={classes.BcgImg}>
          <div className={classes.text}></div>
        </div>
        <div className={classes.BcgImg1}></div>
      </div>
      <div className={classes.dflex1}>
        <div className={classes.BcgImg2}></div>
        <div className={classes.BcgImg3}></div>
        <div className={classes.BcgImg4}></div>
        <div className={classes.BcgImg5}></div>
      </div>
      {/* <BackgroundImg/> */}
      {/* <MediaCard  /> */}
      <ComplexGrid />
    </div>
  );
}
