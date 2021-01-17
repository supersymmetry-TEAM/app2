import React, { useState } from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
// import { toggleFav } from "../../redux/usersSlice";
import { Feather } from '@expo/vector-icons';


const TotalContainer = styled.View`
width : 90%;
border-bottom-width: 1px;
margin-left : 20px;
position: relative;
margin-top : 10px;
padding-bottom : 15px;
`;


const TotalBtn = styled.TouchableOpacity`
`;
const TextContainer = styled.View`
`;

// borderBottomColor: 'black',
// borderBottomWidth: 1,
const NameContainer = styled.View`
left : 27px;
`;

const Name = styled.Text`
  width : 60%;
  font-size: 15px;
  font-weight: 200;

`;
const Name1 = styled.Text`
width : 60%;
  font-size: 12px;
  font-weight: 200;

`;
const IconContainer = styled.View`
width : 20% ;
height : 20px;
position: absolute;
z-index: 10;
right: 20px;
top: 4px;
`;
const RecoContainer = styled.View`
width : 20% ;
height : 20px ;
position: absolute;
z-index: 10;
left: 0px;
top: 4px;

`;
const LIkesContainer = styled.View`
position: absolute;
z-index: 10;
right: 8px;
top: 5px;
`;
const LIkes = styled.Text`
width : 90%;
font-size: 15px;



`;


function getIconcolor(isFav) {
  if (isFav) {
    return "red";
  }
  return "#C3E9E8";
}
// DESC_KOR: "HEARTY SPOON 순살감자탕"
// FOOD_CD: "P030080"
// GROUP_NAME: "즉석식품류"
// MAKER_NAME: "㈜성보"
// NUM: 25567
// NUTR_CONT1: "365"
// NUTR_CONT2: "31"
// NUTR_CONT3: "38"
// NUTR_CONT4: "10"
// NUTR_CONT5: "5"
// NUTR_CONT6: "1320"
// NUTR_CONT7: "95"
// NUTR_CONT8: "1.3"
// NUTR_CONT9: "0"
// RESEARCH_YEAR: "2020"
// SAMPLING_MONTH_CD: "AVG"
// SAMPLING_MONTH_NAME: "평균"
// SAMPLING_REGION_CD: "ZZ"
// SAMPLING_REGION_NAME: "전국(대표)"
// SEARCH_SCORE: 0
// SERVING_SIZE: "500"
// SUB_REF_NAME: "식약처(20)"

const FoodCard = ({
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

    <NameContainer>
      <TotalBtn onPress={() => navigation.navigate("먹은양", {
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
        <Name>{DESC_KOR}</Name>
        <Name1>{MAKER_NAME}</Name1>
      </TotalBtn>
    </NameContainer>

    {/* <IconContainer>
      <Feather name="plus" size={20} style={{ marginLeft: 30 }} color="red" />
    </IconContainer> */}
  </TotalContainer>


  );
};


FoodCard.propTypes = {
  DESC_KOR: Pt.string.isRequired,
};

export default FoodCard;        