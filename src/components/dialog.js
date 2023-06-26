import * as React from 'react';
import {
    Box,
    Button
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant={props.style} color={props.color} size={props.size} onClick={handleClickOpen}>
                {props.text}
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <Box
                    sx={{
                        width: '500px', display: 'flex', flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <DialogTitle
                        sx={{padding: 2, borderBottom: '1px solid #8080805c', width: '100%', textAlign: 'center'}}>
                        {props.title}
                    </DialogTitle>
                    <DialogContent
                        sx={{mt: 7, pb: 7, borderBottom: '1px solid #8080805c', width: '100%', textAlign: 'center'}}>
                        <DialogContentText id="alert-dialog-slide-description" sx={{marginBottom: 2}}>
                            {props.content}</DialogContentText>
                        <DialogContentText id="alert-dialog-slide-description" sx={{color: 'red'}}>
                            {props.subtitle}
                        </DialogContentText>

                    </DialogContent>
                    <DialogActions sx={{p: 2}}>
                        <Button size='large' variant='outlined' color='error' onClick={handleClose}
                                sx={{mr: 2}}>
                            {props.btnDelete}
                        </Button>
                        <Button size='large' variant='outlined' onClick={handleClose}>닫기</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
}