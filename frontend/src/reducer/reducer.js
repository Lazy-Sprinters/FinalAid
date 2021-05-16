import * as actionTypes from "../actions/actions";

const initialState = {
  user: null,
  token: null,
  donatorInfo: null,
  searchData: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_USER: {
      // {console.log("user edited")}
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
    case actionTypes.CHANGE_DONATORINFO: {
      // console.log("token edited")
      return {
        ...state,
        donatorInfo: action.donatorInfo,
      };
    }
    case actionTypes.CHANGE_SEARCHDATA: {
      // console.log("token edited")
      return {
        ...state,
        searchData: action.searchData,
      };
    }
  }
  return state;
};

export default reducer;
