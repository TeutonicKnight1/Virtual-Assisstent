import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const VendorCheckboxes = () => {
  const handleChange = () => {
    console.log("changed");
  };

  return (
    <>
      <div
        className="vendor_checkboxes"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "black" }}
                onChange={handleChange}
                name="gilad"
                size="small"
              />
            }
            label="GIGABYTE"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "black" }}
                onChange={handleChange}
                name="jason"
                size="small"
              />
            }
            label="MSI"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "black" }}
                onChange={handleChange}
                name="antoine"
                size="small"
              />
            }
            label="ASUS"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "black" }}
                onChange={handleChange}
                name="gilad"
                size="small"
              />
            }
            label="Acer"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "black" }}
                onChange={handleChange}
                name="jason"
                size="small"
              />
            }
            label="Lenovo"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "black" }}
                onChange={handleChange}
                name="antoine"
                size="small"
              />
            }
            label="Dell"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "black" }}
                onChange={handleChange}
                name="gilad"
                size="small"
              />
            }
            label="HP"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "black" }}
                onChange={handleChange}
                name="jason"
                size="small"
              />
            }
            label="Dream Machines"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "black" }}
                onChange={handleChange}
                name="antoine"
                size="small"
              />
            }
            label="ASUS"
          />
        </FormGroup>
        {/* <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "black" }}
                onChange={handleChange}
                name="gilad"
                size="small"
              />
            }
            label="GIGABYTE"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "black" }}
                onChange={handleChange}
                name="jason"
                size="small"
              />
            }
            label="MSI"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "black" }}
                onChange={handleChange}
                name="antoine"
                size="small"
              />
            }
            label="ASUS"
          />
        </FormGroup> */}
      </div>
    </>
  );
};

export default VendorCheckboxes;
