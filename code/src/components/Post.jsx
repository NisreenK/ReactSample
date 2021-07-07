import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Comments from "./Comments.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(2)}px auto`,
    padding: theme.spacing(1, 2),
  },
}));

async function fetchCommentsJSON() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await response.json();
  return comments;
}

function Post(props) {
  const [LoadedComments, setLoadedComments] = useState([]);

  fetchCommentsJSON().then((data) => {
    const comments = [];
    for (const key in data) {
      const comment = {
        id: key,
        ...data[key],
      };
      if (comment.postId == props.id) comments.push(comment);
    }

    setLoadedComments(comments);
  });

  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <h4 style={{ marginBottom: "0px", padding: "0px" }}>{props.title}</h4>
      <p style={{ fontSize: 15 }}>{props.body}</p>
      <Comments comments={LoadedComments}></Comments>
    </Paper>
  );
}

export default Post;
