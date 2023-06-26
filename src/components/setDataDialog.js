import * as React from 'react';
import {
    Box,
    Button, Typography
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SetUserDialog(props) {
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
                        sx={{mt: 7,
                            pb: 7,
                            borderBottom: '1px solid #8080805c',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px 0'
                    }}>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start',}}>
                            <Typography variant='h5' sx={{width: '40%', textAlign: 'left'}}>이름 :</Typography>
                            <TextField
                                required
                                id="outlined-required"
                                placeholder="박태민"
                                size="small"
                            />
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start',}}>
                            <Typography variant='h5' sx={{width: '40%', textAlign: 'left'}}>아이디 :</Typography>
                            <TextField
                                required
                                id="outlined-required"
                                placeholder="yemtem"
                                size="small"
                            />
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start',}}>
                            <Typography variant='h5' sx={{width: '40%', textAlign: 'left'}}>비밀번호 : </Typography>
                            <TextField
                                id="outlined-password-input"
                                type="password"
                                autoComplete="current-password"
                                placeholder='******'
                                size="small"
                            />
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start',}}>
                            <Typography variant='h5' sx={{width: '40%', textAlign: 'left'}}>이메일 : </Typography>
                            <TextField
                                autoFocus
                                id="name"
                                type="outlined-email"
                                variant="outlined"
                                placeholder='admin@UTRUU.com'
                                size="small"
                            />
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start',}}>
                            <Typography variant='h5' sx={{width: '40%', textAlign: 'left'}}>휴대폰번호 :</Typography>
                            <TextField
                                id="outlined-number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder='010-1234-1234'
                                size="small"
                            />
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start',}}>
                            <Typography variant='h5' sx={{width: '40%', textAlign: 'left'}}>직급 : </Typography>
                            <TextField
                                required
                                id="outlined-required"
                                placeholder="과장"
                                size="small"
                            />
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start',}}>
                            <Typography variant='h5' sx={{width: '40%', textAlign: 'left'}}>관리자 구분 :</Typography>
                            <TextField
                                name="searchType"
                                required
                                select
                                SelectProps={{native: true}}
                                variant="outlined"
                                size="small"
                                sx={{width: '46%'}}
                            >
                                <option value='전체'>
                                    마스터 관리자
                                </option>
                            </TextField>

                        </Box>

                    </DialogContent>
                    <DialogActions sx={{
                        p: 2,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Button size='large' variant='outlined' color='success' onClick={handleClose} sx={{width: '40%'}}>
                            저장
                        </Button>
                        <Button size='large' variant='outlined' color='error' onClick={handleClose} sx={{width: '40%'}}>닫기</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
}