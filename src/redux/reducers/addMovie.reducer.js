import { FETCH_ADD_MOVIE } from "../constants/addMovie.constant";

const initialState = {
  createMovie: null,
};

const addMovieReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case FETCH_ADD_MOVIE: {
      state.createMovie = payload;
      return {...state};

    }
    default:
      return state;
  }
};
export default addMovieReducer;
