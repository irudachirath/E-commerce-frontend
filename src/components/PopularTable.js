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

function PopularTable({ data }) {
  return (
    <div>
      {data.length === 0 ? (
        <Typography variant="body1" align="center">
          No previous sales.
        </Typography>
      ) : (
        <TableContainer component={Paper} style={{ marginTop: '20px', width:"60%", margin:"0% 20%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Total Sales Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.Title}</TableCell>
                  <TableCell>{item.Total_sales}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default PopularTable;
 



// import React from 'react';

// function PopularTable({ data }) {
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
//             <th>Total Sales Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.Title}</td>
//               <td>{item.Total_sales}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       )}
//     </div>
    
//   );
// }

// export default PopularTable;
