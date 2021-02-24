import { createAction } from ".";
import { userService } from "../../services";
import { FETCH_ADMIN_CREDENTIALS } from "../constants/user.constant";

export const adminLogin = (user) => {
  return (dispatch) => {
    userService
      .signIn(user)
      .then((res) => {
        dispatch(createAction(FETCH_ADMIN_CREDENTIALS, res.data));
        localStorage.setItem("adminCredentials", JSON.stringify(res.data));
        window.history.go(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
