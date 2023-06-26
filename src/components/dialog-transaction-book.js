import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TableContainer from "@mui/material/TableContainer";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import Pagination from "@mui/material/Pagination";

function createData(number, seller, buyer, application, approval,  completed, valuation, payment, refund, transaction ) {
    return {number, seller, buyer, application, approval,  completed, valuation, payment, refund, transaction};
}

const rows = [
    createData('A-000001 ', 'abc123', '미용티슈', '22/10/22', '22/10/22', '22/10/22', '4.5', '22/10/26','-','정상'),
    createData('A-000002 ', 'abc123', '도리도리', '22/10/22', '22/10/22', '22/10/22', '-', '22/10/25','-','정상'),
    createData('A-000003 ', 'abc123', '456789', '22/10/22', '22/10/22', '22/10/22', '5', '22/11/28','22/10/28','비정상'),
];

export default function MaxWidthDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('lg');
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleMaxWidthChange = (event) => {
        setMaxWidth(
            // @ts-expect-error autofill of arbitrary value is not handled.
            event.target.value,
        );
    };
    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                {props.text}
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: '20px'}}>
                    <DialogTitle>사용자 거래 원장</DialogTitle>
                    <Button onClick={handleClose}><CloseIcon /></Button>
                </Box>

                <DialogContent sx={{paddingBottom: '100px'}}>

                    <TableContainer sx={{maxHeight: 'max-content'}}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">거래 번호</TableCell>
                                    <TableCell align="center">판매자</TableCell>
                                    <TableCell align="center">구매자</TableCell>
                                    <TableCell align="center">예약 신청</TableCell>
                                    <TableCell align="center">예약 승인 </TableCell>
                                    <TableCell align="center">결제 완료</TableCell>
                                    <TableCell align="center">거래 평가</TableCell>

                                    <TableCell align="center">대금 지불</TableCell>
                                    <TableCell align="center">환불 여부</TableCell>
                                    <TableCell align="center">거래 완료</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (<TableRow
                                    key={row.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell align="center">{row.number}</TableCell>
                                    <TableCell align="center">{row.seller}</TableCell>
                                    <TableCell align="center">{row.buyer}</TableCell>
                                    <TableCell align="center">{row.application}</TableCell>
                                    <TableCell align="center">{row.approval}</TableCell>
                                    <TableCell align="center">{row.completed}</TableCell>
                                    <TableCell align="center">{row.valuation}</TableCell>
                                    <TableCell align="center">{row.payment}</TableCell>
                                    <TableCell align="center">{row.refund}</TableCell>
                                    <TableCell align="center">{row.transaction}</TableCell>
                                </TableRow>))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box sx={{display: 'flex', justifyContent: 'center', padding: '30px 0 0'}}>
                        <Pagination count={1} size="small" />
                    </Box>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}