import React, { useEffect } from "react";
import { connect, } from "react-redux";
import ExplorePresenter from "./ExplorePresenter";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";


export default (probs) => {

  console.log(probs);
 
  
  // DAY,TIME PICKER 
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] =  React.useState(false);
  const [mode, setMode] =  React.useState('date');
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    console.log(currentDate);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  
  
  
  // N'TH DIET DATA
  const [numberofDiet, setNumberofDiet] = React.useState([{num:1,see:false},{num:2,see:false}]);
  const [diet, setDiet] = React.useState([]);
  const [rerender, setRerender] =React.useState(0);
  const navigation = useNavigation();
  const increase_number_of_diet = () => {
    console.log(numberofDiet.length);
    const next_num = numberofDiet.length+1;
    const next = {
      num :next_num,
      see:false
    }
    setNumberofDiet([...numberofDiet,next]);
  };

  const can_Nth_see = (N) => {
   console.log(numberofDiet);
    if(numberofDiet[N-1].see == true){
      numberofDiet[N-1].see = false
    }else{
      numberofDiet[N-1].see = true
    }
    if(rerender==0){
    setRerender(1);
    }else{setRerender(0);}
    setNumberofDiet(numberofDiet);
   };
 
  // N'TH DIET DATA



  useEffect(() => {
    console.log("useEffect");
    
    const name = `${probs.recodata.length+1} 번쨰 식단`
    const a = {
      DESC_KOR: name,
      NUM : 0,
    }
    setDiet([...probs.recodata,a]);
    console.log(diet);
  }, [probs.recodata,numberofDiet,rerender]);



  //  NAVIGATION
   const appendelement = () => {
    navigation.navigate("식단검색");
  };
  //  NAVIGATION



    // DAY PICK ALGORITHM
  const make_title_of_date = (object_date) => {
    const date =String(object_date);
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
    // RECORD DATA
    recoData={probs.recoData}
    // DATE TIME PICKER
    date={date}
    mode={mode}
    show = {show}
    showTimepicker={showTimepicker}
    showDatepicker={showDatepicker}
    onChange={onChange}
    // THINGS
    appendelement={appendelement}
    make_title_of_date={make_title_of_date}
    

    // N'TH DIET CARD
    diet={diet}
    numberofDiet ={numberofDiet}
    increase_number_of_diet={increase_number_of_diet}
    can_Nth_see={can_Nth_see}
    logout={probs.logOut} />
  );
};