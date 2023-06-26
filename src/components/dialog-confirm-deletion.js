import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';

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
            <Button variant={props.variant} color={props.color} size={props.size} onClick={handleClickOpen}>
                {props.text}
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'space-between', padding: '10px 20px 0 0'}}>
                    <DialogTitle sx={{fontSize: '15px'}}>{props.title}</DialogTitle>
                    <Button onClick={handleClose}><CloseIcon /></Button>
                </Box>
                <DialogContent sx={{display: 'flex', width: '100%', justifyContent: 'center', padding: '60px 0'}}>
                        {props.content}
                </DialogContent>
                <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'center', gap: '10px', pb: '20px'}}>
                    <Button onClick={handleClose} variant="outlined" color='success' sx={{width: '100px' }}>
                        {props.btnOne}
                    </Button>
                    <Button onClick={handleClose} variant="outlined" color='error' sx={{width: '100px' }}>
                        {props.btnTwo}
                    </Button>
                </Box>

            </Dialog>
        </React.Fragment>
    );
}