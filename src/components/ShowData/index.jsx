import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getMovieListRequest } from "../../redux/actions/movie.action";
import AddNewProduct from "../AddNewProduct/index";
import Header from "../Header";

import "./data.scss";

const ShowData = () => {
  const { movieList } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieListRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderMovieTable = () => {
    return movieList?.map((movie, index) => {
      return (
        <tr key={index}>
          <td>{movie.maPhim}</td>
          <td className="td-capital">{movie.tenPhim}</td>
          <td className="product-img">
            <img className="product-img" src={movie.hinhAnh} />
          </td>
          <td className="mo-ta">{movie.moTa}</td>
          <td>{movie.maNhom}</td>
          <td>{movie.ngayKhoiChieu}</td>
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
    <div id="showData" className="container show-data">
      <Header />
      <h1 className="text-center mb-4">Quản lý phim Tix.vn</h1>
      <div className="utility1">
        {/* <form className="form-inline"> */}
        <div className="search">
          <input
            id="txtSearch"
            type="text"
            className="input-search"
            placeholder="Search for anything "
            // oninput="findProduct()"
          />
          <i className="fa fa-search icon-search" />
        </div>
        <NavLink target="_blank" to="/userManagement" className="userManag">
          Quản lý người dùng
        </NavLink>
        {/* <div className="per-page">
            <select name="per-page" id="perPage">
              <option value="3">3</option>
              <option selected value="5">
                5
              </option>
              <option value="10">10</option>
              <option value="=15">15</option>
              <option value="20">20</option>
            </select>
            <span>per page</span>
          </div> */}
        {/* </form> */}
        {/* Button trigger modal */}
        {/* <div> */}
        <button
          type="button"
          className="btn btn-primary btn-add-new ml-auto"
          data-toggle="modal"
          data-target="#myModal"
          id="btnAddNew"
        >
          Thêm phim
        </button>
        {/* </div> */}
      </div>
      <table className="table text-center table-product " id="tblList">
        <thead className="bg-dark text-white" id="theadList">
          <tr>
            <th>Mã phim</th>
            <th className="th-name">
              <span className="mr-1">Tên phim</span>
              <i className="fa fa-arrow-up" id="sortNameUp" />
              <i
                className="fa fa-arrow-down"
                id="sortNameDown"
                style={{ display: "none" }}
              />
            </th>
            <th>Hình ảnh</th>
            <th>Mô tả</th>

            <th className="th-name">
              <span className="mr-1">Mã nhóm</span>
              <i className="fa fa-arrow-up" id="sortPriceUp" />
              <i
                className="fa fa-arrow-down"
                id="sortPriceDown"
                style={{ display: "none" }}
              />
            </th>
            <th>Ngày khởi chiếu</th>
            <th>
              <em className="fa fa-cog" />
            </th>
          </tr>
        </thead>
        <tbody id="tbodyList" className="product-list">
          {renderMovieTable()}
        </tbody>
      </table>
      <AddNewProduct />
    </div>
  );
};

export default ShowData;
