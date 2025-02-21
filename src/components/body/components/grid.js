import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Paper } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(6),
    margin: "auto",
    maxWidth: 3000,
  },
  image: {
    // width: 408,
    height: 428,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://cdn.shopify.com/s/files/1/0433/6474/5383/files/Insta-1.jpg?v=1598433227"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://cdn.shopify.com/s/files/1/0433/6474/5383/files/Insta-2.jpg?v=1598433238"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://cdn.shopify.com/s/files/1/0433/6474/5383/files/Insta-3.jpg?v=1598433247"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://cdn.shopify.com/s/files/1/0433/6474/5383/files/Insta-4.jpg?v=1598433256"
              />
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
