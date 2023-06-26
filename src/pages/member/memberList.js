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
    Typography,
} from '@mui/material';
import {DashboardLayout} from '/src/components/dashboard-layout';
import TableContainer from '@mui/material/TableContainer';
import Pagination from '@mui/material/Pagination';
import DialogEditInformation from "../../components/dialog-edit-information";


function createData(number, id, nickname, role, celebrity, status,  information, creation) {
    return {number, id, nickname, role, celebrity, status, information, creation};
}

const rows = [
    createData('A-000001', 'abc123', '미용티슈', '구매자', '셀럽', '일반', '[정보 수정]'),
    createData('A-000002', 'qwe1232', '도리도리', '구매자/판매자 ', '일반', '거래 정지 ', '[정보 수정]'),
    createData('A-000003', 'asd4563', '456789', '구매자/판매자 ', '셀럽', '삭제 대기', '[정보 수정]'),
    createData('A-000004', 'fgh7893', '다이제',  '구매자', '일반', '일반', '[정보 수정]'),
    createData('A-000005', 'vbn78971','홍게123', '구매자/판매자', '일반', '일반', '[정보 수정]'),
    createData('A-000006', 'abc1232', '미용티슈', '구매자', '셀럽', '일반', '[정보 수정]'),
    createData('A-000007', 'qwe1233', '도리도리', '구매자/판매자 ', '일반', '일반', '[정보 수정]'),
    createData('A-000008', 'asd4564', '456789', '구매자/판매자 ', '셀럽', '일반', '[정보 수정]'),
    createData('A-000009', 'fgh7899', '다이제',  '구매자', '일반', '일반', '[정보 수정]'),
    createData('A-000010', 'vbn78972','홍게123', '구매자/판매자 ', '일반', '일반', '[정보 수정]'),
    createData('A-000011', 'abc1233', '미용티슈', '구매자 ', '일반', '일반', '[정보 수정]'),
    createData('A-000012', 'qwe1243', '도리도리', '구매자/판매자', '일반', '일반', '[정보 수정]'),
    createData('A-000013', 'asd4567', '456789', '구매자/판매자 ', '일반', '일반', '[정보 수정]'),
    createData('A-000014', 'fgh7895', '다이제',  '구매자', '일반', '일반', '[정보 수정]'),
    createData('A-000015', 'vbn78973','홍게123', '구매자/판매자', '일반', '일반', '[정보 수정]'),
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
                        회원 관리
                    </Typography>
                    <Typography variant="subtitle1">
                        Timart 회원을 확인하고 관리 할 수 있는 페이지 입니다.
                    </Typography>
                </Box>

                <Card>

                    <CardContent sx={{
                        display: 'flex', flexDirection: 'column', border: '1px solid #80808002', gap: '20px 0'
                    }}> <Typography variant="h4">
                        유저 리스트
                    </Typography>
                        <Box sx={{width: '100%', overflow: 'hidden'}}>
                            <TableContainer sx={{maxHeight: 'max-content'}}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">회원 번호</TableCell>
                                            <TableCell align="center">아이디</TableCell>
                                            <TableCell align="center">닉네임</TableCell>
                                            <TableCell align="center">회원 역할</TableCell>
                                            <TableCell align="center">셀럽 여부</TableCell>
                                            <TableCell align="center">회원 상태</TableCell>
                                            <TableCell align="center">정보 수정</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (<TableRow
                                            key={row.id}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell align="center">{row.number}</TableCell>
                                            <TableCell align="center">{row.id}</TableCell>
                                            <TableCell align="center">{row.nickname}</TableCell>
                                            <TableCell align="center">{row.role}</TableCell>
                                            <TableCell
                                                align="center">{row.celebrity}</TableCell>
                                            <TableCell align="center">{row.status}</TableCell>
                                            <TableCell align="center">
                                                <DialogEditInformation style="outlined" text={row.information}
                                                />
                                            </TableCell>
                                        </TableRow>))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Box>
                        <Pagination style={{display: 'flex', justifyContent: 'center'}} count={10} size="small" />
                    </CardContent>
                </Card>
            </Box>
        </Container>
    </Box>);
};

Page.getLayout = page => <DashboardLayout>{page}</DashboardLayout>;

export default Page;