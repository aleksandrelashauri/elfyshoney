import React, { useState, useEffect } from "react";
// import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
} from "@material-ui/core";
// import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(10),

  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    backgroundColor: "#FFD700",
    color: "black",
    "&:hover": {
      backgroundColor: "#FFC107",
    },
  },
}));
const ContactForm = () => {
  const classes = useStyles();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using EmailJS
    window.emailjs
      .send(
        "service_fre03y9", // Replace with your EmailJS service ID
        "template_16b7x1b", // Replace with your EmailJS template ID
        formData,
        "dAR-kdiTyVuzehHSe" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Failed to send email. Please try again.", error);
        alert("Failed to send email. Please try again.");
      });
  };


  useEffect(() => {
    window.emailjs.init("iM9g2J4x_uoPANV_j"); // Initialize EmailJS with your user ID
  }, []);
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper className={classes.formContainer}>
          <Typography variant="h5" component="h2" align="center" gutterBottom>
            Contact
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box mb={2}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Mobile"
                name="phone"
                fullWidth
                value={formData.phone}
                onChange={handleChange}

              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Email"
                type="email"
                name="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}

              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Message"
                name="message"
                fullWidth
                multiline
                minRows={4}
                value={formData.message}
                onChange={handleChange}

              />
            </Box>
            <Box textAlign="center">
              <Button
                className={classes.button}
                variant="contained"
                type="submit"
              >
                Send Message
              </Button>
            </Box>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
