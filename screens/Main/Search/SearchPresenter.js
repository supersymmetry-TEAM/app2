import React, { useState } from "react";
import styled from "styled-components/native";
import FoodCard from "../../../components/Main/foodCard";
import { ActivityIndicator, ScrollView, TextInput} from "react-native";
import api from "../../../api";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

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
margin-top : 40px;
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
margin-bottom : 40px
width: 100%;
`;
const MoreData = styled.TouchableOpacity`
margin-left: 10px ;
margin-top: 40px;

`;

const Text = styled.Text``;

export default (probs) => {
  const [PageCount, setPageCount] = useState(2)
  const [Data, setData] = useState([])
  const [Search, setSearch] = useState("")
  const [isLoading, setisLoading] = useState(false)
  const [isLoading_1, setisLoading_1] = useState(false)
  const [MaxPage, setMaxPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [totalbool, setTotalbool] = useState(true)
  const navigation = useNavigation();

  const goback = () => {
    navigation.navigate('검색');

  };

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
          authId : probs.haha.id,
          searchName : Search,
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
      if(things){
        setPageCount(PageCount + 1);
        setData([...Data, ...things.data.results]);
      }


    }
    catch (e) {
    }
    setisLoading_1(false);

  };

  return (
    <Container style={{ backgroundColor: '#FFFFFF' }}>
      <SearchContainer>
        <Feather onPress={() => goback()} style={{ marginRight: 15, }} name="arrow-left" size={25} color="black" />

        <TextInput
          style={{ textAlign: 'center', 
          height:40, width:"80%", borderColor:'#F2F2F2',
          borderRadius : 30, borderWidth : 2, paddingLeft :10,
        
        }}
          type="search" autoFocus={true} value={Search}
          onChangeText={text => setSearch(text)}
          placeholder="제품을 입력하세요~" />
        <Feather style={{ marginLeft: 20, }}
          name="search" size={25} onPress={() => getandgo_by_name()}
          color="#4285F4" />

        {/* <SearchDo>
        <SearchBtnText type = "search" onPress={() => getandgo_by_name()}>검색 !</SearchBtnText>
      </SearchDo> */}
      </SearchContainer>

      { isLoading ?
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


            { MaxPage >= 1 ?
              <MaxContainer>
                <Text>{total}개의 제품</Text>
              </MaxContainer>
              :
              <MaxContainer>
                {totalbool ?
                  <Text>  </Text>
                  : <Text>제품이 없습니다 </Text>

                }
              </MaxContainer>
            }
            {Data.map(result =>
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
        {PageCount > MaxPage ?
          <Dum></Dum>
          : <MoreData onPress={() => getandgo_upgrade_by_name(Search,
            PageCount)}>
            {isLoading_1 ?
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





