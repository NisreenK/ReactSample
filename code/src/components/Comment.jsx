import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 350,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(0.5, 1),
  },
}));

function Comment(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <h6 style={{ margin: "5px auto" }}>{props.name}</h6>
      <p style={{ fontSize: 12, margin: "5px auto" }}>{props.body}</p>
    </Paper>
  );
}

export default Comment;
