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

function SalesTable({ data }) {
  return (
    <div>
      {data.length === 0 ? (
        <Typography variant="body1" align="center">
          No previous sales.
        </Typography>
      ) : (
        <TableContainer component={Paper} style={{ marginTop: '20px', margin:"0% 10%", width:"80%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Total Quantity</TableCell>
                <TableCell>Total Sales Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.Title}</TableCell>
                  <TableCell>{item.Sales}</TableCell>
                  <TableCell>{item.Total_income}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default SalesTable;



// import React from 'react';

// function SalesTable({ data }) {
//   return (
//     <div>
//         <h2>Your Cart</h2>
//       {data.length === 0 ? (
//         <p>No previous sales.</p>
//       ) :(
//         <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Total Quantity</th>
//             <th>Total Sales Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.Title}</td>
//               <td>{item.Sales}</td>
//               <td>{item.Total_income}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       )}
//     </div>
    
//   );
// }

// export default SalesTable;
