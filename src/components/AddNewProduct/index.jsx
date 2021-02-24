import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { addNewMovie } from "../../redux/actions/addMovie.actions";
import { addMovie } from "../../services/addMovie.service";

const addMoviesSchema = yup.object().shape({
  maPhim: yup
    .string()
    .required("* Trường này không được bỏ trống.")
    .matches(/([0-9]+)/, "Mã phim phải là số."),
  tenPhim: yup.string().required("* Trường này không được bỏ trống."),
  biDanh: yup.string().required("* Trường này không được bỏ trống."),
  trailer: yup.string().required("* Trường này không được bỏ trống."),
  hinhAnh: yup.string().required("* Trường này không được bỏ trống."),
  moTa: yup.string().required("* Trường này không được bỏ trống."),
  maNhom: yup.string().required("* Trường này không được bỏ trống."),
  ngayKhoiChieu: yup.string().required("* Trường này không được bỏ trống."),
  danhGia: yup
    .string()
    .required("* Trường này không được bỏ trống.")
    .matches(/([0-9]+)/, "Đánh giá phải là số."),
});

const AddNewProduct = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="modal fade"
      id="myModal"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title text-center w-100" id="modalTitle">
              Thêm phim
            </h3>
            <button
              type="button"
              className="close"
              id="btnClose"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="panel-body">
              <div className="container">
                <Formik
                  initialValues={{
                    maPhim: 0,
                    tenPhim: "",
                    biDanh: "",
                    trailer: "",
                    hinhAnh: "",
                    moTa: "",
                    maNhom: "",
                    ngayKhoiChieu: "",
                    danhGia: 0,
                  }}
                  validationSchema={addMoviesSchema}
                  onSubmit={(initialValues) => {
                    initialValues.maPhim = +initialValues.maPhim;
                    initialValues.danhGia = +initialValues.danhGia;
                    dispatch(addMovie(initialValues));
                  }}
                >
                  {(formikProps) => (
                    <Form noValidate>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            type="text"
                            id="maPhim"
                            label="Mã phim"
                            name="maPhim"
                            autoComplete="maPhim"
                            onChange={formikProps.handleChange}
                          />
                          <ErrorMessage name="maPhim">
                            {(msg) => (
                              <div className="text-danger errorMessage">
                                {msg}{" "}
                              </div>
                            )}
                          </ErrorMessage>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="tenPhim"
                            label="Tên phim"
                            type="text"
                            id="tenPhim"
                            onChange={formikProps.handleChange}
                          />
                          <ErrorMessage name="tenPhim">
                            {(msg) => (
                              <div className="text-danger errorMessage">
                                {msg}{" "}
                              </div>
                            )}
                          </ErrorMessage>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="biDanh"
                            variant="outlined"
                            required
                            fullWidth
                            id="fullName"
                            label="Bí danh"
                            autoFocus
                            onChange={formikProps.handleChange}
                          />
                          <ErrorMessage name="biDanh">
                            {(msg) => (
                              <div className="text-danger errorMessage">
                                {msg}{" "}
                              </div>
                            )}
                          </ErrorMessage>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="moTa"
                            type="text"
                            label="Mô tả"
                            id="moTa"
                            onChange={formikProps.handleChange}
                          />
                          <ErrorMessage name="moTa">
                            {(msg) => (
                              <div className="text-danger errorMessage">
                                {msg}{" "}
                              </div>
                            )}
                          </ErrorMessage>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="trailer"
                            label="Trailer"
                            name="trailer"
                            onChange={formikProps.handleChange}
                          />
                          <ErrorMessage name="trailer">
                            {(msg) => (
                              <div className="text-danger errorMessage">
                                {msg}{" "}
                              </div>
                            )}
                          </ErrorMessage>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="hinhAnh"
                            label="Hình ảnh"
                            id="hinhAnh"
                            onChange={formikProps.handleChange}
                          />
                          <ErrorMessage name="hinhAnh">
                            {(msg) => (
                              <div className="text-danger errorMessage">
                                {msg}{" "}
                              </div>
                            )}
                          </ErrorMessage>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="maNhom"
                            type="text"
                            label="Mã nhóm"
                            id="maNhom"
                            onChange={formikProps.handleChange}
                          />
                          <ErrorMessage name="maNhom">
                            {(msg) => (
                              <div className="text-danger errorMessage">
                                {msg}{" "}
                              </div>
                            )}
                          </ErrorMessage>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="ngayKhoiChieu"
                            type="text"
                            label="Ngày khởi chiếu"
                            id="ngayKhoiChieu"
                            onChange={formikProps.handleChange}
                          />
                          <ErrorMessage name="ngayKhoiChieu">
                            {(msg) => (
                              <div className="text-danger errorMessage">
                                {msg}{" "}
                              </div>
                            )}
                          </ErrorMessage>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="danhGia"
                            type="text"
                            label="Đánh giá"
                            id="danhGia"
                            onChange={formikProps.handleChange}
                          />
                          <ErrorMessage name="danhGia">
                            {(msg) => (
                              <div className="text-danger errorMessage">
                                {msg}{" "}
                              </div>
                            )}
                          </ErrorMessage>
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "20px" }}
                      >
                        Thêm
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="modal-footer m-auto">
            <div id="btnHandle" />
            <button
              type="button"
              id="btnCancel"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button className="d-none" type="reset" id="btnReset" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
