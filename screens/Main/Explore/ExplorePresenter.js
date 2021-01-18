import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity, View, TextInput, ScrollView, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';
import RecoCard from "../../../components/Main/recoCard"
const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Container_row = styled.View`
width : 100%;
justify-content: center;
align-items: center;
flex-direction: row;
`;
const Container_row0 = styled.View`
width : 100%;
justify-content: center;
align-items: center;
flex-direction: row;
`;
const Container_col = styled.View`
width : 100%;
justify-content: center;
align-items: center;
`;
const BtnContainer = styled.View`
width : 30%;
height : 40px;
border-radius : 20px;
background-color: #8AC793;
justify-content: center;
align-items: center;
`;
const Btn = styled.Button`
width : 50%;
background-color: red;
justify-content: center;
align-items: center;
`;
const DateText = styled.Text`
font-size : 22px;
font-weight : 200;
`;
export default (probs) => {
  useEffect(() => {
    console.log("useEffect pre");
  }, [probs.numberofDiet]);

  return (

    <Container style={{ backgroundColor: '#FFFFFF', flex: 1, justifyContent: "center", alignItems: "center", }}>
      <ScrollView style={{ width: "100%", marginTop: 20, }}

        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 30 }}>


        {/* Date Part */}
        <Container_col>
          <DateText>{probs.make_title_of_date(probs.date)}</DateText>
          <BtnContainer style={{ marginTop: 10, }}>
            <TouchableOpacity 
            style={{ justifyContent: "center",
             alignItems: "center", }} 
             onPress={() => probs.showDatepicker()}>
              <Text>날짜 변경</Text>
            </TouchableOpacity>
            {probs.show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={probs.date}
          mode='date'
          is24Hour={true}
          display="default"
          onChange={probs.onChange}
        />
      )}
          </BtnContainer>
        </Container_col>
        {/* Date Part */}

        {/* N'TH DIET BOX */}
        <Container_col style={{ marginTop: 10, }}>

          {probs.numberofDiet.map((Nth) =>
            <Container_row0  style={{ marginTop: 10, backgroundColor: "#F2BB21", }}>
              {Nth.num == probs.numberofDiet.length ?
                <TouchableOpacity key ={"waht the key ???"} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", }} onPress={() => probs.increase_number_of_diet()}>
                  <Text>{Nth.num} 식사 추가</Text>
                  <Feather style={{ marginRight: 2, }} name="plus" size={22} color="#DF4435" />
                </TouchableOpacity>
                :
                <Container_col key ={"hellow key?"}>
                  <Container_row>
                  <Text>{Nth.num} 식사</Text>
                  <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", }} onPress={() => probs.can_Nth_see(Nth.num)}>
                  {Nth.see?
                  <Feather name="arrow-up" size={24} color="black" />
                  :
                  <Feather name="arrow-down" size={24} color="black" />
                  }
                  </TouchableOpacity>
                </Container_row>
                <Container_row>
                <Feather name="clock" size={24} color="black" />
                </Container_row>
                </Container_col>
              }


            </Container_row0>
          )}

        </Container_col>
        {/* N'TH DIET BOX */}

        {/* Record Diet Part */}
        <Container_col style={{ marginTop: 10, }}>
          <BtnContainer style={{ marginTop: 10, backgroundColor: "#F2BB21", }}>
            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", }} onPress={() => probs.appendelement()}>
              <Feather style={{ marginRight: 2, }} name="plus" size={22} color="#DF4435" />
              <Text>음식 추가</Text>
            </TouchableOpacity>
          </BtnContainer>
          {probs.diet ?
            <Container_col>
              {probs.diet.map((result, i) =>
                <RecoCard
                  DESC_KOR={result.DESC_KOR}
                  FOOD_CD={result.FOOD_CD}
                  GROUP_NAME={result.GROUP_NAME}
                  MAKER_NAME={result.MAKER_NAME}
                  NUM={result.NUM}
                  NUTR_CONT1={result.NUTR_CONT1}
                  NUTR_CONT2={result.NUTR_CONT2}
                  NUTR_CONT3={result.NUTR_CONT3}
                  NUTR_CONT4={result.NUTR_CONT4}
                  NUTR_CONT5={result.NUTR_CONT5}
                  NUTR_CONT6={result.NUTR_CONT6}
                  NUTR_CONT7={result.NUTR_CONT7}
                  NUTR_CONT8={result.NUTR_CONT8}
                  NUTR_CONT9={result.NUTR_CONT9}
                  RESEARCH_YEAR={result.RESEARCH_YEAR}
                  SAMPLING_MONTH_CD={result.SAMPLING_MONTH_CD}
                  SAMPLING_MONTH_NAME={result.SAMPLING_MONTH_NAME}
                  SAMPLING_REGION_CD={result.SAMPLING_REGION_CD}
                  SAMPLING_REGION_NAME={result.SAMPLING_REGION_NAME}
                  SEARCH_SCORE={result.SEARCH_SCORE}
                  SERVING_SIZE={result.SERVING_SIZE}
                  SUB_REF_NAME={result.SUB_REF_NAME}
                  key={result.DESC_KOR}
                />)}
            </Container_col>
            :
            <Container_col></Container_col>
          }
        </Container_col>
        {/* Record Diet Part */}
      </ScrollView>
      <TouchableOpacity onPress={probs.logout}>
        <Text>Log Out, Explore</Text>
      </TouchableOpacity>
    </Container>
  );
};
