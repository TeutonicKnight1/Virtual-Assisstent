import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";

const DisplayCheckboxes = () => {
  return (
    <>
      <div className="display_checkboxes" style={{ display: "flex", justifyContent: "space-between" }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "black" }} />}
            label="13"
          />
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "black" }} />}
            label="15"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "black" }} />}
            label="14"
          />
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "black" }} />}
            label="16"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "black" }} />}
            label="17"
          />
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "black" }} />}
            label="18"
          />
        </FormGroup>
      </div>
    </>
  );
};

export default DisplayCheckboxes;
