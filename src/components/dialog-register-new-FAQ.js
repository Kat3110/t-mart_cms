import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import {Typography} from "@mui/material";
import TextField from '@mui/material/TextField';

export default function MaxWidthDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('lg');
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant='outlined' color={props.color} size={props.size} onClick={handleClickOpen}>
                {props.text}
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'space-between', padding: '10px 20px 0 0'}}>
                    <DialogTitle sx={{fontSize: '25px'}}>{props.title}</DialogTitle>
                    <Button onClick={handleClose}><CloseIcon /></Button>
                </Box>
                <DialogContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'center',
                    padding: '60px ',
                    gap: '10px'
                }}>
                    <Box sx={{width: '100%', display: 'flex', alignItems: 'center'}}>
                        <Typography sx={{
                            fontWeight: '500',
                            width: '200px'
                        }}>
                            FAQ 제목
                        </Typography>
                        <TextField
                            sx={{width: '50%'}}
                            id="outlined-basic"
                            variant="outlined"
                            placeholder='FAQ 제목 입력.'
                        />
                    </Box>
                    <Box sx={{width: '100%', display: 'flex', alignItems: 'center'}}>
                        <Typography sx={{
                            fontWeight: '500',
                            width: '200px'
                        }}>
                            FAQ 분류
                        </Typography>
                        <TextField
                            sx={{width: '30%'}}
                            name="searchType"
                            required
                            select
                            SelectProps={{native: true}}
                            variant="outlined"
                        >
                            <option value='결제'>
                                결제
                            </option>
                            <option value='시스템'>
                                시스템
                            </option>
                            <option value='고객관련'>
                                고객관련
                            </option>
                            <option value='기타'>
                                기타
                            </option>
                        </TextField>
                    </Box>
                    <Box sx={{width: '100%', display: 'flex', alignItems: 'center'}}>
                        <Typography sx={{
                            fontWeight: '500',
                            width: '200px'
                        }}>
                            FAQ 설명 텍스트
                        </Typography>
                        <Box sx={{
                            width: '80%',
                            display: 'flex',
                            gap: '10px',
                            flexDirection: 'row',
                            alignItems: 'flex-end'
                        }}>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={6}
                                placeholder='설명'
                                sx={{width: '92%'}}
                            />
                            <Typography sx={{fontSize: '12px'}}>0 / 10000</Typography>
                        </Box>
                    </Box>
                </DialogContent>
                <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'flex-end', p: '40px 60px '}}>
                    <Button onClick={handleClose} variant="outlined" sx={{width: '150px' }}>
                        수정
                    </Button>
                </Box>

            </Dialog>
        </React.Fragment>
    );
}