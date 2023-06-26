import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import {TextField, Typography} from "@mui/material";

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
            <Button sx={{width: '100px' }} variant={props.style} color={props.color} size={props.size} onClick={handleClickOpen}>
                {props.text}
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'space-between', padding: '10px 20px'}}>
                    <Typography sx={{fontWeight: '600'}}>회원 거래 정지 사유를 작성해주세요.</Typography>
                    <Button onClick={handleClose}><CloseIcon /></Button>
                </Box>
                <DialogContent sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px 60px 40px',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    <TextField
                        name="searchType"
                        required
                        select
                        defaultValue='정지 기간을 선택해주세요.'
                        variant="outlined"
                        sx={{width: '100%'}}
                        SelectProps={{native: true}}>
                        <option>
                            정지 기간을 선택해주세요.
                        </option>
                        <option>
                          1일
                        </option>
                        <option>
                            3일
                        </option>
                        <option>
                            7일
                        </option>
                        <option>
                            30일
                        </option>
                    </TextField>

                    <TextField
                        multiline
                        rows={4}
                        sx={{width: '100%'}}
                        placeholder='사유를 입력해주세요'
                    />
                    <Typography sx={{fontWeight: '600'}}>해당 회원의 이용을 정지하시겠습니까?
                    </Typography>
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