import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { DocumentDownload } from "iconsax-react";
import { Link, MemoryRouter } from "react-router-dom";
// import Paper from "@mui/material/Paper";

function createData(
  name: string,
  profileImgURL: string,
  date: string,
  amount: number,
  currency: string,
  status: string
) {
  return { name, profileImgURL, date, amount, currency, status };
}

const rows = [
  createData(
    "Marcus Bergson",
    `marcus.png`,
    "Nov 15, 2023",
    800000,
    "$",
    "paid"
  ),
  createData(
    "Jaydon Vaccaro",
    `jaydon.png`,
    "Nov 15, 2023",
    800000,
    "$",
    "refund"
  ),
  createData(
    "Corey Schleifer",
    `corey.png`,
    "Nov 15, 2023",
    800000,
    "$",
    "paid"
  ),
  createData(
    "Cooper Press",
    `cooper.png`,
    "Nov 15, 2023",
    800000,
    "$",
    "refund"
  ),
  createData(
    "Phillip Lubin",
    `phillip.png`,
    "Nov 15, 2023",
    800000,
    "$",
    "paid"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 650 }}
        aria-label='simple table'
        className='font-sans'
      >
        <TableHead className='font-medium text-gray-650'>
          <TableRow>
            <TableCell
              sx={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "1rem",
                color: "#9CA4AB",
              }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "1rem",
                color: "#9CA4AB",
              }}
            >
              Date
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "1rem",
                color: "#9CA4AB",
              }}
            >
              Amount
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "1rem",
                color: "#9CA4AB",
              }}
            >
              Status
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "1rem",
                color: "#9CA4AB",
              }}
            >
              Invoice
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row.name + ` ${i}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component='th'
                scope='row'
                sx={{
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: "500",
                  fontSize: "1rem",
                  color: "#26282C",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <img
                  src={row.profileImgURL}
                  alt='profile image'
                  className='w-10 h-10 rounded-full object-cover'
                />
                {row.name}
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "1rem",
                  color: "#737373",
                }}
              >
                {row.date}
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "1rem",
                  color: "#0D062D",
                  fontWeight: "500",
                }}
              >
                {row.currency}
                {row.amount}
              </TableCell>
              <TableCell
                sx={{ fontFamily: "Plus Jakarta Sans", fontSize: "1rem" }}
                className={`capitalize`}
              >
                <span
                  className={`${
                    row.status === "paid" ? "text-green" : "text-red"
                  }`}
                >
                  {row.status}
                </span>
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "1rem",
                  color: "#E2A640",
                }}
              >
                <MemoryRouter>
                  <Link
                    to='/'
                    className='flex items-center gap-2 text-dark hover:text-green hover:underline'
                  >
                    <DocumentDownload
                      size='24'
                      color='#292d32'
                      variant='Outline'
                    />
                    View
                  </Link>
                </MemoryRouter>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
