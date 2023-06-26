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
import DialogRegisterNewFaq from "../../components/dialog-register-new-FAQ";

function createData(number, title, types, modify) {
    return {number, title, types, modify};
}

const rows = [
    createData('1', '[탈퇴] 회원 탈퇴 안내 ', '탈퇴', '삭제'),
    createData('2', '[환불] 환불 조건', '환불 문의',  '삭제')
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
                            FAQ 페이지
                        </Typography>
                        <Typography variant="subtitle1">
                            회원이 확인 할 수 있는 FAQ를 관리하는 페이지 입니다
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
                                등록된 FAQ 리스트
                            </Typography>
                            <Box sx={{width: '100%', overflow: 'hidden'}}>
                                <TableContainer sx={{maxHeight: 490}}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">번호</TableCell>
                                                <TableCell align="center">제목</TableCell>
                                                <TableCell align="center">분류</TableCell>
                                                <TableCell align="center" sx={{width: '300px'}}>수정 및 삭제</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.number}
                                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                                >
                                                    <TableCell align="center">{row.number}</TableCell>
                                                    <TableCell align="center">{row.title}</TableCell>
                                                    <TableCell align="center">{row.types}</TableCell>
                                                    <TableCell align="center">
                                                        <Box sx={{ display: 'flex', justifyContent: 'center',gap: '10px'}}>
                                                            <DialogconfirmDeletion
                                                                variant="outlined"
                                                                text={row.modify}
                                                                title='FAQ 삭제'
                                                                content={
                                                                <Box sx={{display: 'flex'}}><Box sx={{color: 'red'}}>(회원 탈퇴 안내)</Box>를(을) 삭제하시겠습니까?</Box>

                                                                }
                                                                btnOne='확인'
                                                                btnTwo='취소'
                                                            />
                                                            <DialogRegisterNewFaq variant="outlined" text='수정' title='FAQ 수정'/>

                                                        </Box>
                                                    </TableCell>
                                                </TableRow>))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <DialogRegisterNewFaq   variant="outlined" text='신규 FAQ 등록' title='FAQ 등록'/>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>);
};

Page.getLayout = page => <DashboardLayout>{page}</DashboardLayout>;

export default Page;