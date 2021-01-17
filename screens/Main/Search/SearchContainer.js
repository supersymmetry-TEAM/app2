import React, { useEffect, useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { useNavigation } from "@react-navigation/native";
import api from "../../../api"

export default (probs) => {

  const navigation = useNavigation();
  const [PageCount, setPageCount] = useState(2);
  const [Data, setData] = useState([]);
  const [Search, setSearch] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [isLoading_1, setisLoading_1] = useState(false);
  const [MaxPage, setMaxPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalbool, setTotalbool] = useState(true);
  
  // for search.... i have to make backend search conditions...
  // and make request with the variable searchcategory
  const [searchcategory, setSearchcategory] = useState("");
  const category = (string) => {
    setSearchcategory(string);
  };
  const getandgo_by_name = async () => {
    if (MaxPage !== 0){ 
      setMaxPage(0); 
    }
    setTotalbool(true);
    if (Search === "") {
      alert("제품을 입력하셔야 합니다");
    } else {
      setisLoading(true);
      try {
        const things = await api.foods_by_name(Search, 1,probs.token);
        if(things){
          setMaxPage(Math.round(things.data.count / 10));
          setTotal(things.data.count);
          setData([...things.data.results.sort((b, a) => parseFloat(a.likes) - parseFloat(b.likes))]);
        }
        if (things.data.count == 0) {
          setTotalbool(false);
        };
      }
      catch (e) {
      }
      setisLoading(false);

    }
  };
  const getandgo_upgrade_by_name = async (search, page) => {
    setisLoading_1(true);
    try {
      const things = await api.foods_by_name(search, page, probs.token);
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
  
  return (
<SearchPresenter 
    category = {category}
    Search={Search} 
    setSearch={setSearch} 
    isLoading={isLoading}
    PageCount={PageCount}
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
