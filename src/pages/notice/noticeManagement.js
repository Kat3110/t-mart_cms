import * as React from 'react';
import {
    Box,
    Button,
    ButtonGroup,
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {DashboardLayout} from '/src/components/dashboard-layout';
import InputSearch from '/src/components/input-search';
import TableContainer from '@mui/material/TableContainer';
import Pagination from "@mui/material/Pagination";
import DialogSendingNotifications from "../../components/dialog-sending-notifications";

function createData(number, date, shipper, title, content, members) {
    return {number, date, shipper, title, content, members};
}

const rows = [
    createData('Notice_1', '2021.08.09 ', '미용티슈', '공지사항', 'Test_1', '286'),
    createData('Notice_2', '2021.08.09', '도리도리', '공지사항', 'Test_1', '340'),
    createData('Notice_3', '2021.08.09', '456789', '공지사항', 'Test_1', '5600'),
    createData('Notice_4', '2021.08.09', '다이제', '공지사항', 'Test_1', '2700'),
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
                            공지사항 페이지
                        </Typography>
                        <Typography variant="subtitle1">
                            회원들에게 발송한 공지사항 알림을 관리하는 페이지 입니다
                        </Typography>
                    </Box>

                    <Card>
                        <CardContent sx={{display: 'flex', flexDirection: 'column', gap: '10px 0'}}>
                            <Typography variant="h5">
                                검색기간
                            </Typography>
                            <Box sx={{
                                display: 'flex', alignItems: 'center', gap: '0 20px'
                            }}>
                                <Typography variant="h6" sx={{width: '200px'}}>
                                    발송일 검색
                                </Typography>
                                <Box sx={{
                                    width: '100%', display: 'flex', gap: '10px 0', flexDirection: 'column',
                                }}>
                                    <FormControl>
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group">
                                            <FormControlLabel value="기간 지정 " control={<Radio/>} label="기간 지정 "/>
                                            <FormControlLabel value="월별" control={<Radio/>} label="월별"/>
                                        </RadioGroup>
                                    </FormControl>
                                    <Box sx={{
                                        display: 'flex', gap: '0 5px'
                                    }}>
                                        <ButtonGroup sx={{width: '300px', flexShrink: 0}} variant="outlined"
                                                     aria-label="outlined button group">
                                            <Button>금일</Button>
                                            <Button>1주일</Button>
                                            <Button>1개월</Button>
                                            <Button>3개월</Button>
                                        </ButtonGroup>
                                        <TextField
                                            sx={{width: '100%'}}
                                            name="searchType"
                                            required
                                            select
                                            SelectProps={{native: true}}
                                            variant="outlined"
                                        >
                                            <option value='전체'>
                                                시작일 ~ 종료일
                                            </option>
                                        </TextField>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex', alignItems: 'center', gap: '0 20px',
                            }}>
                                <TextField
                                    sx={{width: '200px'}}
                                    name="searchType"
                                    required
                                    select
                                    SelectProps={{native: true}}
                                    variant="outlined"
                                >
                                    <option value='메시지 내용'>
                                        메시지 내용
                                    </option>
                                    <option value='메시지 내용'>
                                        메시지 내용
                                    </option>
                                </TextField>
                                <Box sx={{width: '100%'}}>
                                    <InputSearch/>
                                </Box>

                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                <Button sx={{padding: '10px 40px'}} variant="outlined">검색</Button>
                            </Box>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #80808002',
                            gap: '20px 0'
                        }}>
                            <Typography variant="h6">
                                공지사항 알림 발송 내역
                            </Typography>
                            <Box sx={{width: '100%', overflow: 'hidden'}}>
                                <TableContainer sx={{maxHeight: 490}}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">번호</TableCell>
                                                <TableCell align="center">발송일</TableCell>
                                                <TableCell align="center">발송인</TableCell>
                                                <TableCell align="center">제목</TableCell>
                                                <TableCell align="center">메시지 내용</TableCell>
                                                <TableCell align="center">발송 회원수</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.number}
                                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                                >
                                                    <TableCell align="center">{row.number}</TableCell>
                                                    <TableCell align="center">{row.date}</TableCell>
                                                    <TableCell align="center">{row.shipper}</TableCell>
                                                    <TableCell align="center">{row.title}</TableCell>
                                                    <TableCell align="center">{row.content}</TableCell>
                                                    <TableCell align="center">{row.members}
                                                    </TableCell>
                                                </TableRow>))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </Box>
                            <Pagination sx={{display: 'flex', justifyContent: 'center'}} count={1} size="small" />
                            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <DialogSendingNotifications style="outlined" text='알림 발송'/>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>);
};

Page.getLayout = page => <DashboardLayout>{page}</DashboardLayout>;

export default Page;