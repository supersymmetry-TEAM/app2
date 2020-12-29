import React, { useEffect } from "react";
import { connect, } from "react-redux";
import ExplorePresenter from "./ExplorePresenter";
import { useDispatch } from "react-redux";
const _today = String(new Date())

export default (probs) => {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
  const [isDialogVisible, setIsDialogVisible] = React.useState(false);
  const [pickedData, setPickedData] = React.useState("");
  const [pickedTime, setPickedTime] = React.useState(_today);
  const [Search, setSearch] = React.useState("");
  const [inputVal, setInputVal] = React.useState("");
  // using redux state
  const [diet, setDiet ] = React.useState(["1","2"]);
  const appendelement = () => {
    // make post Api 
    showDatePicker_();
    setDiet([...diet , Search]);
   
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date ) => {
    console.log("A date has been picked: ", String(date));
    setPickedData(String(date));
    hideDatePicker();
  };
  const showDatePicker_ = () => {
    setTimePickerVisibility(true);
  };

  const hideDatePicker_ = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm_ = (date) => {
    console.log("A date has been picked: ", String(date));
    setPickedTime(String(date));
    hideDatePicker_();
  };
 
   return (    <ExplorePresenter
    isDatePickerVisible={isDatePickerVisible}
    handleConfirm={handleConfirm}
    hideDatePicker={hideDatePicker}
    isTimePickerVisible={isTimePickerVisible}
    handleConfirm_={handleConfirm_}
    hideDatePicker_={hideDatePicker_}
    pickedData={pickedData}
    showDatePicker={showDatePicker}
    pickedTime={pickedTime} //change to day. initial state is today
    Search ={Search}
    setSearch={setSearch}
    appendelement={appendelement}
    isDialogVisible={isDialogVisible}
    inputVal={inputVal}
    setInputVal={setInputVal}
    setIsDialogVisible={setIsDialogVisible}
    diet={diet}  
    logout = {probs.logOut}/>
 
 
   );
 };