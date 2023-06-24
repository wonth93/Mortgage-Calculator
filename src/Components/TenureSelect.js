import React from "react";
import { MenuItem, FormControl, Select, Tooltip, Typography, Stack } from "@mui/material";
import { Info } from "@mui/icons-material";

const TenureSelect = ({ data, setData }) => {
  
  const handleChange = (event) => {
    setData({
      ...data,
      loanTerm: event.target.value,
    });
  }
  const message = "The amortization period is the time it takes to pay off a mortgagein full, including interest. The amortization period may be up to 25 years if the mortage is default insured, and up to 30 years if it's not. For a new mortgage, the amortization period is usually 25 years.";

  return (
    <FormControl fullWidth>
      <Stack direction='row' spacing={1}>
        <Typography variant="subtitle1">Amortization Period</Typography>
        <Tooltip title={message}><Info /></Tooltip>
      </Stack>
      <Select value={data.loanTerm} onChange={handleChange}>
        <MenuItem value={5}>5 Years</MenuItem>
        <MenuItem value={10}>10 Years</MenuItem>
        <MenuItem value={15}>15 Years</MenuItem>
        <MenuItem value={20}>20 Years</MenuItem>
        <MenuItem value={25}>25 Years</MenuItem>
        <MenuItem value={30}>30 Years</MenuItem>
      </Select>
    </FormControl>
  );
}

export default TenureSelect;
