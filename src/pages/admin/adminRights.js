import * as React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Checkbox,
    TextField,
    Typography,
} from '@mui/material';
import {DashboardLayout} from '/src/components/dashboard-layout';
import TableContainer from '@mui/material/TableContainer';


function createData(number, classification, member, content , management, notice, registration ) {
    return {number, classification, member, content , management, notice, registration};
}

const rows = [
    createData(1, '마스터 관리자', '','','','',''),
    createData(2, '일반 관리자', '','','','',''),
    createData(3, 'CS 관리자', '','','','',''),
    createData(4, '대금 관리자', '','','','',''),
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
                        권한 관리
                    </Typography>
                    <Typography variant="subtitle1">
                        관리자 권한을 설정하는 페이지입니다..
                    </Typography>
                </Box>

                <Card>
                    <CardContent sx={{
                        display: 'flex', flexDirection: 'column', border: '1px solid #80808002', gap: '40px 0'
                    }}>
                        <Box sx={{width: '100%', overflow: 'hidden'}}>
                            <TableContainer sx={{maxHeight: 490}}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">번호</TableCell>
                                            <TableCell align="center">분류</TableCell>
                                            <TableCell sx={{width: '150px'}} align="center">회원관리</TableCell>
                                            <TableCell sx={{width: '150px'}} align="center">콘텐츠 (대금 관리)</TableCell>
                                            <TableCell sx={{width: '150px'}} align="center">콘텐츠(CS 관리) </TableCell>
                                            <TableCell sx={{width: '150px'}} align="center">공지사항 관리</TableCell>
                                            <TableCell sx={{width: '150px'}} align="center">관리자 등록</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (<TableRow
                                            key={row.number}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell align="center">{row.number}</TableCell>
                                            <TableCell align="center">{row.classification}</TableCell>
                                            <TableCell align='center' padding="checkbox">
                                                <Checkbox value="true"/>
                                            </TableCell>
                                            <TableCell align='center' padding="checkbox">
                                                <Checkbox value="true"/>
                                            </TableCell>
                                            <TableCell align='center' padding="checkbox">
                                                <Checkbox value="true"/>
                                            </TableCell>
                                            <TableCell align='center' padding="checkbox">
                                                <Checkbox value="true"/>
                                            </TableCell>
                                            <TableCell align='center' padding="checkbox">
                                                <Checkbox value="true"/>
                                            </TableCell>
                                        </TableRow>))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                        <Button sx={{
                            width: '100px', fontSize: '1.05rem', m: '0 0 0 auto'
                        }} variant="outlined">저장
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    </Box>);
};

Page.getLayout = page => <DashboardLayout>{page}</DashboardLayout>;

export default Page;