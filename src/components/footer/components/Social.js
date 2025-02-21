import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import { makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Mail from "@material-ui/icons/Mail";
// import { Mail } from "@mui/icons-material";

import { useSelector } from "react-redux";
import { getSocialData } from "../../../productsData/mainData";

const useStyles = makeStyles((theme) => ({
  bstflexible: {
    display: "flex",
    justifyContent: "space-around",
    background: "#1266F1",
    color: "white",
    alignItems: "center",
    backgroundColor: "#1c1e21",

  },
  padd: {
    padding: "1.5rem",
    fontSize: "22px",
  },
}));

export default function Social() {
  const language = useSelector((state) => state.language);
  const mainData = getSocialData(language);
  const mainDataArray = Object.values(mainData).flat();

  const classes = useStyles();
  return (
    <Grid container className={classes.bstflexible}>
      <Box className={classes.padd}>
        {mainDataArray.map(({ heading, id }) => (
          <Box key={id}>
            <Typography>{heading}</Typography>
          </Box>
        ))}
      </Box>
      <Box className={classes.padd}>
        <IconButton
          href={"https://www.facebook.com/Elfyshoney"}
          target="_blank"
        >
          <FacebookIcon style={{ color: "rgb(255, 222, 89)", fontSize: "30px" }} />
        </IconButton>
        <IconButton href={"/contact"} target="_blank">
          <Mail style={{ color: "rgb(255, 222, 89)", fontSize: "30px" }} />
        </IconButton>
      </Box>
    </Grid>
  );
}
