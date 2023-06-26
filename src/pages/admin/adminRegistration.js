import * as React from 'react';
import {
    Box, Button,
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
import DialogconfirmDeletion from "../../components/dialog-confirm-deletion";
import DialogAddAdministrator from "../../components/dialog-add-administrator";
import Pagination from '@mui/material/Pagination';

function createData(number, name, id, email, mobile, rank, date, manager, modify) {
    return {number, name, id, email, mobile, rank, date, manager, modify};
}

const rows = [
    createData('Admin_1', '박태민', 'yemtem', 'Admin@Timart.com', '010-1234-5678', '본부장 ', '2023.08.19', '마스터', '수정'),
    createData('Admin_2', '아무개', '도리도리', 'hong@Timart.com', '010-5555-5663', '일반 사원', '2023.08.19', '대금', '수정')
];


const Page = () => {

    return (
        <Box component="main" sx={{flexGrow: 1, py: 8,}}>
            <Container maxWidth={false}>
                <Box sx={{display: 'flex', gap: '20px 0', flexDirection: 'column'}}>
                    <Box
                        sx={{
                            alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: '10px 0',
                        }}
                    >
                        <Typography variant="h4">
                            관리자 등록 페이지
                        </Typography>
                        <Typography variant="subtitle1">
                            관리자 페이지로 해당 페이지를 관리할 수 있는 인원을 결정하는 페이지입니다
                        </Typography>
                    </Box>

                    <Card>
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #80808002',
                            gap: '20px 0'
                        }}>
                            <Typography variant="h6">
                                관리자 리스트
                            </Typography>
                            <Box sx={{width: '100%', overflow: 'hidden'}}>
                                <TableContainer sx={{maxHeight: 490}}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">번호</TableCell>
                                                <TableCell align="center">이름</TableCell>
                                                <TableCell align="center">유형</TableCell>
                                                <TableCell align="center">아이디</TableCell>
                                                <TableCell align="center">이메일</TableCell>
                                                <TableCell align="center">휴대폰 번호 </TableCell>
                                                <TableCell align="center">직급</TableCell>
                                                <TableCell align="center">생성일</TableCell>
                                                <TableCell align="center">관리자 수정</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.number}
                                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                                >

                                                    <TableCell align="center">{row.number}</TableCell>
                                                    <TableCell align="center">{row.name}</TableCell>
                                                    <TableCell align="center">{row.id}</TableCell>
                                                    <TableCell align="center">{row.email}</TableCell>
                                                    <TableCell align="center">{row.mobile}</TableCell>
                                                    <TableCell align="center">{row.rank}</TableCell>
                                                    <TableCell align="center">{row.date}</TableCell>
                                                    <TableCell align="center">{row.manager}</TableCell>
                                                    <TableCell align="center">
                                                        <Box sx={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            gap: '10px'
                                                        }}>
                                                            <DialogAddAdministrator variant="outlined" text={row.modify} title='관리자 수정'/>
                                                            <DialogconfirmDeletion
                                                                variant="outlined"
                                                                text='삭제'
                                                                title='관리자 수정'
                                                                content={
                                                                    <Box sx={{
                                                                        display: 'flex',
                                                                        flexDirection: 'column',
                                                                        gap: '10px'
                                                                    }}>
                                                                        이 관리자를 삭제하시겠습니까?
                                                                        <Box sx={{color: 'red'}}>*삭제시 로그인이 불가능합니다.
                                                                        </Box>
                                                                    </Box>
                                                                }
                                                                btnTwo='삭제'
                                                                btnOne='닫기'

                                                            />
                                                        </Box>
                                                    </TableCell>
                                                </TableRow>))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </Box>
                            <Box>
                                <Box sx={{display: 'flex', gap: '10px'}}>
                                    <Typography>총 관리자 명</Typography>
                                    <Typography>2 명</Typography>
                                </Box>
                                <Pagination sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                                            count={10} size="small"/>
                            </Box>


                            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <DialogAddAdministrator variant="outlined" text='관리자 추가' title='관리자 추가'/>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>);
};

Page.getLayout = page => <DashboardLayout>{page}</DashboardLayout>;

export default Page;