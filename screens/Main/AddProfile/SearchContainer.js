import React, { useEffect, useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { useNavigation } from "@react-navigation/native";


export default (probs) => {
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
  const [pickedTime, setPickedTime] = React.useState("");
  const navigation = useNavigation();
  const [PageCount, setPageCount] = useState(2)
  const [Data, setData] = useState([])
  const [Search, setSearch] = useState("")
  const [isLoading, setisLoading] = useState(false)
  const [isLoading_1, setisLoading_1] = useState(false)
  const [MaxPage, setMaxPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [totalbool, setTotalbool] = useState(true)


  const getandgo_by_name = async () => {
    if (MaxPage !== 0) { setMaxPage(0); }
    setTotalbool(true);

    if (Search === "") {
      alert("제품을 입력하셔야 합니다");
    } else {
      setisLoading(true);

      try {
        const things = await api.foods_by_name(Search, 1, probs.haha.id);
        setMaxPage(Math.round(things.data.count / 10));
        setTotal(things.data.count);
        if (things.data.count == 0) {
          setTotalbool(false);
        };
        setData([...things.data.results.sort((b, a) => parseFloat(a.likes) - parseFloat(b.likes))]);
        await Analytics.logEvent('Search History And Log', {
          authId: probs.haha.id,
          searchName: Search,
        });
        setisLoading(false);
      }
      catch (e) {
      }
    }
  };
  const getandgo_upgrade_by_name = async (search, page) => {
    setisLoading_1(true);
    try {
      const things = await api.foods_by_name(search, page, probs.haha.id);
      if (things) {
        setPageCount(PageCount + 1);
        setData([...Data, ...things.data.results]);
      }


    }
    catch (e) {
    }
    setisLoading_1(false);

  };
  const appendelement = () => {
    // make post Api 
    navigation.navigate("식단입력",{pickedTime})
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
  return (<SearchPresenter 
    isTimePickerVisible={isTimePickerVisible}
    showDatePicker_={showDatePicker_} 
    handleConfirm_={handleConfirm_} 
    hideDatePicker_={hideDatePicker_} 
    appendelement={appendelement} 
    Search={Search} 
    setSearch={setSearch} 
    isLoading={isLoading}

    setisLoading={setisLoading} 
    isLoading_1={isLoading_1} 
    MaxPage={MaxPage} 
    setMaxPage={setMaxPage} 
    total={total} 
    setTotal={setTotal} 
    totalbool={totalbool} 
    setTotalbool={setTotalbool} 
    getandgo_by_name={getandgo_by_name} 
    getandgo_upgrade_by_name={getandgo_upgrade_by_name} 
    Data ={Data}
     />


  );
};
