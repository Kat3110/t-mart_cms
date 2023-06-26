import * as React from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardContent,
    Container,
    Typography,
} from '@mui/material';
import {DashboardLayout} from '/src/components/dashboard-layout';
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Stack from "@mui/material/Stack";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Chart from "/src/components/chart.js";
import ChartBest from "/src/components/chart-best";
import ChartRegion from "/src/components/chart-region";
import ChartTime from "/src/components/chart-time";
import ChartPrice from "/src/components/chart-price";
import ChartStatistics from "/src/components/chart-statistics";
import ChartPie from "/src/components/chart-pie";
import ChartPieTwo from "/src/components/chart-pie-two";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

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
    const [tab, setTab] = React.useState('1');

    const handleChangeTab = (event, newValue) => {
        setTab(newValue);
    };

    const [value, setValue] = React.useState(dayjs('2023-02-18T21:11:54'));
    const handleChangeTwo = (newValueTwo) => {
        setValueTwo(newValueTwo);
    };
    const [valueTwo, setValueTwo] = React.useState(dayjs('2023-02-18T21:11:54'));
    const handleChange = (newValue) => {
        setValue(newValue);
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
                            콘텐츠 관리
                        </Typography>
                        <Typography variant="subtitle1">
                            Timart 의 콘텐츠를 관리하는 페이지입니다
                        </Typography>
                    </Box>

                    <Card>
                        <CardContent sx={{display: 'flex', flexDirection: 'column', gap: '10px 0'}}>
                            <Typography variant="h5">
                                통계 검색
                            </Typography>
                            <Box sx={{
                                display: 'flex', alignItems: 'flex-start', gap: '0 20px', flexDirection: 'row'
                            }}>
                                <Box sx={{
                                    display: 'flex', gap: '30px', flexDirection: 'column', paddingTop: '20px'
                                }}>
                                    <Typography variant="h6" sx={{width: '170px'}}>
                                        통계 종류
                                    </Typography>
                                    <Typography variant="h6" sx={{width: '170px'}}>
                                        조건 설정
                                    </Typography>
                                    <Typography variant="h6" sx={{width: '170px'}}>
                                        세부 검색기간 설정
                                    </Typography>
                                </Box>
                                <Box className={'custom-tabs'} sx={{width: '100%', typography: 'body1'}}>
                                    <TabContext value={tab}>
                                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                            <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                                                <Tab label="기간별 거래 통계" value="1"/>
                                                <Tab label="Best 거래 활동분야" value="2"/>
                                                <Tab label="지역별 통계" value="3"/>
                                                <Tab label="거래 평균 가격" value="4"/>
                                                <Tab label="Open시간대 통계" value="5"/>
                                                <Tab label="거래 통계" value="6"/>
                                            </TabList>
                                        </Box>
                                        <TabPanel value="1">
                                            <Box sx={{
                                                display: 'flex', alignItems: 'center', gap: '0 20px'
                                            }}>
                                                <ButtonGroup
                                                    variant="outlined"
                                                    aria-label="outlined button group">
                                                    <Button sx={{width: '170px'}}>주 통계 </Button>
                                                    <Button sx={{width: '170px'}}>월 통계 </Button>
                                                    <Button sx={{width: '170px'}}>4분기 통계</Button>
                                                    <Button sx={{width: '170px'}}>2분기 통계</Button>
                                                    <Button sx={{width: '170px'}}>연도별 통계</Button>
                                                </ButtonGroup>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex', alignItems: 'center', gap: '0 20px'
                                            }}>
                                                <Box sx={{
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
                                            <Card>
                                                <CardContent sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    border: '1px solid #80808002',
                                                    gap: '20px 0'
                                                }}>
                                                    <Typography variant="h6">
                                                        Timart 전체 주간 거래 통계
                                                    </Typography>
                                                    <Chart/>
                                                </CardContent>
                                            </Card>
                                        </TabPanel>

                                        <TabPanel value="2">
                                            <Box sx={{
                                                display: 'flex', alignItems: 'center', gap: '0 20px'
                                            }}>
                                                <ButtonGroup
                                                    variant="outlined"
                                                    aria-label="outlined button group">
                                                    <Button sx={{width: '170px'}}>활동분야</Button>
                                                </ButtonGroup>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex', alignItems: 'center', gap: '0 20px'
                                            }}>
                                                <Box sx={{
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
                                            <Card>
                                                <CardContent sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    border: '1px solid #80808002',
                                                    gap: '20px 0'
                                                }}>
                                                    <Typography variant="h6">
                                                        Timart 전체 활동분야 별 거래 통계
                                                    </Typography>
                                                    <ChartBest/>
                                                </CardContent>
                                            </Card>
                                        </TabPanel>

                                        <TabPanel value="3">
                                            <Box sx={{
                                                display: 'flex', alignItems: 'center', gap: '0 20px'
                                            }}>
                                                <ButtonGroup
                                                    variant="outlined"
                                                    aria-label="outlined button group">
                                                    <Button sx={{width: '170px'}}>시 </Button>
                                                    <Button sx={{width: '170px'}}>군</Button>
                                                    <Button sx={{width: '170px'}}>구</Button>
                                                </ButtonGroup>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex', alignItems: 'center', gap: '0 20px'
                                            }}>
                                                <Box sx={{
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
                                            <Card>
                                                <CardContent sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    border: '1px solid #80808002',
                                                    gap: '20px 0'
                                                }}>
                                                    <Typography variant="h6">
                                                        Timart 전체 지역 별 거래 통계
                                                    </Typography>
                                                    <ChartRegion/>
                                                </CardContent>
                                            </Card>
                                        </TabPanel>

                                        <TabPanel value="4">
                                            <Box sx={{
                                                display: 'flex', alignItems: 'center', gap: '0 20px'
                                            }}>
                                                <ButtonGroup
                                                    variant="outlined"
                                                    aria-label="outlined button group">
                                                    <Button sx={{width: '170px'}}>월 별 평균가 & 최고가</Button>
                                                </ButtonGroup>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex', alignItems: 'center', gap: '0 20px'
                                            }}>
                                                <Box sx={{
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
                                            <Card>
                                                <CardContent sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    border: '1px solid #80808002',
                                                    gap: '20px 0'
                                                }}>
                                                    <Typography variant="h6">
                                                        Timart 전체 평균 가격 및 최고 가격
                                                    </Typography>
                                                    <ChartPrice/>
                                                </CardContent>
                                            </Card>
                                        </TabPanel>

                                        <TabPanel value="5">
                                            <Box sx={{
                                                display: 'flex', alignItems: 'center', gap: '0 20px'
                                            }}>
                                                <ButtonGroup
                                                    variant="outlined"
                                                    aria-label="outlined button group">
                                                    <Button sx={{width: '170px'}}>Open 시간</Button>
                                                </ButtonGroup>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex', alignItems: 'center', gap: '0 20px'
                                            }}>
                                                <Box sx={{
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
                                            <Card>
                                                <CardContent sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    border: '1px solid #80808002',
                                                    gap: '20px 0'
                                                }}>
                                                    <Typography variant="h6">
                                                        Timart 전체 시간대 별 거래 횟수
                                                    </Typography>
                                                    <ChartTime/>
                                                </CardContent>
                                            </Card>
                                        </TabPanel>

                                        <TabPanel value="6">
                                            <Box sx={{
                                                display: 'flex', alignItems: 'center', gap: '0 20px'
                                            }}>
                                                <ButtonGroup
                                                    variant="outlined"
                                                    aria-label="outlined button group">
                                                    <Button sx={{width: '170px'}}>거래 성사율</Button>
                                                    <Button sx={{width: '170px'}}>거래 빈도</Button>
                                                    <Button sx={{width: '170px'}}>재구매율</Button>
                                                </ButtonGroup>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex', alignItems: 'center', gap: '0 20px'
                                            }}>
                                                <Box sx={{
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
                                            <Card>
                                                <CardContent sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    border: '1px solid #80808002',
                                                    gap: '20px 0'
                                                }}>
                                                    <Typography variant="h6">
                                                        Timart 전체 거래 통계
                                                    </Typography>
                                                    <Box sx={{display: 'flex', width: '100%'}}>
                                                        <Box sx={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            width: '300px'
                                                        }}>
                                                            <ChartPie/>
                                                        </Box>
                                                        <Box sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            width: '300px'
                                                        }}>
                                                            <ChartStatistics/>
                                                        </Box>
                                                        <Box sx={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            width: '300px'
                                                        }}>
                                                            <ChartPieTwo/>
                                                        </Box>
                                                    </Box>

                                                </CardContent>
                                            </Card>
                                        </TabPanel>
                                    </TabContext>
                                </Box>
                            </Box>

                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>);
};

Page.getLayout = page => <DashboardLayout>{page}</DashboardLayout>;

export default Page;