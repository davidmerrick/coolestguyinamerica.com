import React, { Component } from "react";
import "./App.css";
import { Typography, AppBar, Toolbar, Grid } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" color="inherit">
              Coolest Guy in America: David Merrick
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs="12">
            <Typography variant="h4" color="inherit">
              David Merrick is the coolest guy in America
            </Typography>
            <div>
              But David, how do you know you're the coolest guy in America?
              <br />
              It's simple. Because Google says so. And Google is never wrong!
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
