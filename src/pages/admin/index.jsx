import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import DetailModal from '../../components/modal'
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(step, message, type, answerlist) {
  return { step, message, type, answerlist };
}

const rows = [
  createData(1, 'Do you own your home?', 'select', ['Yes', 'No']),
  createData(2, 'How much is your monthly electric bill usually?', 'select', ['$0-$75', '$101-$250', '$251-$400', '$401+']),
  createData(3, 'What type of home do you live in?', 'select', ['Single Family', 'Apartment', 'Other']),
  createData(4, 'Is your roof shaded by trees?', 'select', ['Full Sun', 'Partial Sun', 'A Lot Of Shade', 'Not Sure']),
  createData(5, 'Enter your Zip Code', 'input', ['Zip Code']),
  createData(6, 'Enter Your Street Address', 'input', ['Your Address']),
  createData(7, 'Enter Your Name', 'input', ['First Name', 'Last Name']),
  createData(8, 'Enter Your Email?', 'input', ['Email Address']),
  createData(9, 'Verify Your Phone', 'input', ['Phone Number']),
  createData(10, 'YOUR REQUEST FOR MONTLY SAVINGS WITH SOLAR PANELS HAS BEEN SUCCESSFULLY RECEIVED!', 'statement', ['1. Congratulations!\nYou are one step closer to saving on your monthly bills. One of our courteous experts will confirm your information and review your eligibility very shortly with a quick 30 second call.', "2. Answer Your Phone!\nWe do not make high-pressure sales calls - our main goal is to help you lower your electric bill. We've matched you with local experts to learn about your situation, so get ready.", "3. Grab A Pen!\nYou're moments away from a complete savings & cost breakdown. When our professionals call, make sure to write down their quotes so you can make sure you have all the answers."]),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const [isModalOpen, setModalOpen] = useState(false);
  const [operatingType, setOperatingType] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div>
        <div className='flex justify-between my-[20px]'>
            <h1 className='text-[30px] '>If you want to add more quiz, then click here.</h1>
            <Button variant="contained" color="primary" onClick={() => {setModalOpen(true); setOperatingType(false)}}>ADD</Button>
        </div>

        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell width="10%">Step</StyledTableCell>
                <StyledTableCell width="60%">Message</StyledTableCell>
                <StyledTableCell width="10%" align='center'>Type</StyledTableCell>
                <StyledTableCell width="20%" align='center'>Action</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.message}>
                <StyledTableCell width='10%'>
                    {row.step}
                </StyledTableCell>
                <StyledTableCell width='50%'>{row.message}</StyledTableCell>
                <StyledTableCell width='10%' align='center'>{row.type}</StyledTableCell>
                <StyledTableCell width='20%' align='center'>
                    <div className='flex justify-around'>
                        <span className='cursor-pointer underline hover:text-blue-500' onClick={() => {setModalOpen(true); setOperatingType(true); setSelectedItem(row)}}>detail</span>
                        <span className='cursor-pointer underline hover:text-blue-500'>delete</span>
                    </div>  
                </StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        <DetailModal
          open = {isModalOpen}
          setModalOpen = {setModalOpen}
          operatingType = {operatingType}
          selecteditem = {selectedItem}
        />
    </div>
  );
}
