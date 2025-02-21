import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../redux/Actions/actionsInput";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    // marginTop: theme.spacing(2),
  },
  formControl: {
    overflow: 'hidden',
    minWidth: 100, // Add minimum width
    margin: 0,
    // margin: theme.spacing(1),
    // Make the Select input background transparent and set text color
    "& .MuiSelect-root": {
      backgroundColor: "transparent",
      color: "#FFDE59",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#FFDE59",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "#FFDE59",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFDE59",
    },
  },
  menuItem: {
    color: "#FFDE59",
    // Optional: Change background on hover
    "&:hover": {
      backgroundColor: "rgba(255, 222, 89, 0.1)",
    },
  },
  // Customize the dropdown menu
  selectMenu: {
    marginTop: 40,
    marginRight: 17,
    backgroundColor: "#1a1a1a", // Add background color for dropdown
    "& .MuiPaper-root": {
      backgroundColor: "#1a1a1a",
    },
    "& .MuiList-root": {
      // marginTop: 10,
      // padding: 90, // Remove padding from list
    }
  },
}));

export default function ControlledOpenSelect() {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const data = useSelector((state) => state);

  useEffect(() => {
    setAge(data.language);
  }, [data.language]);

  const handleChange = (event) => {
    setAge(event.target.value);
    dispatch(setLanguage(event.target.value));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          // id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          MenuProps={{
            classes: { paper: classes.selectMenu },
            // Optional: Remove elevation to make it blend with the background
            elevation: 0,
          }}
        >
          <MenuItem className={classes.menuItem} value={"English"}>
            English
          </MenuItem>
          <MenuItem className={classes.menuItem} value={"Georgian"}>
            ქართული
          </MenuItem>
          <MenuItem className={classes.menuItem} value={"Russian"}>
            Russian
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}