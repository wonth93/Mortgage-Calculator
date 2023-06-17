import React from "react";
import { Slider, Typography, Stack } from "@mui/material";

const SliderComponent = ({defaultValue, min, max, label, unit, onChange, amount, value, steps, formattedAmount, formattedMax, percent}) => {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography variant="subtitle1">{label}</Typography>
        <Typography variant="h5">{unit} {formattedAmount} {percent}</Typography>
      </Stack>
      <Slider 
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={steps}
        value={value}
        onChange={onChange}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption">{unit} {min.toLocaleString("en-US")} {percent}</Typography>
        <Typography variant="caption">{unit} {formattedMax} {percent}</Typography>
      </Stack>
    </Stack>
  )
}

export default SliderComponent;
