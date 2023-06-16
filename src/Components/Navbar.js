import * as React from "react";
import { AppBar,Toolbar, Typography, FormGroup, FormControlLabel, Switch, Grid } from "@mui/material";
import App from "../App";

const Navbar = () => {
  const [dark, setDark] = React.useState(true);
  const changeDark = (event) => {
    setDark(event.target.checked);
  }
  return (
    <div>
      <AppBar position="static" color="transparent">
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Toolbar>
            <Typography variant="h4">
              Creating a mortgage Calculator!
            </Typography>
          </Toolbar>
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={dark} onChange={changeDark} />}
              label={dark ? 'Dark Mode' : 'Light Mode'}
            />
          </FormGroup>
        </Grid>
      </AppBar>
      <App dark={dark} />
    </div>
  );
}

export default Navbar;