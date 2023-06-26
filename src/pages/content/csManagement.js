import * as React from 'react';
import {
    Box,
    Card,
    CardContent,
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import {DashboardLayout} from '/src/components/dashboard-layout';
import TableContainer from '@mui/material/TableContainer';
import Pagination from '@mui/material/Pagination';
import DialogInformationAboutContent from "../../components/dialog-Information-about-content";
import DialogPreviousCsHistory from "../../components/dialog-previous-cs-history";


function createData(number, title, date, nickname, division, content) {
    return {number, title, date, nickname, division, content};
}

const rows = [
    createData('CS_1', '시간 판매 질문', '22/11/05', '볼펜돌리기 ', '기타 ', '[자세히 보기]'),
    createData('CS_2', '결제관련해서\n' + '질문이 있습니다', '22/11/06', '김은수 ', '결제', '[자세히 보기]'),
    createData('CS_3', '돈을 못받고있습니다.', '22/11/07', '홍길동', '고객관련', '[자세히 보기]'),
];

const Page = () => {
    return (<Box component="main" sx={{flexGrow: 1, py: 8,}}>
        <Container maxWidth={false}>
            <Box sx={{display: 'flex', gap: '20px 0', flexDirection: 'column'}}>
                <Box
                    sx={{
                        alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: '10px 0',
                    }}
                >
                    <Typography variant="h4">
                        CS 관리
                    </Typography>
                    <Typography variant="subtitle1">
                        사용자의 CS를 관리 할 수 있는 페이지입니다
                    </Typography>
                </Box>
                <Card>
                    <CardContent sx={{
                        display: 'flex', flexDirection: 'column', border: '1px solid #80808002', gap: '20px 0'
                    }}>
                        <Typography variant="h6">미완료된 CS 문의 리스트</Typography>
                        <Box sx={{width: '100%', overflow: 'hidden'}}>
                            <TableContainer sx={{maxHeight: 490}}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">접수 번호</TableCell>
                                            <TableCell align="center">제목 </TableCell>
                                            <TableCell align="center">신청 날짜</TableCell>
                                            <TableCell align="center">사용자 닉네임</TableCell>
                                            <TableCell align="center">구분</TableCell>
                                            <TableCell align="center">내용</TableCell>
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
                                            <TableCell align="center">{row.division}</TableCell>
                                            <TableCell align="center">
                                                <DialogInformationAboutContent text={row.content} btn='답변 등록'/>
                                            </TableCell>
                                        </TableRow>))}
                                    </TableBody>
                                </Table>
                                <Box sx={{display: 'flex', justifyContent: 'flex-end', padding: '20px 0 0'}}>
                                    <DialogPreviousCsHistory text='이전 cs 처리 내역'/>
                                </Box>

                            </TableContainer>

                        </Box>
                        <Pagination style={{display: 'flex', justifyContent: 'center'}} count={1} size="small" />
                    </CardContent>
                </Card>
            </Box>
        </Container>
    </Box>);
};

Page.getLayout = page => <DashboardLayout>{page}</DashboardLayout>;

export default Page;