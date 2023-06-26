import * as React from 'react';
import {
    Box, Button,
    Card,
    CardContent, Checkbox,
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import {DashboardLayout} from '/src/components/dashboard-layout';
import DialogPreviousExchangeHistory from '/src/components/dialog-previous-exchange-history';
import DialogTransactionBook from '../../components/dialog-transaction-book';
import DialogApproval from '/src/components/dialog-approval';
import TableContainer from '@mui/material/TableContainer';
import Pagination from '@mui/material/Pagination';
import FormControlLabel from "@mui/material/FormControlLabel";

function createData(nickname, rating, number, banks,  currency, trading, approval, checked) {
    return {nickname, rating, number, banks,  currency, trading, approval, checked};
}

const rows = [
    createData('환전맨', '레드', 'Xxxx-xxx-xx-xxxxx', '농협', '8,750,000', '자세히 보기', '', 0),
    createData('패드달인', '블루', 'XXXX-XXXX-XXX', '기업', '773,000', '자세히 보기', '', 1),
];

const Page = () => {

    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event, element) => {
        if (element === 0) {
            setChecked([event.target.checked, checked[1]]);
        } else {
            setChecked([checked[0], event.target.checked]);
        }
    };

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
                        대금 관리
                    </Typography>
                    <Typography variant="subtitle1">
                        사용자의 대금을 관리 할 수 있는 페이지입니다.
                    </Typography>
                </Box>

                <Card>

                    <CardContent sx={{
                        display: 'flex', flexDirection: 'column', border: '1px solid #80808002', gap: '20px 0'
                    }}>
                        <Typography variant="h4">
                        환전 신청 내역
                    </Typography>
                        <Box sx={{width: '100%', overflow: 'hidden'}}>
                            <TableContainer sx={{maxHeight: 'max-content'}}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">닉네임</TableCell>
                                            <TableCell align="center">등급</TableCell>
                                            <TableCell align="center">계좌 번호</TableCell>
                                            <TableCell align="center">은행 </TableCell>
                                            <TableCell align="center">환전 신청 금액</TableCell>
                                            <TableCell align="center">거래 원장</TableCell>
                                            <TableCell align="center">승인</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (<TableRow
                                            key={row.id}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell align="center">{row.nickname}</TableCell>
                                            <TableCell align="center">{row.rating}</TableCell>
                                            <TableCell align="center">{row.number}</TableCell>
                                            <TableCell align="center">{row.banks}</TableCell>
                                            <TableCell align="center">{row.currency}</TableCell>
                                            <TableCell align="center">
                                                <DialogTransactionBook text={row.trading}/>
                                            </TableCell>
                                            <TableCell align="center">{row.approval}
                                                <Checkbox checked={checked[row.checked]} onChange={(e) => {
                                                    handleChange2(e, row.checked);
                                                }} value="true"/>
                                            </TableCell>
                                        </TableRow>))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <FormControlLabel sx={{display: 'flex', justifyContent: 'flex-end'}}
                                              control={
                                <Checkbox
                                    checked={checked[0] && checked[1]}
                                    indeterminate={checked[0] !== checked[1]}
                                    onChange={handleChange1}
                                    defaultChecked />
                            } label="모두 선택" />
                        </Box>
                        <Pagination style={{display: 'flex', justifyContent: 'center'}} count={10} size="small" />
                    </CardContent>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end', p: '20px', gap: '10px'}}>
                        <DialogPreviousExchangeHistory />
                        <DialogApproval />
                    </Box>
                </Card>
            </Box>
        </Container>
    </Box>);
};

Page.getLayout = page => <DashboardLayout>{page}</DashboardLayout>;

export default Page;