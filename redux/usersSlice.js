import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    token: null,
    id: null,
    info: null,

  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      // state.token = action.payload.token;
      // state.id = action.payload.id;

    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.token = null;
    },
    myinfo(state, action) {
      state.info = action.payload;
    },
  }
});
export const userLogin = form => async dispatch => {
dispatch(logIn());
};

export const getInfo = () => async (dispatch, getState) => {
  const {
    usersReducer: { id, token }
  } = getState();

  try {

    const infoo = await api.getMyInfo2(id, token);

    if (infoo) {
      dispatch(myinfo(infoo.data));

    };

  } catch (e) {

  }
};


export const { logIn, logOut,  myinfo, } = userSlice.actions;

export default userSlice.reducer;