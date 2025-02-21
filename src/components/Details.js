import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Paper, Typography, Box } from "@material-ui/core";
import { useParams } from "react-router-dom";
import {
  getProductsData,
  getNavData,
  getPictureData,
} from "../productsData/mainData";
import { useSelector } from "react-redux";
import ContactForm from "./body/mail/mail";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(9),
    paddingBottom: theme.spacing(4),
    margin: "auto",
    maxWidth: 1200,
    overflow: "hidden",
    borderRadius: 16,
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    backgroundColor: '#ffffff',
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
      borderRadius: 12,
    },
  },
  imageContainer: {
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      order: 1,
    },
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "contain",
    borderRadius: 12,
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
    },
    [theme.breakpoints.up("md")]: {
      height: 450,
    },
  },
  productContainer: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      order: 2,
    },
  },
  productInfo: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  },
  productTitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
    letterSpacing: '-0.5px',
  },
  productPrice: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    marginBottom: theme.spacing(3),
    fontSize: '1.5rem',
  },
  infoText: {
    marginBottom: theme.spacing(2),
    lineHeight: 1.6,
    color: theme.palette.text.secondary,
    fontSize: '1rem',
  },
  contactNumber: {
    display: 'inline-block',
    background: "#1c1e21",
    color: '#FFDE59',
    padding: theme.spacing(1, 2),
    borderRadius: 8,
    marginTop: theme.spacing(2),
    fontWeight: 500,
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  formContainer: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(3),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Details() {
  const classes = useStyles();
  const language = useSelector((state) => state.language);

  let mainData1 = getProductsData(language);
  const mainData = Object.values(mainData1).flat();

  const { id } = useParams();
  const product = mainData.find((element) => element.id === id);

  const navData = getNavData(language);
  const pictureData = getPictureData(language);

  if (!product) {
    return (
      <div className={classes.root}>
        <Typography variant="h5" align="center">
          Product not found
        </Typography>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={4}
        >
          <Grid item xs={12} md={6} className={classes.imageContainer}>
            <img src={product.img} alt={product.name} className={classes.image} />
          </Grid>
          <Grid item xs={12} md={6} className={classes.productContainer}>
            <Typography variant="h4" component="h1" className={classes.productTitle}>
              {product.name}
            </Typography>
            <Typography variant="h5" component="h2" className={classes.productPrice}>
              {product.price}
            </Typography>
            <Box className={classes.productInfo}>
              <Typography variant="body1" className={classes.infoText}>
                {product.description}
              </Typography>
              <Typography variant="body1" className={classes.infoText}>
                {navData.navInfo}
              </Typography>
              <Typography variant="body1" className={classes.infoText}>
                {pictureData.pictureInfo}
              </Typography>
              <Typography variant="body1" className={classes.contactNumber}>
                Call us: 597 79 16 96
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box className={classes.formContainer}>
          <ContactForm />
        </Box>
      </Paper>
    </div>
  );
}