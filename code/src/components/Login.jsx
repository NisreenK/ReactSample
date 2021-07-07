import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Login(props) {
  const paperStyle = {
    padding: 20,
    height: "70wh",
    width: 280,
    margin: "20px auto",
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid>
          <h2>Log In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter pasword"
          type="password"
          fullWidth
          required
        />
        <Button type="submit" color="primary" variant="contained" fullWidth>
          Sign in
        </Button>
      </Paper>
    </Grid>
  );
}

export default Login;
