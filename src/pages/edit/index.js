import * as React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container, Link,
    Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {DashboardLayout} from '/src/components/dashboard-layout';
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import CloseIcon from "@mui/icons-material/Close";


const Page = () => {
    const [value, setValue] = React.useState(dayjs('2023-01-18T21:11:54'));
    const [valueTwo, setValueTwo] = React.useState(dayjs('2023-02-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const handleChangeTwo = (newValueTwo) => {
        setValueTwo(newValueTwo);
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
                            이벤트 및 광고 수정 페이지
                        </Typography>
                        <Typography variant="subtitle1">
                            이벤트 및 광고를 수정하는 페이지 입니다
                        </Typography>
                    </Box>

                    <Card>
                        <CardContent sx={{display: 'flex', flexDirection: 'column', gap: '10px 0'}}>
                            <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'space-between', padding: '10px 0 40px 0'}}>
                                <Typography variant="h5">
                                    등록
                                </Typography>
                                <Link href='/notice/noticeAdvertising' sx={{textDecoration: 'none'}}>
                                   <CloseIcon />
                                </Link>
                            </Box>
                            <Box sx={{
                                display: 'flex', alignItems: 'center', gap: '0 20px'
                            }}>
                                <Typography variant="h6" sx={{width: '200px'}}>
                                    제목
                                </Typography>
                                <Box sx={{
                                    width: '100%', display: 'flex', gap: '10px 0', flexDirection: 'column',
                                }}>
                                    <TextField id="outlined-basic" error placeholder='이벤트 및 광고명 입력.'
                                               variant="outlined"/>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex', alignItems: 'center', gap: '0 20px'
                            }}>
                                <Typography variant="h6" sx={{width: '200px'}}>
                                    위치
                                </Typography>
                                <Box sx={{
                                    width: '100%', display: 'flex', gap: '10px 0', flexDirection: 'column',
                                }}>
                                    <TextField
                                        sx={{width: '200px'}}
                                        name="searchType"
                                        required
                                        select
                                        SelectProps={{native: true}}
                                        variant="outlined"
                                    >
                                        <option>
                                            메인 상단
                                        </option>
                                        <option>
                                            메인 상단
                                        </option>
                                    </TextField>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex', alignItems: 'center', gap: '0 20px'
                            }}>
                                <Typography variant="h6" sx={{width: '200px'}}>
                                    기간 선택
                                </Typography>
                                <Box sx={{
                                    width: '100%',
                                    display: 'flex',
                                    gap: '40px',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack spacing={3}>
                                            <DesktopDatePicker
                                                inputFormat="MM/DD/YYYY"
                                                value={value}
                                                onChange={handleChange}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                    ~
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack spacing={3}>
                                            <DesktopDatePicker
                                                inputFormat="MM/DD/YYYY"
                                                value={valueTwo}
                                                onChange={handleChangeTwo}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </Box>

                            </Box>
                            <Box sx={{
                                display: 'flex', alignItems: 'center', gap: '0 20px'
                            }}>
                                <Typography variant="h6" sx={{width: '200px'}}>
                                    이미지(APP)
                                </Typography>
                                <Box sx={{
                                    width: '100%',
                                    display: 'flex',
                                    gap: '40px',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Button
                                        variant="outlined"
                                        component="label"
                                        size='large'
                                        sx={{pl: '70px', pr: '70px'}}
                                    >
                                        파일 선택
                                        <input
                                            type="file"
                                            hidden
                                        />
                                    </Button>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex', alignItems: 'center', gap: '0 20px'
                            }}>
                                <Typography variant="h6" sx={{width: '200px'}}>
                                    노출 제목 텍스트
                                </Typography>
                                <Box sx={{
                                    width: '100%',
                                    display: 'flex',
                                    gap: '10px',
                                    flexDirection: 'row',
                                    alignItems: 'flex-end'
                                }}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={4}
                                        placeholder='제목'
                                        sx={{width: '300px'}}
                                    />
                                    <Typography sx={{fontSize: '12px'}}>0 / 100</Typography>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex', alignItems: 'center', gap: '0 20px'
                            }}>
                                <Typography variant="h6" sx={{width: '200px'}}>
                                    노출 설명 텍스트
                                </Typography>
                                <Box sx={{
                                    width: '100%',
                                    display: 'flex',
                                    gap: '10px',
                                    flexDirection: 'row',
                                    alignItems: 'flex-end'
                                }}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={4}
                                        placeholder='설명'
                                        sx={{width: '300px'}}
                                    />
                                    <Typography sx={{fontSize: '12px'}}>0 / 100</Typography>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex', alignItems: 'center', gap: '0 20px'
                            }}>
                                <Typography variant="h6" sx={{width: '200px'}}>
                                    연결URL
                                </Typography>
                                <Box sx={{
                                    width: '100%',
                                    display: 'flex',
                                    gap: '10px',
                                    flexDirection: 'row',
                                    alignItems: 'flex-end'
                                }}>
                                    <TextField
                                        placeholder='URL을 입력해주세요.'
                                        sx={{width: '100%'}}
                                        error
                                    />
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex', alignItems: 'center', gap: '0 20px'
                            }}>
                                <Typography variant="h6" sx={{width: '160px'}}>
                                    사용여부
                                </Typography>
                                <FormControl>
                                    <RadioGroup sx={{display:'flex', gap: '60px'}}
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group">
                                        <FormControlLabel sx={{m: 0}} value="사용 " control={<Radio/>} label="사용"/>
                                        <FormControlLabel value="사용 안함" control={<Radio/>} label="사용 안함"/>
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button sx={{padding: '10px 40px'}} variant="outlined">등록</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>);
};

Page.getLayout = page => <DashboardLayout>{page}</DashboardLayout>;

export default Page;