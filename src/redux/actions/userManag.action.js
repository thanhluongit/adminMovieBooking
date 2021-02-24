import axios from "axios";
import {
  GET_USER_LIST_FAILED,
  GET_USER_LIST_SUCCESS,
} from "../constants/userManag.constant";

// User List
export const getUserListRequest = () => {
  return (dispatch) => {
    // Call API
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
    })
      .then((res) => {
        dispatch(getUserListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUserListFailed(err));
      });
  };
};

const getUserListSuccess = (userList) => {
  return {
    type: GET_USER_LIST_SUCCESS,
    payload: userList,
  };
};

const getUserListFailed = (error) => {
  return {
    type: GET_USER_LIST_FAILED,
    payload: error,
  };
};
