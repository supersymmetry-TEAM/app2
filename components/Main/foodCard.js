import React, { useState } from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
// import { toggleFav } from "../../redux/usersSlice";
import { Feather } from '@expo/vector-icons';


const TotalContainer =styled.View`
width : 90%;
border-bottom-width: 1px;
margin-left : 20px;
position: relative;
margin-top : 10px;
padding-bottom : 15px;
`;


const TotalBtn = styled.TouchableOpacity`
`;
const TextContainer = styled.View`
`;

// borderBottomColor: 'black',
// borderBottomWidth: 1,
const NameContainer =styled.View`
left : 27px;
`;

const Name = styled.Text`
  width : 60%;
  font-size: 15px;
  font-weight: 200;

`;
const Name1 = styled.Text`
width : 60%;
  font-size: 12px;
  font-weight: 200;

`;
const IconContainer =styled.View`
width : 20% ;
height : 20px;
position: absolute;
z-index: 10;
right: 20px;
top: 4px;
`;
const RecoContainer =styled.View`
width : 20% ;
height : 20px ;
position: absolute;
z-index: 10;
left: 0px;
top: 4px;

`;
const LIkesContainer =styled.View`
position: absolute;
z-index: 10;
right: 8px;
top: 5px;
`;
const LIkes = styled.Text`
width : 90%;
font-size: 15px;



`;


function getIconcolor(isFav) {
    if (isFav) {
      return "red";
    }
    return "#C3E9E8";
  }


const FoodCard = ({ bssh_nm, lcns_no, prdlst_dcnm, prdlst_nm, prdlst_report_no, prms_dt,
    rawmtrl_nm, id, is_fav, likes, search_score}) => 
   { const [fav, setfav] = useState(is_fav);
     const [like, setLike] = useState(likes); 
     const navigation = useNavigation();
     const dispatch = useDispatch();
     const lovechange = (id ,fav) =>{
      // dispatch(toggleFav(id));
      if(fav === true){
        setfav(false);
        setLike(like-1);
      }else{
        setfav(true);
        setLike(like+1);
      }
     };
     return(<TotalContainer>
 

    <NameContainer>
    {/* <TotalBtn onPress={() => navigation.navigate("제품정보",{ bssh_nm, lcns_no, prdlst_dcnm, prdlst_nm, prdlst_report_no, prms_dt,
    rawmtrl_nm, id, is_fav, likes})}> */}
    <Name>{prdlst_nm}</Name>
    <Name1>{bssh_nm}</Name1>
    {/* </TotalBtn> */}
    </NameContainer>
    
    <IconContainer>
    <TotalBtn onPress={() => lovechange(id, fav)} >
    <Feather name="heart" size={20} style={{marginLeft : 30}}  color={ getIconcolor(fav) } />
    </TotalBtn>
    </IconContainer>
    <RecoContainer>
    {search_score>=80 ?
    <Feather name="thumbs-up" size={20} color="orange" />
    : <Name1></Name1>
    }
    </RecoContainer>
    
    <LIkesContainer>
    <LIkes>{like}</LIkes>
    </LIkesContainer>
   
   
    
    
 
    </TotalContainer>
    
    
    );};


FoodCard.propTypes = {  
    bssh_nm: Pt.string.isRequired,
    lcns_no: Pt.string.isRequired,
    prdlst_dcnm: Pt.string.isRequired,
    prdlst_nm: Pt.string.isRequired,
    prdlst_report_no: Pt.string.isRequired,
    prms_dt: Pt.string.isRequired,
    rawmtrl_nm: Pt.string.isRequired,
    id:Pt.number.isRequired,
    is_fav: Pt.bool.isRequired,
    likes: Pt.number.isRequired,

};

export default FoodCard;        