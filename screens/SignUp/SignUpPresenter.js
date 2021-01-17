import React, { useRef } from "react";
import { StatusBar, KeyboardAvoidingView, Dimensions } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
const { width } = Dimensions.get("screen");
const Input = styled.TextInput`
  width: ${width / 1.5}px;
  padding: 12.5px 20px;
  border: 1px solid grey;
  background-color: white;
  border-radius: 30px;
  margin-bottom: 10px;
  font-weight: 500;
`;
const Text = styled.Text`
font-size: 17px;
font-weight: 400;
`;
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
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();

  return (
    // <DismissKeyboard>

      <Container style={{backgroundColor: '#FFFFFF'}} >
        <StatusBar barStyle="dark-content" />
        {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}> */}
          <InputContainer>
            <Text>이름</Text>
            <Input
                value={firstName}
                placeholder="이름"
                secureTextEntry={false}
                autoCapitalize="none"
                onChangeText={text => setFirstName(text)}
                onSubmitEditing={()=>ref_input2.current.focus()}
            />
            <Text>별명</Text>
            <Input
                value={lastName}
                placeholder="별명"
                secureTextEntry={false}
                autoCapitalize="none"
                onChangeText={text => setLastName(text)}
                onSubmitEditing={()=>ref_input3.current.focus()}
                ref={ref_input2}
            />
            <Text>이메일</Text>
            <Input
                value={email}
                placeholder="이메일"
                secureTextEntry={false}
                autoCapitalize="none"
                onChangeText={text => setEmail(text)}
                onSubmitEditing={()=>ref_input4.current.focus()}
                ref={ref_input3}
            />
            <Text>비밀번호</Text>
            <Input
                value={password}
                placeholder="비밀번호"
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={text => setPassword(text)}
                onSubmitEditing={()=>handleSubmit()}
                ref={ref_input4}
           />
          </InputContainer>
          
          <Btn text={"가입하기 !"} loading={(loading==='true')} onPress={handleSubmit}></Btn>
        {/* </KeyboardAvoidingView> */}
      </Container>
      // {/* </DismissKeyboard> */}
  );
};