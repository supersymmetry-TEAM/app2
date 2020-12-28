import React, { useState } from "react";
import styled from "styled-components/native";
import {  Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1
`;


// navigation.navigate('SignIn', { email, password });
export default (probs) => 
{ 
  console.log(probs)
 return (
  <Container style={{backgroundColor: '#FFFFFF'}}>
          <TouchableOpacity onPress={probs.logout}>
          <Text>Log Out, My page</Text>
        </TouchableOpacity>
  </Container>
);
};
