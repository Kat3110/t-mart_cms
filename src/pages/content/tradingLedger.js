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
    TextField,
    Typography,
} from '@mui/material';
import {DashboardLayout} from '/src/components/dashboard-layout';
import InputSearch from '/src/components/input-search';
import TableContainer from '@mui/material/TableContainer';
import Pagination from '@mui/material/Pagination';
import DialogEditInformation from "../../components/dialog-edit-information";


function createData(number, seller, buyer, application, approval, completed, valuation, payment, refund, transaction) {
    return {number, seller, buyer, application, approval, completed, valuation, payment, refund, transaction};
}

const rows = [
    createData('A-000001', 'abc123', '미용티슈', '22/10/22', '22/10/22', '22/10/22','4.5','22/10/26', '-','정상' ),
    createData('A-000002', 'qwe123', '도리도리', '22/10/22', '22/10/22', '22/10/22','-','22/10/25', '-','정상' ),
    createData('A-000003', 'asd456', '456789', '22/10/22', '22/10/22', '22/10/22','5','22/11/28', '22/10/28\n','비정상' ),
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
                        거래 원장
                    </Typography>
                    <Typography variant="subtitle1">
                        사용자의 대금을 관리 할 수 있는 페이지입니다
                    </Typography>
                </Box>

                <Card>
                    <CardContent sx={{display: 'flex', flexDirection: 'column', gap: '10px 0'}}>
                        <Typography variant="h5">
                            거래 원장
                        </Typography>
                        <Box sx={{
                            display: 'flex', alignItems: 'center', gap: '0 20px',
                        }}>
                            <TextField
                                sx={{minWidth: 200, width: '15%'}}
                                name="searchType"
                                required
                                select
                                SelectProps={{native: true}}
                                variant="outlined"
                            >
                                <option value='아이디'>
                                    거래 번호
                                </option>
                                <option value='닉네임'>
                                    거래 번호
                                </option>
                                <option value='회원 역할'>
                                    거래 번호
                                </option>
                                <option value='셀럽 여부'>
                                    거래 번호
                                </option>
                            </TextField>
                            <Box sx={{width: '70%'}}>
                                <InputSearch/>
                            </Box>

                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                            <Button variant='outlined' size='large'>검색</Button>
                        </Box>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent sx={{
                        display: 'flex', flexDirection: 'column', border: '1px solid #80808002', gap: '20px 0'
                    }}>
                        <Box sx={{width: '100%', overflow: 'hidden'}}>
                            <TableContainer sx={{maxHeight: 490}}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">거래 번호</TableCell>
                                            <TableCell align="center">판매자</TableCell>
                                            <TableCell align="center">구매자</TableCell>
                                            <TableCell align="center">예약 신청 </TableCell>
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