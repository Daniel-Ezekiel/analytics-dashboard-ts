import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { DocumentDownload } from "iconsax-react";
import { useContext } from "react";
import { Link, MemoryRouter } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
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
  const { theme } = useContext(ThemeContext);

  return (
    <TableContainer className='scrollbar-hide'>
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
              className='hover:bg-gray-200 hover:bg-opacity-50 dark:hover:bg-white dark:hover:bg-opacity-10'
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
                className='dark:text-white'
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
                className='dark:text-gray-400'
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
                className='dark:text-white'
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
                    className='flex items-center gap-2 text-dark hover:text-green hover:underline dark:text-gray-200'
                  >
                    <DocumentDownload
                      size='24'
                      color={`${theme === "light" ? "#292d32" : "#fff"}`}
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
