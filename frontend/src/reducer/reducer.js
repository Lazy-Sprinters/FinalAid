import * as actionTypes from "../actions/actions";

const initialState = {
  user: null,
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_USER: {
      // console.log("user edited")
      return {
        ...state,
        user: action.user,
      };
    }
    case actionTypes.CHANGE_TOKEN: {
      // console.log("token edited")
      return {
        ...state,
        token: action.token,
      };
    }
  }
  return state;
};

export default reducer;
