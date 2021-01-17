import React, { useState } from "react";
import styled from "styled-components/native";
import FoodCard from "../../../components/Main/foodCard";
import { ActivityIndicator, ScrollView, TextInput, Button } from "react-native";
import api from "../../../api";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

// import { useNavigation } from "@react-navigation/native";


const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const MaxContainer = styled.View`
justify-content: center;
align-items: center;
flex: 1;
margin-bottom : 10px; 
`;
const SearchContainer = styled.View`
margin-top:30px;
flex-direction: row;
justify-content: center;
align-items: center;
width: 80%;
border-radius: 10px;
`;
const SearchContainer_0 = styled.View`
margin-top:30px;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
border-radius: 10px;
`;
const MoreDataContainer = styled.View`
justify-content: center;
align-items: center;
height : 40px;
margin-bottom : 30px;
width: 100%;
`;
const Dum = styled.View`
justify-content: center;
align-items: center;
margin-bottom : 40px;
width: 100%;
`;
const MoreData = styled.TouchableOpacity`
margin-left: 10px ;
margin-top: 40px;

`;

const Text = styled.Text``;
const SearchDetail =styled.TouchableOpacity`
justify-content: center;
align-items: center;
width : 20%;
height : 40px;
margin-left : 5px;
margin-right : 5px;
border-radius : 25px;
border-width : 1px;
border-color : black;

`;
export default (probs) => {

  return (
    <Container style={{ backgroundColor: '#FFFFFF', flex: 1, justifyContent: "center", alignItems: "center", }}>

      <SearchContainer>
        <TextInput
          onSubmitEditing={() => probs.getandgo_by_name()}
          style={{
            textAlign: 'center',
            height: 40, width: "80%", borderColor: '#F2F2F2',
            borderRadius: 30, borderWidth: 2, paddingLeft: 10,

          }}
          // autoFocus={true}
          type="search" value={probs.Search}
          onChangeText={text => probs.setSearch(text)}
          placeholder="제품을 입력하세요~" />
        <Feather style={{ marginLeft: 20, }}
          name="search" size={25} onPress={() => probs.getandgo_by_name()}
          color="#4285F4" />

        {/* <SearchDo>
        <SearchBtnText type = "search" onPress={() => getandgo_by_name()}>검색 !</SearchBtnText>
      </SearchDo> */}
      </SearchContainer>
      <SearchContainer_0>
      <SearchDetail onPress={()=>probs.category("음식")}>
        <Text>음식</Text>
      </SearchDetail >
      <SearchDetail onPress={()=>probs.category("가공식품")}>
        <Text>가공식품</Text>
      </SearchDetail>
      <SearchDetail onPress={()=>probs.category("농축산물")}>
        <Text>농축산물</Text>
      </SearchDetail>
      <SearchDetail onPress={()=>probs.category("수산물")}>
        <Text>수산물</Text>
      </SearchDetail>
      </SearchContainer_0>
      { probs.isLoading ?
        <MaxContainer>
          <ActivityIndicator color="red" />
        </MaxContainer>
        :
        (
          <ScrollView
            style={{ width: "100%", marginTop: 20, }}

            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 30 }}
          >


            { probs.MaxPage >= 1 ?
              <MaxContainer>
                <Text>{probs.total}개의 제품</Text>
              </MaxContainer>
              :
              <MaxContainer>
                {probs.totalbool ?
                  <Text>  </Text>
                  : <Text>제품이 없습니다 </Text>

                }
              </MaxContainer>
            }
            {probs.Data.map(result =>
            (<FoodCard
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
              key={result.NUM} />
            ))}

          </ScrollView>

        )}

      <MoreDataContainer >
        {probs.PageCount > probs.MaxPage ?
          <Dum></Dum>
          : <MoreData onPress={() => probs.getandgo_upgrade_by_name(probs.Search,
            probs.PageCount)}>
            {probs.isLoading_1 ?
              (<ActivityIndicator color="black" />)
              :

              <Feather name="plus-circle" size={28} color="green" />
            }
          </MoreData>
        }
      </MoreDataContainer>

    </Container>
  );
};





