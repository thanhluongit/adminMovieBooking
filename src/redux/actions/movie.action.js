import axios from "axios";
import {
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_LIST_SUCCESS,
} from "../constants/movie.constant";

// Movie List
export const getMovieListRequest = () => {
  return (dispatch) => {
    // Call API
    // MovieService.getMovieListApi()
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
    })
      .then((res) => {
        dispatch(getMovieListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getMovieListFailed(err));
      });
  };
};

const getMovieListSuccess = (movieList) => {
  return {
    type: GET_MOVIE_LIST_SUCCESS,
    payload: movieList,
  };
};

const getMovieListFailed = (error) => {
  return {
    type: GET_MOVIE_LIST_FAILED,
    payload: error,
  };
};
