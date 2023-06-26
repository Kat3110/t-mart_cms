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


function createData(number, celeb, blue, gold, red) {
    return {number, celeb, blue, gold, red};
}

const rows = [
    createData('커미션 비율 (%) ', '10 %', '10 %', '10 %', '10 %'),
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
                        커미션 가격 관리
                    </Typography>
                    <Typography variant="subtitle1">
                        사용자의 거래 최소 등록 가격/1시간 최소 가격을 수정 할 수 있는 페이지입니다.
                    </Typography>
                </Box>


                <Card>
                    <CardContent sx={{
                        display: 'flex', flexDirection: 'column', border: '1px solid #80808002', gap: '20px 0'
                    }}>
                        <Typography variant="h5">
                            티마트 커미션 가격 수정
                        </Typography>
                        <Box sx={{width: '100%', overflow: 'hidden'}}>
                            <TableContainer sx={{maxHeight: 490}}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">-</TableCell>
                                            <TableCell align="center">셀럽 </TableCell>
                                            <TableCell align="center">블루</TableCell>
                                            <TableCell align="center">골드</TableCell>
                                            <TableCell align="center">레드</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (<TableRow
                                            key={row.id}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell align="center">{row.number}</TableCell>
                                            <TableCell align="center">
                                                <TextField sx={{width: '100px'}} size='small' id="outlined-basic" placeholder={row.celeb} variant="outlined" />
                                            </TableCell>
                                            <TableCell align="center">
                                                <TextField sx={{width: '100px'}} size='small' id="outlined-basic" placeholder={row.blue} variant="outlined" />
                                            </TableCell>
                                            <TableCell align="center">
                                                <TextField sx={{width: '100px'}} size='small' id="outlined-basic" placeholder={row.gold} variant="outlined" />
                                            </TableCell>
                                            <TableCell align="center">
                                                <TextField sx={{width: '100px'}} size='small' id="outlined-basic" placeholder={row.red} variant="outlined" />
                                            </TableCell>
                                        </TableRow>))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Box>
                        <Box style={{display: 'flex', justifyContent: 'flex-end'}}>커미션 % 가격을 입력해주세요</Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    </Box>);
};

Page.getLayout = page => <DashboardLayout>{page}</DashboardLayout>;

export default Page;