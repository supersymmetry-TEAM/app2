import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const userSlice = createSlice({
  name: "users",
  initialState: {
    token: null,
    id: null,
    info: null,

  },
  reducers: {
    logIn(state, action) {
      state.token = action.payload.token;
      state.id = action.payload.id;

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
try{
console.log(form);
const data = await api.login(form);
if(data){
  console.log(data.data);
  dispatch(logIn(data.data));
}
}
catch(e){

}
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