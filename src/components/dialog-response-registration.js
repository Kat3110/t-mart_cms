import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
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
            <Button variant='outlined' onClick={handleClickOpen}>
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
                    padding: '70px 0',
                    flexDirection: 'column'
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Typography >
                            CS 답변을 등록하시겠습니까?
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