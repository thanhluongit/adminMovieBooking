import { combineReducers } from "redux";
import addMovieReducer from "./addMovie.reducer";
import movieReducer from "./movie.reducer";
import userReducer from "./user.reducer";
import userManagReducer from "./userManag.reducer";
const rootReducer = combineReducers({
  addMovies: addMovieReducer,
  movie: movieReducer,
  user: userReducer,
  userMag: userManagReducer,
});

export default rootReducer;
