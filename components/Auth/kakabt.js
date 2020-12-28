import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { ImageBackground,TouchableOpacity} from "react-native";

const Button = styled.View`
  border: 1px solid ${props => (props.accent ? "transparent" : colors.black)};
  border-radius: 10px;
  padding: 12.5px 20px;
  width: 18px;
  height: 45px;
  margin-bottom: 10px;
  
`;

const KakaBt = ({  onPress,accent = false }) => (
  <TouchableOpacity onPress={onPress}>
     <ImageBackground source={require("../../assets/kakao_login_medium_narrow.png")} >
    <Button accent={accent}>
 </Button>
 </ImageBackground>
    </TouchableOpacity>
);

KakaBt.propTypes = {
  onPress: PropTypes.func.isRequired,
  accent: PropTypes.bool,
};

export default KakaBt;