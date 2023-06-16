import * as React from "react";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";
// import  theme  from "./theme.js"
import Container from "@mui/system/Container";
import { Grid, ThemeProvider, CssBaseline, createTheme } from "@mui/material";

function App(dark) {

  let mode = 'dark';
  if (dark.dark == false) {
    mode = 'light';
  }

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{marginTop:4}}>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md ={6}>
              <SliderSelect />
              <TenureSelect />
            </Grid>
            <Grid item xs={12} md ={6}>
              <Result />
            </Grid>
          </Grid>
        </Container>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
