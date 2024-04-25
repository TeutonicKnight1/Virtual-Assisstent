import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Typography from "@mui/material/Typography";
import VendorCheckboxes from "./VendorCheckboxes";
import ProcessorCheckboxes from "./ProcessorCheckboxes";
import DisplayCheckboxes from "./DisplayCheckboxes";
//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const AdvancedConditions = () => {
  return (
    <>
      <div className="advanced_conditions">
        <Accordion
          square
          defaultExpanded
          disableGutters
          sx={{ border: "2px dashed #7EAED9", borderTop: "none" }}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Производитель</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <VendorCheckboxes />
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          disableGutters
          defaultExpanded
          sx={{ border: "2px dashed #7EAED9", borderTop: "none"  }}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Процессор</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ProcessorCheckboxes />
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          disableGutters
          defaultExpanded
          sx={{ border: "2px dashed #7EAED9", borderTop: "none" }}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography>Размер экрана</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DisplayCheckboxes />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default AdvancedConditions;
