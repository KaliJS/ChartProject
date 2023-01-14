import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SeverityPill } from "../severity-pill";

const orders = [
  {
    id: uuid(),
    ref: "NIFTY",
    amount: 3034.5,
    chg: 34.5,
    chgp: 0.4,
    color: "success",
  },
  {
    id: uuid(),
    ref: "BANK",
    amount: 2534.1,
    chg: 314.5,
    chgp: 1.5,
    color: "warning",
  },
  {
    id: uuid(),
    ref: "SENSEX",
    amount: 1034.99,
    chg: 4.5,
    chgp: 0.1,
    color: "success",
  },
  {
    id: uuid(),
    ref: "SPX",
    amount: 9634.43,
    chg: 134.5,
    chgp: 0.9,
    color: "error",
  },
  {
    id: uuid(),
    ref: "CNXIT",
    amount: 3234.54,
    chg: 224.5,
    chgp: 2.1,
    color: "warning",
  },
  {
    id: uuid(),
    ref: "BANK",
    amount: 2534.1,
    chg: 314.5,
    chgp: 1.5,
    color: "warning",
  },
  {
    id: uuid(),
    ref: "SENSEX",
    amount: 1034.99,
    chg: 4.5,
    chgp: 0.1,
    color: "success",
  },
  {
    id: uuid(),
    ref: "SPX",
    amount: 9634.43,
    chg: 134.5,
    chgp: 0.9,
    color: "error",
  },
  {
    id: uuid(),
    ref: "CNXIT",
    amount: 3234.54,
    chg: 224.5,
    chgp: 2.1,
    color: "warning",
  },
];

const LatestOrders = (props) => (
  <Card {...props}>
    <Typography variant="h6" sx={{ p: 2 }}>
      Watchlists
    </Typography>
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell>Last</TableCell>
            <TableCell>Chg</TableCell>
            <TableCell>Chg%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, i) => (
            <TableRow hover key={i}>
              <TableCell>{order.ref}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>
                <SeverityPill color={order.color}>{order.chg}</SeverityPill>
              </TableCell>
              <TableCell>{order.chgp}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default LatestOrders;
