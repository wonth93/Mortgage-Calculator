import React from "react";
import { Slider, Typography, Stack } from "@mui/material";

const SliderComponent = ({defaultValue, min, max, label, unit, onChange, amount, value, steps}) => {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography variant="subtitle1">{/* {label} */} Something somthing value</Typography>
        <Typography variant="h5">{/* {unit} {amount} */}$ x,xxx.yy</Typography>
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
        <Typography variant="caption">{/* {unit} {min} */}$ x,xxx.yy</Typography>
        <Typography variant="caption">{/* {unit} {max} */}$ x,xxx.yy</Typography>
      </Stack>
    </Stack>
  )
}

export default SliderComponent;
