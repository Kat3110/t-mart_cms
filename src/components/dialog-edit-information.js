import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogconfirmDeletion from './dialog-confirm-deletion';
import DialogDisableSuspensionMember from './dialog-disable-suspension-member';
import DialogWaitingDeleted from './dialog-waiting-deleted';
import DialogTransactionSuspension from './dialog-transaction-suspension';
import DialogFinishEditing from './dialog-finish-editing';
import DialogDelete from './dialog-delete';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import {TextField, Typography} from "@mui/material";

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
            <Button variant={props.style} color={props.color} size={props.size} onClick={handleClickOpen}>
                {props.text}
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'space-between', padding: '20px 20px 0 0'}}>
                    <DialogTitle sx={{fontSize: '25px'}}>회원 정보 수정</DialogTitle>
                    <Button onClick={handleClose} sx={{width: '30px'}}><CloseIcon fontSize='large'/></Button>
                </Box>
                <DialogContent sx={{padding: '0 20px 20px'}}>
                    <DialogContentText sx={{color: 'black', marginBottom: '20px'}}>
                        Timart 회원의 일부 정보를 수정 할 수 있는 페이지입니다.
                    </DialogContentText>
                    <Box sx={{
                        display: 'flex', flexDirection: 'row',
                        alignItems: 'center', gap: '40px', justifyContent: 'center'
                    }}>
                        <Box sx={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', gap: '10px'
                        }}>
                            <img src="/static/images/logo.jpg" alt="." style={{width: '130px', height: '150px', borderRadius: '15px'}}/>
                            <DialogconfirmDeletion
                                variant="text"
                            text='삭제'
                            title='이미지 삭제 확인'
                            content='해당 회원의 사진을 삭제하시겠습니까?'
                            btnOne='확인'
                            btnTwo='취소'
                        />

                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                            <Box sx={{
                                display: 'flex', flexDirection: 'row',
                                alignItems: 'center', gap: '10px'
                            }}>
                                <Box>
                                    <Typography variant="subtitle1">
                                        회원 번호
                                    </Typography>
                                    <TextField
                                        defaultValue='C-456386'
                                        variant="outlined"
                                    >
                                    </TextField>
                                </Box>
                                <Box>
                                    <Typography variant="subtitle1">
                                        아이디
                                    </Typography>
                                    <TextField
                                        defaultValue='Diget'
                                        variant="outlined"
                                    >
                                    </TextField>
                                </Box>
                                <Box>
                                    <Typography variant="subtitle1">
                                        닉네임
                                    </Typography>
                                    <TextField
                                        defaultValue='초코다이제'
                                        variant="outlined"
                                    >
                                    </TextField>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex', flexDirection: 'row',
                                alignItems: 'center', gap: '10px'
                            }}>
                                <Box>
                                    <Typography variant="subtitle1">
                                        회원 역할
                                    </Typography>
                                    <TextField
                                        defaultValue='구매자'
                                        variant="outlined"
                                    >
                                    </TextField>
                                </Box>
                                <Box>
                                    <Typography variant="subtitle1">
                                        셀럽 여부
                                    </Typography>
                                    <TextField
                                        defaultValue='일반'
                                        variant="outlined"
                                    >
                                    </TextField>
                                </Box>
                                <Box>
                                    <Typography variant="subtitle1">
                                        회원 상태
                                    </Typography>
                                    {/*<DialogDisableSuspensionMember variant='text' text='일반'/>*/}
                                    {/*<DialogTransactionSuspension variant='text' text='거래 정지'/>*/}
                                    {/*<DialogWaitingDeleted variant='text' text='삭제 대기'/>*/}
                                    {/*<DialogDelete variant='text' text='삭제 대기'/>*/}
                                    <TextField
                                        sx={{width: '250px'}}
                                        placeholder='초코다이제'
                                        name="searchType"
                                        required
                                        select
                                        defaultValue='아이디'
                                        variant="outlined"
                                        SelectProps={{native: true}}>

                                        <option value='일반'>
                                            일반
                                        </option>
                                        <option>
                                            거래 정지
                                        </option>
                                        <option value='아이디'>
                                            삭제 대기
                                        </option>
                                    </TextField>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex', flexDirection: 'row',
                                alignItems: 'center', gap: '10px', justifyContent: 'center'
                            }}>
                                <Box>
                                    <Typography variant="subtitle1">
                                        이메일
                                    </Typography>
                                    <TextField
                                        defaultValue='123456@gmail.com'
                                        variant="outlined"
                                    >
                                    </TextField>
                                </Box>
                                <Box>
                                    <Typography variant="subtitle1">
                                        휴대폰 번호
                                    </Typography>
                                    <TextField
                                        defaultValue='010-1234-5678'
                                        variant="outlined"
                                    >
                                    </TextField>
                                </Box>
                                <Box>
                                    <Typography variant="subtitle1">
                                        주소
                                    </Typography>
                                    <TextField
                                        defaultValue='과천관악로44 –129번'
                                        variant="outlined"
                                    >
                                    </TextField>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                    {/*<Box sx={{*/}
                    {/*    display: 'flex', flexDirection: 'row',*/}
                    {/*    alignItems: 'center', gap: '10px', marginTop: '30px', justifyContent: 'center'*/}
                    {/*}}>*/}
                    {/*    <Box>*/}
                    {/*        <Typography variant="subtitle1">*/}
                    {/*            이메일*/}
                    {/*        </Typography>*/}
                    {/*        <TextField*/}
                    {/*            defaultValue='123456@gmail.com'*/}
                    {/*            variant="outlined"*/}
                    {/*        >*/}
                    {/*        </TextField>*/}
                    {/*    </Box>*/}
                    {/*    <Box>*/}
                    {/*        <Typography variant="subtitle1">*/}
                    {/*            휴대폰 번호*/}
                    {/*        </Typography>*/}
                    {/*        <TextField*/}
                    {/*            defaultValue='010-1234-5678'*/}
                    {/*            variant="outlined"*/}
                    {/*        >*/}
                    {/*        </TextField>*/}
                    {/*    </Box>*/}
                    {/*    <Box>*/}
                    {/*        <Typography variant="subtitle1">*/}
                    {/*            주소*/}
                    {/*        </Typography>*/}
                    {/*        <TextField*/}
                    {/*            defaultValue='과천관악로44 –129번'*/}
                    {/*            variant="outlined"*/}
                    {/*        >*/}
                    {/*        </TextField>*/}
                    {/*        /!*<Typography variant="subtitle1">*!/*/}
                    {/*        /!*    관심 분야*!/*/}
                    {/*        /!*</Typography>*!/*/}
                    {/*        /!*<TextField*!/*/}
                    {/*        /!*    defaultValue='골프'*!/*/}
                    {/*        /!*    variant="outlined"*!/*/}
                    {/*        /!*>*!/*/}
                    {/*        /!*</TextField>*!/*/}
                    {/*    </Box>*/}
                    {/*    /!*<Box>*!/*/}
                    {/*    /!*    <Typography variant="subtitle1">*!/*/}
                    {/*    /!*        계좌*!/*/}
                    {/*    /!*    </Typography>*!/*/}
                    {/*    /!*    <TextField*!/*/}
                    {/*    /!*        defaultValue='138-459-7722565 기업'*!/*/}
                    {/*    /!*        variant="outlined"*!/*/}
                    {/*    /!*    >*!/*/}
                    {/*    /!*    </TextField>*!/*/}
                    {/*    /!*</Box>*!/*/}
                    {/*</Box>*/}

                    <DialogTitle sx={{fontSize: '20px', paddingBottom: 0, paddingTop: '20px'}}>판매자 정보</DialogTitle>
                    <Box sx={{
                        display: 'flex', flexDirection: 'row',
                        alignItems: 'center', gap: '10px', marginTop: '30px', justifyContent: 'center'
                    }}>
                        <Box>
                            <Typography variant="subtitle1">
                                직업
                            </Typography>
                            <TextField
                                defaultValue='제빵사'
                                variant="outlined"
                            >
                            </TextField>
                        </Box>
                        <Box sx={{width: '170px'}}>
                            <Typography variant="subtitle1">
                                관심 분야
                            </Typography>
                            <TextField
                                defaultValue='제과 제빵'
                                variant="outlined"
                            >
                            </TextField>
                        </Box>
                        <Box sx={{width: '170px'}}>
                            <Typography variant="subtitle1">
                                관심 분야2
                            </Typography>
                            <TextField
                                defaultValue='골프'
                                variant="outlined"
                            >
                            </TextField>
                        </Box>
                        <Box sx={{width: '170px'}}>
                            <Typography variant="subtitle1">
                                관심 분야3
                            </Typography>
                            <TextField
                                defaultValue='골프'
                                variant="outlined"
                            >
                            </TextField>
                        </Box>

                        <Box>
                            <Typography variant="subtitle1">
                                계좌
                            </Typography>
                            <TextField
                                defaultValue='138-459-7722565 기업'
                                variant="outlined"
                            >
                            </TextField>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex', flexDirection: 'row',
                        alignItems: 'center', gap: '10px', marginTop: '30px', justifyContent: 'center', padding: '0 60px'
                    }}>
                        <Box>
                            <Typography variant="subtitle1">
                                학력
                            </Typography>
                            <TextField
                                defaultValue='순천향 대학교 졸업'
                                variant="outlined"
                            >
                            </TextField>
                        </Box>
                        <Box>
                            <Typography variant="subtitle1">
                                이력
                            </Typography>
                            <TextField
                                defaultValue='제과점 운영'
                                variant="outlined"
                            >
                            </TextField>
                        </Box>
                        <Box sx={{flex: '1'}}>
                            <Typography variant="subtitle1">
                                소개 영상
                            </Typography>
                            <TextField
                                defaultValue='짧은 영상'
                                variant="outlined"
                                sx={{width: '100%'}}
                            >
                            </TextField>

                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center', justifyContent: 'flex-end', padding: '10px 60px'
                    }}>
                        <DialogconfirmDeletion
                            variant="outlined"
                            color="error"
                            style="outlined"
                            text='삭제'
                            title='이벤트/광고 삭제 확인'
                            content='해당 이벤트/광고를 삭제하시겠습니까?'
                            btnOne='확인'
                            btnTwo='취소'
                        />
                    </Box>

                    <Box sx={{
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'flex-start', gap: '10px', marginTop: '0', padding: '0 60px'
                    }}>
                            <Typography variant="subtitle1">
                                자기소개
                            </Typography>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            placeholder='Please introduce yourself'
                            sx={{width: '100%'}}
                        />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center', justifyContent: 'flex-end', padding: '10px 60px'
                    }}>
                        <DialogFinishEditing variant='outlined'  text='수정 완료' />
                    </Box>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}