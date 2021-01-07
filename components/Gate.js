import React from "react";
import { useSelector, useDispatch, TouchableOpacity } from "react-redux";
import Auth from "../navigation/Auth";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../navigation/Main"

export default () => {
  const { token } = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
    {token ? <Main></Main> : <Auth></Auth>}
  </NavigationContainer>
  );
};