import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Pagination from "@mui/material/Pagination";
import DialogInformationAboutContent from "./dialog-Information-about-content";


function createData(number, title, date, nickname, processing , content, person) {
    return {number, title, date, nickname, processing , content, person};
}

const rows = [
    createData('CS_4 ', '시간 판매 질문', '22/10/25', '볼펜돌리기', '22/10/27  ', '[자세히 보기]','홍길동'),
    createData('CS_5 ', '시간 판매 질문', '22/10/25', '볼펜돌리기', '22/10/27 ', '[자세히 보기]','홍길동'),
    createData('CS_6 ', '시간 판매 질문', '22/10/25', '볼펜돌리기', '22/10/27 ', '[자세히 보기]','홍길동'),
];

export default function DialogPreviousCsHistory(props) {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('lg');
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };
    return (
        <React.Fragment>
            <Button variant='outlined' onClick={handleClickOpen}>
                {props.text}
            </Button>
            <Dialog
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'space-between', padding: '30px 20px 20px'}}>
                    <Typography variant='h4'>이전 CS 관리</Typography>
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
                    <Box sx={{margin: '0 auto 20px 0'}}>
                        <Typography variant='h6'>CS 처리 내역</Typography>
                    </Box>

                    <TableContainer sx={{maxHeight: 490}}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">접수 번호 </TableCell>
                                    <TableCell align="center">제목</TableCell>
                                    <TableCell align="center">신청 날짜</TableCell>
                                    <TableCell align="center">사용자 닉네임</TableCell>
                                    <TableCell align="center">처리 날짜</TableCell>
                                    <TableCell align="center">처리 내용</TableCell>
                                    <TableCell align="center">담당자</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (<TableRow
                                    key={index}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell align="center">{row.number}</TableCell>
                                    <TableCell align="center">{row.title}</TableCell>
                                    <TableCell align="center">{row.date}</TableCell>
                                    <TableCell align="center">{row.nickname}</TableCell>
                                    <TableCell align="center">{row.processing}</TableCell>
                                    <TableCell align="center">
                                        <DialogInformationAboutContent text={row.content} btn='닫기'/>
                                    </TableCell>
                                    <TableCell align="center">{row.person}</TableCell>
                                </TableRow>))}
                            </TableBody>
                        </Table>
                        <Box sx={{display: 'flex', justifyContent: 'flex-end', padding: '20px 0 0'}}>
                        </Box>

                    </TableContainer>
                    <Pagination count={1} size="small" />
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}