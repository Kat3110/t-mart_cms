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
    Checkbox,
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
import AlertDialogSlide from "../../components/dialog";

const columns = [{
    id: 'name', label: 'Name', minWidth: 170
}, {
    id: 'code', label: 'ISO\u00a0Code', minWidth: 100
}, {
    id: 'number', label: '번호', minWidth: 170, align: 'center',
}, {
    id: 'date', label: '가입 일시', minWidth: 170, align: 'center',
}, {
    id: 'id', label: '아이디', minWidth: 170, align: 'center',
}, {
    id: 'nickname', label: '닉네임', minWidth: 170, align: 'center',
}, {
    id: 'birth', label: '생년월일', minWidth: 170, align: 'center',
}, {
    id: 'contact', label: '연락처', minWidth: 170, align: 'center',
}, {
    id: 'status', label: '상태', minWidth: 170, align: 'center',
}, {
    id: 'processing', label: '탈퇴 처리', minWidth: 170, align: 'center',
},
];

function createData(number, date, id, nickname, birth, contact, status, processing) {
    return {number, date, id, nickname, birth, contact, status, processing};
}

const rows = [
    createData(1, '2021.08.09', 'yemtem', '태민', '1993.01.15', '010-1234-1234', '회원', '탈퇴'),
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
                            개인 회원 관리 페이지
                        </Typography>
                        <Typography variant="subtitle1">
                            가입한 회원들의 정보를 열람할 수 있는 페이지입니다.
                        </Typography>
                    </Box>

                    <Card>
                        <CardContent sx={{display: 'flex', flexDirection: 'column', gap: '10px 0'}}>
                            <Typography variant="h5">
                                회원 조회
                            </Typography>
                            <Box sx={{
                                display: 'flex', alignItems: 'center', gap: '0 20px'
                            }}>
                                <Typography variant="subtitle1" sx={{width: '15%'}}>
                                    기간 조회
                                </Typography>
                                <Box sx={{
                                    width: '70%', display: 'flex', gap: '10px 0', flexDirection: 'column',
                                }}>
                                    <FormControl>
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group">
                                            <FormControlLabel value="기간 지정" control={<Radio/>} label="기간 지정"/>
                                            <FormControlLabel value="월별" control={<Radio/>} label="월별"/>
                                        </RadioGroup>
                                    </FormControl>
                                    <Box sx={{
                                        display: 'flex', gap: '0 5px'
                                    }}>
                                        <ButtonGroup sx={{width: '30%'}} variant="outlined"
                                                     aria-label="outlined button group">
                                            <Button>금일</Button>
                                            <Button>1주일</Button>
                                            <Button>1개월</Button>
                                            <Button>3개월</Button>
                                        </ButtonGroup>
                                        <TextField
                                            sx={{width: '70%'}}
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
                                    sx={{minWidth: 200, width: '15%'}}
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
                                <Box sx={{width: '70%'}}>
                                    <InputSearch/>
                                </Box>

                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                                <Button variant='outlined' size='large'>조회</Button>
                            </Box>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            border: '1px solid #80808002'
                        }}>
                            <Typography variant='h5'>가입 회원 수 </Typography>
                            <Typography variant='h4'>0 원</Typography>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #80808002',
                            gap: '20px 0'
                        }}>
                            <Button sx={{
                                margin: '0 0 0 auto', minWidth: 100, fontSize: '1.05rem', backgroundColor: '#1d93fe',
                            }} variant="contained">선택회원 탈퇴
                            </Button>
                            <Box sx={{width: '100%', overflow: 'hidden'}}>
                                <TableContainer sx={{maxHeight: 490}}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell padding="checkbox">
                                                    <Checkbox checked color="primary"/>
                                                </TableCell>
                                                <TableCell align="center">번호</TableCell>
                                                <TableCell align="center">가입 일시</TableCell>
                                                <TableCell align="center">아이디</TableCell>
                                                <TableCell align="center">닉네임</TableCell>
                                                <TableCell align="center">생년월일</TableCell>
                                                <TableCell align="center">연락처</TableCell>
                                                <TableCell align="center">상태</TableCell>
                                                <TableCell align="center">탈퇴 처리</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (<TableRow
                                                key={row.number}
                                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        value="true"
                                                    />
                                                </TableCell>
                                                <TableCell align="center">{row.number}</TableCell>
                                                <TableCell align="center">{row.date}</TableCell>
                                                <TableCell align="center">{row.id}</TableCell>
                                                <TableCell
                                                    align="center">{row.nickname}</TableCell>
                                                <TableCell align="center">{row.birth}</TableCell>
                                                <TableCell align="center">{row.contact}</TableCell>
                                                <TableCell align="center">{row.status}</TableCell>
                                                <TableCell align="center">
                                                    <AlertDialogSlide style="outlined" text={row.processing}
                                                                      title={"회원 탈퇴"} content={'해당 사용자를를 탈퇴하시겠습니까?'}
                                                                      subtitle={'*삭제시 로그인이 불가능합니다.'}
                                                                      btnDelete={'탈퇴'}
                                                    />
                                                </TableCell>
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