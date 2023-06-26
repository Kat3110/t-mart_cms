import * as React from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardContent,
    Container, Link,
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
import DialogconfirmDeletion from "../../components/dialog-confirm-deletion";

function createData(number, date, title,  content,location,  button) {
    return {number, date, title, content,location,  button};
}

const rows = [
    createData('AD_1', '2021.08.09~\n' + '2022.09.19 ', '티마트 오픈 이벤트 ', '공지사항', '메인 페이지 상단', '삭제'),
    createData('AD_2', '2021.08.09~\n' + '2022.09.19 ', '티마트 오픈 이벤트 ', '공지사항', '메인 페이지 상단', '삭제'),
    createData('AD_3', '2021.08.09~\n' + '2022.09.19 ', '티마트 오픈 이벤트 ', '공지사항', '메인 페이지 상단', '삭제'),
    createData('AD_4', '2021.08.09~\n' + '2022.09.19 ', '스타벅스 이벤트 ', '공지사항', '메인 페이지 상단', '삭제'),
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
                            이벤트/광고 페이지
                        </Typography>
                        <Typography variant="subtitle1">
                            광고 & 이벤트를 관리하는 페이지 입니다
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
                                이벤트/광고 리스트
                            </Typography>
                            <Box sx={{width: '100%', overflow: 'hidden'}}>
                                <TableContainer sx={{maxHeight: 490}}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">번호</TableCell>
                                                <TableCell align="center">게시일</TableCell>
                                                <TableCell align="center">제목</TableCell>
                                                <TableCell align="center">이벤트/광고 내용</TableCell>
                                                <TableCell align="center">노출 위치</TableCell>
                                                <TableCell align="center">수정 및 삭제</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.number}
                                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                                >
                                                    <TableCell align="center">{row.number}</TableCell>
                                                    <TableCell align="center" width='100px'>{row.date}</TableCell>
                                                    <TableCell align="center">{row.title}</TableCell>
                                                    <TableCell align="center">{row.content}</TableCell>
                                                    <TableCell align="center">{row.location}</TableCell>
                                                    <TableCell align="center">
                                                        <DialogconfirmDeletion
                                                            variant="outlined"
                                                            text={row.button}
                                                            title='이미지 삭제 확인'
                                                            content='해당 이벤트/광고를 삭제하시겠습니까?'
                                                            btnOne='확인'
                                                            btnTwo='취소'
                                                        />
                                                        <Link href='/edit' sx={{textDecoration: 'none'}}>
                                                            <Button variant="outlined" sx={{width: '70px', ml: '10px'}}>수정</Button>
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </Box>
                            <Pagination sx={{display: 'flex', justifyContent: 'center'}} count={1} size="small" />

                            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Link href='/registration' sx={{textDecoration: 'none'}}>
                                    <Button sx={{padding: '10px 20px'}} variant="outlined">이벤트/광고 등록</Button>
                                </Link>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>);
};

Page.getLayout = page => <DashboardLayout>{page}</DashboardLayout>;

export default Page;