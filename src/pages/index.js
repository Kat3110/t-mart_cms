import Head from 'next/head';
import Router from 'next/router';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
} from '@mui/material';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: 'demo@devias.io',
      password: 'Password123',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup.string().max(255).required('Password is required'),
    }),
    onSubmit: () => {
      Router.push('/').catch(console.error);
    },
  });

  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <Box
        sx={{
          display: 'flex',
          mt: 10,
          mb: 5,
          mx: 'auto',
          width: '300px',
          '& img': {
            width: '100%',
          },
          justifyContent: 'center'
        }}
      >
        <img src="/static/images/logo.jpg" style={{borderRadius: '50%', width: '200px', height: '200px'}}/>
      </Box>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          minHeight: '100%',
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{mb: 3}}>
              <Typography color="textPrimary" variant="h4" textAlign={'center'}>
                TIMART 관리자 페이지
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="아이디를 입력해주세요."
              margin="normal"
              name="email"
              // onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              // value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="비밀번호를 입력해주세요."
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              // value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{py: 2}}>
              <Link href='/member/memberList'>
                <Button
                  sx={{backgroundColor: '#1d93fe'}}
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  로그인하기 로그인하기 로그인하기 로그인하기
                </Button>
              </Link>
            </Box>
          </form>
        </Container>

      </Box>
    </>
  );
};

export default Login;