import Axios from "axios";

class UserService {
  // eslint-disable-next-line no-useless-constructor
  signIn = (user) => {
    return Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    });
  };
}
export default UserService;
