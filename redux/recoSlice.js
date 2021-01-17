import { createSlice } from "@reduxjs/toolkit";
import api from "../api";


const recoSlice = createSlice({
    name: "reco",
    initialState: {
      recodata : [],
    },
    reducers: {
      setrecoData(state, action){
        console.log("reducer");
        console.log(action);
        console.log(state.recodata);
        state.recodata.push(action.payload);
      },
    }
  });
 
  export const setrecoData_ = x =>  (dispatch) => {

console.log("setrecoData_");
console.log(x);
    dispatch(setrecoData(x));

  };    

  export const {  setrecoData, } = recoSlice.actions;

  export default recoSlice.reducer;
