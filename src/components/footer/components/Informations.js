import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { makeStyles } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
// import WatchLaterIcon from "@material-ui/icons/WatchLater";
import MapIcon from "@material-ui/icons/Map";
import {
  //  Link,
  NavLink
} from "react-router-dom";

import { useSelector } from "react-redux";
import {
  getFooterAbout,
  getFooterProducts,
} from "../../../productsData/mainData";
const useStyles = makeStyles((theme) => ({
  bstflexible1: {
    display: "flex",
    background: "#2E2E2E",
    padding: "34px",
    color: "#F8FFFF",
  },
  shorten: {
    maxWidth: "163px",
  },
  padi: { wordSpacing: "2px", lineHeight: 3 },
  bstflexible: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  padd: {
    display: "flex",
    flexDirection: "column",
  },
  under: {
    borderBottom: "1px solid #105CD8",
    paddingBottom: "10px",
    cursor: "pointer",
  },
}));

export default function Informations() {
  const language = useSelector((state) => state.language);

  const mainDataAbout = getFooterAbout(language);
  const mainData = getFooterProducts(language);

  const mainDataArray = Object.values(mainDataAbout).flat();
  const mainDataArray1 = Object.values(mainData).flat();

  const classes = useStyles();
  return (
    <Grid container className={classes.bstflexible1}>
      <Grid container className={classes.bstflexible}>
        <Box className={classes.padd}>
          <h3 className={classes.under}>About me</h3>
          {mainDataArray.map(({ heading, id }) => (
            <Box key={id} className={classes.shorten}>
              <Typography className={classes.padi}>{heading}</Typography>
            </Box>
          ))}{" "}
        </Box>
        <Box className={classes.padd}>
          <h3 className={classes.under}>Products</h3>
          {mainDataArray1.map(({ name, id }) => (
            <Box key={id}>
              <p>
                {" "}
                <NavLink
                  to={id}
                  style={{ color: "white", textDecoretaion: "none" }}
                >
                  {name}
                </NavLink>
              </p>
            </Box>
          ))}{" "}
        </Box>
        <Box className={classes.padd}>
          <h3 className={classes.under}>Contacts</h3>
          <p>
            <MapIcon style={{ fontSize: "20px", paddingRight: "10px" }} />
            Tbilisi, Georgia
          </p>
          <p>
            <PhoneAndroidIcon
              style={{ fontSize: "20px", paddingRight: "10px" }}
            />
            598 16 99 11
          </p>
          <p>
            <MailIcon style={{ fontSize: "20px", paddingRight: "10px" }} />
            elfyshoney@gmail.com
          </p>
          <p></p>
        </Box>
      </Grid>
    </Grid>
  );
}
