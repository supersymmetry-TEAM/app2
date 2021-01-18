import React, { useState } from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Feather } from '@expo/vector-icons';


const TotalContainer = styled.View`
width : 90%;
border-width: 1px;
border-color:orange;
margin-top : 20px;
`;

const Container_row =styled.View`
width : 100%;
justify-content: center;
align-items: center;
flex-direction: row;
`;
const Container_col =styled.View`
width : 100%;
justify-content: center;
align-items: center;
`;
const IconCont = styled.View`
width : 40%;
`;
const TotalBtn = styled.TouchableOpacity`
`;
// borderBottomWidth: 1,
const NameContainer = styled.View`
width : 60%;
flex-direction : row;
`;

const Name = styled.Text`
  font-size: 15px;
  font-weight: 200;

`;
const Name1 = styled.Text`
  font-size: 12px;
  font-weight: 200;

`;


const RecoCard = ({
  time,
  order,
  DESC_KOR,
  FOOD_CD,
  GROUP_NAME,
  MAKER_NAME,
  NUM,
  NUTR_CONT1,
  NUTR_CONT2,
  NUTR_CONT3,
  NUTR_CONT4,
  NUTR_CONT5,
  NUTR_CONT6,
  NUTR_CONT7,
  NUTR_CONT8,
  NUTR_CONT9,
  RESEARCH_YEAR,
  SAMPLING_MONTH_CD,
  SAMPLING_MONTH_NAME,
  SAMPLING_REGION_CD,
  SAMPLING_REGION_NAME,
  SEARCH_SCORE,
  SERVING_SIZE,
  SUB_REF_NAME,
}) => {
  const navigation = useNavigation();

  return (<TotalContainer>

    <Container_row>
    <NameContainer>
    <Name>{DESC_KOR}</Name>
    </NameContainer>
    {NUM == 0 ?
    <IconCont>
    </IconCont>
    :
    <IconCont></IconCont>
    }
      
    </Container_row>

    {/* <IconContainer>
      <Feather name="plus" size={20} style={{ marginLeft: 30 }} color="red" />
    </IconContainer> */}
  </TotalContainer>


  );
};


RecoCard.propTypes = {
  DESC_KOR: Pt.string.isRequired,
};

export default RecoCard;        



{/* <TotalBtn onPress={() => navigation.navigate("먹은양", {
  DESC_KOR,
  FOOD_CD,
  GROUP_NAME,
  MAKER_NAME,
  NUM,
  NUTR_CONT1,
  NUTR_CONT2,
  NUTR_CONT3,
  NUTR_CONT4,
  NUTR_CONT5,
  NUTR_CONT6,
  NUTR_CONT7,
  NUTR_CONT8,
  NUTR_CONT9,
  RESEARCH_YEAR,
  SAMPLING_MONTH_CD,
  SAMPLING_MONTH_NAME,
  SAMPLING_REGION_CD,
  SAMPLING_REGION_NAME,
  SEARCH_SCORE,
  SERVING_SIZE,
  SUB_REF_NAME,
})}>
  </TotalBtn> */}