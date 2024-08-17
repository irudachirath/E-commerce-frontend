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

function OrderTable({ data }) {
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
                <TableCell>Date/Time</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Total Quantity</TableCell>
                <TableCell>Unit Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.Date}</TableCell>
                  <TableCell>{item.Title}</TableCell>
                  <TableCell>{item.Quantity}</TableCell>
                  <TableCell>{item.Unit_price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default OrderTable;



// import React from 'react';

// function OrderTable({ data }) {
//   return (
//     <div>
//         <h2>Your Cart</h2>
//       {data.length === 0 ? (
//         <p>No previous sales.</p>
//       ) :(
//         <table>
//         <thead>
//           <tr>
//             <th>Date/Time</th>
//             <th>Title</th>
//             <th>Total Quantity</th>
//             <th>Unit Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.Date}</td>
//               <td>{item.Title}</td>
//               <td>{item.Quantity}</td>
//               <td>{item.Unit_price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       )}
//     </div>
    
//   );
// }

// export default OrderTable;
