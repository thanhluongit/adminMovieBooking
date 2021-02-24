import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./header.scss";
const Header = () => {
  let { adminCredentials } = useSelector((state) => state.user);

  let [isLogin, setIsLogin] = useState(
    localStorage.getItem("adminCredentials") !== null
  );

  const handleLogout = () => {
    localStorage.removeItem("adminCredentials");
    setIsLogin(false);
  };

  return (
    <div className="login py-2">
      <img src="../images/login/avatar.png" alt="avatar" />
      {isLogin ? (
        <>
          <span className="login-item">Hi {adminCredentials?.hoTen}</span>
          <button className="signup-item" onClick={handleLogout}>
            Đăng Xuất
          </button>
        </>
      ) : (
        <>
          <NavLink to="/login">Đăng Nhập</NavLink>
        </>
      )}
    </div>
  );
};

export default Header;
