import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import {Checkbox, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Pagination from "@mui/material/Pagination";

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

    function createData(nickname, rating, number, banks,  currency, trading, approval) {
        return {nickname, rating, number, banks,  currency, trading, approval};
    }

    const rows = [
        createData('환전맨', '레드', 'Xxxx-xxx-xx-xxxxx', '농협', '8,750,000', '자세히 보기', ''),
        createData('패드달인', '블루', 'XXXX-XXXX-XXX', '기업', '773,000', '자세히 보기', ''),

        createData('아무개', '블루', 'XXXX-XXXX-XXX', '기업', '773,000', '자세히 보기', ''),
        createData('패드달인', '블루', 'XXXX-XXXX-XXX', '기업', '773,000', '자세히 보기', ''),
        createData('패드달인', '블루', 'XXXX-XXXX-XXX', '기업', '773,000', '자세히 보기', ''),
        createData('패드달인', '블루', 'XXXX-XXXX-XXX', '기업', '773,000', '자세히 보기', ''),
        createData('패드달인', '블루', 'XXXX-XXXX-XXX', '기업', '773,000', '자세히 보기', ''),
        createData('패드달인', '블루', 'XXXX-XXXX-XXX', '기업', '773,000', '자세히 보기', ''),
        createData('패드달인', '블루', 'XXXX-XXXX-XXX', '기업', '773,000', '자세히 보기', ''),
        createData('패드달인', '블루', 'XXXX-XXXX-XXX', '기업', '773,000', '자세히 보기', ''),
        createData('패드달인', '블루', 'XXXX-XXXX-XXX', '기업', '773,000', '자세히 보기', ''),
        createData('패드달인', '블루', 'XXXX-XXXX-XXX', '기업', '773,000', '자세히 보기', ''),
    ];

    return (
        <React.Fragment>
            <Button variant='outlined' onClick={handleClickOpen}>
                이전 환전 내역
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'space-between', padding: '10px 20px 0'}}>
                    <Typography variant="h5">이전 환전 내역</Typography>
                    <Button onClick={handleClose}><CloseIcon /></Button>
                </Box>
                <DialogContent sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px 50px 40px',
                    flexDirection: 'column'
                }}>
                    <TableContainer sx={{maxHeight: 'max-content'}}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">닉네임</TableCell>
                                    <TableCell align="center">등급</TableCell>
                                    <TableCell align="center">계좌 번호</TableCell>
                                    <TableCell align="center">은행 </TableCell>
                                    <TableCell align="center">환전 신청 금액</TableCell>
                                    <TableCell align="center">거래 원장</TableCell>
                                    <TableCell align="center">승인</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (<TableRow
                                    key={row.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell align="center">{row.nickname}</TableCell>
                                    <TableCell align="center">{row.rating}</TableCell>
                                    <TableCell align="center">{row.number}</TableCell>
                                    <TableCell align="center">{row.banks}</TableCell>
                                    <TableCell align="center">{row.currency}</TableCell>
                                    <TableCell align="center">{row.trading}</TableCell>
                                    <TableCell align="center">{row.approval}<Checkbox value="true"/></TableCell>
                                </TableRow>))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Pagination sx={{p: '20px 0 0'}} count={10} size="small" />
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}