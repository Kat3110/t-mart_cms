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


function createData(number, nickname, titles, amount, trading, payment, buye) {
    return {number, nickname, titles, amount, trading, payment, buye};
}

const rows = [
    createData('A-000001', '트윅스러버', '트윅스 베이킹', '500,000원', '23/01/22\n' + '[16:00~18:00]', '23/01/24 [16:00]', 'Tamsaa'),
    createData('A-000002', '안경잽이', '눈매 교정 ', '700,000원', '23/01/25\n' + '[16:00~17:00] ', '23/01/27 [16:00] ', 'Mini'),
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
                        예약 리스트
                    </Typography>
                    <Typography variant="subtitle1">
                        현재 진행되는 거래의 번호를 부여하고 리스트를 확인 할 수 있는 페이지입니다
                    </Typography>
                </Box>

                <Card>
                    <CardContent sx={{display: 'flex', flexDirection: 'column', gap: '10px 0'}}>
                        <Typography variant="h5">
                            검색하기
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
                                    판매자 닉네임
                                </option>
                                <option value='회원 역할'>
                                    거래 타이틀
                                </option>
                                <option value='셀럽 여부'>
                                    구매자 닉네임
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
                                            <TableCell align="center">판매자 닉네임</TableCell>
                                            <TableCell align="center">거래 타이틀</TableCell>
                                            <TableCell align="center">거래 금액(H)</TableCell>
                                            <TableCell align="center">거래 날짜 </TableCell>
                                            <TableCell align="center">결제 날짜</TableCell>
                                            <TableCell align="center">구매자 닉네임</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (<TableRow
                                            key={row.id}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell align="center">{row.number}</TableCell>
                                            <TableCell align="center">{row.nickname}</TableCell>
                                            <TableCell align="center">{row.titles}</TableCell>
                                            <TableCell align="center">{row.amount}</TableCell>
                                            <TableCell
                                                align="center">{row.trading}</TableCell>
                                            <TableCell align="center">{row.payment}</TableCell>
                                            <TableCell align="center">{row.buye}</TableCell>
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