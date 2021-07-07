import React from "react";
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
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import LoginContext from "../contexts/LoginContext.jsx";

function LoginPage(props) {
  const ctx = useContext(LoginContext);

  const paperStyle = {
    padding: 20,
    height: "70wh",
    width: 200,
    margin: "20px auto",
  };
  function submitHandler(event) {
    event.preventDefault();
  }

  const btnStyle = { margin: "20px 0" };
  return (
    <>
      <CssBaseline />
      <form onSubmit>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <h3 align="center">Sign In</h3>
            </Grid>
            <TextField
              size="small"
              label="Username"
              placeholder="Enter username"
              fullWidth
              required
              onChange={(event) => {
                ctx.setUid(event.target.value);
              }}
            />
            <TextField
              size="small"
              label="Password"
              placeholder="Enter pasword"
              type="password"
              fullWidth
              required
            />

            <Link to="/posts">
              <Button
                size="small"
                type="submit"
                color="primary"
                variant="contained"
                style={btnStyle}
                fullWidth
              >
                Sign In
              </Button>
            </Link>
          </Paper>
        </Grid>
      </form>
    </>
  );
}

export default LoginPage;
