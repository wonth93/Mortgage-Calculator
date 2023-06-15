import React from "react";
import { AppBar,Toolbar, Typography } from "@mui/material";
import Container from "@mui/system/Container";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h4">
            Creating a mortgage Calculator!
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;