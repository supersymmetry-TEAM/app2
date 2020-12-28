import React, { useEffect } from "react";
import { connect, } from "react-redux";
import MyPagePresenter from "./MyPagePresenter";
import { useDispatch } from "react-redux";

export default (probs) => {
  console.log(probs)

 
   return (    <MyPagePresenter  logout = {probs.logOut}/>
 
 
   );
 };
