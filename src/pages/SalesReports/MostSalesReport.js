import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PopularTable from '../../components/PopularTable';
import { Typography } from '@mui/material';

function MostSalesReportPage() {
  const { year, quarter, number } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an API request to http://localhost:8000/sales/:year/:quarter and fetch data
    // Replace this with your actual API call
    fetch(`http://localhost:8000/sales/${year}/${quarter}/n/${number}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data[0]);
        console.log(data[0]);
        });
  }, [year, quarter, number]);

  return (
    <div>
      <Typography variant='h3' textAlign="center">Sales Report of Most {number} Sales for Q{quarter} {year}</Typography>
      <PopularTable data={data} />
    </div>
  );
}

export default MostSalesReportPage;
