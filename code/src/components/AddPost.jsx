import React from "react";
import { useRef, useState, useContext } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  AppBar,
  CssBaseline,
  Grid,
  Container,
} from "@material-ui/core";

import LoginContext from "../contexts/LoginContext.jsx";

const paperStyle = {
  padding: 15,

  width: 400,
  margin: "30px auto",
};

function AddPost() {
  const ctx = useContext(LoginContext);

  const titleInputRef = useRef();
  const bodyInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredBody = bodyInputRef.current.value;
    console.log(enteredTitle);
    console.log(enteredBody);

    const newpost = {
      userId: ctx.uid,

      id: ctx.numpsts + 101,

      title: enteredTitle,
      body: enteredBody,
    };

    ctx.addpost(newpost);
  }

  return (
    <>
      <CssBaseline />
      <form onSubmit={submitHandler}>
        <Paper style={paperStyle} size="small">
          <label>Add a post...</label>

          <TextField
            style={{ margin: "15px auto" }}
            size="small"
            id="outlined-basic"
            label="Title"
            variant="outlined"
            fullWidth
            inputRef={titleInputRef}
            required
          />
          <TextField
            fullWidth
            siz="small"
            id="outlined-textarea"
            label="Body"
            multiline
            rows={3}
            variant="outlined"
            inputRef={bodyInputRef}
            required
          />

          <Button
            gutterRight
            type="submit"
            variant="contained"
            size="small"
            style={{ marginTop: "10px" }}
          >
            Post
          </Button>
        </Paper>
      </form>
    </>
  );
}

export default AddPost;
