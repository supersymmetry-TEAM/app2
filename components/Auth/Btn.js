import React from "react";
import { TouchableOpacity, Dimensions, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import colors from "../../colors";


const Button = styled.View`
  border: 1px solid ${props => (props.accent ? "transparent" : colors.black)};
  border-radius: 10px;
  align-items: center;
  width: 50%;
  justify-content: center;
  height : 40px;
  margin-top : 10px;
`;

const Text = styled.Text`
font-size: 15px;
font-weight: 400;
  color: ${props => (props.accent ? "white" : colors.black)};
`;

const Btn = ({ loading = false, onPress, text }) => (
  <Button >
  <TouchableOpacity onPress={loading ? null : onPress}>

    {loading ? (
        <ActivityIndicator color={ "black"} />
      ) : (
        <Text >{text}</Text>
      )}
    
  </TouchableOpacity>
  </Button>
);

Btn.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool
};

export default Btn;