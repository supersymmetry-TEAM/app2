import React, { useEffect, useState } from "react";
import FoodPresenter from "./FoodPresenter";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import {setrecoData_} from "../../../redux/recoSlice";
export default (probs) => {
const [mass, setMass] = useState("1");
const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
const [pickedTime, setPickedTime] = React.useState("");
const navigation = useNavigation();
const dispatch = useDispatch();
const food = probs.route.params;

const appendelement = () => {
dispatch(setrecoData_(food));
navigation.navigate("식단입력",
{ 
 time: pickedTime,
foodInfo: food,
});
};
const showDatePicker_ = () => {
    setTimePickerVisibility(true);
  };

  const hideDatePicker_ = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm_ = (date) => {
    setPickedTime(String(date));
    hideDatePicker_();
  };
return (
   <FoodPresenter
   isTimePickerVisible={isTimePickerVisible}
   handleConfirm_={handleConfirm_}
   hideDatePicker_={hideDatePicker_}
   showDatePicker_={showDatePicker_}
   appendelement={appendelement}
   mass = {mass}
   setMass = {setMass}
   foodInfo = {probs.route.params}
   setrecoData={probs.setrecoData}
   recoData={probs.recoData}
   />
   );
 };


