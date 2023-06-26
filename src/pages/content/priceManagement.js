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


function createData(rating, open, minimum) {
    return {rating, open, minimum};
}

const rows = [
    createData('블루(Tisociety) ', '10,000원', '10,000원'),
    createData('골드(Tisociety)', '10,000원', '10,000원'),
    createData('레드(Tisociety) ', '10,000원', '10,000원'),
    createData('블루(Tistate) ', '50,000원', '50,000원'),
    createData('골드(Tistate) ', '100,000원', '100,000원'),
    createData('레드(Tistate)', '200,000원', '200,000원'),
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
                        사용자의 거래 최소 등록 가격/1시간 최소 가격을 수정/티마트 커미션 가격을 수정하고 수익을 확인 할 수 있는 페이지입니다.
                    </Typography>
                </Box>


                <Card>
                    <Typography variant="h6" sx={{p: '20px'}}>
                        커미션 가격 관리
                    </Typography>
                    <CardContent sx={{
                        display: 'flex', flexDirection: 'column', border: '1px solid #80808002', gap: '20px 0'
                    }}>
                        <Typography variant="h5">
                            등급 별 최소 가격
                        </Typography>
                        <Box sx={{width: '100%', overflow: 'hidden'}}>
                            <TableContainer sx={{maxHeight: 490}}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">등급</TableCell>
                                            <TableCell align="center" sx={{width: '300px'}}>Open Price</TableCell>
                                            <TableCell align="center" sx={{width: '300px'}}>1시간 최소 가격</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (<TableRow
                                            key={row.rating}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell align="left">{row.rating}</TableCell>
                                            <TableCell align="center"><TextField sx={{width: '150px'}} size='small' id="outlined-basic" placeholder={row.open} variant="outlined" /></TableCell>
                                            <TableCell align="center"><TextField sx={{width: '150px'}} size='small' id="outlined-basic" placeholder={row.minimum} variant="outlined" /></TableCell>
                                        </TableRow>))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    </Box>);
};

Page.getLayout = page => <DashboardLayout>{page}</DashboardLayout>;

export default Page;