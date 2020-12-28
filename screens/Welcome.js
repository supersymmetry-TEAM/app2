import React from "react";
import styled from "styled-components/native";
import { View, Image, StyleSheet } from 'react-native';
import Btn from "../components/Auth/Btn";
import { Feather } from '@expo/vector-icons';



const KakaBtContainer = styled.View`
width : 100%;
align-items: center;
justify-content: center;
margin-top: 20px;
`;


const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  
`;


const AvatarCont = styled.View`
height : 85px ;
margin-top : 10px ;
width : 85px ;
justify-content: center;
align-items: center;
position: relative;
border-radius: 30px;

`;

const ImageCont =  styled.View`
width : 100%;
align-items: center;
justify-content: center;
margin-bottom :20px;
`;
// borderColor: #333333;
// borderWidth: 1;

export default ({ navigation }) => {
  
  const goToSignInRe = () => navigation.navigate("SignIn");
  
  const goToSignUp = () => navigation.navigate("SignUp");
  return (
      <Container style={{backgroundColor: '#FFFFFF'}}>
      <ImageCont>
      <AvatarCont>

      <Image style={{
    width: 120,
    height: 120,
    borderRadius : 40,
  }} source={require("../assets/icon.png")} /> 
</AvatarCont>
      </ImageCont>

      <KakaBtContainer>
        <Btn onPress={goToSignInRe} text={"로그인"} />
        <Btn onPress={goToSignUp} text={"가입하기"} />
      </KakaBtContainer>
 </Container>
    );
  };
  