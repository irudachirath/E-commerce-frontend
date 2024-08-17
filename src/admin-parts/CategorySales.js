import React, { useState, useEffect } from 'react';
import { Button, Grid, Select, MenuItem, InputLabel } from '@mui/material';

const CategorySalesForm = () => {
  const [year, setYear] = useState('');
  const [quarter, setQuarter] = useState('');
  const [category, setCategory] = useState(0);
  const [categories, setCategories] = useState([]);

  const quarters = ['1', '2', '3', '4'];
  const years = Array.from({ length: 11 }, (_, index) => 2020 + index);

  // Fetch category names from the API
  useEffect(() => {
    fetch('http://localhost:8000/main-categories/all')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

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
          <InputLabel>Category</InputLabel>
          <Select
            variant="outlined"
            fullWidth
            value={category}
            onChange={(e) => {
                setCategory(e.target.value)
            }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.Category_id} value={cat.Category_id}>
                {cat.Name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <a href={`http://localhost:3000/sales/${year}/${quarter}/c/${category}`}>
            <Button variant="contained" color="primary" style={{marginTop:"6%"}}>
            Get Sales Data
            </Button>
        </a>
      </Grid>
    </div>
  );
};

export default CategorySalesForm;
