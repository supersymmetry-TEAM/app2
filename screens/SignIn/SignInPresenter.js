import React, { useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
const Container = styled.View`
top : 20px  
flex: 1;
justify-content: center;
align-items: center;

`;

const InputContainer = styled.View`
  margin-bottom: 0px;

`;

export default ({ username, setUsername, password, setPassword, handleSubmit }) => {
  return (
      <Container style={{backgroundColor: '#FFFFFF'}}>
        <StatusBar barStyle="dark-content" />

          <InputContainer>
            <Input
              value={username}
              placeholder="메일"
              autoCapitalize="none"
              stateFn={setUsername}
            />
            <Input
              value={password}
              placeholder="비밀번호"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
          <Btn text={"로그인"} accent onPress={handleSubmit}></Btn>
      </Container>
  );
};