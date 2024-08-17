import React, { useState } from 'react';
import { Button, Grid, Select, MenuItem, InputLabel, TextField } from '@mui/material';

const MostSalesForm = () => {
  const [year, setYear] = useState('');
  const [quarter, setQuarter] = useState('');
  const [number, setNumber] = useState('');

  const quarters = ['1', '2', '3', '4'];
  const years = Array.from({ length: 11 }, (_, index) => 2020 + index);

  return (
    <div style={{marginTop:"3%"}}>
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
        <Grid item xs={12} sm={6}>
          <TextField
            label="Number of Sales"
            variant="outlined"
            fullWidth
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <a href={`http://localhost:3000/sales/${year}/${quarter}/n/${number}`}>
            <Button variant="contained" color="primary" style={{marginTop:"6%"}}>
            Get Sales Data
            </Button>
        </a>
      </Grid>
    </div>
  );
};

export default MostSalesForm;
