import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity,View,TextInput,ScrollView,Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1
`;





export default (probs) => {
  return (

    <Container style={{ backgroundColor: '#FFFFFF',flex:1,justifyContent:"center",alignItems:"center",  }}>
      <ScrollView style={{ width: "100%", marginTop: 20, }}

            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 30 }}>
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
        <Text  >오늘 식단</Text>
        <Button title={probs.pickedData} onPress={()=>probs.showDatePicker()} />


        <Button title="식단추가" onPress={()=>probs.appendelement()} />
        {probs.diet ?
          <View>
            {probs.diet.map((ele, i) =>
              <Text key={i}>{ele}</Text>)}
          </View>
          :
          <View></View>
        }
      </ScrollView>
      <TouchableOpacity onPress={probs.logout}>
        <Text>Log Out, Explore</Text>
      </TouchableOpacity>
    </Container>
  );
};
