import React , { useEffect }from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity,View,TextInput,ScrollView,Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Feather } from '@expo/vector-icons'; 

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
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

  return (

    <Container style={{ backgroundColor: '#FFFFFF',flex:1,justifyContent:"center",alignItems:"center",  }}>
      <ScrollView style={{ width: "100%", marginTop: 20, }}

            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 30 }}>
    {/* ********** MODAL ************** */}
      <DateTimePickerModal
        isVisible={probs.isDatePickerVisible}
        mode="date"
        onConfirm={probs.handleConfirm}
        onCancel={probs.hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={probs.isTimePickerVisible}
        mode="time"
        onConfirm={probs.handleConfirm_}
        onCancel={probs.hideDatePicker_}
      />
    {/* ********** MODAL ************** */}
        
        {/* Date Part */}
        <Container_col>
        <DateText>{probs.make_title_of_date(probs.pickedData)}</DateText>  
        <BtnContainer style = {{marginTop:10,}}>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center",}} onPress={()=>probs.showDatePicker()}>
        <Text>날짜 변경</Text>  
        </TouchableOpacity>
        </BtnContainer>
        </Container_col>
        {/* Date Part */}
        

        {/* Record Diet Part */}
        <Container_col style ={{marginTop:10,}}>
        <BtnContainer style = {{marginTop:10, backgroundColor:"#F2BB21",}}>
        <TouchableOpacity style ={{flexDirection:"row",justifyContent:"center",alignItems:"center",}} onPress={()=>probs.appendelement()}>
        <Feather style={{marginRight:2,}} name="plus" size={22} color="#DF4435" />
        <Text>식단 추가</Text>  
        </TouchableOpacity>
        </BtnContainer>
        {probs.diet ?
          <View>
            {probs.diet.map((ele, i) =>
              <Text key={i}>{ele.DESC_KOR}</Text>)}
          </View>
          :
          <View></View>
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
