import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../actions/habitActions";
import { NONE } from "../constants/habitStatus";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
    width: "600px",
  },
  title: {
    fontSize: "2rem",
  },
  container: {
    padding: "20px",
  },
});

const AddHabits = () => {
  const dispatch = useDispatch();

  // hooks to set title and details of habit
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  // error states
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // set error state to false of text fields
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      const habit = {
        title,
        description: details,
        consistency: [
          {
            day: 1,
            status: NONE,
          },
          {
            day: 2,
            status: NONE,
          },
          {
            day: 3,
            status: NONE,
          },
          {
            day: 4,
            status: NONE,
          },
          {
            day: 5,
            status: NONE,
          },
          {
            day: 6,
            status: NONE,
          },
          {
            day: 7,
            status: NONE,
          },
        ],
      };
      dispatch(addHabit(habit));
      navigate("/");
    }
  };
  const classes = useStyles();
  return (
    <Container size="sm" className={classes.container}>
      <Typography
        variant="h6"
        color="textPrimary"
        gutterBottom
        className={classes.title}
      >
        {" "}
        Create a new Habit
      </Typography>
      <form onSubmit={handleSubmit} autoComplete="off" noValidate>
        <TextField
          className={classes.field}
          variant="outlined"
          label="Habit Title"
          color="primary"
          required
          error={titleError}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          className={classes.field}
          variant="outlined"
          label="Habit Description"
          color="primary"
          fullWidth
          rows={3}
          required
          error={detailsError}
          onChange={(event) => setDetails(event.target.value)}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRight />}
        >
          Submit Habbit
        </Button>
      </form>
    </Container>
  );
};

export default AddHabits;
