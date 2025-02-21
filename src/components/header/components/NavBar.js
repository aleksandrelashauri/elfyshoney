import React from "react";
// import { makeStyles } from "@mui/styles";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ControlledOpenSelect from "./SelectFlag";
import { Link, NavLink } from "react-router-dom";

import logo from "../../../assets/12-31.jpg";
import elf from "../../../assets/elf.png";
// import elf2 from "../../../assets/51.png";

import { useSelector } from "react-redux";
import { getNavData } from "../../../productsData/mainData";

const useStyles = makeStyles((theme) => ({
  "@keyframes myEffect": {
    "0%": {
      transform: "translateX(-200%)",
      backgroundImage: `url(${elf})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      opacity: 0.4,
    },
    "30%": {
      transform: "translate(-100%, 100%)",
      backgroundImage: `url(${elf})`,
      width: "30px",
      height: "30px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      opacity: 1,
    },
    "75%": {
      transform: "translateX(-210%)",
      opacity: 0.1,
      backgroundImage: `url(${elf})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      backgroundRepeat: "no-repeat",
    },
    "100%": {
      backgroundImage: `url(${elf})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      transform: "translateX(-200%)",
      opacity: 0.4,
    },
  },
  anim: {
    animation: `$myEffect 3000ms infinite`,
  },
  animatedItem: {
    flexGrow: 1,
    display: "flex",
  },
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
    zIndex: 999,
    backgroundColor: "gray !important",
    // opacity: '0.9'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    backgroundImage: "../logo/12-31.jpg",
  },
  bTn: {
    border: "2px solid white",
    borderRadius: "20px",
  },
  bTnN: {
    color: "Black",
    fontWeight: "bold",
    fontSize: "17px",
  },
  flexible: {
    display: "flex",
    flexWrap: "wrap",
  },
  ghost: {
    // backgroundColor: "#1c1e21 important",
    fontWeight: "bold",
    color: "black",
    backgroundColor: "#000000de !important",
    opacity: "0.8"
  },
  image: {
    maxWidth: "130px",
    borderRadius: "19px",
  },
}));

export default function ButtonAppBar() {
  const language = useSelector((state) => state.language);
  const mainData = getNavData(language);
  const mainDataArray = Object.values(mainData).flat();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.ghost}>
        <Toolbar className={classes.flexible}>
          <Typography variant="h6" className={classes.animatedItem}>
            <Link to="/">
              {" "}
              <img src={logo} alt="surati" className={`${classes.image} header-logo`} />{" "}
            </Link>
            <Typography className={classes.anim} />
          </Typography>
          <ControlledOpenSelect />
          {mainDataArray.map(({ id, home, contact }) => {
            return (
              <Typography item xs={12} sm={12} md={6} lg={4} key={id}>
                <Button>
                  {" "}
                  <NavLink
                    to="/"
                    style={{ color: "#FFDE59", textDecoration: "none" }}
                  >
                    {home}
                  </NavLink>{" "}
                </Button>
                <Button color="inherit">
                  {" "}
                  <Link
                    to="/contact"
                    style={{ color: "#FFDE59", textDecoration: "none" }}
                  >
                    {contact}
                  </Link>{" "}
                </Button>
              </Typography>
            );
          })}
        </Toolbar>
      </AppBar>
    </div>
  );
}
