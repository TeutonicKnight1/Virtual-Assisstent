import { FormLabel, Slider, Stack, Paper } from "@mui/material";

import { useState } from "react";

const PriceSlider = () => {
  const [minMaxPrice, setValue] = useState([0, 200000]);
  const [value, setValueState] = useState(minMaxPrice);
  const handleChange = (event, newValue) => {
    setValueState(newValue);
  };

  return (
    <>
      <Paper
        className="price_slider"
        elevation={1}
        sx={{ border: "2px dashed #7EAED9" }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ width: "60px", textAlign: "start" }}
          >
            Цена:
          </FormLabel>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            valueLabelDisplay="auto"
            onChange={handleChange}
            min={minMaxPrice[0]}
            max={minMaxPrice[1]}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          justifyContent={"space-between"}
          marginLeft={"50px"}
        >
          <FormLabel id="demo-radio-buttons-group-label">
            От: {value[0]}
          </FormLabel>
          <FormLabel id="demo-radio-buttons-group-label">
            До: {value[1]}
          </FormLabel>
        </Stack>
      </Paper>
    </>
  );
};

export default PriceSlider;
