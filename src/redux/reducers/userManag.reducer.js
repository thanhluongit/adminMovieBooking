import { GET_USER_LIST_SUCCESS } from "../constants/userManag.constant";


const initialState = {
  userList: null,
};

const userManagReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_USER_LIST_SUCCESS:
      return { ...state, userList: payload };
    
    default:
      return state;
  }
};

export default userManagReducer;
