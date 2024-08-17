import React, { useState } from "react";
import { Button, Grid, Select, MenuItem, InputLabel } from "@mui/material";

const SalesForm = () => {
  const [year, setYear] = useState("");
  const [quarter, setQuarter] = useState("");

  const quarters = ["1", "2", "3", "4"];
  const years = Array.from({ length: 11 }, (_, index) => 2020 + index);

  return (
    <div style={{ marginTop: "3%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputLabel>Year</InputLabel>
          <Select
            variant="outlined"
            fullWidth
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            {years.map((y) => (
              <MenuItem key={y} value={y}>
                {y}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel>Quarter</InputLabel>
          <Select
            variant="outlined"
            fullWidth
            value={quarter}
            onChange={(e) => setQuarter(e.target.value)}
          >
            {quarters.map((q) => (
              <MenuItem key={q} value={q}>
                {q}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <a href={`/sales/${year}/${quarter}`}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "6%" }}
          >
            Get Sales Data
          </Button>
        </a>
      </Grid>
    </div>
  );
};

export default SalesForm;
