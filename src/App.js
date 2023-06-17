import React, { useState } from "react";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";
import Container from "@mui/system/Container";
import { Grid, ThemeProvider, CssBaseline, createTheme } from "@mui/material";

function App({ dark }) {

  let mode = 'dark';
  if (dark === false) {
    mode = 'light';
  }

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [data, setData] = useState({
    homeValue: 300000,
    downPayment: 300000 * 0.2,
    loanAmount: 300000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{marginTop:4}}>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md ={6}>
              <SliderSelect data={data} setData={setData} />
              <TenureSelect data={data} setData={setData} />
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
