import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { makeStyles } from "@mui/styles";

import { useSelector } from "react-redux";
import { getPictureData } from "../../../productsData/mainData";
const useStyles = makeStyles((theme) => ({
  dflex: {
    display: "flex",
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
    backgroundImage: `url("https://cdn.shopify.com/s/files/1/0436/2203/9703/files/slider_2_2000x_4331ab0a-dd4a-45ef-b4ae-23368e97f19f.jpg?v=1595842242")`,
    backgroundSize: "cover",

    alignItems: "center",
    fontFamily: "bold",
    fontSize: "40px",
    color: "#FFDE59",
    height: "1000px",
    // minWidth: "100%",
  },
}));

export default function BackgroundImg() {
  const language = useSelector((state) => state.language);
  const mainData = getPictureData(language);
  const mainDataArray = Object.values(mainData).flat();

  const classes = useStyles();
  return (
    <div className={classes.BcgImg}>
      <div className={classes.text}>
        <div>
          {mainDataArray.map(({ heading, body, id }) => (
            <div key={id}>
              <h1>{heading}</h1>
              <h2>{body}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
