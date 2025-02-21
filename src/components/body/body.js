import React from "react";
// import MediaCard from "./components/card";
import ComplexGrid from "./components/grid";
// import BackgroundImg from "./components/honeyLeft";
// import BackgroundImg1 from "./components/honeyslide";
import CardInfo from "./components/cardInfo";
// import BackgroundImg from "../header/components/BcgImg";
import {
  //  Box,
  Grid
} from "@material-ui/core";
// import BackgroundImg from './components/BcgImg'

export default function Bla() {
  return (
    <Grid container>
      <Grid item xs={12}>
        {" "}
        <CardInfo />
      </Grid>
      <Grid item xs={12}>
        {" "}
        <ComplexGrid />
      </Grid>
    </Grid>
  );
}
