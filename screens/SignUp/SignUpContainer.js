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
    alert("All fields are required");
    return false;
  }
  if (!isEmail(email)){
    alert("Please add a valid email");
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
      { console.log("sign in"+status);
        alert("Account created. Sign in. please.");
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