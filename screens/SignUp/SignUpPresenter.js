import React from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";


const Container = styled.View`  
top : 40px  ;
flex: 1;
justify-content: center;
align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 0;
`;

export default 
({ 
      firstName,
      lastName,
      email,
      password,
      loading,
      handleSubmit,
      setFirstName,
      setLastName,
      setEmail,
      setPassword,
}) => {

  return (
    // <DismissKeyboard>

      <Container style={{backgroundColor: '#FFFFFF'}} >
        <StatusBar barStyle="dark-content" />
        {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}> */}
          <InputContainer>
            <Input
              value={firstName}
              placeholder="이름"
              autoCapitalize="words"
              stateFn={setFirstName}
            />
            <Input
              value={lastName}
              placeholder="별명"
              autoCapitalize="words"
              stateFn={setLastName}
            />
            <Input
              value={email}
              placeholder={"이메일"}
              autoCapitalize="none"
              stateFn={setEmail}
              ke
            />
            <Input
              value={password}
              placeholder="비밀번호"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
          
          <Btn text={"가입하기 !"} loading={(loading==='true')} onPress={handleSubmit}></Btn>
        {/* </KeyboardAvoidingView> */}
      </Container>
      // {/* </DismissKeyboard> */}
  );
};