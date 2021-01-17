import React, { useEffect } from "react";
import { connect, } from "react-redux";
import ExplorePresenter from "./ExplorePresenter";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";


export default (probs) => {
  const _today = String(new Date());
  console.log(probs);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [isDialogVisible, setIsDialogVisible] = React.useState(false);
  const [pickedData, setPickedData] = React.useState(_today);
  const [Search, setSearch] = React.useState("");
  const [inputVal, setInputVal] = React.useState("");
  const [diet, setDiet] = React.useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    console.log("useEffect");
    setDiet(probs.recodata);
    console.log(diet);
  }, [probs.recodata]);

  const appendelement = () => {
    navigation.navigate("식단검색");
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setPickedData(String(date));
    hideDatePicker();
  };

  const make_title_of_date = (date) => {
    const day_of_the_week = day_en_to_ko(date.substring(0, 3));
    const month = month_en_to_ko(date.substring(4, 7));
    const day = date.substring(8, 11);
    const total = month + '월 ' + day + '일 ' + day_of_the_week + '요일 ' + ' 식단'
    return total
  }
  const day_en_to_ko = (day) => {
    if (day == 'Mon') {
      return '월'
    }
    else if (day == 'Tue') {
      return '화'
    }
    else if (day == 'Wed') {
      return '수'
    }
    else if (day == 'Thu') {
      return '목'
    }
    else if (day == 'Fri') {
      return '금'
    }
    else if (day == 'Sat') {
      return '토'
    }
    else if (day == 'Sun') {
      return '일'
    } else {
      return 'error'
    }
  };
  const month_en_to_ko = (month) => {
    if (month == 'Jan') {
      return '1'
    }
    else if (month == 'Feb') {
      return '2'
    }
    else if (month == 'Mar') {
      return '3'
    }
    else if (month == 'Apr') {
      return '4'
    }
    else if (month == 'May') {
      return '5'
    }
    else if (month == 'Jun') {
      return '6'
    }
    else if (month == 'Jul') {
      return '7'
    }
    else if (month == 'Aug') {
      return '8'
    }
    else if (month == 'Sep') {
      return '9'
    }
    else if (month == 'Oct') {
      return '10'
    }
    else if (month == 'Nov') {
      return '11'
    }
    else if (month == 'Dec') {
      return '12'
    } else {
      return 'error'
    }
  };

  return (<ExplorePresenter
    recoData={probs.recoData}
    isDatePickerVisible={isDatePickerVisible}
    handleConfirm={handleConfirm}
    hideDatePicker={hideDatePicker}
    pickedData={pickedData}
    showDatePicker={showDatePicker}
    Search={Search}
    setSearch={setSearch}
    appendelement={appendelement}
    isDialogVisible={isDialogVisible}
    inputVal={inputVal}
    setInputVal={setInputVal}
    setIsDialogVisible={setIsDialogVisible}
    make_title_of_date={make_title_of_date}
    diet={diet}
    logout={probs.logOut} />


  );
};