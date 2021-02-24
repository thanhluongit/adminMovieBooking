import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserListRequest } from "../../redux/actions/userManag.action";
import Header from "../Header";
import { nonAccentVietnamese } from "../nonAccentVietnamese";
import "./userManag.scss";

const UserManagContent = () => {
  const { userList } = useSelector((state) => state.userMag);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserListRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let [result, setResult] = useState(userList);

  const findUser = (e) => {
    let keyWord = nonAccentVietnamese(e.target.value.trim()).toLowerCase();
    setResult(
      userList?.filter(
        (user) =>
          keyWord.indexOf(nonAccentVietnamese(user.taiKhoan.toLowerCase())) !==
            -1 ||
          keyWord.indexOf(nonAccentVietnamese(user.hoTen.toLowerCase())) !==
            -1 ||
          keyWord.indexOf(nonAccentVietnamese(user.email.toLowerCase())) !==
            -1 ||
          keyWord.indexOf(
            nonAccentVietnamese(user.maLoaiNguoiDung.toLowerCase())
          ) !== -1
      )
    );

    console.log(keyWord);
    console.log(result);
  };

  const renderUserTable = () => {
    return result
      ? result?.map((user, index) => {
          return (
            <tr key={index}>
              <td className="text-describe">{user.taiKhoan}</td>
              <td className="text-name">{user.hoTen}</td>
              <td className="text-describe">{user.email}</td>
              <td>{user.maLoaiNguoiDung}</td>
              <td>
                <div className="btn-config">
                  <button className="btn btn-danger rounded-circle mr-1">
                    <i className="fa fa-trash"></i>
                  </button>
                  <button
                    className="btn btn-info rounded-circle"
                    data-target="#myModal"
                    data-toggle="modal"
                  >
                    <i className="fa fa-pencil"></i>
                  </button>
                </div>
              </td>
            </tr>
          );
        })
      : userList?.map((user, index) => {
          return (
            <tr key={index}>
              <td className="text-describe">{user.taiKhoan}</td>
              <td className="text-name">{user.hoTen}</td>
              <td className="text-describe">{user.email}</td>
              <td>{user.maLoaiNguoiDung}</td>
              <td>
                <div className="btn-config">
                  <button className="btn btn-danger rounded-circle mr-1">
                    <i className="fa fa-trash"></i>
                  </button>
                  <button
                    className="btn btn-info rounded-circle"
                    data-target="#myModal"
                    data-toggle="modal"
                  >
                    <i className="fa fa-pencil"></i>
                  </button>
                </div>
              </td>
            </tr>
          );
        });
  };

  return (
    <div className="userManagement container">
      <Header />
      <h1 className="text-center mb-4">Quản lý người dùng Tix.vn</h1>
      <div className="utility1">
        <div className="search">
          <input
            id="txtSearch"
            name="textSearch"
            type="text"
            className="input-search"
            placeholder="Search for anything "
            onChange={findUser}
          />
          <i className="fa fa-search icon-search" />
        </div>
      </div>
      <table className="table text-center userTable " id="userTable">
        <thead className="bg-dark text-white" id="theadList">
          <tr>
            <th>Tài khoản</th>
            <th className="th-name">
              <span className="mr-1">Họ tên</span>
              <i className="fa fa-arrow-up" id="sortNameUp" />
              <i
                className="fa fa-arrow-down"
                id="sortNameDown"
                style={{ display: "none" }}
              />
            </th>
            <th>Email</th>

            <th className="th-name">
              <span className="mr-1">Mã loại người dùng</span>
              <i className="fa fa-arrow-up" id="sortPriceUp" />
              <i
                className="fa fa-arrow-down"
                id="sortPriceDown"
                style={{ display: "none" }}
              />
            </th>
            <th>
              <em className="fa fa-cog" />
            </th>
          </tr>
        </thead>
        <tbody id="tbodyList" className="user-list">
          {renderUserTable()}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagContent;
