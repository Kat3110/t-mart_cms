import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogResponseRegistration from './dialog-response-registration';
import CloseIcon from '@mui/icons-material/Close';
import {TextField, Typography} from "@mui/material";

export default function DialogInformationAboutContent(props) {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('lg');

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
            <Button variant='outlined' onClick={handleClickOpen}>
                {props.text}
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '20px 20px 0 0'}}>
                    <Button onClick={handleClose} sx={{width: '30px'}}><CloseIcon fontSize='large'/></Button>
                </Box>
                <DialogContent sx={{padding: '0 20px 20px'}}>
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Typography variant='h6'>제목</Typography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                gap: '10px'
                            }}>
                                <Typography variant='h6'> 질문 등록일 :</Typography>
                                <Typography variant='h6'>2022/11/05</Typography>
                            </Box>
                        </Box>
                        <TextField
                            className='textfield--custom'
                            disabled
                            defaultValue='돈이 입금되지 않았습니다.'
                            variant="outlined"
                            fullWidth={true}
                            sx={{pt: '10px'}}
                        />
                    </Box>

                    <Box sx={{pt: '10px'}}>
                        <Typography variant='h6'>구분</Typography>
                        <TextField
                            className='textfield--custom'
                            disabled
                            defaultValue='결제'
                            variant="outlined"
                            fullWidth={true}
                            sx={{pt: '10px'}}
                        />
                    </Box>

                    <Box sx={{pt: '10px'}}>
                        <Typography variant='h6'>문의 내용</Typography>
                        <TextField
                            multiline
                            className='textfield--custom'
                            disabled
                            rows={4}
                            defaultValue='금액이 정상적으로 입금되지 않았습니다. 어찌된 일인가요?'
                            variant="outlined"
                            fullWidth={true}
                            sx={{pt: '10px', color: 'black'}}
                        />
                    </Box>

                    <Box sx={{pt: '10px'}}>
                        <Typography variant='h6'>답변 입력</Typography>
                        <TextField
                            multiline
                            rows={4}
                            defaultValue=
                              '안녕하세요 고객님 Timart 입니다.
                                금액이 정상적으로 입금되지 않았다고 문의주셨는데요, 확인 결과 아직 타임구매자님이 거래 완료 버튼을 눌러주지 않아 입금처리가 되지
                                않은 상태로 보입니다. 최대 7일 까지 거래 완료 버튼을 누르지 않을 경우 자동으로 입금되니 11월12일 이후로도 입금이 되지 않는다면 다시 문의주시길 바라곘습 니다.
                                감사합니다.'
                            variant="outlined"
                            fullWidth={true}
                            sx={{pt: '10px'}}
                        />
                    </Box>
                    <Box sx={{pt: '10px', display: 'flex', justifyContent: 'flex-end'}}>
                        <DialogResponseRegistration text={props.btn}/>
                    </Box>

                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}