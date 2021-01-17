import React, { useState } from "react";
import { isEmail } from "../../utils";
import api from "../../api";
import SignUpPresenter from "./SignUpPresenter";



export default ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("")
  const isFormValid = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ){
    alert("모든 정보를 입력해 주세요");
    return false;
  }
  if (!isEmail(email)){
    alert("이메일을 다시 확인해 주세요");
    return false;
  }
  return true
  };
  const handleSubmit = async () => {
    if (!isFormValid()){
      return;
    }
    setLoading(true);
    try{
      const { status } = await api.createAccount({
        first_name : firstName,
        last_name : lastName,
        username : email,
        password 
      }
      );
      if (status === 200 || 201)
      { 
        alert("회원가입을 축하합니다. 로그인을 해주세요.");
        navigation.navigate('SignIn', { email, password });
      }
    } catch(e){

      alert("문제있어.");

    
    } finally {
      setLoading(false);
    }
  };

  return (
      <SignUpPresenter 
      firstName={firstName}
      lastName={lastName}
      email={email}
      password={password}
      loading={loading}

      isFormValid={isFormValid}
      handleSubmit={handleSubmit}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setEmail={setEmail}
      setPassword={setPassword}
      setLoading={setLoading}
      />
   );
};