import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from '@mui/material/Checkbox';
import {Card, CardContent, TextField, Typography} from "@mui/material";

export default function MaxWidthDialog() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleMaxWidthChange = (event) => {
        setMaxWidth(
            // @ts-expect-error autofill of arbitrary value is not handled.
            event.target.value,
        );
    };
    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                알림 발송
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: '20px'}}>
                    <DialogTitle>공지사항 알림 발송</DialogTitle>
                    <Button onClick={handleClose}><CloseIcon /></Button>
                </Box>

                <DialogContent>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: '0 auto 0 0',
                            width: '100%'
                        }}
                    >
                        <FormControlLabel control={<Checkbox defaultChecked />} label="전체 발송하기" />
                        <Box sx={{
                            display: 'flex',
                            gap: '10px',
                            width: '100%'
                        }}>
                            <TextField sx={{maxWidth: '1000px', width: '100%'}} size="small" id="outlined-basic" placeholder='회원검색' variant="outlined" />
                            <Button size='small' variant="outlined">검색</Button>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '40px',
                            width: '100%'
                        }}>
                            <FormControlLabel control={<Checkbox defaultChecked />} />
                            <Box>태민</Box>
                            <Box>yemtem</Box>
                            <Box>회원</Box>
                        </Box>
                    </Box>
                        <Typography sx={{
                            m: '30px auto 0 0',
                            width: '100%'
                        }}>
                            수신대상자 286명
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            width: '100%'
                        }}>
                            <Typography
                                fontSize='15px'
                                variant="h5"
                                sx={{
                                m: '30px auto 0 0',
                                width: '100%'
                            }}>
                                알림 메시지 제목
                            </Typography>
                            <TextField sx={{maxWidth: '1500px', width: '100%'}} size="small" placeholder='제목을 입력하세요.(40자 이내(공백 포함))' variant="outlined" />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            width: '100%'
                        }}>
                            <Typography
                                fontSize='15px'
                                variant="h5"
                                sx={{
                                m: '30px auto 0 0',
                                width: '100%'
                            }}>
                                알림 메시지 내용
                            </Typography>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                placeholder="내용을 입력하세요. (140자 이내(공백포함))"
                            />
                        </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center', mt:'30px'}}>
                        <Button variant="contained" sx={{p: '10px 30px'}}>보내기</Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}