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
flex-direction: row;
justify-content: center;
align-items: center;
width: 80%;
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

export default (probs) => {


  return (
    <Container style={{ backgroundColor: '#FFFFFF',flex:1,justifyContent:"center",alignItems:"center",  }}>
      
      <DateTimePickerModal
        isVisible={probs.isTimePickerVisible}
        mode="time"
        onConfirm={probs.handleConfirm_}
        onCancel={probs.hideDatePicker_}
      />
      <Text>chose time</Text>
      <Button title="시간선택" style={{width : "100%"}} onPress={() => probs.showDatePicker_()} />
      <Text>chose food</Text>
      <SearchContainer>
        <TextInput
          style={{
            textAlign: 'center',
            height: 40, width: "80%", borderColor: '#F2F2F2',
            borderRadius: 30, borderWidth: 2, paddingLeft: 10,

          }}
          // autoFocus={true}
          type="search"  value={probs.Search}
          onChangeText={text => probs.setSearch(text)}
          placeholder="제품을 입력하세요~" />
        <Feather style={{ marginLeft: 20, }}
          name="search" size={25} onPress={() => probs.getandgo_by_name()}
          color="#4285F4" />
      
        {/* <SearchDo>
        <SearchBtnText type = "search" onPress={() => getandgo_by_name()}>검색 !</SearchBtnText>
      </SearchDo> */}
      </SearchContainer>
      <Text>add!</Text>
      <Button title="식단추가" onPress={() => probs.appendelement()} />

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
              key={result.id}
              bssh_nm={result.BSSH_NM}
              lcns_no={result.LCNS_NO}
              prdlst_dcnm={result.PRDLST_DCNM}
              prdlst_nm={result.PRDLST_NM}
              prdlst_report_no={result.PRDLST_REPORT_NO}
              prms_dt={result.PRMS_DT}
              rawmtrl_nm={result.RAWMTRL_NM}
              search_score={result.SEARCH_SCORE}
              id={result.id}
              is_fav={result.is_fav}
              likes={result.likes}
            />))}

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





