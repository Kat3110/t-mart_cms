import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import {Typography} from "@mui/material";

export default function MaxWidthDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button sx={{width: '50px' }} variant={props.style} color={props.color} size={props.size} onClick={handleClickOpen}>
                {props.text}
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'flex-end', padding: '10px 20px 0 0'}}>
                    <Button onClick={handleClose}><CloseIcon /></Button>
                </Box>
                <DialogContent sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px 50px 40px',
                    flexDirection: 'column'
                }}>
                    <Box sx={{
                        display: 'flex',
                        width: '40%',
                        justifyContent: 'flex-start',
                        gap: '10px'
                    }}>
                        <Typography >닉네임 :</Typography>
                        <Typography sx={{color: 'red'}}>김밥천국좋아234</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        width: '40%',
                        justifyContent: 'flex-start',
                        gap: '10px'
                    }}>
                        <Typography>ID :</Typography>
                        <Typography sx={{color: 'red'}}>kimbablove234</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        width: '40%',
                        justifyContent: 'flex-start',
                        gap: '10px'
                    }}>
                        <Typography sx={{color: 'red'}}>정지 기간 :</Typography>
                        <Typography sx={{color: 'red'}}> 30일</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        width: '40%',
                        justifyContent: 'flex-start',
                        gap: '10px'
                    }}>
                        <Typography sx={{color: 'red'}}>정지 사유 :</Typography>
                        <Typography sx={{color: 'red'}}>불법 광고 유포</Typography>
                    </Box>
                    <Box sx={{
                        p: '30px 0 0'
                    }}>
                        <Typography  sx={{fontWeight: '600'}}>해당 회원의 정지를 해제하시겠습니까?
                        </Typography>
                    </Box>

                </DialogContent>
                <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'center', gap: '10px', pb: '20px'}}>
                    <Button onClick={handleClose} variant="outlined" color='success' sx={{width: '100px' }}>
                        확인
                    </Button>
                    <Button onClick={handleClose} variant="outlined" color='error' sx={{width: '100px' }}>
                        취소
                    </Button>
                </Box>

            </Dialog>
        </React.Fragment>
    );
}