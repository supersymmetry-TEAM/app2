import React, { useEffect } from "react";
import { connect, } from "react-redux";
import ExplorePresenter from "./ExplorePresenter";
import { useDispatch } from "react-redux";

export default (probs) => {
  console.log(probs)

 
   return (    <ExplorePresenter  logout = {probs.logOut}/>
 
 
   );
 };