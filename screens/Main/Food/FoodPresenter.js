import React, { useState } from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { ActivityIndicator,TextInput,TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import api from "../../../api";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Container = styled.View`
align-items:center;
justify-content:center;
flex:1;
`;
const TitleContainer = styled.View`
width : 100%;
align-items:center;
justify-content:center;
margin-top : 30px;
`;
const InfoContainer = styled.View`
width : 100%;
align-items:center;
justify-content:center;
`;
const ConsumContainer = styled.View`
width : 100%;
align-items:center;
justify-content:center;
margin-top : 20px;
`;
const UnitContainer = styled.View`
width : 50%;
align-items:center;
justify-content:center;
margin-top : 20px;
flex-direction :row;
`;
const DeteilContainer = styled.View`
width : 100%;
align-items:center;
justify-content:center;
flex-direction :row;
margin-top : 20px;
`;
const Text = styled.Text`
font-size :18px;
`;
const NameText = styled.Text`
font-size :22px;
font-weight :300;
`;
const DumCont =  styled.View`
width : 100%;
border-color:black;
border-radius :10px;
height :50px;
align-items:center;
justify-content:center;
border-width:1px;
margin-right : 10px;
`;
const Container_col =styled.View`
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
export default ({appendelement,showDatePicker_,hideDatePicker_,handleConfirm_,isTimePickerVisible,foodInfo,mass,setMass,recoData,setrecoData}) => {
  return (
    <Container style={{ backgroundColor: '#FFFFFF' }}>
    <TitleContainer>
    <NameText>{foodInfo.DESC_KOR}</NameText>
    </TitleContainer>
    <ScrollView
            style={{ width: "100%",  }}

            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 30 }}
          >
    {/* ********** MODAL ************** */}
    <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm_}
        onCancel={hideDatePicker_}
      />
    {/* ********** MODAL ************** */}
    <InfoContainer>
    <Text>{foodInfo.SERVING_SIZE} g (1회제공량)</Text>
    <Text>{foodInfo.NUTR_CONT1}  열량(kcal)(1회제공량당)</Text>
    <Text>{foodInfo.NUTR_CONT2}  탄수화물(g)(1회제공량당)</Text>
    <Text>{foodInfo.NUTR_CONT3}  단백질(g)(1회제공량당)</Text>
    <Text>{foodInfo.NUTR_CONT4}  지방(g)(1회제공량당)</Text>
    <Text>{foodInfo.NUTR_CONT5}  당류(g)(1회제공량당)</Text>
    <Text>{foodInfo.NUTR_CONT6}  나트륨(mg)(1회제공량당)</Text>
    <Text>{foodInfo.NUTR_CONT7}  콜레스테롤(mg)(1회제공량당)</Text>
    <Text>{foodInfo.NUTR_CONT8}  포화지방산(g)(1회제공량당)</Text>
    <Text>{foodInfo.NUTR_CONT9}  트랜스지방(g)(1회제공량당)</Text>
    </InfoContainer>
    <ConsumContainer>
    <NameText>먹은양</NameText>
    <DeteilContainer>

    <UnitContainer >
    <DumCont>
    <TextInput
    style={{textAlign: 'center',width:"100%",height:50,}}  
    type="mass" value={mass}
    onChangeText={text => setMass(text)}
    placeholder="Mass" ></TextInput>
    </DumCont>
    <Text>Unit</Text>
    </UnitContainer>
    </DeteilContainer>
    </ConsumContainer>
<ConsumContainer>
<Container_col>
        <BtnContainer style = {{marginTop:10,}}>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center",}} onPress={()=>showDatePicker_()}>
        <Text>시간설정</Text>  
        </TouchableOpacity>
        </BtnContainer>
</Container_col>
<Container_col>
        <BtnContainer style = {{marginTop:10,}}>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center",}} onPress={()=>appendelement()}>
        <Text>기록</Text>  
        </TouchableOpacity>
        </BtnContainer>
</Container_col>
</ConsumContainer>
    </ScrollView>
    </Container>
  );
};

// 1	NUM	번호
// 2	FOOD_CD	식품코드
// 3	SAMPLING_REGION_NAME	지역명
// 4	SAMPLING_MONTH_NAME	채취월
// 5	SAMPLING_REGION_CD	지역코드
// 6	SAMPLING_MONTH_CD	채취월코드
// 7	GROUP_NAME	식품군
// 8	DESC_KOR	식품이름
// 9	RESEARCH_YEAR	조사년도
// 10	MAKER_NAME	제조사명
// 11	SUB_REF_NAME	자료출처
// 12	SERVING_SIZE	총내용량
// 13	NUTR_CONT1	열량(kcal)(1회제공량당)
// 14	NUTR_CONT2	탄수화물(g)(1회제공량당)
// 15	NUTR_CONT3	단백질(g)(1회제공량당)
// 16	NUTR_CONT4	지방(g)(1회제공량당)
// 17	NUTR_CONT5	당류(g)(1회제공량당)
// 18	NUTR_CONT6	나트륨(mg)(1회제공량당)
// 19	NUTR_CONT7	콜레스테롤(mg)(1회제공량당)
// 20	NUTR_CONT8	포화지방산(g)(1회제공량당)
// 21	NUTR_CONT9	트랜스지방(g)(1회제공량당)