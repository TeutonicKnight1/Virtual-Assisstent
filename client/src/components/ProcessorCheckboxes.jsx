import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const ProcessorCheckboxes = () => {
  return (
    <>
      <div className="processor_checkboxes" style={{ display: "flex", justifyContent: "space-between" }}>
        <FormGroup>
          <FormControlLabel
            
            control={<Checkbox size="small" sx={{ color: "black" }} />}
            label="Core i3"
          />
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "black" }} />}
            label="Core i5"
          />
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "black" }}  />}
            label="Core i7"
          />
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "black" }}  />}
            label="Core i9"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "black" }} />}
            label="Ryzen 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "black" }} />}
            label="Ryzen 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "black" }} />}
            label="Ryzen 7"
          />
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "black" }} />}
            label="Ryzen 9"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel control={<Checkbox size="small" sx={{ color: "black" }} />} label="M1" />
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "black" }} />}
            label="U-Series"
          />
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "black" }} />}
            label="N-Series"
          />
        </FormGroup>
      </div>
    </>
  );
};

export default ProcessorCheckboxes;
