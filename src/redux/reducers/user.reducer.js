import { FETCH_ADMIN_CREDENTIALS } from "../constants/user.constant";

const initialState = {
  adminCredentials: null,
};

const userReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case FETCH_ADMIN_CREDENTIALS: {
      state.adminCredentials = payload;
      return {...state};

    }
    default:
      return state;
  }
};
export default userReducer;
