import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
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
            <Button sx={{width: '200px' }} variant='outlined' color={props.color} size={props.size} onClick={handleClickOpen}>
                {props.text}
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'space-between', padding: '10px 20px 0 0'}}>
                    <DialogTitle sx={{fontSize: '15px'}}>수정 확인</DialogTitle>
                    <Button onClick={handleClose}><CloseIcon /></Button>
                </Box>
                <DialogContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'center',
                    padding: '60px 0',
                    gap: '10px'
                }}>
                    <Typography sx={{fontWeight: '600'}}>입력된 내용으로</Typography>
                    <Typography sx={{fontWeight: '600'}}>해당 회원을 수정 하시겠습니까?</Typography>
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