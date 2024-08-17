import React from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

function PopularTimeTable({ data }) {
  return (
    <div>
      {data.length === 0 ? (
        <Typography variant="body1" align="center">
          No previous sales.
        </Typography>
      ) : (
        <TableContainer component={Paper} style={{ marginTop: '20px', margin:"0% 20%", width:"60%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Year</TableCell>
                <TableCell>Month</TableCell>
                <TableCell>Total Orders Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.OrderYear}</TableCell>
                  <TableCell>{item.OrderMonth}</TableCell>
                  <TableCell>{item.Total_orders}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default PopularTimeTable;



// import React from 'react';

// function PopularTimeTable({ data }) {
//   return (
//     <div>
//         <h2>Your Cart</h2>
//       {data.length === 0 ? (
//         <p>No previous sales.</p>
//       ) :(
//         <table>
//         <thead>
//           <tr>
//             <th>Year</th>
//             <th>Month</th>
//             <th>Total Orders Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.OrderYear}</td>
//               <td>{item.OrderMonth}</td>
//               <td>{item.Total_orders}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       )}
//     </div>
    
//   );
// }

// export default PopularTimeTable;
