import React, { useState } from "react";
import { isEmail } from "../../utils";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/usersSlice";
import SignInPresenter from "./SignInPresenter";


export default ({ route: { params } }) => {

  const dispatch = useDispatch();
  const [username, setUsername] = useState(params?.email || '');
  const [password, setPassword] = useState(params?.password || '');
  const isFormValid = () => {
    // if (username === "" || password === "") {
    //   alert("All fields are required.");
    //   return false;
    // }
    // if (!isEmail(username)) {
    //   alert("Email is invalid");
    //   return false;
    // }
    return true;
  };
  const handleSubmit = () => {
    if (!isFormValid()) {
      return false;
    }
    dispatch(
      userLogin()
    );

  };

  return (    <SignInPresenter
    username={username}
    setUsername={setUsername}
    password={password}
    setPassword={setPassword}
    handleSubmit={handleSubmit}
  />


  );
};