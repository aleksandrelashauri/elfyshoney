import React from "react";
import { Grid } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./header/header";
import Footer from "./footer/footer";
import PropTypes from 'prop-types';

import Bla from "./body/body";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
  headerColor: {
    backgroundColor: 'red'
  }
}));

export default function Loyout(props) {
  const classes = useStyles();

  Loyout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} className={classes.headerColor}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        {props.children}
      </Grid>
      <Grid item xs={12}>
        <Bla />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
