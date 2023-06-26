import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import {InputAdornment, OutlinedInput, TextField, Typography} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
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
                <DialogContent sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '60px 30px',
                    gap: '20px'
                }}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography sx={{width: '130px'}}>이름 :</Typography>
                        <TextField size='small' variant="outlined" placeholder='박태민' />
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography sx={{width: '130px'}}>아이디 :</Typography>
                        <TextField size='small' variant="outlined" placeholder='yemtem' />
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography sx={{width: '130px'}}>비밀번호 :</Typography>
                        <FormControl size='small' sx={{ width: '250px' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography sx={{width: '130px'}}>이메일 : </Typography>
                        <TextField size='small' variant="outlined" placeholder='admin@Timart.com' />
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography sx={{width: '130px'}}>휴대폰번호 :  </Typography>
                        <TextField size='small' variant="outlined" placeholder='010-1234-1234' />
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography sx={{width: '130px'}}>직급 :</Typography>
                        <TextField size='small' variant="outlined" placeholder='과장' />
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography sx={{width: '130px'}}>관리자 구분 :</Typography>
                        <TextField
                            sx={{width: '250px'}}
                            name="searchType"
                            required
                            select
                            size='small'
                            SelectProps={{native: true}}
                            variant="outlined"
                        >
                            <option value='1'>
                                마스터 관리자
                            </option>
                            <option value='2'>
                                마스터 관리자
                            </option>
                        </TextField>
                    </Box>
                </DialogContent>
                <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'center', gap: '10px', pb: '20px'}}>
                    <Button onClick={handleClose} variant="outlined" color='success' sx={{width: '100px' }}>
                        저장
                    </Button>
                    <Button onClick={handleClose} variant="outlined" color='error' sx={{width: '100px' }}>
                        닫기
                    </Button>
                </Box>

            </Dialog>
        </React.Fragment>
    );
}