import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Image from "../../assets/images/login/web-logo.png";
import * as yup from "yup";

import { adminLogin } from "../../redux/actions/user.actions";
import { ErrorMessage, Form, Formik } from "formik";
import { Paper } from "@material-ui/core";

import "./loginContent.scss";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ paddingBottom: "20px" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Tix.vn
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(3),
    height: 50,
    width: 50,
    background: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(3, 0, 2),
  },
}));

const signInUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Trường này bắt buộc nhập."),
  matKhau: yup.string().required("Trường này bắt buộc nhập."),
});

const LoginContent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="signIn">
      <Container component="main" maxWidth="xs" className="signInContent">
        <CssBaseline />
        <div className={classes.paper}>
          <NavLink to="/">
            <Paper className={classes.avatar}></Paper>
          </NavLink>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <Formik
            initialValues={{ taiKhoan: "", matKhau: "" }}
            validationSchema={signInUserSchema}
            onSubmit={(initialValues) => {
              dispatch(adminLogin(initialValues));
              history.goBack();
            }}
          >
            {(formikProps) => (
              <Form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="taiKhoan"
                  label="Tài khoản"
                  name="taiKhoan"
                  autoFocus
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="taiKhoan">
                  {(msg) => (
                    <div className="text-danger errorMessage">{msg} </div>
                  )}
                </ErrorMessage>

                <TextField
                  onChange={formikProps.handleChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="matKhau"
                  label="Mật khẩu"
                  type="password"
                  id="matKhau"
                  autoComplete="current-password"
                />
                <ErrorMessage name="matKhau">
                  {(msg) => (
                    <div className="text-danger errorMessage">{msg} </div>
                  )}
                </ErrorMessage>

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Ghi nhớ đăng nhập"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Đăng nhập
                </Button>
               
              </Form>
            )}
          </Formik>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

export default LoginContent;
